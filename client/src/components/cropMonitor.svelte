<script>
      import { onMount } from 'svelte';
      import { getCropPrices } from '../services/api.js';

      let cropPrices = [];

      onMount(async () => {
        cropPrices = await getCropPrices();
      });
    </script>

    <table>
      <thead>
        <tr>
          <th>Crop</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {#each cropPrices as cropPrice}
          <tr>
            <td>{cropPrice.name}</td>
            <td>{cropPrice.price}</td>
          </tr>
        {/each}
      </tbody>
    </table>