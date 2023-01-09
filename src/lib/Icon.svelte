<script lang="ts">
	export let name: "picture" | "grid" | "chevronLeft" | "chevronRight" | "close";
	export let width = "1rem";
	export let height = "1rem";
	export let focusable: any = false;
	let icons = [
		{
			box: 24,
			transform: "rotate(-90)",
			name: "chevronLeft",
			svg: `<svg width="24px" height="24px" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg">
					<path d="m975 815.62c-7.4531-0.027344-14.594-2.9922-19.875-8.25l-355.12-355.12-355.12 355.12c-7.1797 6.6875-17.324 9.1523-26.773 6.5039-9.4453-2.6523-16.828-10.035-19.48-19.48-2.6484-9.4492-0.18359-19.594 6.5039-26.773l375-375c5.25-5.3125 12.406-8.3047 19.875-8.3047s14.625 2.9922 19.875 8.3047l375 375c5.1484 5.3164 8.0078 12.441 7.9688 19.844s-2.9766 14.492-8.1797 19.754c-5.2031 5.2656-12.262 8.2812-19.664 8.4023z"/>
					</svg>`
		},
		{
			box: 24,
			transform: "rotate(90)",
			name: "chevronRight",
			svg: `<svg width="24px" height="24px" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg">
					<path d="m975 815.62c-7.4531-0.027344-14.594-2.9922-19.875-8.25l-355.12-355.12-355.12 355.12c-7.1797 6.6875-17.324 9.1523-26.773 6.5039-9.4453-2.6523-16.828-10.035-19.48-19.48-2.6484-9.4492-0.18359-19.594 6.5039-26.773l375-375c5.25-5.3125 12.406-8.3047 19.875-8.3047s14.625 2.9922 19.875 8.3047l375 375c5.1484 5.3164 8.0078 12.441 7.9688 19.844s-2.9766 14.492-8.1797 19.754c-5.2031 5.2656-12.262 8.2812-19.664 8.4023z"/>
					</svg>`
		},
		{
			box: 24,
			name: "grid",
			svg: `<svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"/>
                        <path d="M14 10v4h-4v-4h4zm2 0h5v4h-5v-4zm-2 11h-4v-5h4v5zm2 0v-5h5v4a1 1 0 0 1-1 1h-4zM14 3v5h-4V3h4zm2 0h4a1 1 0 0 1 1 1v4h-5V3zm-8 7v4H3v-4h5zm0 11H4a1 1 0 0 1-1-1v-4h5v5zM8 3v5H3V4a1 1 0 0 1 1-1h4z"/>
                    </g>
                </svg>
                `
		},
		{
			box: 24,
			name: "picture",
			svg: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;" xml:space="preserve">
                    <path id="XMLID_523_" d="M315,0H15C6.716,0,0,6.716,0,15v300c0,8.284,6.716,15,15,15h300c8.284,0,15-6.716,15-15V15
                        C330,6.716,323.285,0,315,0z M300,300H30V30h270V300z"/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                    </svg>`
		},
		{
			box: 24,
			name: "close",
			svg: `<svg width="24px" height="24px" version="1.1" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg">
					<path d="m543.68 600-352.02-352.01c-15.551-15.555-15.551-40.77 0-56.324 15.555-15.551 40.77-15.551 56.324 0l352.01 352.02 352.01-352.02c15.555-15.551 40.77-15.551 56.324 0 15.551 15.555 15.551 40.77 0 56.324l-352.02 352.01 352.02 352.01c15.551 15.555 15.551 40.77 0 56.324-15.555 15.551-40.77 15.551-56.324 0l-352.01-352.02-352.01 352.02c-15.555 15.551-40.77 15.551-56.324 0-15.551-15.555-15.551-40.77 0-56.324z" fill-rule="evenodd"/>
					</svg>`
		}
	];
	let displayIcon = icons.find((e) => e.name === name);
</script>

<svg
	class={$$props.class}
	{focusable}
	{width}
	{height}
	viewBox="0 0 {displayIcon?.box} {displayIcon?.box}"
	transform={displayIcon?.transform}
	>{@html displayIcon?.svg}
</svg>
