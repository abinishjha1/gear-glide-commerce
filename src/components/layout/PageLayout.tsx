
import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { SidebarProvider } from '@/components/ui/sidebar';

interface PageLayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
}

export const PageLayout = ({ children, showSidebar = false }: PageLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col w-full">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </SidebarProvider>
  );
};
