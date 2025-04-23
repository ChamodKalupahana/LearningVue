import Assignments from "./Assignments";

export default {
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
    `,

    props : {
        assignments : Array,
        title : String
    }
}