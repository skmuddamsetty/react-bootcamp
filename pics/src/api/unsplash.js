import axios from "axios";
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID BKS-IfENzy0kKbd1FX-lhbImgB_hHl0OrwB5Od7eB5A",
  },
});
