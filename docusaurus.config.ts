import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import path from 'path';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Questionably Epic',
  tagline: 'World of Warcraft Theorycrafting',
  favicon: 'img/QELogo.ico',

  // Set the production url of your site here
  url: 'https://questionablyepic.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'QE', // Usually your GitHub org/user name.
  projectName: 'Questionably Epic', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  plugins: [
    path.resolve(__dirname, './plugins/docusaurus-plugin-wowhead-tooltips'),
  ],


  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  /*scripts: [
    "const whTooltips = {colorLinks: true, iconizeLinks: true, renameLinks: true};",
    {
      // External script for tooltips
      src: 'https://wow.zamimg.com/js/tooltips.js',
      async: true, // Optional: load script asynchronously
    },
  ],*/
  /*scripts: [
    "const whTooltips = {colorLinks: true, iconizeLinks: true, renameLinks: true};",
    "https://wow.zamimg.com/js/tooltips.js"
  ],*/


  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          path: 'druid',
          routeBasePath: 'druid',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    announcementBar: {
      id: 'support_us',
      content:
        'Welcome to the new site!',
      backgroundColor: '#B59D36',
      textColor: '#E5E5E5',
      isCloseable: false,
    },
    navbar: {
      title: 'Questionably Epic',
      logo: {
        alt: 'My Site Logo',
        src: 'img/QELogo.ico',
      },
      items: [
        {to: 'https://questionablyepic.com/live', label: "QE Live App", position: 'left'},
        {to: '/blog', label: 'Articles', position: 'left'},
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Druid Guide',
        },
        {to: '/monk', label: 'Monk Guide', position: 'left'},
        {to: '/palace', label: "Nerub'ar Palace", position: 'left'},
        /*{
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Monk Guide',
        },*/
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
