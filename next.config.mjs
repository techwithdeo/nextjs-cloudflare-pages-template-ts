import {
	PHASE_DEVELOPMENT_SERVER
} from "next/constants.js";

/**
 * Next.js Configuration function
 *
 * @typedef {import("next").NextConfig} NextConfig
 *
 * @type {(phase: string, next: { defaultConfig: NextConfig }) => NextConfig}
 */
const nextConfig = () => ({
	images: {
		/**
		 * Since @cloudflare/next-on-pages does not support image optimization
		 * But you can use loaders if you have access cloudflare image optimization
		*/
		unoptimized: true
	},
	async redirects() {
		return [
			{
				source: "/home",
				destination: "/",
				permanent: true
			}
		];
	}
});

/**
 * Cloudflare Bindings function for Local Development Mode
 *
 * @typedef {import("@cloudflare/next-on-pages/next-dev").DevBindingsOptions} DevBindingsOptions
 * @typedef {import("next").NextConfig} NextConfig
 *
 * @type {(phase: string, next: { defaultConfig: NextConfig }) => DevBindingsOptions}
 */
const devBindings = () => ({
	bindings: {
		MY_VAR: {
			type: "var",
			value: "value-from-next-dev-submodule"
		}
	}
});

/**
 * Main function for Next.js Configuration
 *
 * @typedef {import("next").NextConfig} NextConfig
 *
 * @type {(phase: string, next: { defaultConfig: NextConfig }) => NextConfig}
 */
const nextConfigFunction = async (phase, next) => {
	const nextConfigObject = nextConfig(phase, next);
	let NEXT_CONFIG = nextConfigObject;

	// Setup Cloudflare Bindings for Development Mode
	if (phase === PHASE_DEVELOPMENT_SERVER) {
		const { setupDevBindings } = await import(
			"@cloudflare/next-on-pages/next-dev"
		);

		const devBindingsObject = devBindings(phase, next);
		await setupDevBindings(devBindingsObject);
	}

	return NEXT_CONFIG;
};

export default nextConfigFunction;
