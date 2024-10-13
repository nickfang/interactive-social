<script>
	import DropDown from '$lib/components/input/DropDown.svelte';
	import RadioButton from '$lib/components/input/RadioButton.svelte';
	export let data;
</script>

<form method="post" action="?/createConnectedOccupations">
	<div>
		<RadioButton
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

<button on:click={() => (window.location.href = '/connected-occupations')}>Back</button>

<style>
	.form {
		display: flex;
	}
</style>
