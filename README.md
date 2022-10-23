# ハローワーク

## 検索

```bash
curl https://www.hellowork.mhlw.go.jp/kensaku/GECA110010.do -d 'kjKbnRadioBtn=1&searchBtn=&screenId=GECA110010&maba_vrbs=searchBtn' | grep kyujinkensu
```

### フリーワード

```bash
curl https://www.hellowork.mhlw.go.jp/kensaku/GECA110010.do -d 'kjKbnRadioBtn=1&freeWordInput=公共職業安定所&searchBtn=&screenId=GECA110010&maba_vrbs=searchBtn' | grep kyujinkensu
```

### 就業場所
東京都(13)千代田区(101)
```bash
curl https://www.hellowork.mhlw.go.jp/kensaku/GECA110010.do -d 'kjKbnRadioBtn=1&siku1Hidden=13101&searchBtn=&screenId=GECA110010&maba_vrbs=searchBtn' | grep kyujinkensu
```

## 検索パラメータ

| 名前 | 説明 | 値 |
| --- | --- | --- |
| kSNoJo | 求職番号上 | 半角数字5桁 |
| kSNoGe | 求職番号下 | 半角数字8桁以内 |
| kjKbnRadioBtn | 求人区分 | 1: 一般求人<br>2: 新卒・既卒求人<br>3: 季節求人<br>4: 出稼ぎ求人<br>5: 障害のある方のための求人 |
| nenreiInput | 年齢 | 0~99 |
| tDFK1CmbBox | 都道府県1 | [都道府県番号](https://www.mhlw.go.jp/topics/2007/07/dl/tp0727-1d.pdf) |
| tDFK2CmbBox | 都道府県2 | [都道府県番号](https://www.mhlw.go.jp/topics/2007/07/dl/tp0727-1d.pdf) |
| tDFK3CmbBox | 都道府県3 | [都道府県番号](https://www.mhlw.go.jp/topics/2007/07/dl/tp0727-1d.pdf) |
| sKGYBRUIJo1 | 職業分類1上 |  |
| sKGYBRUIGe1 | 職業分類1下 |  |
| sKGYBRUIJo2 | 職業分類2上 |  |
| sKGYBRUIGe2 | 職業分類2下 |  |
| sKGYBRUIJo3 | 職業分類3上 |  |
| sKGYBRUIGe3 | 職業分類3下 |  |
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
| kyujinkensu | 求人件数 | 0 |
| iNFTeikyoRiyoDantaiID | 情報提供利用団体ID | 半角数字6桁以内 |
| searchClear | 検索クリア | 0 |
| siku1Hidden | 市区町村1 | 半角数字5桁 |
| siku2Hidden | 市区町村2 | 半角数字5桁 |
| siku3Hidden | 市区町村3 | 半角数字5桁 |
| kiboSuruSKSU1Hidden | 希望する職種1 | 半角数字2桁,半角数字2桁以内 |
| kiboSuruSKSU2Hidden | 希望する職種2 | 半角数字2桁,半角数字2桁以内 |
| kiboSuruSKSU3Hidden | 希望する職種3 | 半角数字2桁,半角数字2桁以内 |
| summaryDisp | サマリ表示 | false |
| searchInitDisp | 検索初期表示 | 0 |
| screenId | 画面ID | GECA110010 |
| action | アクション |  |
| codeAssistType | コード一覧入力支援タイプ |  |
| codeAssistKind | コード一覧入力支援カインド |  |
| codeAssistCode | コード一覧入力支援コード |  |
| codeAssistItemCode | コード一覧入力支援アイテムコード |  |
| codeAssistItemName | コード一覧入力支援アイテム名 |  |
| codeAssistDivide | コード一覧入力支援区切り |  |
| maba_vrbs | ボタンリスト | infTkRiyoDantaiBtn: 情報提供利用団体IDを設定<br>searchShosaiBtn: 詳細検索条件<br>searchBtn: 検索<br>searchNoBtn: 番号検索<br>searchClearBtn: 検索条件をクリア<br>dispDetailBtn: 詳細を表示<br>kyujinhyoBtn: 求人票を表示 |
| preCheckFlg | 事前確認フラグ | false |

## 略語

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
| iNF | 情報(iNFo) |
| siku | 市区(siku) |
| SKSU | 職種(SyoKuSyU) |
| summary | 求人情報(summary) |
| Disp | 表示(Display) |
| maba | ? |
| vrbs | ? |
| Flg | フラグ(Flag) |
