import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID d6889980369d4f850bcef3ebc56c4603f108fdd12680f385dbf4e5860a3f030a"
  }
});
