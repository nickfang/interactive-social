<script lang="ts">
	export let data;
</script>

<h1>Connected Occupations</h1>
{#each data.connectedOccupations as connectedOccupation}
	<div>{JSON.stringify(connectedOccupation)}</div>
{/each}
