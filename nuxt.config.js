export default {
	target: 'static',
	head: {
		title: 'GTA Americas - GTA V Roleplay Network',
		meta: [
			{ charset: 'utf-8' },
		]
	},
	css: [
		// CSS file in the project
		'@/assets/css/main.css',
		'@/assets/css/fonts.css',
		'@/assets/css/scrollbar.css'
	],
	modules: [
		'@nuxtjs/tailwindcss'
	],
	buildModules: [
		"@nuxtjs/svg"
	],
	// This will automatically load components from `~/components`
	components: true,
}
