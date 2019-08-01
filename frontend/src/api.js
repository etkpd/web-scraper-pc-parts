import axios from "axios";

export default {
  user: {
    login: credentials =>
      axios.post("http://localhost:2093/api/auth", { user: credentials }).then(res => res),
    load_user: () =>
      axios.get("http://localhost:2093/api/auth").then(res => res)
  },
  part: {
    add_part: (webpage) =>
      axios.post("http://localhost:2093/api/parts/link", { webpage }).then(res => res),
    delete_part: (partID) =>
      axios.delete(`http://localhost:2093/api/parts/partsList/${partID}`).then(res => res) 
  }
};
