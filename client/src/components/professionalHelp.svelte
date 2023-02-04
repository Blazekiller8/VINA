<script>
      // import any necessary dependencies or services
      import { someService } from '../services/someService.js';

      // declare any state variables and/or initialize them in the onMount lifecycle method
      let professionalHelpList = [];

      async function fetchProfessionalHelp() {
        professionalHelpList = await someService.fetchProfessionalHelp();
      }

      $: if (!professionalHelpList.length) {
        fetchProfessionalHelp();
      }
      </script>

      <h2>Professional Help</h2>
      <ul>
        {#each professionalHelpList as help}
          <li>{help.name} - {help.specialty}</li>
        {/each}
      </ul>
