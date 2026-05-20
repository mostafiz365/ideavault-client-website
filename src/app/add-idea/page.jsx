'use client'
import { authClient } from "@/lib/auth-client";
import { Card, FieldError, Input, Label, TextField, Select, ListBox, TextArea, Button } from "@heroui/react";
import { redirect } from "next/navigation";



const AddIdeaPage = () => {
  const { 
          data: session
      } = authClient.useSession()
     const user = session?.user;

    const onSubmit = async(e) =>{
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const newIdea = Object.fromEntries(formData.entries())
        const myIdea = {
          ...newIdea,
          userId: user?.id,

        }
        // console.log(myIdea);
        
        const ideaRes = await fetch('http://localhost:5000/ideas', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(myIdea)
        })
        const data = await ideaRes.json();
        if(data.insertedId){
          redirect('/ideas');
        }

        // const myIdeasData = {
        //   userId: user?.id,
        //   newIdea
        // }
        // const myIdeaRes = await fetch('http://localhost:5000/myIdeas', {
        //   method: 'POST',
        //     headers: {
        //         'Content-type': 'application/json',
        //     },
        //     body: JSON.stringify(myIdeasData)
        // })
        // const myIdea = await myIdeaRes.json();
        // console.log(myIdea);

        
    }


    return (
        <div className='p-5 max-w-7xl mx-auto space-y-3'>
            <h2 className='text-5xl font-medium text-[#448c74]'>Share Your Own Idea</h2>
        <Card className='my-5 rounded-none'>
            <form onSubmit={onSubmit} className="p-10 space-y-8 w-3xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:col-span-2">
                <TextField name="ideaTitle" isRequired>
                  <Label>Idea Title</Label>
                  <Input placeholder="Enter your idea title" className="rounded-none" />
                  <FieldError />
                </TextField>
              </div>
              <div className="md:col-span-2">  
              <TextField name="shortDescription" isRequired>
                <Label>Short Description</Label>
                <Input placeholder="Write your ideas short description" className="rounded-none" />
                <FieldError />
              </TextField>
              </div>

              <div className="md:col-span-2">  
              <TextField name="detailedDescription" isRequired>
                <Label>Detailed Description</Label>
                <Input placeholder="Write your ideas detail description" className="rounded-none" />
                <FieldError />
              </TextField>
              </div>

              {/* Category - Updated Select Component */}
              <div>
                <Select
                  name="category"
                  isRequired
                  className="w-full"
                  placeholder="Select category"
                >
                  <Label>Category</Label>
                  <Select.Trigger className="rounded-none">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="Tech" textValue="Tech">
                        Tech
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Health" textValue="Health">
                        Health
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="AI" textValue="AI">
                        AI
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Education" textValue="Education">
                        Education
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              <TextField name="estimatedBudget" type="number" isRequired>
                <Label>Estimated Budget</Label>
                <Input
                  type="number"
                  placeholder="20000"
                  className="rounded-none"
                />
                <FieldError />
              </TextField>

                <TextField name="imageURL" isRequired>
                  <Label>Image URL</Label>
                  <Input
                    type="url"
                    placeholder="https://images.unsplash.com/photo-1677442136019-21780ecad995"
                    className="rounded-none"
                  />
                  <FieldError />
                </TextField>

              {/* Duration */}
              <TextField name="targetAudience" isRequired>
                <Label>Target Audience</Label>
                <Input
                  placeholder="Enter your Target Audience"
                  className="rounded-none"
                />
                <FieldError />
              </TextField>

              {/* Departure Date */}
              <div className="md:col-span-2">
                <TextField name="problemStatement" type="text" isRequired>
                  <Label>Problem Statement</Label>
                  <TextArea
                    placeholder="Write your Problem statement"
                    className="rounded-none"
                  />
                  <FieldError />
                </TextField>
              </div>

              <div className="md:col-span-2">
                <TextField name="proposedSolution" isRequired>
                  <Label>Proposed Solution</Label>
                  <TextArea
                    placeholder="Write your proposed solution"
                    className="rounded-none"
                  />
                  <FieldError />
                </TextField>
              </div>
            </div>

            {/* Buttons */}
            <div className='flex justify-end gap-4'>
                <Button variant='outline' className=" rounded-none text-red-500 px-6 py-3">Cancel</Button>
                <Button
              type="submit"
              variant="outline"
              className=" rounded-none bg-[#448c74] text-white px-6 py-3"
            >
             Add Your Idea
            </Button>
            
            </div>

            
          </form>
        </Card>
        </div>
    );
};

export default AddIdeaPage;