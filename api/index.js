import fetch from 'node-fetch';
import { JSDOM } from "jsdom";

export default function handler(req, res) {
  fetch("https://www.hellowork.mhlw.go.jp/kensaku/GECA110010.do", {
    method: "POST",
    body: new URLSearchParams({
      kjKbnRadioBtn: 1,
      searchBtn: '',
      screenId: 'GECA110010',
      maba_vrbs: 'searchBtn',
      fwListNaviDisp: 50,
      ...req.query
    }),
  }).then(r => r.text()).then(html => res.json([...new JSDOM(html).window.document.querySelectorAll('.kyujin')].map(k=>k.querySelector('.m13>div').textContent)))
}
