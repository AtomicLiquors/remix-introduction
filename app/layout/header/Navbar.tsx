import Center from "@/components/common/general/atoms/Center";
import { NavLink } from "@remix-run/react";

export default function NavBar() {
return (
    <Center flex className="border-t gap-5 h-8 p-5 shadow-md">
        <NavLink
            preventScrollReset={true}
            to="."
            className={({ isActive, isPending }) =>
            isPending ? "text-gray-200" : isActive ? "text-blue-500" : ""
            }
        >
            HOME
        </NavLink>
        {/*
        <NavLink
            preventScrollReset={true}
            to="posts"
            className={({ isActive, isPending }) =>
            isPending ? "text-gray-200" : isActive ? "text-blue-500" : ""
            }
        >
            POSTS
        </NavLink>
        */}
        <NavLink
            preventScrollReset={true}
            to="board"
            className={({ isActive, isPending }) =>
            isPending ? "text-gray-200" : isActive ? "text-blue-500" : ""
            }
        >
            BOARD
        </NavLink>
        </Center>
);
}
