<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { writable } from 'svelte/store';

	export const actualOccupationUpdateTitle = writable('');

	export let data;
	const handleUpdate = (actualOccupation: any) => {
		console.log('actual occupation', actualOccupation.title);
		actualOccupationUpdateTitle.set(actualOccupation.title);
		goto(`/actual-occupations/update/${actualOccupation.id}`);
	};
</script>

<h1>Actual Occupations</h1>
<a href="/actual-occupations/new"> Add Actual Occupation </a>
<ul>
	{#each data.actualOccupations as actualOccupation}
		<li>
			<a href={`/actual-occupations/update/${actualOccupation.id}`}>{actualOccupation.title}</a>
			<a href="#" on:click={() => handleUpdate(actualOccupation)}>Update</a>
		</li>
	{/each}
</ul>
