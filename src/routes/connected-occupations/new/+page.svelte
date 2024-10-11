<script>
	import DropDown from '$lib/components/input/DropDown.svelte';
	export let data;
</script>

<form method="post" action="?/createConnectedOccupations" class="form">
	<div>
		<DropDown
			label="Expected Occupations"
			name="expectedOccupation"
			options={data.expectedOccupationOptions}
		/>
	</div>
	<div>
		<DropDown
			label="Actual Occupations"
			name="actualOccupation"
			options={data.actualOccupationOptions}
		/>
	</div>
	<div>
		<button type="submit">Submit</button>
	</div>
</form>

<button on:click={() => (window.location.href = '/connected-occupations')}>back</button>

<style>
	.form {
		display: flex;
	}
</style>
