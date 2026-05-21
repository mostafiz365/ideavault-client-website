"use client"
import UpdateUserProfile from "@/components/UpdateUserProfile";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";

const ProfilePage = () => {

    const userData = authClient.useSession();
    const user = userData.data?.user;
    console.log(user);
    return (
        <Card className="min-w-96 mx-auto my-10 flex flex-col items-center">
            <h2 className="text-3xl font-semibold">Profile Page</h2>
            <Avatar className="w-20 h-20">
                    <Avatar.Image referrerPolicy="no-referrer" alt={user?.name} src={user?.image} />
                    <Avatar.Fallback>JD</Avatar.Fallback>
                  </Avatar>
                  <h2 className="text-xl font-medium">{user?.name}</h2>
                  <UpdateUserProfile></UpdateUserProfile>
        </Card>
    );
};

export default ProfilePage;