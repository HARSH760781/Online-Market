import { useState, useEffect } from "react";
import axios from "axios";

export default function useCategory() {
  const [categories, setCategories] = useState([]);

  //get cat
  const backend_url =
    process.env.REACT_APP_BACKEND_URL || "http://localhost:3000";
  const getCategories = async () => {
    try {
      const { data } = await axios.get(
        `${backend_url}/api/v1/category/get-category`
      );
      setCategories(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return categories;
}
