export default {
	template: `
    <!-- Loop over assignements -->
					<!-- Filter down to only incompleted tasks and display them in In progress list -->
					<!-- Whenever you loop over something (with "for") you always need to add a key, it has to be unique to the current item, e.g coming from DB  -->
					<li>
						<label>
							{{ assignment.name}}
							<input type="checkbox" v-model="assignment.complete" />
						</label>
					</li>

    `,
	props: {
		assignment: Object,
	},
};
