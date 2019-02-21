import axios from "axios";

const KEY = "AIzaSyBkDcV-AdozFIKgOPF0xGVzGpNca_xh6Kg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
