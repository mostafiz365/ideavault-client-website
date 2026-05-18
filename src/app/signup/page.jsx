'use client'
import { authClient } from "@/lib/auth-client";
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const SignUpPage = () => {
    const onSubmit = async(e) =>{
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());

        const {data, error} = await authClient.signUp.email({
            email: user.email,
            password: user.password,
            name: user.name,
            image: user.image
        })
        console.log({data, error});
        // if(data){
        //     redirect('/')
        // }
        // if(error){
        //     alert(error.message);
        // }
    };
    const handleGoogle = async() =>{
      await authClient.signIn.social({
    provider: "google",
  });
    };
    return (
        <div className="max-w-7xl mx-auto py-14">
            <div className="text-center pb-5">
                <h2 className="text-5xl text-[#448c74]">Create Account</h2>
            </div>
            
            <Card className="border border-gray-300 rounded-none p-10">
                <Form className="flex w-120 flex-col gap-4" onSubmit={onSubmit}>
      <TextField
        isRequired
        name="name"
        type="text"
      >
        <Label>Name</Label>
        <Input placeholder="Enter your name" />
        <FieldError />
      </TextField>
      <TextField
        name="image"
        type="url"
      >
        <Label>Image URL</Label>
        <Input placeholder="Image URL" />
        <FieldError />
      </TextField>
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
          Create Account
        </Button>
      </div>
      <p className="text-center text-xl text-[#6C696D]">Or Sign Up with</p>
    </Form>
    <Button onClick={handleGoogle} type="submit" variant="outline" className="rounded-none w-full border border-gray-300">
         <FcGoogle></FcGoogle> Sign Up with Google
        </Button>
        <p className="text-center">Already have an account? <Link href="/login" className="font-medium text-[#448c74]">  LogIn</Link></p>
            </Card>
        </div>
    );
};

export default SignUpPage;