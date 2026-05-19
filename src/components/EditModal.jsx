'use client';
import { Button, FieldError, Input, Label, Modal, Surface, TextField, Select, ListBox, TextArea } from "@heroui/react";
import { BiEdit } from "react-icons/bi";

const EditModal = ({idea}) => {
    console.log(idea);
    const {_id, userId, newIdea} = idea;
    const {category, detailedDescription, estimatedBudget, ideaTitle, targetAudience, shortDescription, proposedSolution, imageURL, problemStatement} = newIdea;
    const onSubmit = async(e) =>{
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const updateData = Object.fromEntries(formData.entries())

        console.log(updateData);

        const res = await fetch(`http://localhost:5000/myIdeas/${userId}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updateData)
        })
        const data = await res.json();
        // if(data.modifiedCount > 0){
        //     redirect('/my-ideas');
        // }
        console.log('data after update', data);
    }
    return (
        <Modal>
      <Button variant="outline" className={'border border-gray-400 text-gray-500'}><BiEdit></BiEdit> Edit</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-2xl">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Edit My Idea</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-2">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="p-2 space-y-8 w-xl">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                              <div className="md:col-span-2">
                                <TextField defaultValue={ideaTitle} name="ideaTitle" isRequired>
                                  <Label>Idea Title</Label>
                                  <Input placeholder="Enter your idea title" className="rounded-none" />
                                  <FieldError />
                                </TextField>
                              </div>
                              <div className="md:col-span-2">  
                              <TextField defaultValue={shortDescription} name="shortDescription" isRequired>
                                <Label>Short Description</Label>
                                <Input placeholder="Write your ideas short description" className="rounded-none" />
                                <FieldError />
                              </TextField>
                              </div>
                
                              <div className="md:col-span-2">  
                              <TextField defaultValue={detailedDescription} name="detailedDescription" isRequired>
                                <Label>Detailed Description</Label>
                                <Input placeholder="Write your ideas detail description" className="rounded-none" />
                                <FieldError />
                              </TextField>
                              </div>
                
                              {/* Category - Updated Select Component */}
                              <div>
                                <Select
                                  name="category"
                                  defaultValue={category}
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
                
                              <TextField defaultValue={estimatedBudget} name="estimatedBudget" type="number" isRequired>
                                <Label>Estimated Budget</Label>
                                <Input
                                  type="number"
                                  placeholder="20000"
                                  className="rounded-none"
                                />
                                <FieldError />
                              </TextField>
                
                                <TextField defaultValue={imageURL}  name="imageURL" isRequired>
                                  <Label>Image URL</Label>
                                  <Input
                                    type="url"
                                    placeholder="https://images.unsplash.com/photo-1677442136019-21780ecad995"
                                    className="rounded-none"
                                  />
                                  <FieldError />
                                </TextField>
                
                              {/* Duration */}
                              <TextField defaultValue={targetAudience} name="targetAudience" isRequired>
                                <Label>Target Audience</Label>
                                <Input
                                  placeholder="Enter your Target Audience"
                                  className="rounded-none"
                                />
                                <FieldError />
                              </TextField>
                
                              {/* Departure Date */}
                              <div className="md:col-span-2">
                                <TextField defaultValue={problemStatement} name="problemStatement" type="text" isRequired>
                                  <Label>Problem Statement</Label>
                                  <TextArea
                                    placeholder="Write your Problem statement"
                                    className="rounded-none"
                                  />
                                  <FieldError />
                                </TextField>
                              </div>
                
                              <div className="md:col-span-2">
                                <TextField defaultValue={proposedSolution} name="proposedSolution" isRequired>
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
                            <Modal.Footer>
              <div className='flex justify-end gap-4'>
                                <Button variant='outline' slot='close' className=" rounded-none text-red-500 px-6 py-3">Cancel</Button>
                                <Button
                              type="submit"
                              variant="outline"
                              className=" rounded-none bg-[#448c74] text-white px-6 py-3"
                            >
                             Save Changes
                            </Button>
                            
                            </div>
            </Modal.Footer>
                            
                
                            
                          </form>
              </Surface>
            </Modal.Body>
            
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
    );
};

export default EditModal;