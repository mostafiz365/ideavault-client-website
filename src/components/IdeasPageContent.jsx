'use client'

import IdeaCard from "@/components/IdeaCard";
import { Input } from "@heroui/react";
import { useEffect, useState } from "react";

const IdeasPageContent = () => {

    const [ideas, setIdeas] = useState([]);
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');

    useEffect(() => {

        const fetchIdeas = async() => {

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/ideas?search=${search}&category=${category}`,
                {
                    cache: "no-store"
                }
            );

            const data = await res.json();

            setIdeas(data);
        }

        fetchIdeas();

    }, [search, category]);

    return (
        <div className="max-w-7xl mx-auto px-3 py-10 space-y-6">
        
                    {/* Title */}
                    <div className="text-center space-y-4 max-w-3xl mx-auto">
        
                        <h2 className="text-5xl font-bold text-[#448c74]">
                            Here are All Ideas
                        </h2>
        
                        <p className="text-gray-500">
                            Discover groundbreaking AI-powered ideas designed to solve real-world problems.
                        </p>
        
                    </div>
        
                    <div className="flex flex-col md:flex-row gap-4">
        
          <Input
            placeholder="Search by idea title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full"
          />
        
          <div className="relative w-full md:w-72">
        
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="
                w-full
                border
                px-4
                py-3
                rounded-xl
                outline-none
                appearance-none
                cursor-pointer
              "
            >
              <option value="">All</option>
              <option value="Tech">Tech</option>
              <option value="Health">Health</option>
              <option value="AI">AI</option>
              <option value="Education">Education</option>
            </select>
        
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
              ▼
            </div>
        
          </div>
        
        </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        
                        {
                            ideas.map(idea => (
                                <IdeaCard
                                    key={idea._id}
                                    idea={idea}
                                />
                            ))
                        }
        
                    </div>
        
                </div>
    );
};

export default IdeasPageContent;