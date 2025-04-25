
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton
} from '@/components/ui/sidebar';

// Define the product categories for bikes
const categories = [
  { name: "AGV Helmets", url: "/categories/agv-helmets", subcategories: [
    { name: "Full Face Helmets", url: "/categories/agv-helmets/full-face" },
    { name: "Sport Helmets", url: "/categories/agv-helmets/sport" },
    { name: "Touring Helmets", url: "/categories/agv-helmets/touring" },
  ]},
  { name: "Riding Gear", url: "/categories/riding-gear", subcategories: [
    { name: "Jackets", url: "/categories/riding-gear/jackets" },
    { name: "Gloves", url: "/categories/riding-gear/gloves" },
    { name: "Pants", url: "/categories/riding-gear/pants" },
    { name: "Boots", url: "/categories/riding-gear/boots" },
  ]},
  { name: "Accessories", url: "/categories/accessories", subcategories: [
    { name: "Helmet Accessories", url: "/categories/accessories/helmet" },
    { name: "Bike Accessories", url: "/categories/accessories/bike" },
    { name: "Rider Accessories", url: "/categories/accessories/rider" },
  ]},
];

export const CategorySidebar = () => {
  return (
    <Sidebar className="border-r border-gear-purple/20 h-full">
      <SidebarContent className="p-0">
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg font-bold px-4 pt-4 text-gear-purple">
            Categories
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {categories.map((category) => (
                <div key={category.name}>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild className="text-white hover:text-gear-purple">
                      <Link to={category.url}>{category.name}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  
                  {category.subcategories && (
                    <div className="pl-4 border-l border-gear-purple/20 ml-4 mb-2">
                      {category.subcategories.map((subcategory) => (
                        <SidebarMenuItem key={subcategory.name}>
                          <SidebarMenuButton asChild className="text-sm text-gear-neutral hover:text-gear-purple">
                            <Link to={subcategory.url}>{subcategory.name}</Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg font-bold px-4 pt-2 text-gear-purple">
            Brands
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {["AGV", "Dainese", "Alpinestars", "Shoei"].map((brand) => (
                <SidebarMenuItem key={brand}>
                  <SidebarMenuButton asChild className="text-white hover:text-gear-purple">
                    <Link to={`/brands/${brand.toLowerCase()}`}>{brand}</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
