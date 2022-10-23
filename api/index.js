import fetch from 'node-fetch';

export default function handler(req, res) {
  console.log(fetch);
  const { name = 'World' } = req.query;
  return res.send(`Hello ${name}!`);
}
