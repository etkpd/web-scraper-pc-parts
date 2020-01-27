import axios from "axios";

const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:2093/' : 'https://pc-parts-api.now.sh/'

export default {
  user: {
    login: credentials =>
      axios.post(`${API_URL}api/auth`, { user: credentials }).then(res => res),
    load_user: () =>
      axios.get(`${API_URL}api/auth`).then(res => res)
  },
  part: {
    add_part: (webpage) =>
      axios.post(`${API_URL}api/parts/link`, { webpage }).then(res => res),
    delete_part: (partID) =>
      axios.delete(`${API_URL}api/parts/partsList/${partID}`).then(res => res) 
  }
};
