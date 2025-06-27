import axios from "axios";
import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export default function HangOut(){
    const [hangOuts, setHangOuts] = useState([]);


    const hangOutHandler = async()=>{
        try{
            const response = await axios.get("https://ehangoutbackend.etimeplan.com/hangout-places");
            if(response.status == 200){
                const data = await response.data
                setHangOuts(data);
                console.log(data)
            }
        }catch(error){
            console.log(error);
        }
    };

    useEffect(()=>{
        hangOutHandler()
    },[]);

    const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

    return(
        <div className="flex flex-col gap-6">
            <h1 className="text-3xl">Explore hangout place </h1>
            <Carousel
            swipeable={false}
            draggable={false}
            // showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={ true }
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={200}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            >
                {hangOuts.map((hangOut, index)=>(
                    <a 
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://ehangout.etimeplan.com/hangout/${hangOut.slug}`} 
                    key={index} className="justify-center py-12">
                        <div
                        key={hangOut.id}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white  p-1 overflow-hidden cursor-pointer w-full lg:w-[100%]"
                        // onClick={() => {
                        //     navigate();
                        //     // setTimeout(() => {
                        //     // window.scrollTo({ top: 0, behavior: 'smooth' });
                        //     // }, 100);
                        // }}
                        
                        >
                            <img
                                src={`https://ehangoutbackend.etimeplan.com/${hangOut.images?.[0]?.image}`}
                                alt={hangOut}
                                className="w-full h-44 object-cover"
                            />
                            <div className="p-5 text-center">
                            
                                <h3 className="text-lg font-bold text-gray-900">{hangOut.name}</h3>
                                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                                {hangOut.view_count} + Listings
                                </p>
                            </div>
                        </div>
                    </a>
                ))}
            </Carousel>
        </div>
    )
}