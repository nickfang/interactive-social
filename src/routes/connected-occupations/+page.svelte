<script lang="ts">
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
					// Remove deleted actual occupation instead of getting all the actual occupations again
					data.connectedOccupations = data.connectedOccupations.filter(
						(connectedOccupation) => connectedOccupation.id !== id
					);
				} else {
					const errorData = await response.json();
				}
			} catch (error) {
				console.error('Error deleting actual occupation:', error);
			}
		}
	}
</script>

<h1>Connected Occupations</h1>
<button on:click={() => (window.location.href = '/connected-occupations/new')}>New</button>
<ul>
	{#each data.connectedOccupations as connectedOccupation}
		<li>
			{connectedOccupation.expectedOccupation.title} => {connectedOccupation.actualOccupation.title}
			<a
				href={`/connected-occupations/update/${connectedOccupation.id}/?actualOccupationId=${connectedOccupation.actualOccupationId}&expectedOccupationId=${connectedOccupation.expectedOccupationId}`}
			>
				<EditIcon />
			</a>
			<a href="#" on:click={() => handleDelete(connectedOccupation.id)}><TrashIcon /></a>
		</li>
	{/each}
</ul>

<button on:click={() => (window.location.href = '/')}>Back</button>
