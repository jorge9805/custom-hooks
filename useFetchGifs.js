import { useState, useEffect } from "react";
import getGifs from "../Components/helpers/getGifs";

const useFetchGifs = (category) => {
  const firstState = {
    data: [],
    loading: true,
  };
  const [images, setImages] = useState(firstState);
  useEffect(() => {
    getGifs(category).then((img) => {
      setTimeout(() => {
        setImages({
          data: img,
          loading: false,
        });
      }, 0);
    });
  }, [category]);
  return images;
};

export default useFetchGifs;
