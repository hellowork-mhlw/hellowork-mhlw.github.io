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
| kSNoJo | 求職番号上 |  |
| kSNoGe | 求職番号下 |  |
| kjKbnRadioBtn | 求人区分 | 1 |
| nenreiInput | 年齢 |  |
| tDFK1CmbBox | 都道府県1 |  |
| tDFK2CmbBox | 都道府県2 |  |
| tDFK3CmbBox | 都道府県3 |  |
| sKGYBRUIJo1 | 職業分類1上 |  |
| sKGYBRUIGe1 | 職業分類1下 |  |
| sKGYBRUIJo2 | 職業分類2上 |  |
| sKGYBRUIGe2 | 職業分類2下 |  |
| sKGYBRUIJo3 | 職業分類3上 |  |
| sKGYBRUIGe3 | 職業分類3下 |  |
| freeWordInput | フリーワード |  |
| nOTKNSKFreeWordInput | NOT検索フリーワード |  |
| searchBtn | 検索ボタン | 検索 |
| kJNoJo1 | 求人番号1上 |  |
| kJNoGe1 | 求人番号1下 |  |
| kJNoJo2 | 求人番号2上 |  |
| kJNoGe2 | 求人番号2下 |  |
| kJNoJo3 | 求人番号3上 |  |
| kJNoGe3 | 求人番号3下 |  |
| kJNoJo4 | 求人番号4上 |  |
| kJNoGe4 | 求人番号4下 |  |
| kJNoJo5 | 求人番号5上 |  |
| kJNoGe5 | 求人番号5下 |  |
| jGSHNoJo | 事業所番号上 |  |
| jGSHNoChuu | 事業所番号中 |  |
| jGSHNoGe | 事業所番号下 |  |
| kyujinkensu | 求人件数 | 0 |
| iNFTeikyoRiyoDantaiID | 情報提供利用団体ID |  |
| searchClear | 検索クリア | 0 |
| siku1Hidden | 市区町村1 |  |
| siku2Hidden | 市区町村2 |  |
| siku3Hidden | 市区町村3 |  |
| kiboSuruSKSU1Hidden | 希望する職種1 |  |
| kiboSuruSKSU2Hidden | 希望する職種2 |  |
| kiboSuruSKSU3Hidden | 希望する職種3 |  |
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
| maba_vrbs | ボタンリスト | infTkRiyoDantaiBtn,searchShosaiBtn, searchBtn,searchNoBtn,searchClearBtn, dispDetailBtn,kyujinhyoBtn |
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
