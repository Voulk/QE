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
  url: 'https://voulk.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/QE/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'QE', // Usually your GitHub org/user name.
  projectName: 'Questionably Epic', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  noIndex: true,

  plugins: [
    path.resolve(__dirname, './plugins/docusaurus-plugin-wowhead-tooltips'),
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'monk',
        path: 'mistweaver-monk',
        routeBasePath: 'mistweaver-monk',
        sidebarPath: './sidebarsMonk.ts',
        // ... other options
      },
    ],
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
        /*gtag: {
          trackingID: 'G-EJKGNKKW9S',
          anonymizeIP: true,
        },*/
        docs: {
          sidebarPath: './sidebars.ts',
          path: 'resto-druid',
          routeBasePath: 'resto-druid',
          //path: '',
        },
        blog: {
          blogTitle: "QE Articles",
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
      isCloseable: true,
    },
    navbar: {
      title: 'Questionably Epic',
      logo: {
        alt: 'My Site Logo',
        src: 'img/QELogo.ico',
      },
      items: [
        {href: 'https://questionablyepic.com/live', label: "QE Live App", position: 'left'},
        {
          type: 'dropdown',
          position: 'left',
          label: 'Articles',
          href: '/blog/',
          items: [
            {
              label: 'War Within Raid Trinkets',
              href: '/blog/war-within-raid-trinkets',
            },
            {
              label: 'QE Mythic+ Addon',
              href: '/blog/mythicplus-addon',
            },
            // ... more items
            
            {
              label: 'More',
              href: '/blog/',
            },
            
          ],
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Druid Guide',
          activeBasePath: 'resto-druid',
        },
        /*{
          type: 'docSidebar',
          //sidebarId: 'monkSidebar',
          position: 'left',
          label: 'Monk Guide',
          activeBasePath: 'monk',
          docsPluginId: 'monk',
        },*/
        {to: '/mistweaver-monk/heroTalents', label: 'Monk Guide', position: 'left'},
        {
          type: 'dropdown',
          position: 'left',
          label: 'Nerub\'ar Palace',
          //href: '/nerubar-palace/',
          items: [
            {
              label: 'Table of Contents',
              to: '/nerubar-palace/',
            },
            {
              label: 'Ulgrax',
              to: '/nerubar-palace/ulgrax',
            },
            {
              label: 'Bloodbound Horror',
              to: '/nerubar-palace/bloodbound-horror',
            },
            {
              label: 'Sikran',
              to: '/nerubar-palace/sikran',
            },
            {
              label: 'Rashanan',
              to: '/nerubar-palace/rashanan',
            },
            {
              label: "Broodtwister Ovi'nax",
              to: '/nerubar-palace/broodtwister-ovinax',
            },
            {
              label: 'Nexus Princess',
              to: '/nerubar-palace/nexus-princess',
            },
            {
              label: 'Silken Court',
              to: '/nerubar-palace/the-silken-court',
            },
            {
              label: 'Queen Ansurek',
              to: '/nerubar-palace/queen-ansurek',
            },

            // ... more items
          ],
        },
        /*{
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Monk Guide',
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },*/
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Gearing',
          items: [
            {
              label: 'QE Live',
              href: 'https://questionablyepic.com/live/',
            },
            {
              label: 'How-to Guide',
              href: 'https://www.wowhead.com/guide/how-to-use-qe-live-tool-guide',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Support the Site',
              href: 'https://patreon.com/questionablyepic',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/jBSGHDm5G8',
            },
            {
              label: 'Twitter',
              href: 'https://x.com/qe_wow',
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
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Questionably Epic. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
