![](https://img.shields.io/badge/アットホームな職場-1766-007ec6.svg?style=for-the-badge "家族経営")
![](https://img.shields.io/badge/少数精鋭-451-007ec6.svg?style=for-the-badge "人手不足")
![](https://img.shields.io/badge/固定残業代含む-795K-007ec6.svg?style=for-the-badge "残業前提")
![](https://img.shields.io/badge/社保完備-834-007ec6.svg?style=for-the-badge "労働法守ろう")
![](https://img.shields.io/badge/若手が活躍-225-007ec6.svg?style=for-the-badge "離職率が高い")

# [ハローワーク](https://www.hellowork.mhlw.go.jp/kensaku/GECA110010.do?action=initDisp&screenId=GECA110010)

*This is not an officially supported Hellowork product.*

## 検索

```bash
curl https://www.hellowork.mhlw.go.jp/kensaku/GECA110010.do -d'kjKbnRadioBtn=1&searchBtn&screenId=GECA110010&maba_vrbs=searchBtn' | grep kyujinkensu
```

### フリーワード
`freeWordInput=公共職業安定所`
```bash
curl https://www.hellowork.mhlw.go.jp/kensaku/GECA110010.do -d'kjKbnRadioBtn=1&freeWordInput=公共職業安定所&searchBtn&screenId=GECA110010&maba_vrbs=searchBtn' | grep kyujinkensu
```

### 就業場所
島根県(32)`tDFK1CmbBox=32`
```bash
curl https://www.hellowork.mhlw.go.jp/kensaku/GECA110010.do -d'kjKbnRadioBtn=1&tDFK1CmbBox=32&searchBtn&screenId=GECA110010&maba_vrbs=searchBtn' | grep kyujinkensu
```

東京都(13)千代田区(101)`siku1Hidden=13101`
```bash
curl https://www.hellowork.mhlw.go.jp/kensaku/GECA110010.do -d'kjKbnRadioBtn=1&siku1Hidden=13101&searchBtn&screenId=GECA110010&maba_vrbs=searchBtn' | grep kyujinkensu
```

via Proxy
```bash
curl https://hellowork-mhlw.vercel.app/api?siku1Hidden=13101
curl https://hellowork-mhlw.vercel.app/api/json?siku1Hidden=13101 | jq
```

### 詳細検索条件
賞与あり`shoyoAriCKBox=1`
```bash
curl -c🍪 https://www.hellowork.mhlw.go.jp/kensaku/GECA110010.do -d'screenId=GECA110010&action=searchShosaiBtn'
curl -b🍪 https://www.hellowork.mhlw.go.jp/kensaku/GECA110030.do -d'shoyoAriCKBox=1&screenId=GECA110030&action=saveCondBtn'
curl -b🍪 https://www.hellowork.mhlw.go.jp/kensaku/GECA110010.do -d'kjKbnRadioBtn=1&searchBtn&screenId=GECA110010&maba_vrbs=searchBtn' | grep kyujinkensu
```

島根県(32)`tDFK1CmbBox=32`で土(6)日(7)祝(8)休み`holidayCKBox=6&holidayCKBox=7&holidayCKBox=8`
```bash
curl -c🍪 https://www.hellowork.mhlw.go.jp/kensaku/GECA110010.do -d'screenId=GECA110010&action=searchShosaiBtn'
curl -b🍪 https://www.hellowork.mhlw.go.jp/kensaku/GECA110030.do -d'holidayCKBox=6&holidayCKBox=7&holidayCKBox=8&screenId=GECA110030&action=saveCondBtn'
curl -b🍪 https://www.hellowork.mhlw.go.jp/kensaku/GECA110010.do -d'kjKbnRadioBtn=1&tDFK1CmbBox=32&searchBtn&screenId=GECA110010&maba_vrbs=searchBtn' | grep kyujinkensu
```

### ページネーション
5ページ目`fwListLeftPage=5`
```bash
curl -c🍪 https://www.hellowork.mhlw.go.jp/kensaku/GECA110010.do -d'kjKbnRadioBtn=1&searchBtn&screenId=GECA110010&maba_vrbs=searchBtn' | grep 件を表示
curl -b🍪 https://www.hellowork.mhlw.go.jp/kensaku/GECA110010.do -d'fwListNaviBtn1&fwListNowPage=1&fwListLeftPage=5&fwListNaviCount=7&screenId=GECA110010&maba_vrbs' | grep 件を表示
```

表示件数`fwListNaviDisp=50`
```bash
curl -b🍪 https://www.hellowork.mhlw.go.jp/kensaku/GECA110010.do -d'fwListNaviBtn1&fwListNowPage=1&fwListLeftPage=5&fwListNaviCount=7&fwListNaviDisp=50&screenId=GECA110010&maba_vrbs' | grep 件を表示
```

## 検索パラメータ

| 名前 | 説明 | 値 |
| --- | --- | --- |
| kSNoJo | 求職番号上 | 半角数字5桁 |
| kSNoGe | 求職番号下 | 半角数字8桁以内 |
| kjKbnRadioBtn | 求人区分 | 1: 一般求人<br>2: 新卒・既卒求人<br>3: 季節求人<br>4: 出稼ぎ求人<br>5: 障害のある方のための求人 |
| nenreiInput | 年齢 | 0~99 |
| tDFK1CmbBox | 都道府県1 | [都道府県番号](https://www.mhlw.go.jp/topics/2007/07/dl/tp0727-1d.pdf) 01~47 |
| tDFK2CmbBox | 都道府県2 | [都道府県番号](https://www.mhlw.go.jp/topics/2007/07/dl/tp0727-1d.pdf) 01~47 |
| tDFK3CmbBox | 都道府県3 | [都道府県番号](https://www.mhlw.go.jp/topics/2007/07/dl/tp0727-1d.pdf) 01~47 |
| sKGYBRUIJo1 | 職業分類1上 | 半角数字3桁 |
| sKGYBRUIGe1 | 職業分類1下 | 半角数字2桁 |
| sKGYBRUIJo2 | 職業分類2上 | 半角数字3桁 |
| sKGYBRUIGe2 | 職業分類2下 | 半角数字2桁 |
| sKGYBRUIJo3 | 職業分類3上 | 半角数字3桁 |
| sKGYBRUIGe3 | 職業分類3下 | 半角数字2桁 |
| freeWordInput | フリーワード | 全角50文字以内 |
| nOTKNSKFreeWordInput | NOT検索フリーワード | 全角50文字以内 |
| searchBtn | 検索ボタン | 検索 |
| kJNoJo1 | 求人番号1上 | 半角数字5桁 |
| kJNoGe1 | 求人番号1下 | 半角数字8桁以内 |
| kJNoJo2 | 求人番号2上 | 半角数字5桁 |
| kJNoGe2 | 求人番号2下 | 半角数字8桁以内 |
| kJNoJo3 | 求人番号3上 | 半角数字5桁 |
| kJNoGe3 | 求人番号3下 | 半角数字8桁以内 |
| kJNoJo4 | 求人番号4上 | 半角数字5桁 |
| kJNoGe4 | 求人番号4下 | 半角数字8桁以内 |
| kJNoJo5 | 求人番号5上 | 半角数字5桁 |
| kJNoGe5 | 求人番号5下 | 半角数字8桁以内 |
| jGSHNoJo | 事業所番号上 | 半角数字4桁 |
| jGSHNoChuu | 事業所番号中 | 半角数字6桁以内 |
| jGSHNoGe | 事業所番号下 | 1桁 |
| kyujinkensu | 求人件数 | 1227618 |
| fwListNaviSortTop | 並び順トップ | 1: 受付年月日順(デフォルト)<br>2: 紹介期限日順 |
| fwListNaviDispTop | 表示件数トップ | 10: 10件<br>30: 30件(デフォルト)<br>50: 50件 |
| fwListNaviBtnPrev | クリックで`fwListNowPage-1`ページを表示 | ＜前へ |
| fwListNaviBtn1 |  | `fwListLeftPage + 0` |
| fwListNaviBtn2 |  | `fwListLeftPage + 1` |
| fwListNaviBtn3 |  | `fwListLeftPage + 2` |
| fwListNaviBtn4 |  | `fwListLeftPage + 3` |
| fwListNaviBtn5 |  | `fwListLeftPage + 4` |
| fwListNaviBtn6 |  | `fwListLeftPage + 5` |
| fwListNaviBtnNext | クリックで`fwListNowPage+1`ページを表示 | 次へ＞ |
| fwListNaviSortBtm | 並び順ボトム | 1: 受付年月日順(デフォルト)<br>2: 紹介期限日順 |
| fwListNaviDispBtm | 表示件数ボトム | 10: 10件<br>30: 30件(デフォルト)<br>50: 50件 |
| fwListNowPage | 現在のページ | 5 |
| fwListLeftPage | 一番左のページ | 1 |
| fwListNaviCount | リンクの数 | 7 |
| fwListNaviDisp | 表示件数 | 10: 10件<br>30: 30件(デフォルト)<br>50: 50件 |
| fwListNaviSort | 並び順 | 1: 受付年月日順(デフォルト)<br>2: 紹介期限日順 |
| iNFTeikyoRiyoDantaiID | 情報提供利用団体ID | 半角数字6桁以内 |
| searchClear | `検索条件をクリア`を押下するとJSで遷移なしに設定 | 0: 未押下<br>1: 押下済 |
| siku1Hidden | 市区町村1 | 半角数字5桁 |
| siku2Hidden | 市区町村2 | 半角数字5桁 |
| siku3Hidden | 市区町村3 | 半角数字5桁 |
| kiboSuruSKSU1Hidden | 希望する職種1 | 半角数字2桁,半角数字2桁以内 |
| kiboSuruSKSU2Hidden | 希望する職種2 | 半角数字2桁,半角数字2桁以内 |
| kiboSuruSKSU3Hidden | 希望する職種3 | 半角数字2桁,半角数字2桁以内 |
| summaryDisp | サマリ表示 | false |
| searchInitDisp | 検索初期表示 | 0: 検索ボタン未押下<br>1: 検索ボタン押下済 |
| screenId | 画面ID | GECA110010 |
| action | アクション |  |
| codeAssistType | コード一覧入力支援タイプ |  |
| codeAssistKind | コード一覧入力支援カインド |  |
| codeAssistCode | コード一覧入力支援コード |  |
| codeAssistItemCode | コード一覧入力支援アイテムコード |  |
| codeAssistItemName | コード一覧入力支援アイテム名 |  |
| codeAssistDivide | コード一覧入力支援区切り |  |
| maba_vrbs | ボタンリスト(カンマ区切り) | infTkRiyoDantaiBtn: 情報提供利用団体IDを設定<br>searchShosaiBtn: 詳細検索条件<br>searchBtn: 検索<br>searchNoBtn: 番号検索<br>searchClearBtn: 検索条件をクリア<br>dispDetailBtn: 詳細を表示<br>kyujinhyoBtn: 求人票を表示<br>commonDownload: 様式のみ印刷[^1]<br>inputPrintButton: 内容を入力して印刷[^1] |
| preCheckFlg | 事前確認フラグ | false |

## 略語

https://ja.wikipedia.org/wiki/ヘボン式ローマ字#表と表記法

| 略 | 意味 |
| --- | --- |
| kS | 求職(kyuShoku) |
| No | 番号(Number) |
| Jo | 上(Jo) |
| Chuu | 中(Chuu) |
| Ge | 下(Ge) |
| kj | 求人(KyuJin) |
| Kbn | 区分(Kubun) |
| tDFK | 都道府県(toDoFuKen) |
| Cmb | コンボ(Combo) |
| sKGYBRUI | 職業分類(syoKuGYoBunRUI) |
| nOTKNSK | NOT検索(nOTKeNSaKu) |
| Btn | ボタン(Button) |
| jGSH | 事業所(jiGyoSHo) |
| fw | フレームワーク?(framework) |
| Navi | ナビゲーション(Navigation) |
| Btm | ボトム(Bottom) |
| iNF | 情報(iNFo) |
| siku | 市区(siku) |
| SKSU | 職種(SyoKuSyU) |
| summary | 求人情報(summary) |
| Disp | 表示(Display) |
| maba | ? |
| vrbs | ? |
| Flg | フラグ(Flag) |

## よくある質問

### 事業所名が表示されない

求職番号(`kSNoJo`と`kSNoGe`)を指定することで表示されるようになります。

![image](https://user-images.githubusercontent.com/116468267/197379409-3c04d9df-6ba0-4eb9-bc64-b7693e918eb5.png)

公開範囲が`３．事業所名等を含まない求人情報を公開する`の場合、ハローワークの窓口(職業相談・紹介)で事業所名や電話番号が公開された求人票を出力できます。
あやしい事業所ではなく、いたずら電話を防いだりするために公開していない場合があるそうです。

### 紹介期限日
申し込みをした月の翌々月末が紹介期限となります。ただし、それよりも前に紹介期限日を設定することもできます。あらかじめ採用期限日が決まってる場合など

その他ご質問は、[こちら](https://github.com/hellowork-mhlw/hellowork-mhlw.github.io/discussions/new)から

[^1]: https://hoken.hellowork.mhlw.go.jp/assist/001000.do?screenId=001000&action=koyohohiLicenceLink
