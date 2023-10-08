import axios from "axios";
import { BACKDROP_BASE_URL, BASE_URL, API_KEY_PARAM } from "../config";

export class TVShowAPI {
  static async fetchPopulars() {
    const response = await axios.get(`${BASE_URL}${API_KEY_PARAM}`);
    return response.data.results;
  }
}
