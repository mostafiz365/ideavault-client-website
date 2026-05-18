'use client';
import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import { BiTrash } from "react-icons/bi";


const DeleteModal = ({id, title}) => {

    const handleDelete = async() =>{
        const res = await fetch(`http://localhost:5000/myIdeas/${id}`, {
            method: 'DELETE'
        })
        const data = await res.json();
        if(data.deletedCount > 0){
            redirect('/my-ideas');
        }
    }
    return (
         <AlertDialog>
      <Button variant="danger"><BiTrash></BiTrash> Delete</Button>
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
                This will permanently delete <strong>{title}</strong> and all of its
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