import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const IdeaCard = ({idea}) => {
    const {_id, ideaTitle, shortDescription, imageURL, estimatedBudget, targetAudience, category} = idea;
    return (
        <Card className="border border-gray-300 rounded-lg">
      <div className="relative w-full aspect-square">
            <Image src={imageURL}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt={ideaTitle}
                className="object-cover rounded-xl"></Image>

            </div>
      <div className="space-y-2">
        <h2 className=" font-bold text-xl text-[#448c74]">{ideaTitle}</h2>
        <h4 className="text-gray-500 text-lg">{shortDescription}</h4>
        <p className='text-xl font-bold text-[#448c74]'>Budget: {estimatedBudget}</p>
        <p className='text-gray-500'>Category: {category}</p>
        <p className='text-gray-500'>{targetAudience}</p>
      </div>
      <Link href={`/ideas/${_id}`}>
        <Button className={'w-full font-semibold bg-[#448c74]'}>View Details </Button>
      </Link>
    </Card>
    );
};

export default IdeaCard;