<script lang="ts">
	export let data;
</script>

<h1>Users</h1>
{#each data.users as user}
	<div>{user.lastName}, {user.firstName}</div>
{/each}
