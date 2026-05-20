import { Button } from "@heroui/react";
import IdeaCard from "../IdeaCard";
import Link from "next/link";

const TrendingIdeas = async() => {
    const res = await fetch('http://localhost:5000/trending')
    const ideas = await res.json();
    return (
        <div className="max-w-10/12 mx-auto py-10 space-y-6">
                    <div className="text-center space-y-4 max-w-3xl mx-auto">
                        <h2 className="text-5xl font-bold text-[#448c74]">Trending Ideas</h2>
                    <p className="text-gray-500">Discover groundbreaking AI-powered ideas designed to solve real-world problems, improve productivity, and shape the future of technology, education, healthcare, and modern digital experiences.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {
                            ideas.map(idea => <IdeaCard key={idea._id} idea={idea}></IdeaCard>)
                        }
                    </div>
                    <div className="flex justify-center">
                        <Link href="/ideas">
                        <Button className={'font-semibold text-xl px-12 py-5 bg-[#448c74]'}>View All Ideas</Button>
                        </Link>
                    </div>
                </div>
    );
};

export default TrendingIdeas;