import { LucideIcon } from 'lucide-react';
import { FC } from 'react';

export type TNavigation = {
  name?: string;
  label?: string;
  icon?: FC<LucideIcon>;
  href?: string;
  action?: () => void; // Для таких речей як router.back()
};
