import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import platforms from "../data/platforms";
import APIClient from "../services/api-client";
import { Platform } from "../entities/Platform";

const apiCLient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiCLient.getAll,
    staleTime: ms("24h"),
    initialData: platforms,
  });

export default usePlatforms;
