<template>
  <div>
    <Dropdown trigger="click" @on-click="selectLang">
      <a href="javascript:void(0)">
        {{ title }}
        <Icon :size="18" type="md-arrow-dropdown" />
      </a>
      <DropdownMenu slot="list">
        <DropdownItem v-for="(value, key) in localList" :name="key" :key="`lang-${key}`">{{ value }}</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>

<script>
export default {
  name: 'Language',
  props: {
    lang: String
  },
  data () {
    return {
      langList: {
        'zh-CN': '语言',
        'zh-TW': '語言',
        'en-US': 'Lang'
      },
      localList: {
        'zh-CN': '中文简体',
        'zh-TW': '中文繁体',
        'en-US': 'English'
      }
    }
  },
  watch: {
    // 监听lang的改变 进而改变系统使用的语言
    lang (lang) {
      this.$i18n.locale = lang
    }
  },
  computed: {
    // 返回当前语言的title
    title () {
      return this.langList[this.lang]
    }
  },
  methods: {
    // 用户选择语言以后触发
    selectLang (name) {
      this.$emit('on-lang-change', name)
    }
  }
}
</script>
