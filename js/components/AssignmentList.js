import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";
export default {
	components: { Assignment, AssignmentTags },
	// Pass a prop "assignment" (:assignment)
	// Access "tags" to show only certain assignments (science class but not math class)
	// CSS class="" and :class are mergered together behind the scenes
	// 'border-blue-500 text-blue-500': tag === currentTag - it means if tag is equal currentTag , add blue border and blue text to a tag button
	// $event allows us to access method's parameter i.e the tag that was clicked
	// v-model="currentTag" replaces :current-tag="currentTag" @change="currentTag = $event"
	// Add Close button to hide a list - typical use of flags
	template: `
    <section v-show="assignments.length" class="w-60 bg-gray-700 p-4 border border-gray-600 rounded-lg">
	<div class="flex justify-between items-start">
				<h2 class="font-bold mb-2">{{ title }} <span>({{ assignments.length}})</span></h2>

				<button v-show="canToggle" @click="$emit('toggle')">&times;</button>
	</div>
			<assignment-tags
			v-model:currentTag="currentTag"
			:initial-tags="assignments.map(a => a.tag)">
			</assignment-tags>

				<ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
                    <assignment
                       v-for="assignment in filteredAssignments"
                       :key="assignment.id"
                       :assignment="assignment"
                       >
                    </assignment>
				</ul>
				<slot></slot>

			</section>
	`,
	// For the above to work, it needs to be given a collection of assignments i.e we are removing all specifics
	// canHide is our on/off flag it is off by default
	props: {
		assignments: Array,
		title: String,
		canToggle: { type: Boolean, default: false },
	},
	data() {
		return {
			// on default display all assignments are shown
			currentTag: "all",
		};
	},
	computed: {
		filteredAssignments() {
			// filter the assignment where the assignment tag is equal to the current tag
			// if tag is "all", show list of all assignments
			if (this.currentTag === "all") {
				return this.assignments;
			}
			// otherwise show filtered assignments
			return this.assignments.filter((a) => a.tag === this.currentTag);
		},
	},
};
