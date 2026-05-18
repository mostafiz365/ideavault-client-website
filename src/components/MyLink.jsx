"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


const MyLink = ({href, children}) => {
    const pathname = usePathname();
    return (
        <Link href={href} className={`${href == pathname && 'text-[#448c74] border-b-2 border-[#448c74]'} font-semibold`}>
            {children}
        </Link>
    );
};

export default MyLink;