export const config = {
  runtime: 'experimental-edge',
};

export default (req) => {
  console.log(req.query);
  return fetch('http://httpbin.org/ip');
};
