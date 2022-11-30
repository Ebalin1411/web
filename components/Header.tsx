
import groq from "groq";
import { GetStaticProps } from "next";
import  client from '../lib/client'
import { IconName } from "react-icons/im";

const myQuery = groq`*[ _type =="header"]{
    websiteName,
    logoImg,
    navLinks  
  }`
 
  export  const  getStaticProps:GetStaticProps =async (context) =>  
  
    {
       const headerInfo = await client.fetch(myQuery) 
       console.log(myQuery);
   
       return{props:{headerInfo}} 
  }
  
  
  export default function Header() { 
    

     console.log('i am in')
    
    
  return (

    <>
         <span>Hello</span>
     
   
    </>
        
        
  )
}





