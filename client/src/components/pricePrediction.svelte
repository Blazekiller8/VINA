<script>
      import { onMount } from 'svelte';
      import { getPricePrediction } from './services/pricePrediction.js';

      let prediction;

      onMount(async () => {
        prediction = await getPricePrediction();
      });
    </script>

    <h2>Price Prediction</h2>
    <p>The predicted price for crops is: {prediction}</p>
