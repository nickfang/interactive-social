<script lang="ts">
	import { goto } from '$app/navigation';
	import EditIcon from '$lib/components/icons/EditIcon.svelte';
	import TrashIcon from '$lib/components/icons/TrashIcon.svelte';

	export let data;
	async function handleDelete(id: number) {
		if (confirm('Are you sure you want to delete this actual occupation?')) {
			try {
				const formData = new FormData();
				formData.append('id', id.toString()); // Add the ID to the form data

				const response = await fetch('?/deleteConnectedOccupation', {
					method: 'POST',
					body: formData
				});

				if (response.ok) {
					console.log('Actual occupation deleted successfully!');
					// Remove deleted actual occupation instead of getting all the actual occupations again
					// data.actualOccupations = data.actualOccupations.filter(
					// 	(occupation) => occupation.id !== id
					// );
				} else {
					const errorData = await response.json();
				}
			} catch (error) {
				console.error('Error deleting actual occupation:', error);
			}
		}
	}
</script>

<h1>Actual Occupations</h1>
<button on:click={() => (window.location.href = '/actual-occupations/new')}>New</button>
<ul>
	{#each data.actualOccupations as actualOccupation}
		<li>
			{actualOccupation.title}
			<a
				href={`/actual-occupations/update/${actualOccupation.id}/?title=${actualOccupation.title}`}
			>
				<EditIcon />
			</a>
			<a href="#" on:click={() => handleDelete(actualOccupation.id)}><TrashIcon /></a>
		</li>
	{/each}
</ul>

<button on:click={() => (window.location.href = '/')}>Back</button>
