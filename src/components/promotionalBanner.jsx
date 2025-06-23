export default function PromotionaBanner(){
    const contents = [
        {
            texts: "10% off on Counselling Services",
            btn: "",
            bg: "one"
        },
        {
            texts: "Get free Video Consults",
            btn: "",
            bg: "two"
        },
        {
            texts: "10% off on Counselling Services",
            btn: "",
            bg: "one"
        },
        {
            texts: "Get free Video Consults",
            btn: "",
            bg: "two"
        }
    ]
    return(
        <section className="w-full py-12 bg-white">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-6 lg:px-8">
           
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {contents.map((content, index)=>(
                <div key={index} className={`${content.bg} bg-gradient-to-r rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 shadow-xl border ${
                    content.bg == "one" ? "from-yellow-400 to-yellow-500" : "from-red-500 to-red-600 text-white" 
                }`}>
                    <div className="w-1/2">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{content.texts}</h3>
                        <button className={`bg-blue-600 text-white  hover:bg-blue-700
                        transition-colors px-6 py-2 rounded-full`}>Book now</button>
                    </div>
                </div>
            ))}
          </div>
         
        </div>
      </section>
    )
}