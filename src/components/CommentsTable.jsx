import { Table } from "@heroui/react";
import DeleteComment from "./DeleteComment";
import EditComment from "./EditComment";

const CommentsTable = async () => {
  const res = await fetch("http://localhost:5000/comments");
  const comments = await res.json();
  return (
    <div>
      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="Team members" className="">
            <Table.Header>
              <Table.Column isRowHeader>Name</Table.Column>
              <Table.Column>Comment</Table.Column>
              <Table.Column>Time</Table.Column>
              <Table.Column>Action</Table.Column>
            </Table.Header>
            <Table.Body>
              {comments.map((comment) => (
                <Table.Row key={comment._id}>
                  <Table.Cell>{comment.userName}</Table.Cell>
                  <Table.Cell>{comment.commentText}</Table.Cell>
                  <Table.Cell>
                    {new Date(comment.createdAt).toLocaleString()}
                  </Table.Cell>
                  <Table.Cell className={"flex gap-1"}>
                    <EditComment comment={comment}></EditComment>
                    <DeleteComment comment={comment}></DeleteComment>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
};

export default CommentsTable;
