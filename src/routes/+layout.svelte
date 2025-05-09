<script>
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>Emotion Detectives</title>
</svelte:head>

{@render children()}
