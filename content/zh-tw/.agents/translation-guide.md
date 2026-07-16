# 翻譯注意事項

## 翻譯與 Review 流程

- 進行繁體中文翻譯或審查前，請先確認既有的翻譯決策與待處理議題。
- 確認目錄項目與其對應章節標題的文字一致。
- 頁面一級標題使用 `<a id>`；非一級標題使用 `[#slug]`。
- 繁體中文頁面的頁內超連結 `#` 請保留英文 slug；章節標題可中文顯示，但錨點請用英文。
- 需要使用者選擇的建議使用編號列出。
- 英文原文的公式若有變數重疊問題，先保留原文，不擅自改寫；將問題記錄於 `TODO.md`。
- 英文原文的計算數值若互相矛盾，先核算數學結果；繁中可採用數學正確值，但須在 `TODO.md` 記錄原文問題。

## Markdown 與格式

- 中文段落內不要使用 hard break；同一段請維持單行，段落之間再空行分隔。
- 優缺點列表保留 `+` 與 `-` 標記，並保留原有的 hard break，不改寫為「優點／缺點」列表。
- 若原文的結構就是優點與缺點分為兩個段落，維持原文結構，不要擅自改成 `+` 與 `-` 的格式。
- 粗體文字後的冒號請放在粗體標記外，例如 `**項目**：`，不要寫成 `**項目：**`。
- 超連結與相鄰中文字之間請留一個半形空格；若連結後直接接句號、逗號或其他標點，則不需額外插入空格。
- 分音符使用阿拉伯數字加空格表示，例如「16 分音符」。
- 除分數等七位數數字外，其他數字盡量不加千位逗號。
- MDX 原始碼註解使用 JSX 格式 `{/* 註解 */}`，不要使用 HTML 格式 `<!-- 註解 -->`。
- 圖片重新抓取未被英文文字覆蓋的版本，不另外製作繁中文圖片；圖片中的日文文字，其翻譯內容改寫在 MD／MDX 文字中。

## 通用用字

- `S-Critical` 不寫成 `S-Crit`。
- `S-CRITICAL` 在表格與 UI 標記中使用全大寫，一般內文使用 `S-Critical`。
- `EX SCORE` 一律使用全大寫，不混用 `Ex-Score`、`Ex score`、`EX-Score` 等寫法。
- `CHIP`、`LONG`、`TSUMAMI` 一律使用全大寫。
- `EARLY`、`LATE` 一律使用全大寫。
- `Crit` 一律寫作 `Critical`。
- 減少使用非官方名稱的英文縮寫；優先使用完整原文或中文名稱。產品型號與官方名稱除外。
- `Konasute` 統一使用此拼法；一般內容不保留日文 `コナステ`，必要時可寫作 `Konasute（家用版）`。
- `Basic Course` 譯為 `e-amusement 基本方案`；`Premium Course` 譯為 `e-amusement 進階方案`；`Play Data` 譯為「遊玩紀錄」。
- `e-amusement` 統一使用小寫與連字號，不寫成 `e-Amusement`。
- 帳號使用「註冊帳號」；玩家資料使用「建立資料」。
- 卡片與帳號使用「綁定」；街機與 Konasute 資料使用「連結」。
- `PIN` 統一譯為「密碼」；四位數寫作「四位數密碼」。
- Konasute 基本方案使用「訂閱」；歌曲包使用「購買」。
- `PASELI` 統一使用全大寫；付款操作寫作「使用 PASELI 付款」。
- `Rival` 一律譯為「勁敵」。
- `gimmick` 譯為「特殊演出」。
- `censorship` 依語境譯為「內容限制」或「內容刪減」；`U Region` 譯為「美國地區」。
- `breakdown` 指數值整理表時譯為「對照表」，不要譯為「拆解」。
- `jacket` 在一般中文說明中譯為「曲繪」；程式碼欄位與檔名字串保留 `jacket`。
- `measure` 譯為「小節」。
- `standard/static position` 一律譯為「預設姿勢」。
- `hand positioning` 優先譯為「手部姿態」。
- `Crew`、`navigator` 一律譯為「領航員」；需要保留官方分類名稱時可寫作「Nemsys Crew」。
- 在模擬器語境中，`camera` 統一譯為「視角」或「視角效果」。
- `Avoiding Rate Limit` 統一譯為「避免流量限制」。
- `termsandvocab` 的「縱認識／橫認識」為日文專門術語，可保留。
- `knob assembly` 面向一般玩家時譯為「旋鈕手感」。

## Charting 專用翻譯決策

- 鍵盤按鍵名稱使用 `Ctrl`、`Shift`、`Alt` 的寫法；組合鍵依序寫作 `Ctrl + Shift + R`。
- 需要保留英文 UI 名稱時，首次提及需在中文後加上英文原文，後續不重複標註；「選取模式」、「編輯模式」與「刪除模式」不加英文括弧。
- `camera` 統一譯為「鏡頭視角」。
- `curve generator` 統一譯為「曲線旋鈕產生器」。
- `charting` 中的 long laser 統一譯為「斜向旋鈕」。
- `slam` 統一譯為「直角旋鈕」。
- `charting` 中的 `filter` 保留英文，不譯為「濾鏡」。
- Audacity 介面用詞使用「生成」（Generate）、「節拍軌道」（Rhythm track）、「靜音」（Silence）與「節奏」（Tempo）；參考 [官方繁中語系檔](https://raw.githubusercontent.com/audacity/audacity/refs/heads/master/share/locale/audacity_zh_TW.ts)。

## 遊戲與系統術語

- `gauge-options` 中，顯示介面使用「血條」，百分比數值使用「血量」；Blaster、VARIANT BAR 等進度系統仍可使用「量表」。
- Valkyrie 機台底部的 deck 優先寫作「按鍵平台」。
- `HEXA DIVER` 一律使用全大寫並保留空格；網址 slug 維持小寫 `#hexadiver`。
- 官方名稱使用 `HEXA OVER DRIVE`，保留空格並全大寫。
- Variant 段位標記一律使用全大寫，例如 `RANK V`、`RANK IV`。
- EFFECT RADAR 分類名稱 `NOTES`、`PEAK`、`TSUMAMI`、`TRICKY` 一律使用全大寫。
- EFFECT RADAR 的 `ONE-HAND` 與 `HAND-TRIP` 為專有術語，不翻譯且一律使用全大寫。
- `one-hand split BT` 寫作「BT 跳鍵（AC/BD）」；`one-hand triple BT` 寫作「單手 BT 3K」。
- `thumbing` 譯為「拇指押」。
- `poor technique` 譯為「不良示範」。
- `laser` 一律譯為「旋鈕」。
- `chord` 依按鍵數與語境譯為「組合鍵」或「多押」；兩鍵同時按下時可寫作「雙押組合鍵」。不要使用「和弦」。
- `jack` 一律譯為「縱連」；`chord jack` 依語境譯為「雙押縱連」或「雙押交互」。
- `trill` 一律譯為「交互」；例如 `fast trill` 為「高速交互」。不要使用「顫音」。
- `NEMSYS controller`、`NEMSYS Design` 一律譯為「NEMSYS 面板裝飾」。

## Dan Courses 與遊戲模式

- Dan Courses 的 `10th Dan`、`11th Dan` 與 `∞ Dan` 直接寫作「剛力羅」、「或帝滅斗」與「暴龍天」。
- Dan Courses 的 `Course 1A` 等課程標題寫作「1A 組」等格式。
- Dan Courses 表格的 `Song`、`Difficulty`、`Unlock Condition` 譯為「歌曲」、「難度」、「解鎖條件」；解鎖值 `Default`、`None`、`Music Pack` 譯為「預設」、「無」、「歌曲包」。
- 遊戲模式名稱保留官方英文：`Normal`、`Friend`、`Battles`、`Single Battle`、`Arena Battle`、`Megamix Battle`、`Premium Time`、`Blaster Start`、`Skill Analyzer`。
- `Arena` 保留英文；`Arena Battle` 不翻譯，`Arena Shop` 統一譯為「Arena 商店」。
- 街機對戰語境中的 `Local` 譯為「鄰近」，`Online` 譯為「線上」。
- Skill Analyzer 框體名稱統一為「銀框」、「金框」、「後光」與「【神】」。
- Effect Radar 頁面標題使用「雷達圖」，兩類分別稱為「譜面雷達圖」與「玩家雷達圖」；雷達圖描述為六邊形。

## 發狂 KSM 頁面專用規則

- 標題與首次提及使用「發狂 KSM（発狂KSM／Insane KSM）」；後文統一使用「發狂 KSM」。
- 標題中的 `OS/US` 使用 `OS／US`（全大寫與全形斜線）；實際難度標記保留小寫，如 `os3`、`us18+`。
- `insane-ksm` 頁面保留 `chordstreams`、`jumpstreams`、`streams` 等原文術語；`Hard Chordstreams` 譯為「困難的 Chordstreams」。一般頁面的 `stream` 依既有用語譯為「散打／亂打」。
- `insane-ksm` 頁面的 `perfect` 依語境譯為 `PUC`，避免使用「擊出」。

## Review 標記與追記

- 頁內 slug 應以原文實際使用方式為準；英文原文含日文 slug 時，繁中頁面不應為了英文化而擅自改寫。
- 「當前」屬可接受用字，不需一律改為「目前」。
- 目錄項目與對應章節標題應同步更新。

### 不確定用字

以下項目目前可先依現有翻譯處理，最後再統一確認用字。

1. `guide` 要統一譯為「攻略」還是「指南」。
2. `grade` 暫譯為「評級」，最後確認是否統一如此翻譯。
3. `skill rank`（Volforce Class）暫譯為「Volforce 階級」，與 Dan Courses 的「段位」區分；最後確認用字。
4. 確認 `Frame rate` 的中文譯法。
5. 確認 `crash out` 是否維持英文，或採用中文譯法。
6. 確認「血條」的使用方式。
7. 確認 `appeal card` 的譯法。
8. 確認 `Konasute` 一詞要保留 `Konasute`，還是翻作「家用版」。
9. 確認 `challenge`／`quick retry` 的譯法。
10. 依語境確認 `chord jack` 使用「縱連」或「交互」。
11. 確認 `chord rush` 的譯法。
12. 確認一般內容中的 `stream` 譯法。
13. 確認使用「Boss 譜面」還是「魔王曲」還是「Boss 曲」。
14. 確認「代表任意數字？」的用法與需要補充的位置。

## 參考資料

<https://bemaniwiki.com/?SOUND+VOLTEX+%E2%88%87/%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0#judge>
<https://forum.gamer.com.tw/C.php?bsn=71634&snA=40>
<https://zh.moegirl.org.cn/zh-tw/%E9%9F%B3%E4%B9%90%E6%B8%B8%E6%88%8F/%E7%94%A8%E8%AF%AD>
