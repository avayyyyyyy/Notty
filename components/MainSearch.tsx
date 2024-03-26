"use client";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const tags = ["0Design", "1Design", "2Design", "3Design", "4Design", "5Design"];

const MainSearch = () => {
  const [position, setPosition] = React.useState("Following");
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-4 h-fit space-x-4">
        <div className="my-5 w-full font-semibold  flex items-center gap-x-2">
          Search:
          <Input
            type="text"
            className="ring-0 py-2 w-full md:min-w-44  lg:min-w-96 text-sm rounded-full"
            placeholder="Search here..."
          />
        </div>
      </div>
      <div>
        <div className="lg:flex hidden px-4  w-full items-center">
          <span className="text-primary mr-3 font-semibold">My topics: </span>
          <div className="lg:flex hidden  gap-x-3 text-sm">
            {tags.map((e) => {
              return (
                <div
                  key={e}
                  className="bg-primary px-3 text-secondary cursor-pointer py-2 rounded-full"
                >
                  {e}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className=" items-center py-3  border-b-2 flex justify-between px-6">
        <div className="font-semibold">Article :</div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                {position} <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={position}
                onValueChange={setPosition}
              >
                <DropdownMenuRadioItem value="Following">
                  Following
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Public">
                  Public
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Private">
                  Private
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default MainSearch;
