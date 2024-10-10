<script lang="ts">
	import { goto } from '$app/navigation';
	import EditIcon from '$lib/components/icons/EditIcon.svelte';
	import TrashIcon from '$lib/components/icons/TrashIcon.svelte';

	export let data;
</script>

<h1>Actual Occupations</h1>
<a href="/actual-occupations/new"> Add Actual Occupation </a>
<ul>
	{#each data.actualOccupations as actualOccupation}
		<li>
			{actualOccupation.title}
			<a
				href={`/actual-occupations/update/${actualOccupation.id}/?title=${actualOccupation.title}`}
			>
				<EditIcon />
			</a>
			<a href={`/actual-occupations/delete/${actualOccupation.id}`}><TrashIcon /></a>
		</li>
	{/each}
</ul>
