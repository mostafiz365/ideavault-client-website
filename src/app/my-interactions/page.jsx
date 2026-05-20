import { auth } from "@/lib/auth";
import { Avatar, Table } from "@heroui/react";
import { headers } from "next/headers";

export const metadata = {
  title: "My Interactions  |  IdeaVault",
  description: "Share your Own Idea and create a new World",
};

const MyInteractionsPage = async() => {
    const session = await auth.api.getSession({
    headers: await headers()
})
 const user = session?.user;
    const res = await fetch(`http://localhost:5000/comments/${user?.id}`)
    const comments = await res.json();


    return (
        <div className="max-w-10/12 mx-auto py-10 space-y-6">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
                <h2 className="text-5xl font-bold text-[#448c74]">Your All Interactions</h2>
            <p className="text-gray-500">Discover groundbreaking AI-powered ideas designed to solve real-world problems, improve productivity, and shape the future of technology, education, healthcare, and modern digital experiences.</p>
            </div>
            <div>
                  <Table>
                    <Table.ScrollContainer>
                      <Table.Content aria-label="Team members" className="">
                        <Table.Header>
                          <Table.Column isRowHeader>Image</Table.Column>
                          <Table.Column>Name</Table.Column>
                          <Table.Column>Comment</Table.Column>
                          <Table.Column>Time</Table.Column>
                        </Table.Header>
                        <Table.Body>
                          {comments.map((comment) => (
                            <Table.Row key={comment._id}>
                              <Table.Cell><Avatar>
        <Avatar.Image referrerPolicy="no-referrer" alt="John Doe" src={comment.userImage} />
        <Avatar.Fallback>JD</Avatar.Fallback>
      </Avatar></Table.Cell>
                              <Table.Cell>{comment.userName}</Table.Cell>
                              <Table.Cell>{comment.commentText}</Table.Cell>
                              <Table.Cell>
                                {new Date(comment.createdAt).toLocaleString()}
                              </Table.Cell>
                            </Table.Row>
                          ))}
                        </Table.Body>
                      </Table.Content>
                    </Table.ScrollContainer>
                  </Table>
                </div>
        </div>
    );
};

export default MyInteractionsPage;