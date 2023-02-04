<script>
import { onMount } from 'svelte';

let messages = [];
let currentMessage = '';

// Function to send a message to the chatbot
async function sendMessage() {
  messages = [...messages, { text: currentMessage, isUser: true }];

  // Code to call the chatbot API and get the response
  const response = await fetch('https://chatbot-api.com/message', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: currentMessage }),
  });

  const data = await response.json();
  messages = [...messages, { text: data.response, isUser: false }];
  currentMessage = '';
}

</script>

<style>
  /* Style for the chatbot component */
</style>

<div class="chat-container">
  {#each messages as message}
    <div class="message-container {message.isUser ? 'user' : 'bot'}">
      {message.text}
    </div>
  {/each}

  <input type="text" bind:value={currentMessage} />
  <button on:click={sendMessage}>Send</button>
</div>