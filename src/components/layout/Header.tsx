
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { SearchIcon, ShoppingCart, Menu, User } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { CategorySidebar } from './CategorySidebar';

export const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-gear-dark border-b border-gear-purple/20 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        {/* Mobile Menu */}
        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] bg-gear-charcoal p-0">
              <div className="h-full overflow-y-auto">
                <CategorySidebar />
              </div>
            </SheetContent>
          </Sheet>
        </div>
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-white">
            Gear<span className="text-gear-purple">Glide</span>
          </span>
        </Link>
        
        {/* Search, Cart, Account */}
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="relative"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <SearchIcon className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-gear-purple text-xs flex items-center justify-center">
                0
              </span>
            </Button>
          </Link>
          
          <Link to="/account">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Search Bar Dropdown */}
      {isSearchOpen && (
        <div className="container py-2 border-t border-gear-purple/20 animate-accordion-down">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search for helmets, gear, accessories..."
              className="w-full bg-gear-charcoal border-gear-purple/30 pl-10 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-gear-purple"
              autoFocus
            />
          </div>
        </div>
      )}
      
      {/* Navigation */}
      <nav className="hidden md:block border-t border-gear-purple/20">
        <div className="container">
          <ul className="flex space-x-8">
            <li>
              <Link 
                to="/" 
                className="block py-3 text-sm font-medium text-white hover:text-gear-purple"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/products" 
                className="block py-3 text-sm font-medium text-white hover:text-gear-purple"
              >
                All Products
              </Link>
            </li>
            <li>
              <Link 
                to="/helmets" 
                className="block py-3 text-sm font-medium text-white hover:text-gear-purple"
              >
                AGV Helmets
              </Link>
            </li>
            <li>
              <Link 
                to="/accessories" 
                className="block py-3 text-sm font-medium text-white hover:text-gear-purple"
              >
                Accessories
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="block py-3 text-sm font-medium text-white hover:text-gear-purple"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
