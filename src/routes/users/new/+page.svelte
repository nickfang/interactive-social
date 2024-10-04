<script>
	const handleSubmit = () => {
		console.log('submit');
	};
</script>

<form on:submit|preventDefault={handleSubmit}>
	<label>
		First Name: <input type="text" name="first_name" />
	</label>
	<label>
		Last Name: <input type="text" name="last_name" />
	</label>
	<label>
		email: <input type="email" name="email" />
	</label>
	<button type="submit">Submit</button>
</form>
