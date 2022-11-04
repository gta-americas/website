export default {
	target: 'static',
	head: {
		title: 'GTA Americas - GTA V Roleplay Network',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		],
		link: [
			{ rel: 'icon', href: 'favicon.svg' }
		]
	},
	css: [
		// CSS file in the project
		'@/assets/css/main.css',
		'@/assets/css/fonts.css',
		'@/assets/css/scrollbar.css'
	],
	modules: [
		'@nuxtjs/tailwindcss',
		'@nuxtjs/gtm',
		'@nuxtjs/google-fonts'
	],
	buildModules: [
		"@nuxtjs/svg"
	],
	// This will automatically load components from `~/components`
	components: [
		'~/components',
		{ path: '~/components/ui/', prefix: 'v-' }
	],
	gtm: {
		id: 'GTM-5PJJ4XZ'
	},
	googleFonts: {
		families: {
			Inter: true
		}
	}
}
