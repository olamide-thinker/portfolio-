import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import { MdWork, MdOutlineClose } from "react-icons/md";

import MyProfile  from "./components/home/Left";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Projects from "./components/projects/Projects";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import { SideMenuIcon } from "./components/sideMenuIcon";


const Home = () => {
  const [about, setAbout] = useState(true);
  const [resume, setResume] = useState(false);
  const [projects, setProjects] = useState(false);
  const [blog, setBlog] = useState(false);
  const [contact, setContact] = useState(false);
  const [sidenav, setSidenav] = useState(false);
  const ref = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target.contains(ref.current)) {
        setSidenav(false);
      }
    });
  }, []);
  return (
    <div className="w-full lgl:w-[85%] h-full lgl:h-[85%] bg-transparent text-white z-50 flex items-start justify-between p-4 lgl:p-0">

      <div className="flex-col hidden w-16 gap-4 bg-transparent h-96 lgl:flex">
   {sidenav && (
          <div className="fixed top-0 left-0 z-50 w-full h-screen bg-black bg-opacity-50 ring-green-500">
            <div className="relative h-full w-96">
              <motion.div
                ref={ref}
                initial={{ x: -500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full bg-bodyColor overflow-y-scroll scrollbar-thin scrollbar-thumb-[#646464]"
              >
                {/* <Sidenav /> */}
                <span
                  onClick={() => setSidenav(false)}
                  className="absolute top-0 z-50 flex items-center justify-center w-12 h-12 text-2xl duration-300 cursor-pointer -right-16 bg-bodyColor text-textColor hover:text-designColor"
                >
                  <MdOutlineClose />
                </span>
              </motion.div>
            </div>
          </div>
        )}

{/* ======================== SideMenu ======================== */}
        <div className="flex flex-col items-center justify-between w-full py-6 -mr-20 h-80 bg-bodyColor rounded-3xl">
        
          <SideMenuIcon 
          name={'About'} 
          state={about}
          icon={<FaUser />} 
          action={() =>
            setAbout(true) &
            setResume(false) &
            setProjects(false) &
            setBlog(false) &
            setContact(false)
          }/>

          <SideMenuIcon 
          name={'Resume'} 
          state={resume}
          icon={<IoIosPaper />} 
          action={() =>
            setAbout(false) &
            setResume(true) &
            setProjects(false) &
            setBlog(false) &
            setContact(false)
          }/>

          <SideMenuIcon 
          name={'Projects'} 
          state={projects}
          icon={<MdWork />} 
          action={() =>
            setAbout(false) &
            setResume(false) &
            setProjects(true) &
            setBlog(false) &
            setContact(false)
          }/>

          <SideMenuIcon 
          name={'Contact'} 
          state={contact}
          icon={<FaEnvelope />} 
          action={() =>
              setAbout(false) &
              setResume(false) &
              setProjects(false) &
              setBlog(false) &
              setContact(true)
          }/>

        </div>
   
      </div>
  
      <div className="w-full lgl:w-[94%] h-full flex flex-col gap-6 lgl:gap-6 lgl:flex-row items-center">

        <MyProfile  />
        <div className="w-full lgl:w-8/12 h-[100%] bg-bodyColor rounded-2xl flex justify-center items-center">
          {/* ======================== Smaller device content Start ======================== */}
          <div className="flex flex-col w-full h-full gap-6 bg-transparent lgl:hidden rounded-2xl">
            <About />
            <Resume />
            <Projects />
            {/* <Blog /> */}
            <Contact />
          </div>
          {/* ======================== Smaller device content End ========================== */}
          <div className="w-full h-[96%] hidden lgl:flex justify-center overflow-y-scroll scrollbar-thin scrollbar-thumb-[#646464]">
            {about && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <About />
              </motion.div>
            )}

            {resume && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Resume />
              </motion.div>
            )}
            {projects && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Projects />
              </motion.div>
            )}
            {blog && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Blog />
              </motion.div>
            )}
            {contact && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Contact />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
