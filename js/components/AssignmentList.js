import Assignment from "./Assignment.js";
export default {
	components: { Assignment },
	// Pass a prop "assignment" (:assignment)
	template: `
    <section v-show="assignments.length">
				<h2 class="font-bold mb-2">{{ title }}</h2>
				<ul>
                    <assignment
                       v-for="assignment in assignments"
                       :key="assignment.id"
                       :assignment="assignment"
                       >
                    </assignment>
				</ul>
			</section>
	`,
	// For the above to work, it needs to be given a collection of assignments i.e we are removing all specifics
	props: {
		assignments: Array,
		title: String,
	},
};
