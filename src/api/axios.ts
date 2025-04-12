import { BEAM_API } from "@/config/env";
import axios from "axios";

export const beamApi = axios.create({
  baseURL: BEAM_API,
});
