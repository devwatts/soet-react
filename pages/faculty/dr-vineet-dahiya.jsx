import styles from "../../styles/Home.module.css";
import Image from "/node_modules/next/image";
import { HiMail } from "react-icons/hi";
import React, { Component } from "react";
import Layout from "../../components/Faculty2.0/Layout";

export class drVineetDahiya extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tabType: "profile",
    };
  }

  toggleMe = (value) => {
    this.setState({
      tabType: value,
    });
  };

  render() {
    return (
      <Layout>
      <div class="h-screen">
        <main className={styles.description}>
          <div class='ml-20'>
            <div class="flex mt-20">
              <Image
                src="/static2.0/dr-vineet-dahiya.jpg"
                height={350}
                width={350}
                className="rounded-full"
              />
              <div class="mx-16">
                <h1 className="text-2xl lg:text-3xl lg:mt-12 lg:mb-2 italic text-blue-600">
                  Dr. Vineet Dahiya
                </h1>
                <h2 class="text-lg">
                  Associate Professor -Engineering & Technology
                </h2>
                <h1 class="flex items-center my-5">
                  <HiMail class="text-xl text-blue-600 mr-2" />
                  <a href="mailto:Vineet.dahiya@krmangalam.edu.in">
                    Vineet.dahiya@krmangalam.edu.in
                  </a>
                </h1>
                <div class="text-center text-white bg-gradient-to-r from-cyan-300 to-blue-500 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-300 w-full rounded-full">
                  <h1 class="text-xl font-sans font-semibold p-1">
                    Interest Area(s)
                  </h1>
                </div>
                <ul class="flex items-center space-x-2 text-md font-medium mt-3 text-gray-600 ">

                  <li class="hover:text-black hover:bg-slate-300 hover:rounded-sm">
                    <button
                      class="px-3 py-0.5 focus:bg-slate-300 focus:rounded-sm"
                      onClick={() => this.toggleMe("profile")} > Profile </button>
                  </li>

                  <li class="hover:text-black hover:bg-slate-300 hover:rounded-sm">
                    <button
                      class="px-3 py-0.5 focus:bg-slate-300 focus:rounded-sm"
                      onClick={() => this.toggleMe("education")} > Education </button>
                  </li>

                  <li class="hover:text-black hover:bg-slate-300 hover:rounded-sm">
                    <button
                      class="px-3 py-0.5 focus:bg-slate-300 focus:rounded-sm"
                      onClick={() => this.toggleMe("experience")} > Experience </button>
                  </li>

                  <li class="hover:text-black hover:bg-slate-300 hover:rounded-sm">
                    <button
                      class="px-3 py-0.5 focus:bg-slate-300 focus:rounded-sm"
                      onClick={() => this.toggleMe("research")} > Research </button>
                  </li>

                  <li class="hover:text-black hover:bg-slate-300 hover:rounded-sm">
                    <button
                      class="px-3 py-0.5 focus:bg-slate-300 focus:rounded-sm"
                      onClick={() => this.toggleMe("conferences")} > Conference </button>
                  </li>

                  <li class="hover:text-black hover:bg-slate-300 hover:rounded-sm">
                    <button
                      class="px-3 py-0.5 focus:bg-slate-300 focus:rounded-sm"
                      onClick={() => this.toggleMe("publications")} > Publications </button>
                  </li>

                </ul>
                <div class="text-md mt-5 p-0.5">
                  {this.state.tabType === "profile" && (
                    
                    <h1 class=' max-w-xl h-10'>
                      He has completed his M.Tech. (Power System & Drives) in
                      2009 from YMCAIE, Faridabad India. He joined his PhD at
                      Manav Rachna International University, Faridabad. He is
                      holding the position of Assistant Professor at K.R
                      Mangalam University since July 2016. He has published
                      research papers in different National and International
                      Journals. He has supervised many B.Tech. & M.Tech students
                      in various research areas of interest. His areas of
                      research interest are solar energy, renewable energy
                      resources, solar pv system,power system stability, power
                      quality etc.
                      <p class='mt-3'> Life Time member of IAENG,IERP and Green Thinkerz </p>
                    </h1>
                    
                  )}

                    {this.state.tabType === "education" && (
                    
                    <h1 class=' max-w-xl h-10'>
                      <h1 class='mt-3 flex'> ● Ph.D. in Electrical Engineering from Manav Rachna International Institute of Research and Studies in 2020.</h1>
                      <h1 class='mt-3'> ● M.Tech in Electrical Enginnering with specialization in Power System and Drives from Y.M.C.A Institute of Engineering, Faridabad in 2009.</h1>
                      <h1 class='mt-3'> ● B.E in Electrical Engineering from M.D University in 2006.</h1>
                    </h1>
                    
                  )}  

                    {this.state.tabType === "experience" && (
                    
                    <h1 class=' max-w-xl h-10'>
                      <h1 class='mt-3'> ● Jan 2009 -Dec 2011 :-Worked as Assistant professor in EEE Department with Manav Rachna International University Faridabad</h1>
                      <h1 class='mt-3'> ● Dec 2011 -June 2015 :-Worked as Assistant professor in ICE Department with Amity School of Engineering and Technology , New Delhi</h1>
                      <h1 class='mt-3'> ● July 2015-July 2016:-Worked as Assistant professor in EEE Department with KIIT college of Engineering, Gurgaon.</h1>
                      <h1 class='mt-3'> ● From July 2016:- Working as Assistant Professor, ECE/EEE Department with K.R. Mangalam University, Gurgaon.</h1>
                    </h1>
                    
                  )}  

                    {this.state.tabType === "research" && (
                    
                    <h1 class=' max-w-xl h-10'>
                      <h1 class='mt-3'> ● Renewable Energy</h1>
                      <h1 class='mt-3'> ● Power system</h1>
                    </h1>
                    
                  )}

                    {this.state.tabType === "conferences" && (
                    
                    <h1 class=' max-w-xl h-10'>
                      <h1 class='mt-3'> ● Participated in an International Workshop on “Agent based self-healing Energy Systems; Design and Implementation” organised by IIT Kanpur and IIT Delhi from 21st-22nd,February 2017 held at IIT Kanpur.</h1>
                      <h1 class='mt-3'> ● Attended Faculty Development Program on servo and variable drives in association with Mitsuibishi Electric India from 18/12/2017-22/12/2017 at Manav Rachna International University,Faridabad.</h1>
                      <h1 class='mt-3'> ● Successfully Completed 1 credit course on Recent trends in Protection of Microgrids with high DER penetration: Issues, Challenges and Mitigation conducted by DELHI TECHNOLOGICAL UNIVERSITY (DTU) from 12-02-2018 - 16-02-2018.</h1>
                      <h1 class='mt-3'> ● Attended one week Skill Development Programme (SDP) on “Advanced Trends in Mechanical Engineering(SOET) (ATME-18)” from 23.07.2018 to 27.07.2018 at K R Mangalam University.</h1>
                    </h1>
                    
                  )}

                    {this.state.tabType === "publications" && (
                    
                    <h1 class=' max-w-xl h-10'>
                      <h1 class='mt-3'> ● Presented a paper entitled “Predictive control techniques for Matrix Converters" at International Conference on Advancement in Energy, Drive and Control held at ITS Engineering College, Greater Noida on 7th - 8th April 2017.</h1>
                      <h1 class='mt-3'> ● Presented paper entitled “Comparative study on Predictive current control and space vector control of direct matrix converters in wind energy conversion systems"at International Conference on "Computational Intelligence,Cyber Security and Smart Grid" organized by HMRITM college of Engineering, New Delhi on 20th-21st April 2017.The paper is published in International Journal of Engineering Research & technology, Volume 6, issue 8, ISSN:2278-0181.</h1>
                      <h1 class='mt-3'> ● Presented paper entitled “Comparison of Doubly Fed Induction Generator and Permanent magnet synchronous generator in wind Energy Conversion system" was presented at National Conference on Recent trends in Science, Engineering, Information Technology and Management held at Echelon Institute of Technology, Faridabad on 22nd April 2017.</h1>
                    </h1>
                    
                  )}  
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      </Layout>
    );
  }
}

export default drVineetDahiya;