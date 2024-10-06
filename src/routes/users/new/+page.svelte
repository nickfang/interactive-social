<script>
	// const handleSubmit = async (e: SubmitEvent) => {
	// 	const formData = new FormData(e.target as HTMLFormElement);
	// 	const data = Object.fromEntries(formData.entries());
	// };
</script>

<!-- <form on:submit|preventDefault={handleSubmit}> -->
<form method="post" action="?/createUser">
	<label>
		First Name: <input type="text" name="firstName" />
	</label>
	<label>
		Last Name: <input type="text" name="lastName" />
	</label>
	<label>
		email: <input type="email" name="email" />
	</label>
	<button type="submit">Submit</button>
</form>
