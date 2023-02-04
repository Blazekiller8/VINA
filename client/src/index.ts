import * as Svelte from 'svelte';

const app = new Svelte({
  target: document.getElementById('root'),
  hydrate: true,
  // include any other desired options
});

export default app;
