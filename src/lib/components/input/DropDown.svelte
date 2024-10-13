<script lang="ts">
	export let name: string;
	export let label: string;
	export let defaultValue: string | null = null;
	export let options: { value: string | number; label: string }[];

	let selectedValue: string | number | null = null;
	let isOpen = false;
	let dropdownRef: HTMLDivElement;
	let menuRef: HTMLDivElement;

	if (defaultValue) {
		selectedValue = Number(defaultValue);
	}

	const handleOptionClick = (option: { value: string | number; label: string }) => {
		selectedValue = option.value;
		isOpen = false;
	};
</script>

<label for={name}>
	{label}
	<div class="relative inline-block" bind:this={dropdownRef}>
		<button type="button" on:click={() => (isOpen = !isOpen)}>
			{options.find((option) => option.value === selectedValue)?.label || 'Select an Option'}
		</button>
		{#if isOpen}
			<div bind:this={menuRef} style="top: {dropdownRef?.clientHeight || 0}px; left: 0">
				<div role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
					{#each options as option}
						<button
							type="button"
							role="menuitem"
							tabindex="0"
							on:click={() => handleOptionClick(option)}
							on:keydown={(e) => e.key === 'Enter' && handleOptionClick(option)}
						>
							{option.label}
						</button>
					{/each}
				</div>
			</div>
		{/if}
		<input type="hidden" {name} bind:value={selectedValue} />
	</div>
</label>
