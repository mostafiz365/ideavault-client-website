
import DeleteModal from "@/components/DeleteModal";
import EditModal from "@/components/EditModal";
import { auth } from "@/lib/auth";
import { Table } from "@heroui/react";
import { headers } from "next/headers";

const MyIdeasPage = async() => {
    const session = await auth.api.getSession({
    headers: await headers()
})
 const user = session?.user;
console.log(user?.id)
 const res = await fetch(`http://localhost:5000/myIdeas/${user?.id}`)
 const ideas = await res.json();
 console.log(ideas);

    return (
        <div className="max-w-10/12 mx-auto py-10 space-y-6">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
                <h2 className="text-5xl font-bold text-[#448c74]">My Own Ideas</h2>
            <p className="text-gray-500">Discover groundbreaking AI-powered ideas designed to solve real-world problems, improve productivity, and shape the future of technology, education, healthcare, and modern digital experiences.</p>
            </div>
            <div>
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
            {
                    ideas.map(idea => <Table.Row key={idea._id}>
              <Table.Cell>{idea.newIdea.ideaTitle}</Table.Cell>
              <Table.Cell>{idea.newIdea.category}</Table.Cell>
              <Table.Cell>$ {idea.newIdea.estimatedBudget}</Table.Cell>
              <Table.Cell>{idea.newIdea.targetAudience}</Table.Cell>
              <Table.Cell className={'flex gap-1.5'}>
                <EditModal idea={idea}></EditModal>
                {/* <EditModal id={idea._id} data={idea.newIdea}></EditModal> */}
                <DeleteModal id={idea._id} title={idea.newIdea.ideaTitle}></DeleteModal>
              </Table.Cell>
            </Table.Row>)
                }
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
            </div>

        </div>
    );
};

export default MyIdeasPage;