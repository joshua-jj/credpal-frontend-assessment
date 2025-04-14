import { getProfile as getUserProfile } from "@/api/users";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useGetUserProfile = () => {
  const { isLoading: profileLoading, data: profileData } = useQuery<{ fullName: string; email: string }, AxiosError>({
    queryKey: ["user-profile"],
    queryFn: () => getUserProfile(),
  });
  return { profileLoading, profileData };
};
