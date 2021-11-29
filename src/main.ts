import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'svelte.run()',
		image: '/og-light.png'
	}
});

export default app;