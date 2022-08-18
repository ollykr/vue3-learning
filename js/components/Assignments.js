import AssignmentList from "./AssignmentList.js";
// Outer assignments shell component
export default {
	components: { AssignmentList },
	// .prevent is Vue's way to do e.preventDefault();
	template: `
	<section class="space-y-6">
			<assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
			<assignment-list :assignments="filters.completed" title="Completed"></assignment-list>

			<form @submit.prevent="add">
				<div class="border border-gray-600 text-black">
					<input v-model="newAssignment" placeholder="New assignment..." class="p-2" />
					<button type="submit" class="bg-white p-2 border-l">Add</button>
				</div>
			</form>
    </section>
    `,
	data() {
		return {
			assignments: [
				{ name: "Finish project", complete: false, id: 1 },
				{ name: "Read chapter 4", complete: false, id: 2 },
				{ name: "Turn in homework", complete: false, id: 3 },
			],
			// Instead of diving into DOM with .querySelector etc we use below property as our only source of truth
			newAssignment: "",
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
		add() {
			// alert(this.newAssignment);
			// append a new assignment to assignments array
			this.assignments.push({
				name: this.newAssignment,
				completed: false,
				id: this.assignments.length + 1,
			});
			// to clear a new assignment value typed into an input box after "adding" it to assignments list
			this.newAssignment = "";
		},
	},
};
