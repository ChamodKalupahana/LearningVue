import AssignmentList from "./AssignmentList.js";

export default {
    components : { AssignmentList }, 

    template : `
    <AssignmentList :assignments="InProgressAssignments" title="In Progress Assignments"></AssignmentList>
    <AssignmentList :assignments="completedAssignments" title="Completed Assignments"></AssignmentList>

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