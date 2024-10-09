<script>
	export let data;
	console.log('actual-occupations/update/[id]/+page.svelte', data);
</script>

<h1>Update Actual Occupation</h1>

<p>{data.id}</p>
<form>
	<label for="title">New Title</label>
	<input type="text" placeholder={data.title} />
</form>

<a href="/actual-occupations">Back</a>
