
import GifCustomhook from "./GifCustomHook";
import Spinner from "./Spinner";
import { useState } from "react";

const Tag = () => {
  const [tag, setTag] = useState("");
  // const [gif, setGif] = useState("");
  // const [loading, setLoading] = useState(false);
  

  // const fetchData = async () => {
  //   setLoading(true);
  //   console.log("fetching data");
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

  //   const { data } = await axios.get(url);
  //   const imagesource = data.data.images.downsized_large.url;
  //   setGif(imagesource);
  //   setLoading(false);
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  const { gif, loading, fetchData } = GifCustomhook(tag);

  const clickHandler = () => {
    console.log("clicked");
    fetchData();
  };

  const changeHandler = (e) => {
    setTag(e.target.value);
  };
  return (
    <div
      className="flex flex-col w-1/2  bg-blue-500 
        rounded-lg border border-black items-center gap-y-5 mt-[15px]"
    >
      <h1 className="mt-[15px] text-2xl underline uppercase font-bold">
        Random {tag} Gif
      </h1>
      {loading ? <Spinner /> : <img src={gif} width="450" />}

      <input
        className="w-10/12 mb-[3px] bg-white text-lg py-2 rounded-lg text-center"
        onChange={changeHandler}
        value={tag}
      />
      <button
        onClick={clickHandler}
        className="w-10/12 mb-[20px] bg-white text-lg py-2 rounded-lg "
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
