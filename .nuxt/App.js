import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'
import NuxtBuildIndicator from './components/nuxt-build-indicator'

import '../assets/css/style.css'

import _6f6c098b from './layouts/default.vue'

const layouts = { "_default": _6f6c098b }

export default {
  head: {"title":"Chapi.to","htmlAttrs":{"lang":"fr"},"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Chapi.to"},{"hid":"ogtitle","property":"og:title","content":"Chapi.to"},{"hid":"ogdescription","property":"og:description","content":"Chapi.to"},{"hid":"ogtype","property":"og:type","content":"website"},{"hid":"ogurl","property":"og:url","content":"https:\u002F\u002Fchapi.to"},{"hid":"ogimage","property":"og:image","content":"https:\u002F\u002Fchapi.tocover.jpg"},{"property":"og:locale","content":"fr_FR"},{"hid":"twittercard","name":"twitter:card","content":"summary"},{"hid":"twittersite","name":"twitter:site","content":"@chapi_to"},{"hid":"twittertitle","name":"twitter:title","content":"Chapi.to"},{"hid":"twitterdescription","name":"twitter:description","content":"Chapi.to"},{"hid":"twitterimage","name":"twitter:image","content":"https:\u002F\u002Fchapi.tocover.jpg"},{"hid":"twitterimagealt","name":"twitter:image:alt","content":"Chapito logo"},{"name":"apple-mobile-web-app-title","content":"Chapi.to"},{"name":"application-name","content":"Chapi.to"},{"name":"msapplication-TileColor","content":"#ffffff"},{"name":"theme-color","content":"#ffffff"}],"link":[{"rel":"apple-touch-icon","sizes":"180x180","href":"\u002Fapple-touch-icon.png?v=WGoYma5yEm"},{"rel":"icon","type":"image\u002Fpng","sizes":"32x32","href":"\u002Ffavicon-32x32.png?v=WGoYma5yEm"},{"rel":"icon","type":"image\u002Fpng","sizes":"16x16","href":"\u002Ffavicon-16x16.png?v=WGoYma5yEm"},{"rel":"manifest","href":"\u002Fsite.webmanifest?v=WGoYma5yEm"},{"rel":"mask-icon","href":"\u002Fsafari-pinned-tab.svg?v=WGoYma5yEm","color":"#333333"},{"rel":"shortcut icon","href":"\u002Ffavicon.ico?v=WGoYma5yEm"}],"style":[],"script":[]},

  render(h, props) {
    const loadingEl = h('NuxtLoading', { ref: 'loading' })
    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll')
          })
        }
      }
    }, [ templateEl ])

    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, h(NuxtBuildIndicator), transitionEl])
  },
  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: ''
  }),
  beforeCreate() {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created() {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (process.client) {
      window.$nuxt = this
      this.refreshOnlineStatus()
      // Setup the listeners
      window.addEventListener('online', this.refreshOnlineStatus)
      window.addEventListener('offline', this.refreshOnlineStatus)
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },

  mounted() {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },

  computed: {
    isOffline() {
      return !this.isOnline
    }
  },
  methods: {
    refreshOnlineStatus() {
      if (process.client) {
        if (typeof window.navigator.onLine === 'undefined') {
          // If the browser doesn't support connection status reports
          // assume that we are online because most apps' only react
          // when they now that the connection has been interrupted
          this.isOnline = true
        } else {
          this.isOnline = window.navigator.onLine
        }
      }
    },

    errorChanged() {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },

    setLayout(layout) {
      if(layout && typeof layout !== 'string') throw new Error('[nuxt] Avoid using non-string value as layout property.')

      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      this.layoutName = layout
      this.layout = layouts['_' + layout]
      return this.layout
    },
    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      return Promise.resolve(layouts['_' + layout])
    }
  },
  components: {
    NuxtLoading
  }
}
