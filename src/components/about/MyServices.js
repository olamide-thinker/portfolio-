import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { AiTwotoneAppstore } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./comps/ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Web Development"
        subTitle="Building dynamic web applications with complex functionality using frameworks like NextJs, Redux tool-kit, Setting up online stores, integrating payment gateways and secure checkout processes..
.
      "
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title="App Design"
        subTitle={<p>Creating user interfaces and interactive elements from ideation and layout: <b>Figma</b> to development: <b>HTML, CSS, Taiwind Css, Typescript and React js/ Nextjs</b></p>}
      />
      <ServicesCard
        icons={<AiTwotoneAppstore />}
        title="Cryptography"
        subTitle="A practice of secure communication techniques, ensuring that information remains confidential and protected from unauthorized access, and HOC role based access."
      />
      <ServicesCard
        icons={<FaAppStoreIos />}
        title="SEO"
        subTitle=" Optimizing websites for search engines by improving on-page elements, keyword research, content optimization, and link building strategies."
      />
    </div>
  );
};

export default MyServices;
