<script lang="ts">
	export let data;
</script>

<h1>Users</h1>

<button on:click={() => (window.location.href = '/users/new')}>New</button>

<ul>
	{#each data.users as user}
		<li>{user.lastName}, {user.firstName}</li>
	{/each}
</ul>

<button on:click={() => (window.location.href = '/')}>Back</button>
