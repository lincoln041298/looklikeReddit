"use client";

import { User } from "next-auth";
import { FC } from "react";
import { Avatar } from "./ui/Avatar";
import { AvatarFallback, AvatarProps } from "@radix-ui/react-avatar";
import Image from "next/image";
import { Icons } from "./Icons";

interface UserAvatarProps extends AvatarProps {
  user: Pick<User, "name" | "image" | "email">;
}

const UserAvatar: FC<UserAvatarProps> = ({ user, ...props }) => {
  return (
    <Avatar {...props}>
      {user.image ? (
        <div className="relative aspect-square h-full w-full">
          <Image
            fill
            alt="profile picture"
            referrerPolicy="no-referrer"
            src={user.image}
          />
        </div>
      ) : (
        <AvatarFallback>
          <span className="sr-only">{user?.name}</span>
          <Icons.user className="h-4 w-4" />
        </AvatarFallback>
      )}
    </Avatar>
  );
};

export default UserAvatar;
