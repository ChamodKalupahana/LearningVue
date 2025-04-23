import Assignments from "./Assignments.js";

export default {
    template : `
    <section v-show="assignments.length">
    <h2 class="font-bold mb-2"> {{ title }} </h2>

    <ul>
      <li 
      v-for="assignment in assignments" 
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