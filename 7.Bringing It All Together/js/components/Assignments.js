import AssignmentList from "./AssignmentList.js";

export default {
    components : { AssignmentList }, 
    
    template : `
          <section v-show="InProgressAssignments.length">
    <h2 class="font-bold mb-2"> In Progress Assignments </h2>

    <ul>
      <li 
      v-for="assignment in InProgressAssignments" 
      :key="assignment.id"> 
        <label>
          {{ assignment.name}}
          
          <input type="checkbox" v-model="assignment.complete">
        </label>
      </li>
    </ul>

    <!-- <pre>
      {{assignments}}

    </pre> -->
  </section>

  <section v-show="completedAssignments.length" class="mt-10">
    <h2 class="font-bold mb-2"> Completed Assignments </h2>

    <ul>
      <li 
      v-for="assignment in completedAssignments" 
      :key="assignment.id"> 
        <label>
          {{ assignment.name}}
          
          <input type="checkbox" v-model="assignment.complete">
        </label>
      </li>
    </ul>


  </section>
    `,
    data() {
        return {
          assignments : [
            {name : 'Finish project', complete : false, id: 1},
            {name : 'Read chapter 4', complete : false, id: 2},
            {name : 'turn in homework', complete : false, id : 3},
          ]
        }
      },
      methods : {
        toggle() {
          this.complete = ! this.complete
        }
      },
      computed : {
        completedAssignments() {
          return this.assignments.filter(assignment => assignment.complete);
        },
        InProgressAssignments() {
          return this.assignments.filter(assignment => ! assignment.complete);
        }
      }
}