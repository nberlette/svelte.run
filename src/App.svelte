<script lang="ts">
	export let name = 'Svelte.run()'
	export let url = 'https://svelte.run'

	// svelte.run + vercel logos (dark)
	export let image = '/og.png';
	// export let image = '/og-light.png';
</script>

<svelte:head>
	<title>{name}</title>
	<meta name="title" content={name} />
	<meta property="og:type" content="website" />
	<meta property="og:image" content={image} />
	<meta property="og:title" content={name} />
	<meta property="og:url" content={url} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content={image} />
	<meta name="twitter:url" content={url} />
</svelte:head>

<main>
	<h1>{name}</h1>
	<footer class="bottom">
		<a href="https://github.com/svelterun">@svelterun</a>
		&middot;
		<a href="https://vercel.com" target="_blank" rel="noreferrer nooopener">Deployed with Vercel</a>
		&middot;
		<a href="https://github.com/nberlette">@nberlette</a>
	</footer>
</main>

<style>
	::selection {
		background-color: transparent;
		cursor: default;
		color: inherit;
	}
	footer.bottom {
		position: absolute;
		bottom: 10vh;
		width: 100%;
		display: block;
		left: 0;
		text-align: center;
	}
	main {
		text-align: center;
		margin: 0 auto;
		padding: 0;
		max-width: 240px;
		min-height: calc(100vh);
		height: 100vh;
		position: relative;
	}

	h1 {
		color: #ff3e00;
		text-transform: lowercase;
		font-size: 15vw;
		font-weight: 100;
		cursor: default;
		display: block;
		width: 100%;
		text-align: center;
		position: absolute;
		top: 0;
		left: 0;
	}

	footer, footer a {
		text-transform: lowercase;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
