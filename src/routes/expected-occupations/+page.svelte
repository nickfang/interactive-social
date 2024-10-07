<script lang="ts">
	export let data;
</script>

<h1>Expected Occupations</h1>
{#each data.expectedOccupations as expectedOccupation}
	<div>{JSON.stringify(expectedOccupation)}</div>
{/each}
