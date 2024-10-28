<script lang="ts">
	import { page } from '$app/stores';
	export let data;
	const { isAuthenticated, path } = data;

	$: currentPath = $page.url.pathname;

	export const load = () => {
		currentPath = $page.url.pathname;
	};
</script>

<p>{currentPath}</p>
<nav>
	<ul>
		<li hidden={currentPath === '/'}><a href="/">Home</a></li>
		<li hidden={currentPath === '/users'}><a href="/users">Users</a></li>
		<li>Occupations</li>
		<ul>
			<li hidden={currentPath === '/expected-occupations'}>
				<a href="/expected-occupations">Expected</a>
			</li>
			<li hidden={currentPath === '/actual-occupations'}>
				<a href="/actual-occupations">Actual</a>
			</li>
			<li hidden={currentPath === '/connected-occupations'}>
				<a href="/connected-occupations">Connected</a>
			</li>
		</ul>
		<li hidden={currentPath === '/login'}>
			<a href="/login">{isAuthenticated ? `Logout` : `Login`}</a>
		</li>
	</ul>
	Logged in: {isAuthenticated}
</nav>
<slot />
