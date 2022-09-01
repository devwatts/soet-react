import ImageGallery from "react-image-gallery";
import Image from "next/image";
export default function HomeInfo(props) {
  return (
    <>
      <div
        className={`${
          props.currentOption == "DEAN'S MESSAGE"
            ? "flex lg:flex-col-reverse flex-col-reverse justify-around mt-[50px] mb-[10px] items-center w-[100%] lg:w-[65%]"
            : "hidden"
        }`}
      >
        <div className="w-[100%]  flex flex-col">
          <span className="text-[22px] text-[#006cb5] font-bold text-">
            Dean's Message
          </span>
          <span className="text-[16px]">
            It gives me immense pleasure to greet and welcome you all on behalf
            of School of Engineering & Technology, K.R Mangalam University. Your
            decision to join K.R Mangalam University is just the beginning of a
            highly rewarding Professional career. <br></br>
            <br></br> The School of Engineering and Technology at K. R. Mangalam
            University started in 2013 to create a niche of imparting quality
            education, innovation, entrepreneurship, skill development and
            creativity. It has excellent infrastructure, state of the art Labs,
            and a team of qualified and research-oriented faculty members.{" "}
            <br></br>
            <br></br> The school is offering undergraduate programs (B.Tech,
            BCA, B.Sc), postgraduate programs (M.Tech, MCA) and Ph.D (all
            disciplines). We are offering B.Tech programs in recent areas of
            specializations like AI & ML, Automotive Designs & Electrical
            Vehicle, Sustainable Development & Smart Cities, Full stack
            development, UI/UX development, Cloud Computing etc. <br></br>
            <a className="text-[#007bff]" href="#">
              Read more.....
            </a>
            <br></br>
            <span className="hidden">
              Our curriculum being one of our highlights has been designed in
              line with the requirements of new National Education Policy 2020,
              Pedagogy of Employment, Sustainable Development Goals, IR 4.0 etc.
              The curriculum focuses on problem-solving, design, development,
              and application of various emerging technologies with focus on
              innovative teaching learning methodologies. It is our endeavor to
              constantly evolve curriculum support, so our students stay abreast
              with the latest updates in this technologically developed world.
              <br></br>
              <br></br> SOET aims at transforming the students into competitive
              engineers with adequate analytical skills, making them more
              acceptable to potential employers in the country. There is a great
              focus on experiential & project-based learning with Industry
              collaborations. Our B.Tech programs are in collaborations with
              Industries like IBM, Siemens, Samatrix, Xebia, ImaginXP etc. Out
              student’s get an opportunity to learn directly by professionals
              from industry. <br></br>
              <br></br>SOET has initiated a skill development Center that will
              offer certification programs in areas like Data Science, 3D
              Printing, Robotics, iOS application development, Carbon foot
              printing etc. Innovative project competitions & hackathons are
              organized on regular basis to promote innovative thanking and
              enhance practical skills. Industry internships are mandatory for
              all students. It is our endeavor to constantly evolve curriculum
              support, so our students stay abreast with the latest updates in
              this technologically developed world.<br></br>
              <br></br> K.R. Mangalam University has marked its presence in
              Delhi NCR as a value-based university, successfully imparting
              quality education in all domains. Our alumni are working across
              all sectors of technology, from MNCs to PSUs.<br></br>
              <br></br> Wishing you all a very successful & rewarding experience
              at K.R Mangalam University.
            </span>
          </span>
        </div>
        <div className="flex items-center flex-col mb-[10px] lg:mb-[30px] w-[100%] lg:flex-row lg:justify-evenly">
          <div>
            <Image
              src={
                "https://www.krmangalam.edu.in/Uploads/image/1351imguf_Dean_s-message-pic.webp"
              }
              className="rounded"
              height={"300"}
              width="250"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-bold italic">Prof. (Dr.) Pankaj Agarwal</span>
            <a
              className="text-[#007bff]"
              href="emailto:dean.soet@krmangalam.edu.in"
            >
              dean.soet@krmangalam.edu.in
            </a>
            <span>
              Dean, School of Engineering &<br></br> Technology, K.R Mangalam
              University
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
