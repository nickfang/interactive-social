<script lang="ts">
	export let data;
	$: ({ isAuthenticated } = data);
</script>

<h1>Login</h1>

<form method="post" action="?/toggleAuth">
	<button type="submit">
		{#if isAuthenticated}
			Logout
		{:else}
			Login
		{/if}
	</button>
</form>
