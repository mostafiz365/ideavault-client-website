'use client';
import { authClient } from "@/lib/auth-client";
import { Button, FieldError, Label, Modal, Surface, TextArea, TextField, ToastDescription } from "@heroui/react";
import { useRouter } from "next/navigation";
import { BiEdit } from "react-icons/bi";
import { toast } from "react-toastify";

const EditComment = ({comment}) => {
    const {_id, commentText} = comment;
    const router = useRouter();
    const {
   data: session
} = authClient.useSession();

const user = session?.user;

    const onSubmit = async(e) =>{
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const editComment = {
              ...Object.fromEntries(formData.entries()),
              userId: user?.id }

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/comments/${_id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(editComment)
        })
        const data = await res.json();
        if(data.modifiedCount > 0){
          toast.info('Comment Edit Successfully!');
            router.refresh();
        }
        else{
          toast.error('You cannot Edit Others Comments!');
        }
    }



    return (
        <Modal>
              <Button size="sm" variant="outline" className={'border border-gray-400 text-gray-500'}><BiEdit></BiEdit> Edit</Button>
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
                                        <TextField defaultValue={commentText} name="commentText" isRequired>
                                          <TextArea
                                            placeholder="Edit your commet here...."
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
                                      slot="close"
                                      className=" rounded-none bg-[#448c74] text-white px-6 py-3"
                                    >
                                     Save
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

export default EditComment;