// default thing we are exporting is an object
export default {
	// template property
	// Your component's html for "app-button" is going there
	// We are "sloting" 'Submit' into a template
	template: `
							<button class="bg-gray-200 hover:bg-gray-400 border rounded px-5 py-5 disabled:cursor-not-allowed" :disabled="processing">

								<slot/>

							</button>
						`,
	data() {
		// use case scenario: click on button submit, fetch request is sent to get data, 'processing' is set to true, while it is processing , the button is disabled , cursor not allowed, once fetch request is completed, change 'processing' to false
		return {
			processing: false,
		};
	},
};
