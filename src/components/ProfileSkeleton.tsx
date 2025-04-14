import React from "react";
import { Skeleton } from "./ui/skeleton";

const ProfileSkeleton = () => {
  return (
    <div className="flex items-center gap-4">
      <Skeleton className="h-7.5 w-7.5 rounded-full" />
      <Skeleton className="h-2 w-[10rem]" />
    </div>
  );
};

export default ProfileSkeleton;
