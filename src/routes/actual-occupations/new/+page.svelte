<h1>Create Actual Occupation</h1>

<form method="post" action="?/createActualOccupation">
	<label>
		title: <input type="text" name="title" />
	</label>
	<button type="submit">Submit</button>
</form>

<button on:click={() => (window.location.href = '/actual-occupations')}>Back</button>
