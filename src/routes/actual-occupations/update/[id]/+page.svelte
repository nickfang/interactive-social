<script>
	export let data;
</script>

<h1>Update Actual Occupation</h1>

<form method="post" action="?/updateActualOccupation">
	<label for="title">
		New Title
		<input id="title" type="text" name="title" placeholder={data.title} />
	</label>
	<input id="id" type="hidden" name="id" value={data.id} />
	<button type="submit">Submit</button>
</form>

<button on:click={() => (window.location.href = '/actual-occupations')}>Back</button>
