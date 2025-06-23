import ServiceLinks from "@/components/serviceLink"
import ServiceCard from "@/components/serviceCard"
import SectionHero from "@/components/sectionHero";


export default function Services(){
    const stylists = [
    {
      id: 1,
      name: "Valton kiz",
      specialization: "Specialized in Car body",
      location: "Ikeja Lagos",
      rating: 5,
      reviews: 22,
      image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=300&h=300&fit=crop&crop=face",
      verified: true
    },
    {
      id: 2,
      name: "Spiddy val",
      specialization: "Specialized in America cars",
      location: "Ikeja Lagos",
      rating: 5,
      reviews: 22,
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=300&h=300&fit=crop&crop=face",
      verified: true
    },
    {
      id: 3,
      name: "Octaze zali",
      specialization: "Specialized in German cars",
      location: "Ikeja Lagos",
      rating: 5,
      reviews: 22,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
      verified: true
    },
    {
      id: 4,
      name: "Tallest G",
      specialization: "Specialized in Korean cars",
      location: "Ikeja Lagos",
      rating: 5,
      reviews: 22,
      image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=300&h=300&fit=crop&crop=face",
      verified: true
    },
    {
      id: 5,
      name: "Divine Styles",
      specialization: "Specialized in Japanese cars",
      location: "Ikeja Lagos",
      rating: 4,
      reviews: 18,
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=300&h=300&fit=crop&crop=face",
      verified: true
    },
    {
      id: 6,
      name: "Royal Touch",
      specialization: "Specialized in French cars",
      location: "Ikeja Lagos",
      rating: 5,
      reviews: 31,
      image: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?w=300&h=300&fit=crop&crop=face",
      verified: true
    }
  ];

  const Makeups = [
  {
    id: 1,
    name: "Valton kiz",
    specialization: "Specialized in Bridal Makeup",
    location: "Ikeja Lagos",
    rating: 5,
    reviews: 22,
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=300&h=300&fit=crop&crop=face",
    verified: true
  },
  {
    id: 2,
    name: "Spiddy val",
    specialization: "Specialized in Editorial Makeup",
    location: "Ikeja Lagos",
    rating: 5,
    reviews: 22,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
    verified: true
  },
  {
    id: 3,
    name: "Octaze zali",
    specialization: "Specialized in Glam Makeup",
    location: "Ikeja Lagos",
    rating: 5,
    reviews: 22,
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&h=300&fit=crop&crop=face",
    verified: true
  },
  {
    id: 4,
    name: "Tallest G",
    specialization: "Specialized in Natural Makeup",
    location: "Ikeja Lagos",
    rating: 5,
    reviews: 22,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face",
    verified: true
  },
  {
    id: 5,
    name: "Divine Styles",
    specialization: "Specialized in Party Makeup",
    location: "Ikeja Lagos",
    rating: 4,
    reviews: 18,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
    verified: true
  },
  {
    id: 6,
    name: "Royal Touch",
    specialization: "Specialized in Special Effects Makeup",
    location: "Ikeja Lagos",
    rating: 5,
    reviews: 31,
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=300&h=300&fit=crop&crop=face",
    verified: true
  }
];

    return(
        <section>
            <SectionHero header={"Service Providers"} bg={"service_hero_bg "}/>
            <div className="max-w-screen-xl mt-24 mx-auto px-4">
                <ServiceLinks/>
            </div>
            <ServiceCard header={"Hair Stylist"} data={stylists}/>
            <ServiceCard header={"Makeup Artist"} data={Makeups}/>
        </section>

    )
}