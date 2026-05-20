'use client';
import { authClient } from "@/lib/auth-client";
import { Button, TextArea } from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";

const Comments = () => {
    const [value, setValue] = React.useState("");
    const { data: session } = authClient.useSession();
    const user = session?.user;
    // console.log(user);
    const router = useRouter();
    const handlePost = async() =>{
        const commentData = {
            userId: user?.id,
            userImage: user?.image,
            userName: user?.name,
            createdAt: new Date().toISOString(),
            commentText: value,
        }
        
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/comments`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(commentData)
        })
        const data = await res.json();
        if(data.insertedId){
        setValue('');
        router.refresh();
    }
    }

    return (
        <div className="space-y-3">
            <h2 className="text-4xl font-bold text-[#448c74]">Write your Comments</h2>
             <TextArea value={value} onChange={(event) => setValue(event.target.value)} aria-label="Quick project update"
      className="h-32 w-full shadow-lg"
      placeholder="Share your Comments...."
    />
    <div className="flex justify-end">
        <Button onClick={handlePost} className={'bg-[#448c74] rounded-none px-8 py-4'}>Post</Button>
    </div>
    
        
        </div>
    );
};

export default Comments;