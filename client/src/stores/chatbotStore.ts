import { writable } from 'svelte/store';

interface ChatbotMessage {
  message: string;
  author: 'user' | 'bot';
}

const initialMessages: ChatbotMessage[] = [];

const chatbotStore = writable(initialMessages);

export function addMessage(message: ChatbotMessage) {
  chatbotStore.update((messages) => [...messages, message]);
}

export default chatbotStore;
