import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

// Outer assignments shell component
export default {
	components: { AssignmentList, AssignmentCreate },
	// .prevent is Vue's way to do e.preventDefault();
	// Parent listens to a custom event froma child via @add="add"
	// in other words , it communicates with child via props
	template: `
	<section class="space-y-6">
			<assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
			<assignment-list :assignments="filters.completed" title="Completed"></assignment-list>
			<assignment-create @add="add"></assignment-create>
    </section>
    `,
	data() {
		return {
			// hardcoded for now but we can use ajax to get this data from DB
			assignments: [
				{ name: "Finish project", complete: false, id: 1, tag: "math" },
				{ name: "Read chapter 4", complete: false, id: 2, tag: "science" },
				{ name: "Turn in homework", complete: false, id: 3, tag: "math" },
			],
			// Instead of diving into DOM with .querySelector etc we use below property as our only source of truth
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
	methods: {
		add(name) {
			this.assignments.push({
				name: name,
				completed: false,
				id: this.assignments.length + 1,
			});
		},
	},
};
