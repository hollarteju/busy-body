import Trending from "@/components/trending";
import SectionHero from "@/components/sectionHero";

export default function Blogs(){
    return(
        <div>
            <SectionHero header={"Blogs"} bg={"blog_bg"}/>
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <Trending/>
            </div>
        </div>
    )
}