<script lang="ts">
	import { onMount, createEventDispatcher } from 'svelte';

	export let name: string;
	export let options: { value: string | number; label: string }[];
	export let value: string | number | null = null;

	let selectedValue: string | number | null = null;
	let isOpen = false;
	let dropdownRef: HTMLDivElement;
	let menuRef: HTMLDivElement;

	const handleOptionClick = (option: { value: string | number; label: string }) => {
		selectedValue = option.value;
		isOpen = false;
	};
</script>

<label for={name}>
	{name}
	<div class="relative inline-block" bind:this={dropdownRef}>
		<button
			type="button"
			on:click={() => (isOpen = !isOpen)}
			class="bg-gray-200 text-gray-700 py-2 px-4 rounded inline-flex items-center"
		>
			{options.find((option) => option.value === selectedValue)?.label || 'Select an Option'}
		</button>
		{#if isOpen}
			<div
				class="absolute mt-2 z-10 w-48 rounded-md bg-bg opacity-95 shadow-lg ring-1 ring-black ring-opacity-5"
				bind:this={menuRef}
				style="top: {dropdownRef?.clientHeight || 0}px; left: 0"
			>
				<div class="py=1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
					{#each options as option}
						<div
							class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
							role="menuitem"
							on:click={() => handleOptionClick(option)}
						>
							{option.label}
						</div>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</label>
