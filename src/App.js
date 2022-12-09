/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/iframe-has-title */
import Spline  from "@splinetool/react-spline"
import { useState } from "react";
import { IoMenu,IoCodeWorking } from "react-icons/io5"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import One from './images/1.png'

function App() {
  const [isActive, setIsActive] = useState(false)
  return (
    <div className="flex w-screen min-h-screen flex-col items-center justify-center relative bg-primary pb-20">
      {/* Navbar */}
      <nav className="w-full px-6 z-50 fixed inset-x-0 top-2 flex justify-center items-center">
        <div className="w-full md:w-880 bg-navBar p-4 rounded-2xl flex items-center">
          <p className="text-lg text-slate-200 font-medium">Convolve ECE</p>

          <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
            <a href="#" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out">Home</a>
            <a href="#" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out">About</a>
            <a href="#" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out">Events</a>
            <a href="#" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out">Team</a>
            <a href="#" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out">Contact us</a>
            <a href="#" className="ml-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out">Register</a>
            <a href="#" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out">Login</a>
          </div>
          <div className="block md:hidden ml-auto cursor-pointer" onClick={() => setIsActive(!isActive)}>
            <IoMenu className="text-2xl text-textBase " />
          </div>
          { isActive && (
            <div className="p-4 w-275 bg-navBar rounded-lg fixed top-24 right-16 flex flex-col items-center justify-evenly gap-6">
              <a href="#" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out" onClick={()=> setIsActive(false)}>Home</a>
              <a href="#" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out" onClick={()=> setIsActive(false)}>About</a>
              <a href="#" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out" onClick={()=>setIsActive(false)}>Events</a>
              <a href="#" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out" onClick={()=>setIsActive(false)}>Team</a>
              <a href="#" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out" onClick={()=>setIsActive(false)}>Contact us</a>
              <a href="#" className=" onClick={()=>setIsActive(false)}text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out" onClick={()=>setIsActive(false)}>Register</a>
              <a href="#" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out" onClick={()=>setIsActive(false)}>Login</a>
            </div>
          ) }
        </div>
      </nav>
      <div className="relative" id="home">
        <iframe className="w-screen h-screen min-w-screen min-h-screen" src='https://my.spline.design/3dtextbluecopy-312e5680484563f9bb532abb7e24a6a7/'></iframe>
      </div>
      {/* Main sections */}
      <main className="w-[80%] mt-5" >
        {/* About Section */}
        <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-24" id="about" >
            {/* Hero Image */}
            <div className="w-full h-420 flex items-center justify-center" >
              <div className="w-275 h-340 rounded-md relative" >
                <iframe className="w-full h-full absolute -right-4 top-4 object-cover rounded-lg shadow-lg" src='https://my.spline.design/interactivespherescopy-cf5bec9fa044a8b463f0fb14474f65b1/' frameborder='0' width='100%' height='100%'></iframe>
              </div>
            </div>
            {/* About Content */}
            <div className="w-full h-420 flex flex-col items-center justify-center" >
              <p className="text-lg text-textBase text-center" >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque laudantium corporis quod beatae architecto possimus illum, saepe sed maiores veritatis, placeat dicta voluptatem ducimus delectus. Modi velit cupiditate tempora eveniet! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, at delectus laborum, earum tempora, quis eum animi cum ut veniam iure! Amet odit asperiores expedita dolorum aspernatur, ex similique error?
              </p>
            </div>
        </section>
        {/* Events Timeline */}
        <section className="w-full flex items-center justify-center">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(21, 24, 31)', color: '#888' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(21, 24, 31)' }}
              date="11-12-2022"
              iconStyle={{ background: 'rgb(21, 24, 31)', color: '#888' }}
              icon={<IoCodeWorking />}>
                {/* <img className="w-60 h-40" src={One} alt="" srcset="" /> */}
              <h3 className="vertical-timeline-element-title">Event name</h3>
              <h4 className="vertical-timeline-element-subtitle">venue and time</h4>
              <p>
                event description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam non repellat facere sed at voluptatibus pariatur corrupti! Dignissimos animi quis natus voluptatum mollitia? Ea optio libero, consectetur repudiandae eos aperiam.
              </p>
              <button class="w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80">
                <span class="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Register
                </span>
              </button>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(21, 24, 31)', color: '#888' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(21, 24, 31)' }}
              date="11-12-2022"
              iconStyle={{ background: 'rgb(21, 24, 31)', color: '#888' }}
              icon={<IoCodeWorking />}>
                {/* <img className="w-60 h-40" src={One} alt="" srcset="" /> */}
              <h3 className="vertical-timeline-element-title">Event name</h3>
              <h4 className="vertical-timeline-element-subtitle">venue and time</h4>
              <p>
                event description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam non repellat facere sed at voluptatibus pariatur corrupti! Dignissimos animi quis natus voluptatum mollitia? Ea optio libero, consectetur repudiandae eos aperiam.
              </p>
              <button class="w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80">
                <span class="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Register
                </span>
              </button>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(21, 24, 31)', color: '#888' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(21, 24, 31)' }}
              date="11-12-2022"
              iconStyle={{ background: 'rgb(21, 24, 31)', color: '#888' }}
              icon={<IoCodeWorking />}>
                {/* <img className="w-60 h-40" src={One} alt="" srcset="" /> */}
              <h3 className="vertical-timeline-element-title">Event name</h3>
              <h4 className="vertical-timeline-element-subtitle">venue and time</h4>
              <p>
                event description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam non repellat facere sed at voluptatibus pariatur corrupti! Dignissimos animi quis natus voluptatum mollitia? Ea optio libero, consectetur repudiandae eos aperiam.
              </p>
              <button class="w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80">
                <span class="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Register
                </span>
              </button>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(21, 24, 31)', color: '#888' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(21, 24, 31)' }}
              date="11-12-2022"
              iconStyle={{ background: 'rgb(21, 24, 31)', color: '#888' }}
              icon={<IoCodeWorking />}>
                {/* <img className="w-60 h-40" src={One} alt="" srcset="" /> */}
              <h3 className="vertical-timeline-element-title">Event name</h3>
              <h4 className="vertical-timeline-element-subtitle">venue and time</h4>
              <p>
                event description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam non repellat facere sed at voluptatibus pariatur corrupti! Dignissimos animi quis natus voluptatum mollitia? Ea optio libero, consectetur repudiandae eos aperiam.
              </p>
              <button class="w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80">
                <span class="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Register
                </span>
              </button>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(21, 24, 31)', color: '#888' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(21, 24, 31)' }}
              date="11-12-2022"
              iconStyle={{ background: 'rgb(21, 24, 31)', color: '#888' }}
              icon={<IoCodeWorking />}>
                {/* <img className="w-60 h-40" src={One} alt="" srcset="" /> */}
              <h3 className="vertical-timeline-element-title">Event name</h3>
              <h4 className="vertical-timeline-element-subtitle">venue and time</h4>
              <p>
                event description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam non repellat facere sed at voluptatibus pariatur corrupti! Dignissimos animi quis natus voluptatum mollitia? Ea optio libero, consectetur repudiandae eos aperiam.
              </p>
              <button class="w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80">
                <span class="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Register
                </span>
              </button>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </section>
      </main>
    </div>
  );
}

export default App;
