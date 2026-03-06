import { cn } from '@/lib/utils.lib'

interface Props {
	className?: string;
}

export const Sidebar = ({ className }: Props) => {
	return (
		<aside className={cn('', className)}>
			
		</aside>
	);
};