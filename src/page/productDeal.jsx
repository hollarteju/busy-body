import React, { useState } from 'react';
import { Search, ChevronRight, ShoppingCart, Share2 } from 'lucide-react';
import Products from '@/components/products';
import DiscountBanner from '@/components/discountBanner';
import SectionHero from '@/components/sectionHero';

const CategoriesProducts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);

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

  const products = [
    {
      id: 1,
      name: 'Sanitry pads',
      price: 50000,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=300&fit=crop',
      rating: 13,
      inStock: true
    },
    {
      id: 2,
      name: 'Eye Shadow',
      price: 50000,
      image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=300&h=300&fit=crop',
      rating: 13,
      inStock: true
    },
    {
      id: 3,
      name: 'Dove Cup Cream',
      price: 50000,
      image: 'https://images.unsplash.com/photo-1556228578-dd339730de25?w=300&h=300&fit=crop',
      rating: 13,
      inStock: true
    },
    {
      id: 4,
      name: 'Dove Cup Cream',
      price: 50000,
      image: 'https://images.unsplash.com/photo-1556228578-dd339730de25?w=300&h=300&fit=crop',
      rating: 12,
      inStock: true
    },
    {
      id: 5,
      name: 'Eye Shadow',
      price: 50000,
      image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=300&h=300&fit=crop',
      rating: 13,
      inStock: true
    },
    {
      id: 6,
      name: 'Sanitry pads',
      price: 50000,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=300&fit=crop',
      rating: 13,
      inStock: true
    },
    {
      id: 7,
      name: 'Eye Shadow',
      price: 50000,
      image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=300&h=300&fit=crop',
      rating: 13,
      inStock: true
    },
    {
      id: 8,
      name: 'Sanitry pads',
      price: 50000,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=300&fit=crop',
      rating: 13,
      inStock: true
    },
    {
      id: 9,
      name: 'Dove Cup Cream',
      price: 50000,
      image: 'https://images.unsplash.com/photo-1556228578-dd339730de25?w=300&h=300&fit=crop',
      rating: 13,
      inStock: true
    }
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
            <Products header="Trending Products" grid={true}/>
        </div>
        </div>
        <div className='max-w-screen-xl mx-auto'>
            <DiscountBanner/>
        </div>
        <div className="mt-24 max-w-screen-xl mx-auto">
            <Products header="On Discount Deals"/>
        </div>
     </div>
  );
};

export default CategoriesProducts;