import { cn } from '@/lib/utils.lib'

interface Props {
	className?: string;
}

export const Footer = ({ className }: Props) => {
	return (
		<footer className={cn('', className)}>
			
		</footer>
	);
};