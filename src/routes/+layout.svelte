<script lang="ts">
	export let data;
	const { authenticated } = data;
</script>

<nav>
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/users">Users</a></li>
		<li>Occupations</li>
		<ul>
			<li><a href="/expected-occupations">Expected</a></li>
			<li><a href="/actual-occupations">Actual</a></li>
			<li><a href="/connected-occupations">Connected</a></li>
		</ul>
	</ul>
	Logged in: {authenticated}
</nav>
<slot />
