import { useEffect, useState } from "react";
import { backendURL } from "../constants";

export default function useFetch(path = "/", method = "GET") {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(backendURL + path, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      setData(json);
    };
    fetchData();
  }, [path, method]);

  return { data };
}
