import axios from "axios";
import { Image } from "./types";

const apiKey = "BQVJndHzZSkNiJz6FpW26zHsUOHK2_4OaZ4YwXUA27k";

axios.defaults.baseURL = "https://api.unsplash.com";
axios.interceptors.request.use((config) => {
  config.headers.Authorization = `Client-ID ${apiKey}`;
  return config;
});

interface SearchResult {
  results: Image[];
  total: number;
  total_pages: number;
}

export const fetchImages = async (
  searchQuery: string,
  page: number
): Promise<SearchResult> => {
  const response = await axios.get("/search/photos", {
    params: {
      query: searchQuery,
      per_page: 8,
      page,
    },
  });

  return response.data.results;
};
