import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/search',
    component: ComponentCreator('/search', '677'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '39c'),
    routes: [
      {
        path: '/docs/banner-validation',
        component: ComponentCreator('/docs/banner-validation', '9f0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/contributing',
        component: ComponentCreator('/docs/category/contributing', '9f4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/getting-started',
        component: ComponentCreator('/docs/category/getting-started', '01f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/guides',
        component: ComponentCreator('/docs/category/guides', '1cd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/contributing/contributing-display-docs',
        component: ComponentCreator('/docs/contributing/contributing-display-docs', '60f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/contributing/create-issue',
        component: ComponentCreator('/docs/contributing/create-issue', 'cf6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/getting-started/creating-a-new-project',
        component: ComponentCreator('/docs/getting-started/creating-a-new-project', '45b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/getting-started/generate-a-build',
        component: ComponentCreator('/docs/getting-started/generate-a-build', 'c31'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/getting-started/installation',
        component: ComponentCreator('/docs/getting-started/installation', '490'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/getting-started/start-the-server',
        component: ComponentCreator('/docs/getting-started/start-the-server', 'cad'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/getting-started/upload-a-preview',
        component: ComponentCreator('/docs/getting-started/upload-a-preview', '635'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/guides/commands',
        component: ComponentCreator('/docs/guides/commands', 'ebf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/guides/dataBind',
        component: ComponentCreator('/docs/guides/dataBind', '91c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/guides/dco',
        component: ComponentCreator('/docs/guides/dco', '97e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/guides/extends-animation',
        component: ComponentCreator('/docs/guides/extends-animation', '09a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/guides/font-subsetting',
        component: ComponentCreator('/docs/guides/font-subsetting', 'f9f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/guides/google-spreadsheets-feed',
        component: ComponentCreator('/docs/guides/google-spreadsheets-feed', 'fba'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/guides/GSDevTools',
        component: ComponentCreator('/docs/guides/GSDevTools', '1b1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/guides/inline-svg',
        component: ComponentCreator('/docs/guides/inline-svg', 'c07'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/guides/using-handlebars',
        component: ComponentCreator('/docs/guides/using-handlebars', '3b6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/guides/using-utils',
        component: ComponentCreator('/docs/guides/using-utils', '714'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/richmediarc',
        component: ComponentCreator('/docs/richmediarc', 'ead'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '9f4'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
