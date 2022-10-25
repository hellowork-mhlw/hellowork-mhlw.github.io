export const config = {
  runtime: 'experimental-edge',
};

export default (req) => {
  console.log(req.query);
  return new Response('Hello world!2');
};
