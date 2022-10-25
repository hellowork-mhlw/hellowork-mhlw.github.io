export const config = {
  runtime: 'experimental-edge',
};

export default (req) => fetch("https://www.hellowork.mhlw.go.jp/kensaku/GECA110010.do", {
  "headers": {
    "content-type": "application/x-www-form-urlencoded",
  },
  "body": new URLSearchParams({
    kjKbnRadioBtn: 1,
    searchBtn: '',
    screenId: 'GECA110010',
    maba_vrbs: 'searchBtn',
    fwListNaviDisp: 50,
    ...Object.fromEntries(new URL(req.url).searchParams)
  }),
  "method": "POST",
})
