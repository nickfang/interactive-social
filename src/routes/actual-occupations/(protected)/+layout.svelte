<script>
	export let data;
	let isAuthenticated = data.isAuthenticated;
</script>

{#if isAuthenticated}
	<slot />
{/if}
