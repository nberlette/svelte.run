<script lang="ts">
	export let name = 'svelte.run'
	export let url = 'https://svelte.run'
	export let image = 'https://og-image.vercel.app/%3Ccode%3E%3Cb%3Esvelte.run%3C%2Fb%3E%3C%2Fcode%3E%3Cstyle%3Ebody%7Bbackground-color%3A%23112233%3B%7Dimg%3Afirst-child%2C.plus%2Ccode%3A%3Abefore%2Ccode%3A%3Aafter%7Bdisplay%3Anone%3B%7Dcode%7Btext-shadow%3A0%200.1em%200.05em%20rgba(0%2C0%2C0%2C0.15)%3Bcolor%3A%23ff3e00%3B%7D%3C%2Fstyle%3E.png?theme=dark&md=1&fontSize=120px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Flogo.svg&images=https%3A%2F%2Fsvelte.run%2Ficon.svg&heights=0&widths=0&widths=350&widths=350&heights=350&heights=350'
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
	<p class="bottom">
		deployed with vercel &middot;  <a href="https://github.com/svelterun">github</a>
	</p>
</main>

<style>
	::selection {
		background-color: transparent;
		cursor: default;
		color: inherit;
	}
	.bottom {
		position: absolute;
		bottom: 2em;
		width: 100%;
		display: block;
		left: 0;
		text-align: center;
	}
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: lowercase;
		font-size: 6em;
		font-weight: 100;
		cursor: default;
		display: block;
		width: 100%;
		text-align: center;
		position: absolute;
		top: 0;
		left: 0;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
