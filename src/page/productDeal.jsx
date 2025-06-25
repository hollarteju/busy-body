import { useState, useEffect } from 'react';
import { Search, ChevronRight, ShoppingCart, Share2 } from 'lucide-react';
import Products from '@/components/products';
import DiscountBanner from '@/components/discountBanner';
import SectionHero from '@/components/sectionHero';
import { axiosEstore } from '@/package/eStoreAxios';


const CategoriesProducts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [eStore, setEStore] = useState([]);


  const categories = [
    { name: 'Foot Wares', count: 700, id: 'footwares' },
    { name: 'Clothes', count: 1000, id: 'clothes' },
    { name: 'Body Products', count: 11000, id: 'body' },
    { name: 'Jewelries', count: 700, id: 'jewelries' },
    { name: 'Hair Products', count: 700, id: 'hair' },
    { name: 'Under Wares', count: 30000, id: 'underwares' },
    { name: 'Sexual Products', count: 700, id: 'sexual' },
    { name: 'Makeup Products', count: 700, id: 'makeup' },
    { name: 'Hygiene Products', count: 700, id: 'hygiene' },
    { name: 'Lorem Ipsum', count: 700, id: 'lorem1' },
    { name: 'Lorem Ipsum', count: 700, id: 'lorem2' },
    { name: 'Lorem Ipsum', count: 700, id: 'lorem3' },
    { name: 'Lorem Ipsum', count: 700, id: 'lorem4' },
    { name: 'Lorem Ipsum', count: 700, id: 'lorem5' },
    { name: 'Lorem Ipsum', count: 700, id: 'lorem6' },
    { name: 'Lorem Ipsum', count: 700, id: 'lorem7' }
  ];

 
  const handleCategoryToggle = (categoryId) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
  };

  const handleAddToCart = (productId) => {
    console.log('Added to cart:', productId);
  };

  const handleShare = (productId) => {
    console.log('Shared product:', productId);
  };

  const formatPrice = (price) => {
    return `# ${price.toLocaleString()}`;
  };

  
    const eStoreProducts = async()=>{
      try{
        const response = await axiosEstore("products.php");
        if(response.status == 200){
        const data = await response.data;
        setEStore(data);
        }
      }catch(error){
        console.log(error);
      }
    };
  
    useEffect(()=>{
      eStoreProducts();
    },[])
   

  return (
     <div className='relative'>
        <SectionHero header={"Product Details"} bg={"deal_hero_bg"}/>
        <div className="flex flex-col lg:flex-row sm:gap-32 gap-6 p-4 mt-12 max-w-screen-xl mx-auto ">
        {/* Categories Sidebar */}
        <div className="w-full max-h-screen overflow-y-scroll overflow-x-hidden lg:w-80 bg-white ">
            <div className="sticky top-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Categories</h2>
            
            {/* Search Bar */}
            <div className="flex mb-6">
                <input
                type="text"
                placeholder="Search Category"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
                <button
                onClick={handleSearch}
                className="bg-red-500 text-white px-4 py-2 rounded-r-lg hover:bg-red-600 transition-colors"
                >
                Search
                </button>
            </div>

            {/* Categories List */}
            <div className="space-y-2">
                {categories.map((category) => (
                <div key={category.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                    <input
                        type="checkbox"
                        id={category.id}
                        checked={selectedCategories.includes(category.id)}
                        onChange={() => handleCategoryToggle(category.id)}
                        className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500"
                    />
                    <div className="flex-1">
                        <label htmlFor={category.id} className="text-gray-700 font-medium cursor-pointer">
                        {category.name}
                        </label>
                        <div className="text-sm text-gray-500">
                        {category.count.toLocaleString()}
                        </div>
                    </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
                ))}
            </div>
            </div>
        </div>

        <div className="flex-1 ">
            <Products header="Trending Products" grid={true} eStore={eStore}/>
        </div>
        </div>
        <div className='max-w-screen-xl mx-auto'>
            <DiscountBanner/>
        </div>
        <div className="mt-24 max-w-screen-xl mx-auto">
            <Products header="On Discount Deals" eStore={eStore}/>
        </div>
     </div>
  );
};

export default CategoriesProducts;