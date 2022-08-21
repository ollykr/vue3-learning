import Assignment from "./Assignment.js";
export default {
	components: { Assignment },
	// Pass a prop "assignment" (:assignment)
	// Access "tags" to show only certain assignments (science class but not math class)
	// CSS class="" and :class are mergered together behind the scenes
	// 'border-blue-500 text-blue-500': tag === currentTag - it means if tag is equal currentTag , add blue border and blue text to a tag button
	template: `
    <section v-show="assignments.length">
				<h2 class="font-bold mb-2">{{ title }} <span>({{ assignments.length}})</span></h2>

				<div class="flex gap-2">
					<button
					@click="currentTag = tag"
					v-for="tag in tags"
						class="border rounded px-1 py-px text-xs"
						:class="{
						'border-blue-500 text-blue-500':
							tag === currentTag
						}"
						>
						{{ tag }}
					</button>
				</div>

				<ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
                    <assignment
                       v-for="assignment in filteredAssignments"
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
		// declare/define "tags" to be accessible
		tags() {
			// hardcoded
			// return ["math", "science", "reading"];
			// OR
			//return a new array containing only the tags from assignments list where Set() is a way to create a set of items where each item must be unique
			return ["all", ...new Set(this.assignments.map((a) => a.tag))];
		},
	},
};
