<script>
      import { link, routes } from './routes.js';
    </script>

    <nav>
      <ul>
        {#each routes as { name, route }}
          <li><a href={route} on:click={link(route)}>{name}</a></li>
        {/each}
      </ul>
    </nav>
