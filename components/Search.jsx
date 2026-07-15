import { Search } from 'nextra/components'

const searchText = {
  en: {},
  'zh-tw': {
    placeholder: '搜尋文件……',
    emptyResult: '找不到符合的結果。',
    errorText: '搜尋索引載入失敗。',
    loading: '搜尋中……',
  },
}

export function LocalizedSearch({ lang }) {
  return <Search {...(searchText[lang] ?? searchText.en)} />
}
