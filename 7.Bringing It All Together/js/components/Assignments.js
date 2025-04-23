import AssignmentList from "./AssignmentList.js";

export default {
    components : { AssignmentList }, 

    template : `
    <section class="space-y-6">
    <AssignmentList :assignments="inProgress" title="In Progress Assignments"></AssignmentList>
    <AssignmentList :assignments="completed" title="Completed Assignments"></AssignmentList>
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
        completed() {
          return this.assignments.filter(assignment => assignment.complete);
        },
        inProgress() {
          return this.assignments.filter(assignment => ! assignment.complete);
        }
      }
}