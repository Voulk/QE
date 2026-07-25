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

  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'QE', // Usually your GitHub org/user name.
  projectName: 'Questionably Epic', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
        gtag: {
          trackingID: 'G-EJKGNKKW9S',
          anonymizeIP: true,
        },
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
    image: 'img/QE-Social-Card.jpg',
    announcementBar: {
      id: 'support_us',
      content:
        'Welcome to the new site!',
      backgroundColor: '#B59D36',
      textColor: '#E5E5E5',
      isCloseable: true,
    },
    colorMode: {
      defaultMode: "dark",
    },
    navbar: {
      title: 'Questionably Epic',
      logo: {
        alt: 'My Site Logo',
        src: 'img/QELogo.ico',
      },
      items: [
        {href: 'https://questionablyepic.com/live', label: "QE Live App", position: 'left', target: '_self'},
        {
          type: 'dropdown',
          position: 'left',
          label: 'Articles',
          href: '/blog/',
          items: [
            {
              label: 'Midnight Embellishments',
              href: '/blog/midnight-embellishments',
            },
             {
              label: 'Season Three Raid Trinkets',
              href: '/blog/season-three-raid-trinkets',
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
        {to: '/mistweaver-monk/11.1-FAQ', label: 'Monk Guide', position: 'left'},
        {
          type: 'dropdown',
          position: 'left',
          label: 'Season 2 Raids',
          href: '/venomous-abyss/',
          to: '/venomous-abyss/',
          items: [
            {
              label: 'Table of Contents',
              to: '/venomous-abyss/',
            },
            {
              label: 'Venomous Abyss',
              to: '#',
              className: 'navbar-separator',
            },
            {
              label: 'Nek\'zali',
              to: '/venomous-abyss/nekzali',
            },
            {
              label: 'Entombed Sentinels',
              to: '/venomous-abyss/entombed-sentinels',
            },
            {
              label: 'Lost Explorers',
              to: '/venomous-abyss/lost-explorers',
            },
            {
              label: 'Vashnik',
              to: '/venomous-abyss/vashnik',
            },
            {
              label: "Sszorak",
              to: '/venomous-abyss/sszorak',
            },
            {
              label: 'Twin Fangs',
              to: '/venomous-abyss/twin-fangs',
            },
            {
              label: 'Coiled Altar',
              to: '/venomous-abyss/coiled-altar',
            },
            {
              label: 'Ula\'tek',
              to: '/venomous-abyss/ulatek',
            },
            {
              label: 'Tidebound Grotto',
              to: '#',
              className: 'navbar-separator',
            },
            {
              label: 'Nymrissa Wavecaller',
              to: '/venomous-abyss/nymrissa',
            },
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
