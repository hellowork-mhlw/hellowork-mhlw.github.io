export const config = {
  runtime: 'experimental-edge',
};

export default (req) => (console.log(req), fetch('https://github.com/git/git/info/refs?service=git-upload-pack').then(r => new Response(r.status === 200)))
