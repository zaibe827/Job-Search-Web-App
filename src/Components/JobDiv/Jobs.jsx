import React from 'react';
import { BiTimeFive } from "react-icons/bi";
import logo5 from '../../Assets/logo5.jpg';
import logo12 from '../../Assets/logo12.jpg';
import logo10 from '../../Assets/logo10.jpg';
// import logo7 from '../../Assets/logo7.jpg';
import logo6 from '../../Assets/logo6.jpg';
import logo8 from '../../Assets/logo8.jpg';
import logo3 from '../../Assets/logo3.jpg';



//for all the jobs we have to used high order array method Map
//list all the jobs in the array called Data
const Data = [
  {
    id: 1,
    image: logo5,
    title: 'Web Developer',
    time: 'Now',
    location: 'Lahore',
    desc: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus eligendi blanditiis nam incidunt.',
    company: 'Novac Linus Co.'
  },
  {
    id: 2,
    image: logo10,
    title: 'UI/UX Designer',
    time: 'Now',
    location: 'Peshawer',
    desc: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus eligendi blanditiis nam incidunt.',
    company: 'Hypo Soft'
  },
  {
    id: 3,
    image: logo3,
    title: 'AI Engineer',
    time: 'Now',
    location: 'Islamabad',
    desc: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus eligendi blanditiis nam incidunt.',
    company: 'Devsinc'
  },
  {
    id: 4,
    image: logo6,
    title: 'Blockchain Developer',
    time: 'Now',
    location: 'Rawalpindi',
    desc: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus eligendi blanditiis nam incidunt.',
    company: 'Decentro'
  },
  {
    id: 5,
    image: logo12,
    title: 'Data Scentist',
    time: 'Now',
    location: 'Karachi',
    desc: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus eligendi blanditiis nam incidunt.',
    company: 'Software Champs'
  },
  {
    id: 6,
    image: logo8,
    title: 'Andriod Developer',
    time: 'Now',
    location: 'Rawalpindi',
    desc: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus eligendi blanditiis nam incidunt.',
    company: 'Ferel co.'
  },
]

const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10   ">
        {
          Data.map(({ id, image, title, time, location, desc, company }) => {
            return (
              //this will return the job based on the id
              <div key={id} className="group group/item singlejob w-[250px] p-[20px] bg-white rounded [10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg ">
                <span className='flex justify-between items-center gap-4'>
                  <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white '>{title}</h1>
                  <span className='flex items-center text-[#ccc] gap-1'>
                    <BiTimeFive />{time}
                  </span>
                </span>
                <h6 className='text-[#ccc]'>{location}</h6>
                <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white' >
                  {desc}
                </p>

                <div className='company flex items-center gap-2'>
                  <img src={image} alt="Company Logo" className='w-[10%]  ' />
                  <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
                </div>

                <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover:bg-white group-hover:text-textColor'>Apply Now</button>

              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Jobs
