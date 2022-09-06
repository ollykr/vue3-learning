export default {
	template: `
	<form @submit.prevent="add">
		<div class="border border-gray-600 text-black flex">
			<input v-model="newAssignment" placeholder="New assignment..." class="p-2" />
			<button type="submit" class="bg-white p-2 border-l">Add</button>
		</div>
	</form>
    `,
	// one way to enable parent-child communications
	// add :assignments="assignments" to <assignment-create></assignment-create>
	// props: {
	// 	assignments: Array,
	// },
	data() {
		return {
			newAssignment: "",
		};
	},
	methods: {
		// I need assignmnets array for the below to work but the array is in parent component (assignments.js) , not here
		add() {
			// alert(this.newAssignment);
			// we emit an event to connect it with a parent (Assignments.js component)
			// 'add' is a custom event (@click is a native event)
			this.$emit("add", this.newAssignment);
			// append a new assignment to assignments array
			// this.assignments.push({
			// 	name: this.newAssignment,
			// 	completed: false,
			// 	id: this.assignments.length + 1,
			// });

			this.newAssignment = "";
		},
	},
};
