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
    "referrer": "https://www.hellowork.mhlw.go.jp/kensaku/GECA110010.do?action=initDisp&screenId=GECA110010",
    "body": "kSNoJo=&kSNoGe=&kjKbnRadioBtn=1&nenreiInput=&tDFK1CmbBox=&tDFK2CmbBox=&tDFK3CmbBox=&sKGYBRUIJo1=&sKGYBRUIGe1=&sKGYBRUIJo2=&sKGYBRUIGe2=&sKGYBRUIJo3=&sKGYBRUIGe3=&freeWordInput=&nOTKNSKFreeWordInput=&searchBtn=%E6%A4%9C%E7%B4%A2&kJNoJo1=&kJNoGe1=&kJNoJo2=&kJNoGe2=&kJNoJo3=&kJNoGe3=&kJNoJo4=&kJNoGe4=&kJNoJo5=&kJNoGe5=&jGSHNoJo=&jGSHNoChuu=&jGSHNoGe=&kyujinkensu=0&iNFTeikyoRiyoDantaiID=&searchClear=0&siku1Hidden=&siku2Hidden=&siku3Hidden=&kiboSuruSKSU1Hidden=&kiboSuruSKSU2Hidden=&kiboSuruSKSU3Hidden=&summaryDisp=false&searchInitDisp=0&screenId=GECA110010&action=&codeAssistType=&codeAssistKind=&codeAssistCode=&codeAssistItemCode=&codeAssistItemName=&codeAssistDivide=&maba_vrbs=infTkRiyoDantaiBtn%2CsearchShosaiBtn%2CsearchBtn%2CsearchNoBtn%2CsearchClearBtn%2CdispDetailBtn%2CkyujinhyoBtn&preCheckFlg=false",
    "method": "POST",
  });
};
