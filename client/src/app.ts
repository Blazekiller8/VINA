import * as Svelte from 'svelte';

export default class App extends Svelte.Component {
  // include any desired component options or properties
  public message = 'Hello, world!';

  public constructor() {
    super({
      // include any desired options
    });
  }

  public async asyncData() {
    // any desired async data loading logic
    return {};
  }

  public render() {
    return `
      <div>
        ${this.message}
      </div>
    `;
  }
}
