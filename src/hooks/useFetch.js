import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [state, setState] = useState({ data: [], loading: true });
  useEffect(() => {
    async function getData(url) {
      try {
        const { data } = await fetch(url).then((data) => data.json());
        setState((prevState) => ({ ...prevState, data, loading: false }));
      } catch (error) {
        throw new Error(error);
      }
    }
    getData(url);
  }, [url]);

  return state;
}
