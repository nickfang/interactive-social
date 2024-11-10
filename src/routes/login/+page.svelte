<script lang="ts">
	import { goto } from '$app/navigation';
	export let data;
	$: ({ isAuthenticated, redirectTo } = data);

	async function handleSubmit(event: Event) {
		event.preventDefault();
		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);
		const response = await fetch(form.action, {
			method: form.method,
			body: formData
		});
		if (response.ok) {
			goto(redirectTo);
		}
	}
</script>

<h1>Login Page</h1>
<p>Mocking logging in and out</p>
<form method="post" action="?/toggleAuth" on:submit|preventDefault={handleSubmit}>
	<input type="hidden" name="redirectTo" value={redirectTo} />
	<button type="submit">
		{#if isAuthenticated}
			Logout
		{:else}
			Login
		{/if}
	</button>
</form>
