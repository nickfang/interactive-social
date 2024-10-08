<script>
	export let data;

	const { id, expectedOccupation } = data;
</script>

<h1>Update Expected Occupation</h1>

<p>{id}</p>
<form>
	<label for="title">New Title</label>
	<input type="text" placeholder={expectedOccupation.title} />
</form>

<a href="/expected-occupations">Back</a>
