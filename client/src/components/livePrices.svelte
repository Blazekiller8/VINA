<script>
      // Import data and APIs as necessary
      import { getLivePrices } from '../services/livePricesAPI.js';

      // Define state variables for storing data
      let livePrices = [];

      // Use lifecycle method to fetch data from API on component mount
      onMount(async () => {
        livePrices = await getLivePrices();
      });
    </script>

    <!-- Render data using directives and expressions -->
    <table>
      <thead>
        <tr>
          <th>Crop</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {#each livePrices as price}
          <tr>
            <td>{price.crop}</td>
            <td>{price.price}</td>
          </tr>
        {/each}
      </tbody>
    </table>
