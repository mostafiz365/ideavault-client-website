'use client';
import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import { BiTrash } from "react-icons/bi";
import { toast } from "react-toastify";


const DeleteModal = ({idea}) => {
  const {_id, ideaTitle} = idea;

    const handleDelete = async() =>{
        const res = await fetch(`http://localhost:5000/ideas/${_id}`, {
            method: 'DELETE'
        })
        const data = await res.json();
        console.log('data after delete', data);
        if(data.deletedCount > 0){
          toast.error('Idea Delete Successfully!');
            redirect('/my-ideas');
        }
    }
    return (
         <AlertDialog>
      <Button variant="danger" size="sm"><BiTrash></BiTrash> Delete</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete Idea permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{ideaTitle}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete Idea
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
    );
};

export default DeleteModal;