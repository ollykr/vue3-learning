import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

// Outer assignments shell component
export default {
	components: { AssignmentList, AssignmentCreate },
	// .prevent is Vue's way to do e.preventDefault();
	// Parent listens to a custom event froma child via @add="add"
	// in other words , it communicates with child via props
	// Add can-hide flag to Completed list to close it
	template: `
	<section class="flex gap-8">
			<assignment-list :assignments="filters.inProgress" title="In Progress">
			<assignment-create @add="add"></assignment-create>
			</assignment-list>
            <div v-if="showCompleted">
				<assignment-list :assignments="filters.completed" title="Completed" can-toggle @toggle="showCompleted = !showCompleted"></assignment-list>
			</div>
    </section>
    `,
	data() {
		return {
			// hardcoded for now but we can use ajax to get this data from DB
			assignments: [],
			// Instead of diving into DOM with .querySelector etc we use below property as our only source of truth
			showCompleted: true,
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
	// Lifecycle hook - created
	created() {
		// Native browser AJAX request
		fetch("http://localhost:3000/assignments")
			// fetch() returns Promise - "Promise" is a "promise" to give you response later eventually - async way vs sync way when you receive "response" right away
			// when eventually you have a response, I want you to give me a JSON response
			.then((response) => response.json())
			// when you have a data - "assignments"  for me
			.then((assignments) => {
				// let's save "assignments" to a data() property
				this.assignments = assignments;
			});
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
