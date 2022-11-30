
import groq from "groq";
import { GetStaticProps } from "next";
import  client from '../lib/client'
import Icon from "../pages/icon";
import Headerwave from "../images/headerbg.svg"
import Image from "next/image";



const myQuery = groq`*[_type in ["header","homePageForm","aboutSchool"]]`
export  const  getStaticProps:GetStaticProps =async (context) =>
  {
     const homePageFormInfo = await client.fetch(myQuery)
     return{props:{homePageFormInfo}} 
  }


export default function HomePage({homePageFormInfo}:any) { 
  console.log(homePageFormInfo[1])
  
  return(
    <div className="max-w-7xl mx-auto  shadow-lg ">
        
       <div className="relative z-0 fill-current ">
        <Image
         
         src={Headerwave} 
          alt="header Image"  
          /> 
       

          {/* <svg width="100%" height="100%"  id="svg" viewBox="0 0  1440 320" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMax meet" className="flex transition duration-300 ease-in-out delay-150"><path d="M 0,500 C 0,500 0,250 0,250 C 120.26666666666671,236.13333333333335 240.53333333333342,222.2666666666667 426,247 C 611.4666666666666,271.7333333333333 862.1333333333334,335.06666666666666 1042,342 C 1221.8666666666666,348.93333333333334 1330.9333333333334,299.4666666666667 1440,250 C 1440,250 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="#206B9E" fill-opacity="1" className="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 250)"></path></svg>  */}
          <div  className="absolute  inset-0">
                <div className="flex justify-between item-center: px-4">
                    <div className="md:py-4">                      
                      <div className="logoLineImg">|</div>
                      <span className="text-xl md:text-4xl">{homePageFormInfo[2].websiteName}</span>
                    </div>                    
                    <div className="hidden md:inline-flex items-center space-x-5  ">
                      {
                        homePageFormInfo[2].navLinks.map((key:number,value:string)=>(
                          <button key={key}>{homePageFormInfo[2].navLinks[value]}</button>
                        )) 
                      }
                    </div>
                 </div>              
        
        </div>
       </div>
       
     
     
     
      

      <form className="grid h-screen place-items-center">
          <div className="flex flex-col text-center gap-4  justify-center">
                  <span className="text-4xl font-bold p-8">{homePageFormInfo[0].homePageFormHeading}</span>
                  <div className="items-center">
                      <span>{homePageFormInfo[0].homePageFormDescription}</span>
                  </div>
                  <span className="text-red-500">{homePageFormInfo[0].highlightText}</span>
             
             <div className="space-y-3 ">
               <select>
                   <option>---Select Your Field----</option>
                   {
                     homePageFormInfo[0].fieldNames.map((key:number,value:string)=>
                     (<option key={key} value ={value}>{homePageFormInfo[0].fieldNames[value]}</option>))
                   }
               </select>               
             </div>
            <div className="m-8 space-y-3 py-10">
               <button className="border-2 bg-blue-500 bg-opacity-100">{homePageFormInfo[0].buttonText}</button>
            </div>               
     
       
          </div>
                        
             
               
         
         
      </form>
      
      <div className="relative z-0 flex ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#206B9E" fill-opacity="1" d="M0,32L120,26.7C240,21,480,11,720,16C960,21,1200,43,1320,53.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
        <div  className="absolute inset-0 p-20 flex item-center gap-5">
          {/* about school */}
          
          <div className="flex flex-col p-8">
            <span className="text-2xl font-serif">{homePageFormInfo[1].title}</span>
            <span>{homePageFormInfo[1].description}</span>
          </div>          
          <div>
            <span>{}</span>
          </div>
         
         
          <div className="flex flex-col p-8">
          {/* <Icon icon="pencil" size={20} color="orange" />; */}
                <span>{homePageFormInfo[1].email}</span>
                <span>{homePageFormInfo[1].location}</span>
          </div>
          {/* contactus */}
          <div>

          </div>
          {/* policy */}
         
          <div className="flex flex-col text-xs p-8">
                <span>{homePageFormInfo[1].smLinks}</span>
                <span>{homePageFormInfo[1].programText}</span>
          </div>
        </div>
      </div>
      

  </div>
  )
  

     
     
    

      
}
