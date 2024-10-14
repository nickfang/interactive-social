<script lang="ts">
	import { redirect } from '@sveltejs/kit';

	let isLoggedIn = false;
	const checkAuthentication = () => {
		// Your authentication check function
		return false;
	};

	export const load = async ({ url }) => {
		isLoggedIn = checkAuthentication(); // Your authentication check function
		console.log('isLoggedIn:', isLoggedIn);
		if (!isLoggedIn) {
			throw redirect(302, `/?redirectTo=${url.pathname}`);
		}
	};
</script>

<h3>Protected Layout Component</h3>
{#if checkAuthentication()}
	<slot />
{:else}
	<p>Not authenticated</p>
{/if}
