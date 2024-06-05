/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		// Allow images from via.placeholder.com specifically (if necessary)
		remotePatterns: [
			{
				protocol: "https",
				hostname: "via.placeholder.com",
				port: "",
			},
		],

		// Optionally, consider a more permissive configuration for development:
		// (Remove this block if you prefer a stricter approach)
		unoptimized: true, // This disables image optimization for all images

		// Or, for a more targeted approach:
		// unoptimized: true, // Enable unoptimized mode for development only
		// loader: 'default', // Use the default image loader for development
	},
};

export default nextConfig;
