import { REMOTE_PATTERNS } from '@repo/shared/data'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	images: {
		remotePatterns: REMOTE_PATTERNS,
	},
	reactCompiler: true,
	cacheComponents: true,
}

export default nextConfig
