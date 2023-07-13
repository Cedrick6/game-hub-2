import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d149bdbcbce14872931fb4d0fd5e88fb",
  },
});
