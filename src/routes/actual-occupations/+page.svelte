<script lang="ts">
	import { goto } from '$app/navigation';

	export let data;
</script>

<h1>Actual Occupations</h1>
<a href="/actual-occupations/new"> Add Actual Occupation </a>
<ul>
	{#each data.actualOccupations as actualOccupation}
		<li>
			{actualOccupation.title}
			<a href={`/actual-occupations/update/${actualOccupation.id}/?title=${actualOccupation.title}`}
				>{actualOccupation.title}</a
			>
		</li>
	{/each}
</ul>
