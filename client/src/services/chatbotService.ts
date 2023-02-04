import axios from 'axios';

class ChatBotService {
  async sendMessage(message: string): Promise<ChatBotResponse> {
    try {
      const response = await axios.post('api/chatbot', {
        message
      });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default new ChatBotService();
