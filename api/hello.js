export const config = {
  runtime: 'experimental-edge',
};

export default (req) => {
  console.log(req.url);
  return fetch("https://www.hellowork.mhlw.go.jp/kensaku/GECA110010.do", {
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
