
import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryItem {
  title: string;
  image: string;
  link: string;
}

export const CategoryShowcase = () => {
  const categories: CategoryItem[] = [
    {
      title: "Full Face Helmets",
      image: "https://images.unsplash.com/photo-1580654843061-8c90a9e263d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      link: "/categories/agv-helmets/full-face"
    },
    {
      title: "Sport Helmets",
      image: "https://images.unsplash.com/photo-1572932759882-bb34c848d3f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1276&q=80",
      link: "/categories/agv-helmets/sport"
    },
    {
      title: "Riding Gear",
      image: "https://images.unsplash.com/photo-1625734741765-491be611066e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      link: "/categories/riding-gear"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gear-charcoal to-gear-dark">
      <div className="container">
        <h2 className="text-3xl font-bold text-white text-center mb-10">
          Shop By <span className="text-gear-purple">Category</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link 
              key={index}
              to={category.link}
              className="group relative h-80 overflow-hidden rounded-lg"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors z-10"></div>
              <img 
                src={category.image} 
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <span className="text-2xl font-bold text-white">{category.title}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
