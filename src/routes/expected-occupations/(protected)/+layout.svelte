<script>
	export let data;
	let { isAuthenticated } = data;
</script>

{#if isAuthenticated}
	<slot />
{/if}
