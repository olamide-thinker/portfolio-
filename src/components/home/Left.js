import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsCloudLightningFill, BsFacebook } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
// import { SiYoutubemusic } from "react-icons/si";
import { FiInstagram, FiMail, FiSend } from "react-icons/fi";
import CV from "../../assets/Olamide-resume-yes.pdf";
// import { bannerImg } from "../../assets/index";
import { socialsData } from "./SocialMediaLinks";

const MyProfile = () => {

  
  const [text] = useTypewriter({
    words: ["Ui Ux", "Frontend Web Developer", "MERN Stack Developer", "Graphics Designer"],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });


  return (
    <div className="z-10 flex flex-col justify-between w-full h-full lgl:w-5/12 bg-bodyColor rounded-2xl shadow-testShwdow">
   <h3 className="w-full p-4 text-lg font-bold border-b border-gray-800 px-9" >Profile</h3>

    <div className="flex flex-col items-center justify-center w-full h-full border-t-0 rounded-bl-xl rounded-br-xl">

      <div className=" w-[140px] min-h-[140px] rounded-full overflow-hidden  border-8 border-bodyColor   " >

      <img  className="object-cover  w-[145px] h-[145px] object-left rounded-full "
          src={"/OlamideProfile.jpg"}
          loading="priority"
          alt="bannerImage"
        />

      </div>

        <div className="flex flex-col items-center gap-2 py-10">
          <h1 className="text-4xl font-semibold text-textColor">Olamide Ogundele</h1>
          <p className="text-base tracking-wide text-designColor">
            {text}
            <Cursor cursorBlinking="false" cursorStyle="|" />
          </p>
          <div className="flex justify-center gap-2 mt-2">
            <a href={socialsData.github}   target="_blank" className="text-xl duration-300 cursor-pointer hover:text-designColor" rel="noreferrer">
              <FaGithub />
            </a>
            <a target="_blank" href={socialsData.linkedIn} className="text-xl duration-300 cursor-pointer hover:text-designColor" rel="noreferrer">
              <FaLinkedin />
            </a>
                   <a href={socialsData.twitter} className="text-xl duration-300 cursor-pointer hover:text-designColor">
              <AiFillTwitterCircle />
            </a>
            <a href={"mailto:olamide.thinker@gmail.com"} className="text-xl duration-300 cursor-pointer hover:text-designColor">
              <FiMail />
            </a>
          </div>
        </div>
      </div>

      <div className="flex h-14">
          <a
            href={CV}
            download={true}
            target="_blank"
            className="w-1/2 border-t-[1px] borderRight border-t-zinc-800 text-sm tracking-wide uppercase  gap-2 hover:text-designColor duration-300"
            rel="noreferrer"
          >
            <button className="flex items-center justify-center w-full h-full gap-2">
              Download CV <BsCloudLightningFill />
            </button>
          </a>
          
          <button className="w-1/2 border-t-[1px] border-t-zinc-800 text-sm tracking-wide uppercase flex justify-center items-center gap-2 hover:text-designColor duration-300">
          <a href="mailto:olamide.thinker@gmail.com" className="flex items-center justify-center gap-2"> 
          
            Contact me <FiSend />
          </a>

          </button>
        </div>
    </div>
  );
};

export default MyProfile;
