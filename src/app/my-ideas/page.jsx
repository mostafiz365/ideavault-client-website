import DeleteModal from "@/components/DeleteModal";
import EditModal from "@/components/EditModal";
import { auth } from "@/lib/auth";
import { Card, Table } from "@heroui/react";
import { headers } from "next/headers";
import { MdOutlineLightbulb } from "react-icons/md";

export const metadata = {
  title: "My Ideas  |  IdeaVault",
  description: "Share your Own Idea and create a new World",
};

const MyIdeasPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  if (!user) {
    return <h2>User not found</h2>;
  }
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/my-ideas/${user.id}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );

  const ideas = await res.json();

  // console.log(ideas);

  return (
    <div className="max-w-7xl mx-auto py-10 space-y-6">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h2 className="text-5xl font-bold text-[#448c74]">My Own Ideas</h2>
        <p className="text-gray-500">
          Discover groundbreaking AI-powered ideas designed to solve real-world
          problems, improve productivity, and shape the future of technology,
          education, healthcare, and modern digital experiences.
        </p>
      </div>

      <div>
        {ideas.length === 0 ? (
          <div className="flex justify-center items-center py-20">
            <Card className="w-full max-w-md p-10 border border-dashed border-gray-300 dark:border-gray-700 rounded-2xl shadow-none text-center space-y-4">
              <div className="flex justify-center">
                <div className="bg-[#448c74]/10 p-5 rounded-full">
                  <MdOutlineLightbulb className="text-5xl text-[#448c74]" />
                </div>
              </div>

              <h2 className="text-2xl font-bold text-[#448c74]">
                No Ideas Found
              </h2>

              <p className="text-gray-500">
                You have not added any ideas yet. Start sharing your innovative
                startup ideas with the world.
              </p>
            </Card>
          </div>
        ) : (
          <Table>
            <Table.ScrollContainer>
              <Table.Content aria-label="Team members" className="">
                <Table.Header>
                  <Table.Column isRowHeader>Title</Table.Column>
                  <Table.Column>Category</Table.Column>
                  <Table.Column>Budget</Table.Column>
                  <Table.Column>Audience</Table.Column>
                  <Table.Column>Action</Table.Column>
                </Table.Header>
                <Table.Body>
                  {ideas.map((idea) => (
                    <Table.Row key={idea._id}>
                      <Table.Cell>{idea.ideaTitle}</Table.Cell>
                      <Table.Cell>{idea.category}</Table.Cell>
                      <Table.Cell>$ {idea.estimatedBudget}</Table.Cell>
                      <Table.Cell>{idea.targetAudience}</Table.Cell>
                      <Table.Cell>
                        <EditModal idea={idea}></EditModal>
                        <DeleteModal idea={idea}></DeleteModal>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table.Content>
            </Table.ScrollContainer>
          </Table>
        )}
      </div>
    </div>
  );
};

export default MyIdeasPage;
