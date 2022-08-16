// default thing we are exporting is an object
export default {
	// template property
	// Your component's html for "app-button" is going there
	// We are "sloting" 'Submit' into a template
	// base CSS classes are being set via an object which value is an boolean. If the boolean is set to 'true', we apply all the classes to the object, otherwise is set to 'false' and no classes applied
	// Unique CSS classes being applied depending on styles of button
	// e.g grey bg and dark grey bg on hover applied if type is 'muted'
	// 'processing' prop is being referenced via 'processing' , we use css 'is-loading' class to apply the prop
	template: `
							<button :class="{
                                'border rounded px-5 py-5 disabled:cursor-not-allowed': true,
                                'bg-blue-600 hover:bg-blue-700': type === 'primary',
                                'bg-purple-200 hover:bg-purple-400': type === 'secondary',
                                'bg-gray-200 hover:bg-gray-400': type === 'muted',
                                'is-loading': processing
                            }" :disabled="processing">

								<slot/>

							</button>
						`,
	// Passing props
	props: {
		// prop type is String
		type: {
			type: String,
			default: "primary",
		},
		// set a state of the button from an "outside world"
		processing: {
			type: Boolean,
			default: false,
		},
	},
};
