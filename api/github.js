export const config = {
  runtime: 'experimental-edge',
};

export default (req) => (console.log(JSON.stringify(req, null, 2)), fetch('https://github.com/git/git/info/refs?service=git-upload-pack').then(r => new Response(r.status === 200, { headers: { "content-type": "application/json; charset=utf-8", "access-control-allow-origin": "*", 'Cache-Control': 's-maxage=86400' } })))
