export default function SectionHero({header, bg}){
    return(
        <div className={`${bg } relative  text-white py-20 lg:py-32`}>
            <div className="absolute inset-0 bg-black opacity-40"/>
            <div className='w-full px-44 font-bold'>
                <button className=' p-4 rounded-xl text-black bg-white'>{header}</button>
            </div>
        </div>
    )
}