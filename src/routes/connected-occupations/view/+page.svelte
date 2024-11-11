<script lang="ts">
	export let data;
</script>

<h1>Connected Occupations</h1>
<ul>
	{#each data.connectedOccupations as connectedOccupation}
		<li>
			{connectedOccupation.expectedOccupation.title} => {connectedOccupation.actualOccupation.title}
		</li>
	{/each}
</ul>

<!-- <button on:click={() => (window.location.href = '/')}>Back</button> -->
