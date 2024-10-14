<script>
	export let data;

	const { id, expectedOccupation } = data;
</script>

<h1>Update Expected Occupation</h1>

<p>{id}</p>
<form method="post" action="?/updateExpectedOccupation">
	<label for="title"
		>New Title
		<input id="title" type="text" name="title" placeholder={expectedOccupation.title} />
	</label>
	<input id="id" type="hidden" name="id" value={data.id} />
	<button type="submit">Submit</button>
</form>

<a href="/expected-occupations">Back</a>
