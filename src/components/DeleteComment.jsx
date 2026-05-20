'use client';
import { AlertDialog, Button } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { BiTrash } from 'react-icons/bi';
import { toast } from 'react-toastify';

const DeleteComment = ({comment}) => {
    const {_id} = comment;
    const router = useRouter();

    const handleDelete = async() =>{
        const res = await fetch(`http://localhost:5000/comments/${_id}`, {
            method: 'DELETE'
        })
        const data = await res.json();
        if(data.deletedCount > 0){
          toast.error('Comment Delete Successfully!');
            router.refresh();
        }
    }


    return (
        <AlertDialog>
              <Button variant="danger" size='sm'><BiTrash></BiTrash> Delete</Button>
              <AlertDialog.Backdrop>
                <AlertDialog.Container>
                  <AlertDialog.Dialog className="sm:max-w-[400px]">
                    <AlertDialog.CloseTrigger />
                    <AlertDialog.Header>
                      <AlertDialog.Icon status="danger" />
                      <AlertDialog.Heading>Delete Comment permanently?</AlertDialog.Heading>
                    </AlertDialog.Header>
                    <AlertDialog.Body>
                    </AlertDialog.Body>
                    <AlertDialog.Footer>
                      <Button slot="close" variant="tertiary">
                        Cancel
                      </Button>
                      <Button onClick={handleDelete} slot="close" variant="danger">
                        Delete
                      </Button>
                    </AlertDialog.Footer>
                  </AlertDialog.Dialog>
                </AlertDialog.Container>
              </AlertDialog.Backdrop>
            </AlertDialog>
    );
};

export default DeleteComment;