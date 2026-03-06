import { HomeHero } from '@/components/sections/home/hero'
import { cn } from '@/lib/utils.lib'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <div className={cn('')}>
      <HomeHero />
    </div>
  );
};