import axios from "axios";
import { useState, useEffect } from "react";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;


const GifCustomhook = (tag) => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    console.log("fetching data");
    const { data } = await axios.get(tag ? `${url}&tag=${tag}`:url);
    const imagesource = data.data.images.downsized_large.url;
    setGif(imagesource);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return {gif,loading,fetchData}
};

export default GifCustomhook;
