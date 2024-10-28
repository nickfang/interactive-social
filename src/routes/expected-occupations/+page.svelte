<script lang="ts">
	import EditIcon from '$lib/components/icons/EditIcon.svelte';
	import TrashIcon from '$lib/components/icons/TrashIcon.svelte';

	export let data;

	async function handleDelete(id: number) {
		if (confirm('Are you sure you want to delete this expected occupation?')) {
			try {
				const formData = new FormData();
				formData.append('id', id.toString()); // Add the ID to the form data

				const response = await fetch('?/deleteExpectedOccupation', {
					method: 'POST',
					body: formData
				});

				if (response.ok) {
					// Remove deleted expected occupation instead of getting all the expected occupations again
					data.expectedOccupations = data.expectedOccupations.filter(
						(occupation) => occupation.id !== id
					);
				} else {
					const errorData = await response.json();
				}
			} catch (error) {
				console.error('Error deleting expected occupation:', error);
			}
		}
	}
</script>

<h1>Expected Occupations</h1>
<button on:click={() => (window.location.href = '/expected-occupations/new')}>New</button>
<ul>
	{#each data.expectedOccupations as expectedOccupation}
		<li>
			{expectedOccupation.title}
			<a href={`/expected-occupations/update/${expectedOccupation.id}`}>
				<EditIcon />
			</a>
			<a href="#" on:click={() => handleDelete(expectedOccupation.id)}><TrashIcon /></a>
		</li>
	{/each}
</ul>

<button on:click={() => (window.location.href = '/')}>Back</button>
