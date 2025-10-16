
import logo from "../../assets/logo_dark.svg";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Copyright } from "lucide-react";

const Footer = () => {
  const functionScroll = (id: string) => {
    const secaoSeguinte = document.getElementById(id);
    secaoSeguinte?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <footer className="w-full">
      <div className="mt-40 bg-gray-500 mx-auto flex flex-col items-start justify-between lg:flex-row gap-5 lg:gap-10 w-full px-6 py-12">
        <div>
          <img src={logo} alt="logotipo da empresa" />
          <p className="max-w-[500px] text-[16px] mt-3 text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
            aperiam corrupti fugiat in cum ducimus obcaecati. Quo quaerat
            ratione distinctio repellendus itaque tenetur cumque doloremque
            dolor vitae officia. Nihil, ipsum!
          </p>
        </div>
        <div className="flex flex-col text-white items-center">
          <h1 className="text-[21px]">Company</h1>
          <ul className="text-[16px]">
            <li className="mb-2 mt-3">
              <a href="" onClick={(e) => {
                e.preventDefault()
                functionScroll("home")}}>
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="" onClick={(e) => {
                e.preventDefault()
                functionScroll("about")}}>
                About
              </a>
            </li>
            <li className="mb-2">
              <a href="" onClick={(e) => {
                e.preventDefault()
                functionScroll("projects")}}>
                Projects
              </a>
            </li>
            <li>
              <a href="" onClick={(e) => {
                e.preventDefault()
                functionScroll("Testimonials")}}>
                Testimonials
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 text-white relative">
          <h1 className="text-[21px]">Subscribe to our newsletter</h1>
          <p className="text-[16px]">
            The latest news, articles, and resources, sent to your inbox weekly
          </p>
          <div className="flex gap-2">
            <Input
              placeholder="Enter your email"
              type="email"
              required
              className="rounded-sm px-4 p-5 bg-gray-700"
            />
            <Button className="bg-blue-500 cursor-pointer">Subscribe</Button>
          </div>
        </div>
      </div>
      <p className=" bg-gray-500 text-white flex items-center justify-center tracking-wider py-6">
        Copyright 2025 
         <Copyright size={20} className="text-white" />
        .All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
