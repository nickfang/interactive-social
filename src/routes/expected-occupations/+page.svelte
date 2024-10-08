<script lang="ts">
	export let data;
</script>

<h1>Expected Occupations</h1>
<a href="/expected-occupations/new"> Add Expected Occupation </a>
<p>
	{#each data.expectedOccupations as expectedOccupation}
		<a href={`/expected-occupations/update/${expectedOccupation.id}`}>{expectedOccupation.title}</a>
	{/each}
</p>
