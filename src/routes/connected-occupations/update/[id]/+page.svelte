<script>
	import DropDown from '$lib/components/input/DropDown.svelte';

	export let data;
</script>

<h1>Update Actual Occupation</h1>

<form method="post" action="?/updateConnectedOccupations" class="form">
	<div>
		<DropDown
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
