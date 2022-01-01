import App from './App.svelte';

export default new App({
	target: document.body,
	props: {
		name: 'svelte.run()',
		image: '/og-light.png'
	}
})