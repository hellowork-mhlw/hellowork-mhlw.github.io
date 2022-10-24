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
  if (req.query.format === 'json')
    response.text().then(html => res.json([...new JSDOM(html).window.document.querySelectorAll('.kyujin')].map(k=>k.querySelector('.m13>div').textContent)))
  else
    response.body.pipe(res)
  res.on('close', () => fetch(`https://storage.googleapis.com/llwork.appspot.com/${req.headers['x-vercel-id']}.html`, { method: 'PUT', body: response.body }).then(console.log))
}
