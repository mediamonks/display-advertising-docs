// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Display Advertising Documentation',
  tagline: 'All the documentation that you will need to create, develop and build display units.',
  url: 'https://mediamonks.github.io/display-advertising-docs/',
  baseUrl: '/display-advertising-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  deploymentBranch: 'gh-pages',
  organizationName: 'mediamonks',
  projectName: 'display-advertising-docs',
  trailingSlash: false,
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false
      },
      navbar: {
        title: 'Media.Monks DisplayAd',
        logo: {
          alt: 'Media.Monks DisplayAd',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'getting-started/installation',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/orgs/mediamonks/teams/display-advertising/repositories',
            label: 'GitHub repositories',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} - Media.Monks DisplayAd. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
