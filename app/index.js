const marked = require('marked')
const lodash = require('lodash')

const editor = new Vue({
  el: '#editor',
  data: {
    input: '# Markdown'
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.input, { sanitize: true })
    }
  },
  methods: {
    update: _.debounce(function (event) {
      this.input = event.target.value
    }, 300)
  }
})
