import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useGetUserProfile } from "@/hooks/tansack-query/queries/use-users";
import ProfileSkeleton from "./ProfileSkeleton";

const TopBar = () => {
  const { profileLoading, profileData } = useGetUserProfile();
  return (
    <div className="fixed top-0 left-[15rem] z-10 flex h-[4rem] w-[calc(100%-15rem)] items-center justify-end px-[2rem]">
      {profileLoading ? (
        <ProfileSkeleton />
      ) : (
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback>{profileData?.fullName?.slice(0, 1)}</AvatarFallback>
          </Avatar>
          <p className="text-sm">{profileData?.fullName}</p>
        </div>
      )}
    </div>
  );
};

export default TopBar;
