import Comments from "@/components/Comments";
import CommentsTable from "@/components/CommentsTable";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

// export const generateMetadata = async({ params }) => {
//     const { id } = await params;
//     console.log(id);
//     const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/ideas/${id}`);
//     const idea = await res.json();
//     console.log(idea);

//     return {
//         title: idea.ideaTitle,
//         description: idea.shortDescription,
//     };
// }

export const generateMetadata = async ({ params }) => {
    const { id } = await params;
    const { token } = await auth.api.getToken({
        headers: await headers()
    });
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/ideas/${id}`,
        {
            headers: {
                authorization: `Bearer ${token}`
            },
           cache: "no-store"
        }
    );
    const idea = await res.json();
    return {
        title: `${idea.ideaTitle} | IdeaVault`,
        description: idea.shortDescription,
    };
}

const IdeaDetailsPage = async({params}) => {
    const {id} = await params;
    const {token}  = await auth.api.getToken({
          headers : await headers()
        })
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/ideas/${id}`, {
      headers: {
              authorization: `Bearer ${token}`
            }
    })
    const idea = await res.json();
    const {ideaTitle, shortDescription, imageURL, estimatedBudget, targetAudience, detailedDescription, category} = idea;
    return (
        <div>
      <div className="max-w-7xl mx-auto py-10 space-y-4 px-2">
        <h2 className="text-5xl font-bold text-[#448c74] text-center">Idea Details Page</h2>
        <p className="text-[#706F6F] text-center">AI-powered ideas designed to solve real-world problems and shape the future of technology, education, and modern digital experiences.</p>

        <Link href="/ideas" className="text-xl font-semibold text-[#448c74] flex items-center gap-2.5"> <FaArrowLeftLong /> Back to Ideas</Link>

        <div className="border border-[#E7E7E7] rounded-lg">
            <div className='px-4 py-5 space-y-2'>
                <h2 className="text-2xl font-bold text-[#448c74]">
                    {ideaTitle}
                </h2>
                <h4 className='text-lg font-medium text-gray-500'>{shortDescription}</h4>
            </div>
          <div className="px-4 space-y-5">
            <Image
              src={imageURL}
              alt={ideaTitle}
              height={250}
              width={400}
              className="w-full rounded-xl"
            ></Image>
            <h3 className="text-2xl font-bold text-[#448c74]">Description:</h3>
            <p className="text-[#706F6F]">{detailedDescription}</p>
            
            <div className="divider"></div>
          </div>
          <div className='px-4 space-y-2 pb-5'>
            <p className='text-[#706F6F] font-medium text-xl'>Category : {category}</p>
            <p className='text-[#706F6F] font-medium text-xl'>Target Audience : {targetAudience}</p>
            <p className='text-[#706F6F] font-medium text-xl'>Estimated Budget : {estimatedBudget}</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-10 px-2 space-y-5">
        <Comments></Comments>
        <CommentsTable></CommentsTable>
      </div>
    </div>
    );
};

export default IdeaDetailsPage;