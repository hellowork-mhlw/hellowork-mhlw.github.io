import fetch from 'node-fetch';
import { JSDOM } from "jsdom";

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 's-maxage=86400');
  const response = await fetch("https://www.hellowork.mhlw.go.jp/kensaku/GECA110010.do", {
    method: "POST",
    body: new URLSearchParams({
      kjKbnRadioBtn: 1,
      searchBtn: '',
      screenId: 'GECA110010',
      maba_vrbs: 'searchBtn',
      fwListNaviDisp: 50,
      ...req.query
    }),
  })
  const html = await response.text()
  const document = new JSDOM(html).window.document
  document.head.appendChild(document.createElement("base")).href = "https://www.hellowork.mhlw.go.jp/kensaku/GECA110010.do"
  const cleaning = text => text.normalize("NFKC").split('\n').map(l => l.trim()).filter(l => l).join('\n')
  res.json([...document.querySelectorAll('.kyujin')].map(kyujin => {
      const rows = kyujin.tBodies[0].rows
      const head = rows[0].cells[0].firstElementChild
      const dates = rows[1].cells[0].firstElementChild.children
      return {
          職種: head.firstElementChild.firstElementChild.tBodies[0].rows[0].cells[1].firstElementChild.textContent,
          ラベル: [...head.lastElementChild.children].map(label => label.textContent),
          受付年月日: dates[0].textContent,
          紹介期限日: dates[1].textContent,
          こだわり: [...rows[3].cells[0].firstElementChild.children].map(label => label.textContent),
          求人数: rows[4].cells[0].firstElementChild.firstElementChild.textContent,
          求人票: kyujin.querySelector("#ID_kyujinhyoBtn").href,
          詳細: kyujin.querySelector("#ID_dispDetailBtn").href,
          ...Object.fromEntries([...rows[2].cells[0].firstElementChild.children].flatMap(side => [...side.firstElementChild.tBodies[0].rows]).map(row => [cleaning(row.cells[0].textContent), cleaning(row.cells[1].innerText ?? row.cells[1].textContent)]))
      }
  }))
}
