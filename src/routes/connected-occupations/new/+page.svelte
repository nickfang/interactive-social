<script>
	import DropDown from '$lib/components/input/DropDown.svelte';
	export let data;
	console.log('connectioned-occupations/new', data);
</script>

<form method="post" action="?/createConnectedOccupations">
	<DropDown
		label="Actual Occupations"
		name="actualOccupation"
		options={data.actualOccupationOptions}
	/>
	<DropDown
		label="Expected Occupations"
		name="expectedOccupation"
		options={data.expectedOccupationOptions}
	/>

	<button type="submit">Submit</button>
</form>
