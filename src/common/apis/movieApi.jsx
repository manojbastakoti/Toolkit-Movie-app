import axios from "axios";

export default axios.create({
  BASE_URL: "http://www.omdbapi.com",
});
