<script lang="ts">
	const handleSubmit = (e: SubmitEvent) => {
		const formData = new FormData(e.target as HTMLFormElement);
		const data = Object.fromEntries(formData.entries());
		console.log(data);
	};
</script>

<!-- on:submit|preventDefault={handleSubmit}> -->
<form method="post" action="?/users/new">
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
