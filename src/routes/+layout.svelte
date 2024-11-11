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
		<li>
			<a
				href="/connected-occupations/view"
				class={currentPath === '/connected-occupations' ? 'active' : ''}>Home</a
			>
		</li>
		<li><a href="/users" class={currentPath === '/users' ? 'active' : ''}>Users</a></li>
		<li>
			<a
				href="/expected-occupations"
				class={currentPath === '/expected-occupations' ? 'active' : ''}>Expected Occupations</a
			>
		</li>
		<li>
			<a href="/actual-occupations" class={currentPath === '/actual-occupations' ? 'active' : ''}
				>Actual Occupations</a
			>
		</li>
		<li>
			<a
				href="/connected-occupations"
				class={currentPath === '/connected-occupations' ? 'active' : ''}>Connected Occupations</a
			>
		</li>
		<li>
			<a href="/login" class={currentPath === '/login' ? 'active' : ''}
				>{isAuthenticated ? `Logout` : `Login`}</a
			>
		</li>
	</ul>
	Logged in: {isAuthenticated}
</nav>
<slot />

<style>
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #fff9db;
		padding: 1rem;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}

	ul {
		list-style: none;
		display: flex;
		gap: 1rem;
		margin: 0;
		padding: 0;
	}

	li {
		position: relative;
	}

	a {
		text-decoration: none;
		color: #333;
		padding: 0.5rem 1rem;
		border-radius: 4px;
		transition: background-color 0.3s ease;
	}

	a:hover {
		background-color: #fff3b0;
	}

	.active {
		background-color: #ffeb3b;
	}

	/* Additional styling for a friendly and cheerful look */
	body {
		font-family: 'Arial', sans-serif;
		background-color: #fff9db;
		color: #333;
	}

	p {
		margin: 0;
		padding: 1rem;
	}

	nav ul li a {
		font-weight: bold;
	}

	nav ul li a:hover {
		background-color: #fff3b0;
	}

	nav ul li a.active {
		background-color: #ffeb3b;
	}
</style>
