import React from "react";
import Navbar from "../navbar/Navbar";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Contact = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center w-full overflow-hidden mx-auto px-6 py-12"
      style={{ backgroundImage: "url('/contactuUsBg.jpg')" }}
    >
      <Navbar />
      <div className="flex flex-col gap-4 items-center mt-15 text-[34px] md:text-[50px] lg:text-[64px]">
        <h1>Contact Us</h1>
        <Input
          placeholder="Enter your name"
          type="name"
          required
          className="w-[350px] md:w-[450px] lg:w-[550px] border-2 border-black/50 "
        />
        <Input
          placeholder="Enter your name"
          type="email"
          required
          className="w-[350px] md:w-[450px] lg:w-[550px] border-2 border-black/50 "
        />
        <textarea
          placeholder="Enter a message"
          className=" border-2 border-black/50 w-[350px] h-[350px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] text-[19px] capitalize"
        />
        <Button size='lg' variant='outline' className="w-[200px] cursor-pointer">
            Send
        </Button>
      </div>
    </div>
  );
};

export default Contact;
