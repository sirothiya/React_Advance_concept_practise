import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import GifCustomhook from "./GifCustomHook";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
console.log(API_KEY);
const Random = () => {
  // const [gif, setGif] = useState("");
  // const [loading, setLoading] = useState(false);

  // const fetchData = async () => {
  //   setLoading(true);
  //   console.log("fetching data");
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

  //   const { data } = await axios.get(url);
  //   const imagesource = data.data.images.downsized_large.url;
  //   setGif(imagesource);
  //   setLoading(false);
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);
  const { gif, loading, fetchData } = GifCustomhook();
  const clickHandler = () => {
    console.log("clicked");
    fetchData();
  };
  return (
    <div
      className="flex flex-col w-1/2  bg-green-500 
        rounded-lg border border-black items-center gap-y-5 mt-[15px]"
    >
      <h1 className="mt-[15px] text-2xl underline uppercase font-bold">
        A Random Gif
      </h1>
      {loading ? <Spinner /> : <img src={gif} width="450"/>}

      <button
        onClick={clickHandler}
        className="w-10/12 mb-[20px] bg-white text-lg py-2 rounded-lg "
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
