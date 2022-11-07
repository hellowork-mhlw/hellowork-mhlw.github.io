export const config = {
  runtime: 'experimental-edge',
};

// curl https://hellowork-mhlw.vercel.app/api/github?url=https://github.com/git/git
export default (req) => fetch(new URL(req.url).searchParams.get('url') + '/info/refs?service=git-upload-pack').then(r => new Response(r.status === 200, { headers: { "content-type": "application/json; charset=utf-8", 'Cache-Control': 's-maxage=2678400' } })).catch(r => new Response(false, { headers: { "content-type": "application/json; charset=utf-8", 'Cache-Control': 's-maxage=2678400' } }))
