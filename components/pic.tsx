import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Pic = () => {
  return (
    <Link
      href="/"
      className=" hidden sm:inline-block group relative transition-transform hover:scale-105 duration-200"
      aria-label="Go to homepage - Yasin Walum"
    >
      <Avatar className="ring-2 ring-transparent group-hover:ring-primary/50 transition-all duration-200">
        <AvatarImage
          src="https://res.cloudinary.com/dkdteb9m5/image/upload/v1731179025/personal%20finance/lj5hjqhmvaeqdsrfcwky.jpg"
          alt="Yasin Walum - Computer Scientist and Full-Stack Developer"
        />
        <AvatarFallback>YW</AvatarFallback>
      </Avatar>
    </Link>
  );
};

export default Pic;
