<script>
	import DropDown from '$lib/components/input/DropDown.svelte';
	import RadioButton from '$lib/components/input/RadioButton.svelte';

	export let data;
	console.log('expectedOccupationId', data.expectedOccupationId);
</script>

<h1>Update Actual Occupation</h1>

<form method="post" action="?/updateConnectedOccupations" class="form">
	<div>
		<RadioButton
			label="Expected Occupations"
			name="expectedOccupation"
			defaultValue={data.expectedOccupationId}
			options={data.expectedOccupationOptions}
		/>
	</div>
	<div>
		<DropDown
			label="Actual Occupations"
			name="actualOccupation"
			defaultValue={data.actualOccupationId}
			options={data.actualOccupationOptions}
		/>
	</div>
	<input id="id" type="hidden" name="id" value={data.id} />
	<div>
		<button type="submit">Submit</button>
	</div>
</form>

<button on:click={() => (window.location.href = '/connected-occupations')}>Back</button>
