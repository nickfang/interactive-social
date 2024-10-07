<script>
	import DropDown from '$lib/components/input/DropDown.svelte';
	export let data;
	console.log('connectioned-occupations/new', data);
</script>

<form method="post" action="?/createConnectedOccupations">
	<DropDown name="Actual Occupations" options={data.actualOccupationOptions} />
	<DropDown name="Expected Occupations" options={data.expectedOccupationOptions} />

	<button type="submit">Submit</button>
</form>
