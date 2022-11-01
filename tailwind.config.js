module.exports = {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./nuxt.config.{js,ts}",
	],
	theme: {
		extend: {
			backgroundImage: {
				'promo': "url('/images/promo.jpg')",
				'login': "url('/images/backgrounds/3360902d782314fee48567a8a70bb9996e569698.jpg')",
				'rockstar': "url('/images/backgrounds/bg-repeat.png')",
				'market-header': "url('/images/backgrounds/fdac18d4377f55a8b9aed1dcb882c4ffa0c60959.jpg')",
				'kifflom': "url('/images/backgrounds/bg-kifflom.png')",
				'kifflom-b': "url('/images/backgrounds/bg-kifflom-b.png')",
				'career-1': "url('~assets/images/careers/1.png')",
				'career-2': "url('/images/careers/2.png')",
				'career-3': "url('/images/careers/3.png')",
				'career-4': "url('/images/careers/4.png')",
				'career-lspd-header': "url('/images/careers/lspd/header.webp')",
				'tuners': "url('/images/backgrounds/texture-vw.jpg')",
			}
		},
		fontFamily: {
			'display': ['Grotesque'],
			'body': 'Inter, -apple-system, blinkmacsystemfont, segoe ui, roboto, oxygen, ubuntu, cantarell, fira sans, droid sans, helvetica neue, sans-serif',
		}
	},
	plugins: [],
}
