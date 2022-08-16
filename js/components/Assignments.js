import AssignmentList from "./AssignmentList.js";
// Outer assignments shell component
export default {
	components: { AssignmentList },
	template: `
	<section class="space-y-6">
			<assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
			<assignment-list :assignments="filters.completed" title="Completed"></assignment-list>
    </section>
    `,
	data() {
		return {
			assignments: [
				{ name: "Finish project", complete: false, id: 1 },
				{ name: "Read chapter 4", complete: false, id: 2 },
				{ name: "Turn in homework", complete: false, id: 3 },
			],
		};
	},
	// Computed properties - are great for DRY principle to prevent code duplications
	// Computed properties are sort of methods that can be cached
	// Unlike Vue methods: we use computed properties to change a presentation of existinf data, methods are used to change data itself
	computed: {
		filters() {
			return {
				inProgress: this.assignments.filter(
					(assignment) => !assignment.complete
				),
				completed: this.assignments.filter((assignment) => assignment.complete),
				// adding display oldests filters in addition to inProgress / completed
				// oldest: etc
			};
		},
	},
};
