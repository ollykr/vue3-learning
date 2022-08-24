export default {
	template: `
        <div class="flex gap-2">
                            <button
                            @click="$emit('update:currentTag', tag)"
                            v-for="tag in tags"
                                class="border rounded px-1 py-px text-xs"
                                :class="{
                                'border-blue-500 text-blue-500':
                                    tag === currentTag
                                }"
                                >
                                {{ tag }}
                            </button>
                        </div >
                        `,
	props: {
		initialTags: Array,
		// currentTag: String,
		currentTag: String,
		//this is a default prop name when we use v-model
	},

	computed: {
		// declare/define "tags" to be accessible
		tags() {
			// hardcoded
			// return ["math", "science", "reading"];
			// OR
			//return a new array containing only the tags from assignments list where Set() is a way to create a set of items where each item must be unique
			return ["all", ...new Set(this.initialTags)];
		},
	},
};
