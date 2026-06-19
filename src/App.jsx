import React from 'react';
import { 
  FaChevronDown, 
  FaSearch, 
  FaPhoneAlt, 
  FaPlay, 
  FaChevronLeft, 
  FaChevronRight, 
  FaStar, 
  FaHeart 
} from 'react-icons/fa';
import { 
  BiRestaurant, 
  BiCycling, 
  BiShoppingBag, 
  BiGift 
} from 'react-icons/bi';

// Rasmlar uchun havolalar
const burgerImg = 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=150&q=80';
const sandwichImg = 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=150&q=80';
const icecreamImg = 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=150&q=80';
const juiceImg = 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=150&q=80';

const fattoushSalad = 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&q=80';
const vegetableSalad = 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80';
const eggSalad = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80';

const chefImage = 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=500&q=80';
const customer1 = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80';
const customer2 = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80';
const customer3 = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-gray-800 font-sans">

      {/* Navigatsiya paneli (Navbar) */}
      <header className="flex justify-between items-center px-[7%] py-6 max-w-[1440px] mx-auto">
        <div className="text-2xl font-black tracking-wide flex items-center">
          <span className="bg-[#39db4a] text-white px-3 py-1 rounded-md mr-1 text-xl font-bold">F</span>
          OODI
        </div>

        {/* Linklar */}
        <nav className="hidden md:flex space-x-10 text-lg font-medium text-gray-600">
          <a href="#" className="text-[#39db4a] font-semibold">Home</a>
          <a href="#" className="flex items-center gap-1 hover:text-[#39db4a] transition-colors">
            Menu <FaChevronDown className="text-xs text-[#39db4a]" />
          </a>
          <a href="#" className="flex items-center gap-1 hover:text-[#39db4a] transition-colors">
            Services <FaChevronDown className="text-xs text-[#39db4a]" />
          </a>
          <a href="#" className="hover:text-[#39db4a] transition-colors">Offers</a>
        </nav>

        {/* O'ng tomon harakatlar */}
        <div className="flex items-center gap-6">
          <button type="button" className="text-xl text-gray-800 hover:text-[#39db4a] transition-colors cursor-pointer">
            <FaSearch />
          </button>
          
          <a
            href="#"
            className="bg-[#39db4a] text-white px-7 py-3 rounded-full font-semibold flex items-center gap-2.5 shadow-lg shadow-green-500/20 hover:bg-[#2ec13e] hover:-translate-y-0.5 transition-all"
          >
            <FaPhoneAlt className="text-sm" /> Contact
          </a>
        </div>
      </header>

      {/* Asosiy Banner Qismi (Hero Section) */}
      <main className="flex flex-col lg:flex-row justify-between items-center px-[7%] py-10 max-w-[1440px] mx-auto min-h-[calc(100vh-88px)] gap-12 lg:gap-0">
        {/* Chap tomon: Matnlar */}
        <div className="max-w-[600px] text-center lg:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-[64px] font-extrabold text-black leading-[1.15] mb-8">
            Dive into Delights <br />
            Of Delectable <span className="text-[#39db4a]">Food</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-11 font-normal">
            Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship
          </p>

          {/* Tugmalar */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
            <a
              href="#"
              className="bg-[#39db4a] text-white px-10 py-[18px] rounded-full text-lg font-semibold shadow-xl shadow-green-500/30 hover:bg-[#2ec13e] hover:-translate-y-0.5 transition-all w-full sm:w-auto text-center"
            >
              Order Now
            </a>
            
            <div className="flex items-center gap-4 group cursor-pointer">
              <span className="text-lg font-semibold text-gray-700 group-hover:text-[#39db4a] transition-colors">
                Watch Video
              </span>
              <button type="button" className="w-12 h-12 bg-white rounded-full shadow-md flex justify-center items-center text-sm text-gray-800 transition-all group-hover:scale-105 group-hover:shadow-lg">
                <FaPlay className="ml-0.5" />
              </button>
            </div>
          </div>
        </div>

        {/* O'ng tomon: Doira va Rasm */}
        <div className="relative flex justify-center items-center">
          <div className="absolute top-12 -left-8 bg-white px-5 py-2.5 rounded-full text-sm font-semibold text-red-500 shadow-md z-10 animate-bounce">
            Hot spicy Food 🌶️
          </div>
          <div className="w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] lg:w-[480px] lg:h-[480px] bg-[#39db4a] rounded-full relative overflow-hidden">
       
          </div>
        </div>
      </main>

      {/* 1. KATEGORIYALAR BO'LIMI (Popular Categories) */}
      <section className="px-[7%] py-16 max-w-[1440px] mx-auto text-center">
        <span className="text-red-500 tracking-widest text-sm font-bold uppercase block mb-3">Customer Favorites</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-12">Popular Categories</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {/* Main Dish */}
          <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center cursor-pointer border border-gray-50 group">
            <div className="w-24 h-24 rounded-full bg-[#EAFBF0] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <img src={burgerImg} alt="Main Dish" className="w-16 h-16 object-contain" />
            </div>
            <h3 className="font-bold text-lg text-gray-900 mb-1">Main Dish</h3>
            <p className="text-gray-400 text-sm">(86 dishes)</p>
          </div>

          {/* Break Fast */}
          <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center cursor-pointer border border-gray-50 group">
            <div className="w-24 h-24 rounded-full bg-[#EAFBF0] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <img src={sandwichImg} alt="Break Fast" className="w-16 h-16 object-contain" />
            </div>
            <h3 className="font-bold text-lg text-gray-900 mb-1">Break Fast</h3>
            <p className="text-gray-400 text-sm">(12 break fast)</p>
          </div>

          {/* Dessert */}
          <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center cursor-pointer border border-gray-50 group">
            <div className="w-24 h-24 rounded-full bg-[#EAFBF0] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <img src={icecreamImg} alt="Dessert" className="w-16 h-16 object-contain" />
            </div>
            <h3 className="font-bold text-lg text-gray-900 mb-1">Dessert</h3>
            <p className="text-gray-400 text-sm">(48 dessert)</p>
          </div>

          {/* Browse All */}
          <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center cursor-pointer border border-gray-50 group">
            <div className="w-24 h-24 rounded-full bg-[#EAFBF0] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <img src={juiceImg} alt="Browse All" className="w-16 h-16 object-contain" />
            </div>
            <h3 className="font-bold text-lg text-gray-900 mb-1">Browse All</h3>
            <p className="text-gray-400 text-sm">(255 items)</p>
          </div>
        </div>
      </section>

      {/* 2. STANDOUT DISHES BO'LIMI (Slayder qismi) */}
      <section className="px-[7%] py-16 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12">
          <div>
            <span className="text-red-500 tracking-widest text-sm font-bold uppercase block mb-2">Special Dishes</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-black max-w-md">Standout Dishes From Our Menu</h2>
          </div>
          {/* Strelkalar */}
          <div className="flex gap-4 mt-6 md:mt-0">
            <button className="w-12 h-12 rounded-full bg-[#eaeaea] hover:bg-gray-200 transition-colors flex items-center justify-center text-gray-700">
              <FaChevronLeft />
            </button>
            <button className="w-12 h-12 rounded-full bg-[#39db4a] hover:bg-[#2ec13e] transition-colors flex items-center justify-center text-white shadow-lg shadow-green-500/20">
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Taomlar Kartochkalari */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Fattoush salad */}
          <div className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 relative border border-gray-50 group">
            <button className="absolute top-6 right-6 w-10 h-10 bg-[#39db4a] text-white rounded-tr-2xl rounded-bl-2xl flex items-center justify-center shadow-md">
              <FaHeart />
            </button>
            <div className="overflow-hidden rounded-full w-48 h-48 mx-auto mb-6 shadow-md group-hover:scale-105 transition-transform duration-300">
              <img src={fattoushSalad} alt="Fattoush salad" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-bold text-xl text-gray-900 mb-2">Fattoush salad</h3>
            <p className="text-gray-400 text-sm mb-4">Description of the item</p>
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-black"><span className="text-red-500 text-sm">$</span>24.00</span>
              <span className="flex items-center gap-1 font-semibold text-gray-700"><FaStar className="text-yellow-400" /> 4.9</span>
            </div>
          </div>

          {/* Vegetable salad */}
          <div className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 relative border border-gray-50 group">
            <button className="absolute top-6 right-6 w-10 h-10 bg-[#39db4a] text-white rounded-tr-2xl rounded-bl-2xl flex items-center justify-center shadow-md">
              <FaHeart />
            </button>
            <div className="overflow-hidden rounded-full w-48 h-48 mx-auto mb-6 shadow-md group-hover:scale-105 transition-transform duration-300">
              <img src={vegetableSalad} alt="Vegetable salad" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-bold text-xl text-gray-900 mb-2">Vegetable salad</h3>
            <p className="text-gray-400 text-sm mb-4">Description of the item</p>
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-black"><span className="text-red-500 text-sm">$</span>26.00</span>
              <span className="flex items-center gap-1 font-semibold text-gray-700"><FaStar className="text-yellow-400" /> 4.6</span>
            </div>
          </div>

          {/* Egg vegi salad */}
          <div className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 relative border border-gray-50 group">
            <button className="absolute top-6 right-6 w-10 h-10 bg-[#39db4a] text-white rounded-tr-2xl rounded-bl-2xl flex items-center justify-center shadow-md">
              <FaHeart />
            </button>
            <div className="overflow-hidden rounded-full w-48 h-48 mx-auto mb-6 shadow-md group-hover:scale-105 transition-transform duration-300">
              <img src={eggSalad} alt="Egg vegi salad" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-bold text-xl text-gray-900 mb-2">Egg vegi salad</h3>
            <p className="text-gray-400 text-sm mb-4">Description of the item</p>
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-black"><span className="text-red-500 text-sm">$</span>23.00</span>
              <span className="flex items-center gap-1 font-semibold text-gray-700"><FaStar className="text-yellow-400" /> 4.5</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MIJOZLAR FIKRLARI BO'LIMI (Testimonials) */}
      <section className="px-[7%] py-16 max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Chap tomon: Oshpaz rasmi */}
        <div className="w-full lg:w-1/2 relative flex justify-center">
          <div className="bg-[#39db4a] rounded-tr-[80px] rounded-bl-[80px] rounded-tl-[30px] rounded-br-[30px] w-[280px] h-[340px] sm:w-[350px] sm:h-[420px] relative">

            <div className="absolute -bottom-5 right-4 bg-white px-4 py-2 rounded-full shadow-lg text-xs font-bold flex items-center gap-1">
              Our Best Chef 🧑‍🍳
            </div>
          </div>
        </div>

        {/* O'ng tomon: Sharhlar matni */}
        <div className="w-full lg:w-1/2">
          <span className="text-red-500 tracking-widest text-sm font-bold uppercase block mb-3">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6 leading-tight">What Our Customers Say About Us</h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 font-medium">
            "I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable."
          </p>
          
          {/* Mijozlar suratlari va Feedback */}
          <div className="flex items-center gap-4">
            <div className="flex -space-x-4">
              <img src={customer1} alt="Customer" className="w-12 h-12 rounded-full border-2 border-white object-cover" />
              <img src={customer2} alt="Customer" className="w-12 h-12 rounded-full border-2 border-white object-cover" />
              <img src={customer3} alt="Customer" className="w-12 h-12 rounded-full border-2 border-white object-cover" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-base">Customer Feedback</h4>
              <p className="text-sm text-gray-600 flex items-center gap-1.5 font-semibold mt-0.5">
                <FaStar className="text-yellow-400" /> 4.9 <span className="text-gray-400 font-normal">(18.6k Reviews)</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. XIZMATLAR BO'LIMI (Our Story & Services) */}
      <section className="px-[7%] py-16 max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Chap tomon: Matnlar */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <span className="text-red-500 tracking-widest text-sm font-bold uppercase block mb-3">Our Story & Services</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6 leading-tight">Our Culinary Journey And Services</h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
            Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.
          </p>
          <a
            href="#"
            className="inline-block bg-[#39db4a] text-white px-8 py-3.5 rounded-full font-semibold shadow-lg shadow-green-500/20 hover:bg-[#2ec13e] transition-all"
          >
            Explore
          </a>
        </div>

        {/* O'ng tomon: Kichik xizmatlar kartochkalari unumdorligi */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Catering */}
          <div className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow text-center border border-gray-50 flex flex-col items-center">
            <BiRestaurant className="text-4xl text-[#39db4a] mb-3" />
            <h3 className="font-bold text-[#39db4a] text-lg uppercase tracking-wide mb-2">Catering</h3>
            <p className="text-gray-400 text-xs px-2">Delight your guests with our flavors and presentation</p>
          </div>

          {/* Fast Delivery */}
          <div className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow text-center border border-gray-50 flex flex-col items-center">
            <BiCycling className="text-4xl text-[#39db4a] mb-3" />
            <h3 className="font-bold text-[#39db4a] text-lg uppercase tracking-wide mb-2">Fast Delivery</h3>
            <p className="text-gray-400 text-xs px-2">We deliver your order promptly to your door</p>
          </div>

          {/* Online Ordering */}
          <div className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow text-center border border-gray-50 flex flex-col items-center">
            <BiShoppingBag className="text-4xl text-[#39db4a] mb-3" />
            <h3 className="font-bold text-[#39db4a] text-lg uppercase tracking-wide mb-2">Online Ordering</h3>
            <p className="text-gray-400 text-xs px-2">Explore menu & order with ease using our Online Ordering</p>
          </div>

          {/* Gift Cards */}
          <div className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow text-center border border-gray-50 flex flex-col items-center">
            <BiGift className="text-4xl text-[#39db4a] mb-3" />
            <h3 className="font-bold text-[#39db4a] text-lg uppercase tracking-wide mb-2">Gift Cards</h3>
            <p className="text-gray-400 text-xs px-2">Give the gift of exceptional dining with Foodi Gift Cards</p>
          </div>
        </div>
      </section>

      {/* 5. FOOTER (Sayt Oxiri) */}
      <footer className="bg-white pt-16 pb-12 border-t border-gray-100">
        <div className="px-[7%] max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Logo va ta'rif */}
          <div>
            <div className="text-2xl font-black tracking-wide flex items-center mb-5">
              <span className="bg-[#39db4a] text-white px-3 py-1 rounded-md mr-1 text-xl font-bold">F</span>
              OODI
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Savor the artistry where every dish is a culinary masterpiece.
            </p>
          </div>

          {/* Useful links */}
          <div>
            <h4 className="font-bold text-gray-900 text-lg mb-4">Useful links</h4>
            <ul className="space-y-2.5 text-gray-500 text-sm font-medium">
              <li><a href="#" className="hover:text-[#39db4a] transition-colors">About us</a></li>
              <li><a href="#" className="hover:text-[#39db4a] transition-colors">Events</a></li>
              <li><a href="#" className="hover:text-[#39db4a] transition-colors">Blogs</a></li>
              <li><a href="#" className="hover:text-[#39db4a] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Main Menu */}
          <div>
            <h4 className="font-bold text-gray-900 text-lg mb-4">Main Menu</h4>
            <ul className="space-y-2.5 text-gray-500 text-sm font-medium">
              <li><a href="#" className="hover:text-[#39db4a] transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-[#39db4a] transition-colors">Offers</a></li>
              <li><a href="#" className="hover:text-[#39db4a] transition-colors">Menus</a></li>
              <li><a href="#" className="hover:text-[#39db4a] transition-colors">Reservation</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-bold text-gray-900 text-lg mb-4">Contact Us</h4>
            <ul className="space-y-2.5 text-gray-500 text-sm font-medium">
              <li><a href="mailto:example@email.com" className="hover:text-[#39db4a] transition-colors">example@email.com</a></li>
              <li><a href="tel:+64958248956" className="hover:text-[#39db4a] transition-colors">+64 958 248 956</a></li>
              <li><a href="#" className="hover:text-[#39db4a] transition-colors">Social media</a></li>
            </ul>
          </div>
        </div>

        <div className="text-center text-sm text-gray-400 font-medium px-[7%] max-w-[1440px] mx-auto border-t border-gray-100 pt-6">
          &copy; {new Date().getFullYear()} Foodi | All Rights Reserved
        </div>
      </footer>

    </div>
  );
}