import axios from "axios"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import group_img from "@/assets/images/group.jpg"



export default function GroupsCard(){
    const [groups, setGroups] = useState([]);

    const dataHandler = async()=>{
        try{
            const response = await axios.get("https://egroup-be.vercel.app/api/groups/getAllGroups");
            if(response.status == 200){
                const data = response.data;
                setGroups(data);
            }
        }catch(error){
            console.log(error);
        }
    };

    useEffect(()=>{
        dataHandler()
    },[]);


    return(
        <section className="py-16 bg-gray-50">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">Groups you may like</h2>
                <Link to="/group" className="text-red-500 hover:text-red-600 font-semibold">See more</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {groups.map((group, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <img src={group_img} alt={group?.name} className="w-full h-44 object-cover" />
                    <div className="p-4">
                    <h4 className="font-semibold text-gray-900">{group?.Groupname}</h4>
                    <p className="text-xs text-gray-500 mb-1">{group?.category}</p>
                    <div className="text-xs text-gray-500 mb-3"dangerouslySetInnerHTML={{ __html: group?.description || '' }}/>
                    <button className="bg-blue-500 text-white px-4 py-1 rounded text-sm hover:bg-blue-600 transition-colors">
                        Join
                    </button>
                    </div>
                </div>
                ))}
            </div>
            {/* <Trending/> */}
            </div>
        </section>

    )
}