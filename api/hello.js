export const config = {
  runtime: 'experimental-edge',
};

export default (req) => {
  console.log(req.url);
  return fetch("https://www.hellowork.mhlw.go.jp/kensaku/GECA110010.do", {
    "headers": {
      "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      "accept-language": "ja,en-US;q=0.9,en;q=0.8",
      "cache-control": "max-age=0",
      "content-type": "application/x-www-form-urlencoded",
    },
    "body": new URLSearchParams({
      kjKbnRadioBtn: 1,
      searchBtn: '',
      screenId: 'GECA110010',
      maba_vrbs: 'searchBtn',
      fwListNaviDisp: 50
    }),
    "method": "POST",
  });
};
