// Import components
import Assignments from "./Assignments.js";
import Panel from "./Panel.js";

export default {
	// Register components
	components: { Assignments, Panel },
	template: `
	<div class="grid gap-6">
		<assignments></assignments>

		<panel>
			<template v-slot:heading>
					Hi There
				</template>
			<template v-slot:default>
				This is my default content
			</template>
		</panel>
	</div>
    `,
};
