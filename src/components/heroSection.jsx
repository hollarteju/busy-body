import { Search} from 'lucide-react';

export default function HeroSection(){
    return(
        <section className="hero_bg relative  text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black opacity-40"/>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Lorem ipsum dolor sit amet consectetur. Risus
          </h1>
          <div className="max-w-2xl mx-auto">
            <div className="flex rounded-full bg-white p-2 shadow-2xl">
              <input 
                type="text" 
                placeholder="I'm Looking For....." 
                className="flex-1 px-6 py-3 text-gray-700 bg-transparent outline-none text-lg"
              />
              <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                <Search className="w-5 h-5 inline mr-2" />
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

    )
}