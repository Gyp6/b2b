import { cn } from '@/lib/utils.lib';

interface Props {
  className?: string;
}

export const Header = ({ className }: Props) => {
  return <header className={cn('', className)}></header>;
};
