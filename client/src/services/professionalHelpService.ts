import axios from 'axios';

const API_BASE_URL = 'YOUR_API_BASE_URL';

export default class ProfessionalHelpService {
  static getHelp() {
    return axios.get(`${API_BASE_URL}/professional-help`);
  }
}
