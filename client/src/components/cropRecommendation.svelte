<script>
      // import required modules, services, and stores
      import { ... } from '...';

      // define data and state variables
      let crops = [];
      let recommendations = [];
      let isLoading = true;

      // fetch data from API and set state variables
      const fetchData = async () => {
        isLoading = true;
        const response = await ...;
        crops = response.data;
        recommendations = ...;
        isLoading = false;
      };

      // call fetchData on component mount
      onMount(fetchData);
    </script>

    <!-- template for component -->
    {#if isLoading}
      <!-- loading indicator -->
      <div>Loading...</div>
    {:else}
      <!-- display recommendations -->
      <ul>
        {#each recommendations as crop}
          <li>{crop.name}</li>
        {:else}
          <li>No recommendations available</li>
        {/each}
      </ul>
    {/if}
