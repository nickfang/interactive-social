<script lang="ts">
	export let data;
</script>

<h1>Connected Occupations</h1>
<button on:click={() => (window.location.href = '/connected-occupations/new')}>New</button>
<ul>
	{#each data.valid as connectedOccupation}
		<li>{JSON.stringify(connectedOccupation)}</li>
	{/each}
</ul>
<h2>Invalid</h2>
<ul>
	{#each data.invalid as connectedOccupation}
		<li>{JSON.stringify(connectedOccupation)}</li>
	{/each}
</ul>

<button on:click={() => (window.location.href = '/')}>back</button>
