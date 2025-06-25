import ServiceLinks from "@/components/serviceLink"
import ServiceCard from "@/components/serviceCard"
import SectionHero from "@/components/sectionHero";
import { axiosEfix } from "@/package/eFixAxios";
import { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';


export default function Services(){
    const [eFix, setEFix] = useState([]);
    const [searchParams] = useSearchParams();
    const filter = searchParams.get("filter");
  
    const eFixProducts = async(type)=>{
      try{
        const response = await axiosEfix(`service-providers.php?sp_category=${type}`);
        if(response.status == 200){
        const data = await response.data;
        console.log(data)
        setEFix(data);
        }
      }catch(error){
        console.log(error);
      }
    };

    useEffect(()=>{
      eFixProducts(filter)
    },[filter])


    
    return(
        <section>
            <SectionHero header={"Service Providers"} bg={"service_hero_bg "}/>
            <div className="max-w-screen-xl mt-24 mx-auto px-4">
                <ServiceLinks/>
            </div>
            <ServiceCard header={"Hair Stylist"} data={eFix}/>
            {/* <ServiceCard header={"Makeup Artist"} data={Makeups} /> */}
        </section>

    )
}