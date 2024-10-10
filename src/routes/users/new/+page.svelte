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

<button on:click={() => (window.location.href = '/users')}>back</button>
