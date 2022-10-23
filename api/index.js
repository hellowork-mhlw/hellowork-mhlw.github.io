import fetch from 'node-fetch';

export default function handler(req, res) {
  fetch('http://httpbin.org/ip').then(r => r.body.pipe(res))
}
