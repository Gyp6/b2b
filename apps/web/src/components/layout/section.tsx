import { cn } from '@/lib/utils.lib';

interface Props {
  className?: string;
}

export const Section = ({ className }: Props) => {
  return <section className={cn('', className)}></section>;
};
