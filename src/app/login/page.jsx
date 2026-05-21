'use client'
import { authClient } from "@/lib/auth-client";
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

// export const metadata = {
//   title: "LogIn Page  |  IdeaVault",
//   description: "Share your Own Idea and create a new World",
// };

const LoginPage = () => {
    const onSubmit = async(e) =>{
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());

        const {data, error} = await authClient.signIn.email({
            email: user.email,
            password: user.password
        })
        console.log({data, error})
        if(data){
          toast.success('login Successfully!'),
            redirect('/')
        }
        if(error){
            toast.error(error.message);
        }
    };

    const handleGoogle = async() =>{
          await authClient.signIn.social({
        provider: "google",
      })
    };
    return (
        <div className="max-w-7xl mx-auto py-14">
            <div className="text-center space-y-2 pb-5">
                <h2 className="text-5xl text-[#448c74]">Welcome Back</h2>
            </div>
            
            <Card className="border border-gray-300 rounded-none p-10">
                <Form className="flex max-w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }
          return null;
        }}
      >
        <Label>Email</Label>
        <Input placeholder="john@example.com" />
        <FieldError />
      </TextField>
      <TextField
        isRequired
        minLength={6}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 6) {
            return "Password must be at least 6 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[a-z]/.test(value)) {
            return "Password must contain at least one lowercase letter";
          }
          return null;
        }}
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password" />
        <Description>Must be at least 6 characters with 1 uppercase and 1 lowercase</Description>
        <FieldError />
      </TextField>
      <div className="flex gap-2">
        <Button type="submit" className="rounded-none bg-[#448c74] w-full">
          Log In
        </Button>
      </div>
      <p className="text-center text-xl text-[#6C696D]">Or Countinue with</p>
    </Form>
    <Button onClick={handleGoogle} type="submit" variant="outline" className="rounded-none w-full border border-gray-300">
         <FcGoogle></FcGoogle> Sign Up with Google
        </Button>
        <p className="text-center">Dont have an account? <Link href="/signup" className="font-medium text-[#448c74]">  Sign Up</Link></p>
            </Card>
        </div>
    );
};

export default LoginPage;