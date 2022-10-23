import fetch from 'node-fetch';
import { JSDOM } from "jsdom";

export default function handler(req, res) {
  const promise = fetch("https://www.hellowork.mhlw.go.jp/kensaku/GECA110010.do", {
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
  if (req.query.format === 'json')
    promise.then(r => r.text()).then(html => res.json([...new JSDOM(html).window.document.querySelectorAll('.kyujin')].map(k=>k.querySelector('.m13>div').textContent)))
  else
    promise.then(r => r.body.pipe(res))
}
