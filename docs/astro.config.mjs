// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Germantown Symphony Orchestra',
			description: 'Documentation for the GSO website and administration',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/AMDphreak/gso-site' },
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Introduction', slug: 'guides/introduction' },
						{ label: 'Installation', slug: 'guides/installation' },
					],
				},
				{
					label: 'Administration',
					items: [
						{ label: 'Authentication', slug: 'guides/authentication' },
						{ label: 'Content Management', slug: 'guides/content-management' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
	output: 'static',
	outDir: '../dist/docs',
	server: {
		port: 4322,
	},
});
