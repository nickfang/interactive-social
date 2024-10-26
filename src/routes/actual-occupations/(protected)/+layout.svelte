<script>
	export let data;
	$: ({ isAuthenticated } = data);
</script>

{#if isAuthenticated}
	<slot />
{/if}
