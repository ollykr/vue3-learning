export default {
	template: `
    <!-- Loop over assignements -->
					<!-- Filter down to only incompleted tasks and display them in In progress list -->
					<!-- Whenever you loop over something (with "for") you always need to add a key, it has to be unique to the current item, e.g coming from DB  -->
					<li>
						<label class="p-2 flex justify-between items-center">
							{{ assignment.name}}
							<input type="checkbox" v-model="assignment.complete" class="ml-3" />
						</label>
					</li>

    `,
	props: {
		assignment: Object,
	},
};
