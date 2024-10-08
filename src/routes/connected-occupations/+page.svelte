<script lang="ts">
	export let data;
</script>

<h1>Connected Occupations</h1>
<a href="/connected-occupations/new"> Add Connected Occupation </a>
<p>
	{#each data.connectedOccupations as connectedOccupation}
		<div>{JSON.stringify(connectedOccupation)}</div>
	{/each}
</p>
