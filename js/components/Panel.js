export default {
	// "heading" is a prop - mustashe format {{ heading }} or v-text="heading"
	template: `
        <div class="bg-gray-700 p-4 border border-gray-600 rounded-lg">
			<h2 class="font-bold" v-text="heading"></h2>
		</div>
    `,

	props: {
		heading: String,
	},
};
