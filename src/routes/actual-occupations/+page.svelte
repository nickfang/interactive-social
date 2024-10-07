<script lang="ts">
	export let data;
</script>

<h1>Actual Occupations</h1>
{#each data.actualOccupations as actualOccupation}
	<div>{JSON.stringify(actualOccupation)}</div>
{/each}
