// Import components
import Assignments from "./Assignments.js";
import Panel from "./Panel.js";

export default {
	// Register components
	components: { Assignments, Panel },
	template: `
	<div class="grid gap-6">
		<assignments></assignments>

		<panel heading="Hello World" />
	</div>
    `,
};
