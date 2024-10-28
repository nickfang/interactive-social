<script lang="ts">
	export let name: string;
	export let label: string;
	export let defaultValue: string | number | null = null;
	export let helperText: string = '';
	export let options: { value: string | number; label: string }[];

	let selectedValue: string | number;
	if (defaultValue) {
		selectedValue =
			options.find((option) => option.value == defaultValue)?.value || options[0].value;
	}
</script>

<div id={`radio-button-${name}`}>
	<div>{label}</div>
	<div>{helperText}</div>
	{#each options as { value, label }}
		<input
			id={`radio-button-${name}-${value}`}
			type="radio"
			{name}
			{value}
			bind:group={selectedValue}
		/>
		<label for={name}> {label} </label>
	{/each}
</div>
