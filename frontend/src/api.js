import axios from "axios";

export default {
  user: {
    login: credentials =>
      axios.post("http://localhost:2093/api/auth", { user: credentials }).then(res => res),
    load_user: () =>
      axios.get("http://localhost:2093/api/auth").then(res => res)
  }
};
