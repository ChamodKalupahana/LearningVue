import Assignments from "./Assignments.js";
import Assignment from "./Assignment.js";

export default {
    components : { Assignment }
    ,template : `
    <section v-show="assignments.length">
    <h2 class="font-bold mb-2"> {{ title }} </h2>

    <Assignment 
    v-for="assignment in assignments" 
    :key="assignment.id"
    :assignment="assignment"
    >
    </Assignment>

  </section>
    `,

    props : {
        assignments : Array,
        title : String
    }
}