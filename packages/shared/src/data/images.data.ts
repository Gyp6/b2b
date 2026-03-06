// packages/shared/src/data/images.ts

export const REMOTE_PATTERNS = [
	{
		protocol: 'http' as const,
		hostname: 'localhost',
		port: '4200',
		pathname: '/uploads/**',
	},
	{
		protocol: 'https' as const,
		hostname: 'api-electronic-my.vercel.app',
		port: '',
		pathname: '/uploads/**',
	},
	{
		protocol: 'https' as const,
		hostname: 'lh3.googleusercontent.com',
	},
	{
		protocol: 'https' as const,
		hostname: 'img.freepik.com',
	},
	{
		protocol: 'https' as const,
		hostname: 'placehold.co',
	},
	{
		protocol: 'https' as const,
		hostname: 'images.unsplash.com',
	},
	{
		protocol: 'https' as const,
		hostname: 'cdn.media.amplience.net',
	},
	{
		protocol: 'https' as const,
		hostname: 'www.astroshop.de',
	},
	{
		protocol: 'https' as const,
		hostname: 'marketing.brain.com.ua',
	},
	{
		protocol: 'https' as const,
		hostname: 'encrypted-tbn1.gstatic.com',
	},
	{
		protocol: 'https' as const,
		hostname: 'www.checkcharm.com',
	},
	{
		protocol: 'https' as const,
		hostname: 'i.pinimg.com',
	},
	{
		protocol: 'https' as const,
		hostname: 'alfa-server.com.ua',
	},
	{
		protocol: 'https' as const,
		hostname: 'www.shutterstock.com',
	},
	{
		protocol: 'https' as const,
		hostname: 'artline.ua',
	},
	{
		protocol: 'https' as const,
		hostname: 'gadgetspage.com',
	},
]

export const IMAGE_DOMAINS = ['localhost', 'api-electronic-my.vercel.app', 'electronic-my.vercel.app']
