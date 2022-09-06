export default {
	// "heading" is a prop - mustashe format {{ heading }} or v-text="heading" but default <slots></slots> are more flexible if I want to have an svg with a heading, etc
	template: `
        <div class="bg-gray-700 p-4 border border-gray-600 rounded-lg">
			<h2 class="font-bold">
                <slot name="heading" />
            </h2>

            <slot />
		</div>
    `,

	props: {
		heading: String,
	},
};
