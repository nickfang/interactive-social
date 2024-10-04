<script lang="ts">
	export let data;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<div>
	{#if data}
		<pre>{JSON.stringify(data, null, 2)}</pre>
	{:else}
		<p>Loading...</p>
	{/if}
</div>
