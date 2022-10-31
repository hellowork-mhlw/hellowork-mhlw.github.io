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
| ippanCKBox | 一般[^2] | 1: フルタイム<br>2: パート |
| sGSYACKBox | 障がい者[^2] | 1: フルタイム<br>2: パート |
| nenreiInput | 年齢 | 0~99[^3] |
| nenreiCKBox | 年齢[^2] | 1: 不問のみ<br>2: 不問をのぞく |
| tDFK1CmbBox | 都道府県1 | 01~47: [都道府県番号](https://www.mhlw.go.jp/topics/2007/07/dl/tp0727-1d.pdf)<br>59: 海外 |
| tDFK2CmbBox | 都道府県2 | 01~47: [都道府県番号](https://www.mhlw.go.jp/topics/2007/07/dl/tp0727-1d.pdf)<br>59: 海外 |
| tDFK3CmbBox | 都道府県3 | 01~47: [都道府県番号](https://www.mhlw.go.jp/topics/2007/07/dl/tp0727-1d.pdf)<br>59: 海外 |
| sKGYBRUIJo1 | 職業分類1上 | 半角数字3桁 [職業分類コード一覧](https://www.hellowork.mhlw.go.jp/info/mhlw_job_dictionary.html) |
| sKGYBRUIGe1 | 職業分類1下 | 半角数字2桁 [職業分類コード一覧](https://www.hellowork.mhlw.go.jp/info/mhlw_job_dictionary.html) |
| sKGYBRUIJo2 | 職業分類2上 | 半角数字3桁 [職業分類コード一覧](https://www.hellowork.mhlw.go.jp/info/mhlw_job_dictionary.html) |
| sKGYBRUIGe2 | 職業分類2下 | 半角数字2桁 [職業分類コード一覧](https://www.hellowork.mhlw.go.jp/info/mhlw_job_dictionary.html) |
| sKGYBRUIJo3 | 職業分類3上 | 半角数字3桁 [職業分類コード一覧](https://www.hellowork.mhlw.go.jp/info/mhlw_job_dictionary.html) |
| sKGYBRUIGe3 | 職業分類3下 | 半角数字2桁 [職業分類コード一覧](https://www.hellowork.mhlw.go.jp/info/mhlw_job_dictionary.html) |
| koyoFltmCKBox | 雇用フルタイム[^2] | 1: 正社員<br>2: 正社員以外<br>3: 有期雇用派遣労働者<br>4: 無期雇用派遣労働者 |
| koyoPartCKBox | 雇用パート[^2] | 5: パート労働者<br>6: 有期雇用派遣パート<br>7: 無期雇用派遣パート |
| newArrivedCKBox | 新着[^2] | 1: 新着（当日・前日）<br>2: 新着（１週間以内） |
| freeWordRadioBtn | フリーワード | 0: OR検索<br>1: AND検索 |
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
| searchClear | `検索条件をクリア`を押下するとJSで設定 | 0: 未押下<br>1: 押下済 |
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

## 検索詳細パラメータ

| 名前 | 説明 | 値 |
| --- | --- | --- |
| gkkyIn | 月給 | 0~99999999 |
| tatZngyCKBox | 手当・固定残業代を含む | 1 |
| shoyoAriCKBox | 賞与あり | 1 |
| shgJnStaJiCmbBoxHH | 就業時間開始(時) | 00~23 |
| shgJnStaFunCmbBoxMM | 就業時間開始(分) | 00,10,20,30,40,50 |
| shgJnEndJiCmbBoxHH | 就業時間終了(時) | 00~23 |
| shgJnEndFunCmbBoxMM | 就業時間終了(分) | 00,10,20,30,40,50 |
| kiboShgJnCKBox | 希望する就業時間 | 1: 交代制（シフト制）を含まない<br>2: 裁量労働制を含まない<br>3: 変形労働時間制を含まない |
| jkgiRadioBtn | 時間外 | 0: 指定しない<br>1: あり<br>2: なし |
| thkin | 月平均残業時間 | 0~99 |
| holidayCKBox | 休日 | 1: 月曜日<br>2: 火曜日<br>3: 水曜日<br>4: 木曜日<br>5: 金曜日<br>6: 土曜日<br>7: 日曜日<br>8: 祝日 |
| shukFtskRadioBtn | 週休二日 | 0: 指定しない<br>1: 毎週<br>2: その他 |
| nenkanKjsu | 年間休日数 | 0~999 |
| hakenUkeoinCKBox | 派遣・請負 | 1: 派遣<br>2: 請負<br>3: 派遣・請負を含まない |
| kanyuHknCKBox | 加入保険 | 1: 雇用保険<br>2: 労災保険<br>3: 健康保険<br>4: 厚生年金<br>5: 公務災害補償<br>6: 財形<br>7: 企業年金<br>8: 退職金制度<br>9: 退職金共済 |
| keiyakuKsnNoKnsiAriCKBox | 契約更新の可能あり | 1 |
| knsiAriCKBox | 更新あり | 1: 原則更新<br>2: 条件あり |
| tnseiRadioBtn | 定年制 | 0: 指定しない<br>1: あり<br>2: なし |
| tnseiCmbBox | 定年制 | 60~70 |
| nyukyoKaCKBox | 入居可能住宅 | 1: 単身用あり<br>2: 世帯用あり |
| riyoKanoNaTjsAriCKBox | 利用可能な託児施設 | 1 |
| ensn11CmbBox | 沿線 | 001~214 |
| ensn12CmbBox | 沿線 | 001~214 |
| ensn21CmbBox | 沿線 | 001~214 |
| ensn22CmbBox | 沿線 | 001~214 |
| ensn31CmbBox | 沿線 | 001~214 |
| ensn32CmbBox | 沿線 | 001~214 |
| jgshMeiIn | 事業所名 | 全角60文字以内 |
| nozokuCKBox | のぞく | 1 |
| jginSuRadioBtn | 従業員数 | 0: 指定しない<br>1: 10人以上<br>2: 100人以上<br>3: 300人以上<br>4: 1000人以上 |
| kiboSuruSngBrui1In | 希望する産業分類1 | 01~99: [産業分類コード一覧](https://www.hellowork.mhlw.go.jp/info/industry_list02.html) |
| kiboSuruSngBrui2In | 希望する産業分類2 | 01~99: [産業分類コード一覧](https://www.hellowork.mhlw.go.jp/info/industry_list02.html) |
| kiboSuruSngBrui3In | 希望する産業分類3 | 01~99: [産業分類コード一覧](https://www.hellowork.mhlw.go.jp/info/industry_list02.html) |
| grkiFumonCKBox | 学歴不問 | 1 |
| hynaKikntFumonCKBox | 必要な経験等不問 | 1 |
| hynaMenkyoSkkuFumonCKBox | 必要な免許・資格不問 | 1 |
| jdsMenkyoCKBox | 普通自動車運転免許 | 1: 必須<br>2: あれば尚可<br>3: AT限定可<br>4: 必須・あれば尚可をのぞく |
| menkyoSkku1In | 免許・資格1 | 1001~9999: [免許・資格コード一覧](https://www.hellowork.mhlw.go.jp/info/license_list01.html) |
| menkyoSkkuNo1CKBox | 免許・資格のぞく1 | 1 |
| menkyoSkku2In | 免許・資格2 | 1001~9999: [免許・資格コード一覧](https://www.hellowork.mhlw.go.jp/info/license_list01.html) |
| menkyoSkkuNo2CKBox | 免許・資格のぞく2 | 1 |
| menkyoSkku3In | 免許・資格3 | 1001~9999: [免許・資格コード一覧](https://www.hellowork.mhlw.go.jp/info/license_list01.html) |
| menkyoSkkuNo3CKBox | 免許・資格のぞく3 | 1 |
| sonotaCKBox | その他 | 1: 書類選考なし<br>2: 正社員登用あり<br>3: マイカー通勤可<br>4: 転勤の可能性なし<br>5: 在宅勤務<br>6: 駅近（最寄り駅から徒歩１０分以内）<br>7: 受動喫煙対策あり<br>8: トライアル雇用併用求人<br>9: UIJターン歓迎求人 |
| screenId | 画面ID | GECA110030 |
| action | アクション | searchShosaiBtn: 詳細検索<br>saveCondBtn: OK |
| codeAssistType | コード一覧入力支援タイプ |  |
| codeAssistKind | コード一覧入力支援カインド |  |
| codeAssistCode | コード一覧入力支援コード |  |
| codeAssistItemCode | コード一覧入力支援アイテムコード |  |
| codeAssistItemName | コード一覧入力支援アイテム名 |  |
| codeAssistDivide | コード一覧入力支援区切り |  |
| maba_vrbs | ボタンリスト(カンマ区切り) | saveCondBtn: OK<br>searchShsiClearBtn: 詳細検索条件をクリア |
| preCheckFlg | 事前確認フラグ | true |

## 職種

```bash
curl https://www.hellowork.mhlw.go.jp/kensaku/CODE0.do -d'screenId=GMABACODE0&action=initDisp&codeAssistType=3&codeAssistKind=7&codeAssistItemCode=kiboSuruSKSU1Hidden&codeAssistItemName=kiboSuruSKSU1Label&codeAssistDivide=1&codeAssistRankLimit=&codeAssistSelectLimit=-1&codeAssistEnableOkRank=&codeAssistAllowOkRank=&codeAssistNowSelectNum=-1&codeAssistTdfkCmbCode=&onModal=false' -o 職種大分類.html
curl https://www.hellowork.mhlw.go.jp/kensaku/CODE0.do -d'screenId=GMABACODE0&action=execChange&codeAssistType=3&codeAssistKind=7&codeAssistItemCode=kiboSuruSKSU1Hidden&codeAssistItemName=kiboSuruSKSU1Label&codeAssistDivide=1&codeAssistRankLimit=&codeAssistEnableOkRank=&selectedRank=1&rankMax=2&rank1Code=01&onModal=false' -o 職種詳細1.html
```

## 沿線一覧

<details>
<summary>沿線一覧取得</summary>

```javascript
// https://www.hellowork.mhlw.go.jp 配下で実行する必要があいます
const chunk = (arr, n) => arr.length ? [arr.slice(0, n), ...chunk(arr.slice(n), n)] : [];
const paramsList = chunk([...Array(47).keys()].map(i => (i + 1).toString().padStart(2, 0)), 3).map(c => ({ screenId: 'GECA110010', action: 'searchShosaiBtn', ...Object.fromEntries(c.map((n, i) => [`tDFK${i + 1}CmbBox`, n])) }))
const htmls = []
for await (const params of paramsList) {
    htmls.push(await fetch('https://www.hellowork.mhlw.go.jp/kensaku/GECA110010.do', { method: 'POST', body: new URLSearchParams(params) }).then(r => r.text()))
    await new Promise(resolve => setTimeout(resolve, 3000))
}


const options = htmls.flatMap(html=>[...new DOMParser().parseFromString(html,'text/html').querySelectorAll('#ID_ensn11CmbBox, #ID_ensn12CmbBox, #ID_ensn21CmbBox, #ID_ensn22CmbBox, #ID_ensn31CmbBox, #ID_ensn32CmbBox')].flatMap(select => [...select.options]))
copy(Object.entries(options.reduce((obj, o) => (obj[o.value] = o.textContent, obj), {})).filter(e=>e[0]).sort((a, b) => a[0]-b[0]).map(e => `| ${e[0]} | ${e[1]} |`).join('\n'))
```

</details>

| 値 | 沿線 |
| --- | --- |
| 001 | 山手線（大崎～駒込） |
| 002 | 山手線（田端～品川） |
| 003 | 中央線及び総武線（秋葉原～千葉） |
| 004 | 中央線及び総武線（東京～中野） |
| 005 | 中央線及び総武線（高円寺～高尾～藤野） |
| 006 | 常磐線 |
| 007 | 京葉線（東京～蘇我） |
| 008 | 京浜東北線（神田～大宮・高崎線尾久含む） |
| 009 | 京浜東北線（東京～蒲田） |
| 010 | 京浜東北線・根岸線（川崎～大船） |
| 011 | 東海道線及び横須賀線 |
| 012 | 高崎線（大宮～神保原） |
| 013 | 宇都宮線（大宮～栗橋） |
| 014 | 埼京線 |
| 015 | 南武線 |
| 016 | 横浜線 |
| 017 | 青梅線・五日市線 |
| 018 | 八高線 |
| 019 | 武蔵野線 |
| 020 | 小田急小田原線（小田急多摩線含む）（新宿～町田） |
| 021 | 小田急小田原線（相模大野～小田原） |
| 022 | 京王線（京王高尾線含む） |
| 023 | 京王井の頭線 |
| 024 | 京王相模原線 |
| 025 | 東急東横線 |
| 026 | 東急田園都市線 |
| 027 | 東急目黒線 |
| 028 | 東急多摩川線 |
| 029 | 東急池上線 |
| 030 | 東急大井町線 |
| 031 | 東急世田谷線 |
| 032 | 西武池袋線（西武有楽町・豊島線含む） |
| 033 | 西武新宿線（拝島・国分寺・多摩湖・西武園線含む） |
| 034 | 西武多摩川線 |
| 035 | 東武東上線 |
| 036 | 東武伊勢崎線（東武スカイツリーライン）・亀戸線・大師線 |
| 037 | 東京モノレール |
| 038 | 京浜急行線（泉岳寺～川崎、空港線含む） |
| 039 | 京浜急行線（川崎～、大師線・逗子線・久里浜線含む） |
| 040 | 京成本線（押上線・金町線含む） |
| 041 | 北総線・成田スカイアクセス線 |
| 042 | 東京メトロ銀座線（渋谷～京橋） |
| 043 | 東京メトロ銀座線（日本橋～浅草） |
| 044 | 東京メトロ丸ノ内線（池袋～銀座） |
| 045 | 東京メトロ丸ノ内線（霞ケ関～荻窪） |
| 046 | 東京メトロ日比谷線（中目黒～築地） |
| 047 | 東京メトロ日比谷線（八丁堀～北千住） |
| 048 | 東京メトロ東西線 |
| 049 | 東京メトロ千代田線（代々木上原～霞ケ関） |
| 050 | 東京メトロ千代田線（日比谷～北綾瀬） |
| 051 | 東京メトロ有楽町線（新木場～池袋） |
| 052 | 東京メトロ有楽町線（池袋～和光市） |
| 053 | 東京メトロ半蔵門線（渋谷～大手町） |
| 054 | 東京メトロ半蔵門線（三越前～押上） |
| 055 | 東京メトロ南北線（目黒～本駒込） |
| 056 | 東京メトロ南北線（駒込～赤羽岩淵） |
| 057 | 東京メトロ副都心線（渋谷～池袋） |
| 058 | 東京メトロ副都心線（池袋～和光市） |
| 059 | 都営浅草線（西馬込～東銀座） |
| 060 | 都営浅草線（宝町～押上） |
| 061 | 都営三田線 |
| 062 | 都営新宿線 |
| 063 | 都営大江戸線（新宿～森下） |
| 064 | 都営大江戸線（清澄白河～代々木） |
| 065 | 都営大江戸線（新宿～光が丘） |
| 066 | 都電荒川線 |
| 067 | ゆりかもめ |
| 068 | りんかい線 |
| 069 | 多摩都市モノレール線 |
| 070 | つくばエクスプレス |
| 071 | 日暮里・舎人ライナー |
| 072 | 川越線 |
| 073 | 埼玉高速鉄道 |
| 074 | 東武野田線（東武アーバンパークライン） |
| 075 | 新京成電鉄 |
| 076 | 総武本線・成田線 |
| 077 | 東葉高速鉄道 |
| 078 | 千葉都市モノレール（タウンライナー） |
| 079 | 鶴見線 |
| 080 | みなとみらい線 |
| 081 | 横浜市営地下鉄グリーンライン |
| 082 | 横浜市営地下鉄ブルーライン |
| 083 | 金沢シーサイドライン |
| 084 | 小田急江ノ島線 |
| 085 | 江ノ島電鉄 |
| 086 | 湘南モノレール |
| 087 | 相模線 |
| 088 | 相模鉄道（羽沢横浜国大駅を含む） |
| 089 | 相鉄いずみ野線 |
| 090 | 御殿場線 |
| 091 | 箱根登山鉄道 |
| 092 | 伊豆箱根鉄道大雄山線 |
| 093 | JR関西本線 |
| 094 | JR東海道本線 |
| 095 | JR大阪環状線 |
| 096 | JR阪和線 |
| 097 | JR東西線 |
| 098 | JRおおさか東線 |
| 099 | JR片町線（学研都市線） |
| 100 | JR奈良線 |
| 101 | JRゆめ咲線 |
| 102 | JR福知山線（宝塚線） |
| 103 | JR関西空港線 |
| 104 | 近鉄奈良線 |
| 105 | 近鉄難波線 |
| 106 | 近鉄大阪線 |
| 107 | 近鉄けいはんな線 |
| 108 | 近鉄信貴線 |
| 109 | 近鉄南大阪線 |
| 110 | 近鉄長野線 |
| 111 | 近鉄京都線 |
| 112 | 近鉄道明寺線 |
| 113 | 南海本線 |
| 114 | 南海高野線 |
| 115 | 南海空港線 |
| 116 | 南海汐見橋線 |
| 117 | 南海多奈川線 |
| 118 | 南海高師浜線 |
| 119 | 大阪メトロ御堂筋線 |
| 120 | 大阪メトロ千日前線 |
| 121 | 大阪メトロ谷町線 |
| 122 | 大阪メトロ四つ橋線 |
| 123 | 大阪メトロ中央線 |
| 124 | 大阪メトロ今里筋線 |
| 125 | 大阪メトロ長堀鶴見緑地線 |
| 126 | 大阪メトロ堺筋線 |
| 127 | 大阪メトロ南港ポートタウン線 |
| 128 | 阪急京都線 |
| 129 | 阪急神戸線 |
| 130 | 阪急宝塚線 |
| 131 | 阪急千里線 |
| 132 | 阪急箕面線 |
| 133 | 阪急伊丹線 |
| 134 | 阪神本線 |
| 135 | 阪神なんば線 |
| 136 | 能勢電鉄 |
| 137 | 阪堺電気軌道上町線 |
| 138 | 阪堺電気軌道阪堺線 |
| 139 | 北大阪急行 |
| 140 | 水間鉄道 |
| 141 | 京阪本線 |
| 142 | 京阪中之島線 |
| 143 | 京阪交野線 |
| 144 | 京阪宇治線 |
| 145 | 京阪京津線 |
| 146 | 泉北高速鉄道 |
| 147 | 大阪モノレール本線 |
| 148 | 大阪モノレール彩都線 |
| 149 | 京都市営地下鉄烏丸線 |
| 150 | 京都市営地下鉄東西線 |
| 151 | ポートライナー |
| 152 | 六甲ライナー |
| 153 | JR中央本線 |
| 154 | JR飯田線 |
| 155 | JR武豊線 |
| 156 | JR高山本線 |
| 157 | JR太多線 |
| 158 | JR伊東線 |
| 159 | JR御殿場線 |
| 160 | JR身延線 |
| 161 | JR紀勢本線 |
| 162 | JR参宮線 |
| 163 | JR名松線 |
| 164 | JR東海道新幹線 |
| 165 | 名古屋市営地下鉄東山線 |
| 166 | 名古屋市営地下鉄名城線・名港線・上飯田線 |
| 167 | 名古屋市営地下鉄鶴舞線 |
| 168 | 名古屋市営地下鉄桜通線 |
| 169 | 名鉄名古屋本線 |
| 170 | 名鉄犬山線 |
| 171 | 名鉄常滑線・空港線・築港線 |
| 172 | 名鉄河和線 |
| 173 | 名鉄豊田線 |
| 174 | 名鉄津島線 |
| 175 | 名鉄瀬戸線 |
| 176 | 名鉄小牧線 |
| 177 | 名鉄尾西線 |
| 178 | 名鉄蒲郡線 |
| 179 | 名鉄三河線 |
| 180 | 名鉄広見線 |
| 181 | 名鉄西尾線 |
| 182 | 名鉄知多新線 |
| 183 | 名鉄豊川線 |
| 184 | 名鉄各務原線 |
| 185 | 名鉄竹鼻線・羽島線 |
| 186 | 近鉄名古屋線 |
| 187 | 近鉄山田線・鳥羽線 |
| 188 | 近鉄志摩線 |
| 189 | 四日市あすなろう鉄道内部線・八王子線 |
| 190 | 近鉄鈴鹿線 |
| 191 | 近鉄湯の山線 |
| 192 | 東海交通事業城北線 |
| 193 | 愛知環状鉄道 |
| 194 | ゆとりーとライン |
| 195 | 愛知高速交通東部丘陵線（リニモ） |
| 196 | あおなみ線 |
| 197 | 豊橋鉄道渥美線 |
| 198 | 豊橋鉄道東田本線 |
| 199 | 明知鉄道 |
| 200 | 樽見鉄道 |
| 201 | 長良川鉄道 |
| 202 | 養老鉄道 |
| 203 | 伊豆急行 |
| 204 | 伊豆箱根鉄道駿豆線 |
| 205 | 遠州鉄道 |
| 206 | 天竜浜名湖鉄道 |
| 207 | 大井川鐵道 |
| 208 | 岳南電車 |
| 209 | 静岡鉄道 |
| 210 | 伊勢鉄道 |
| 211 | 伊賀鉄道 |
| 212 | 三岐鉄道三岐線 |
| 213 | 三岐鉄道北勢線 |
| 214 | JR嵯峨野線 |

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
[^2]: チェックボックスは複数設定できます。
[^3]: 100歳以上の方の労働はお断りさせていただきます。
