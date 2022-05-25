import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/display-advertising-docs/search',
    component: ComponentCreator('/display-advertising-docs/search', '3f3'),
    exact: true
  },
  {
    path: '/display-advertising-docs/docs',
    component: ComponentCreator('/display-advertising-docs/docs', '9ca'),
    routes: [
      {
        path: '/display-advertising-docs/docs/banner-validation',
        component: ComponentCreator('/display-advertising-docs/docs/banner-validation', '8f4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/display-advertising-docs/docs/category/contributing',
        component: ComponentCreator('/display-advertising-docs/docs/category/contributing', 'f73'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/display-advertising-docs/docs/category/getting-started',
        component: ComponentCreator('/display-advertising-docs/docs/category/getting-started', '260'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/display-advertising-docs/docs/category/guides',
        component: ComponentCreator('/display-advertising-docs/docs/category/guides', 'e6b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/display-advertising-docs/docs/contributing/contributing-display-docs',
        component: ComponentCreator('/display-advertising-docs/docs/contributing/contributing-display-docs', '933'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/display-advertising-docs/docs/contributing/create-issue',
        component: ComponentCreator('/display-advertising-docs/docs/contributing/create-issue', '6d4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/display-advertising-docs/docs/getting-started/creating-a-new-project',
        component: ComponentCreator('/display-advertising-docs/docs/getting-started/creating-a-new-project', '34a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/display-advertising-docs/docs/getting-started/generate-a-build',
        component: ComponentCreator('/display-advertising-docs/docs/getting-started/generate-a-build', 'fb8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/display-advertising-docs/docs/getting-started/installation',
        component: ComponentCreator('/display-advertising-docs/docs/getting-started/installation', 'f98'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/display-advertising-docs/docs/getting-started/start-the-server',
        component: ComponentCreator('/display-advertising-docs/docs/getting-started/start-the-server', 'a10'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/display-advertising-docs/docs/getting-started/upload-a-preview',
        component: ComponentCreator('/display-advertising-docs/docs/getting-started/upload-a-preview', '052'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/display-advertising-docs/docs/guides/commands',
        component: ComponentCreator('/display-advertising-docs/docs/guides/commands', 'd41'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/display-advertising-docs/docs/guides/dataBind',
        component: ComponentCreator('/display-advertising-docs/docs/guides/dataBind', '9d2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/display-advertising-docs/docs/guides/dco',
        component: ComponentCreator('/display-advertising-docs/docs/guides/dco', '71d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/display-advertising-docs/docs/guides/extends-animation',
        component: ComponentCreator('/display-advertising-docs/docs/guides/extends-animation', '174'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/display-advertising-docs/docs/guides/font-subsetting',
        component: ComponentCreator('/display-advertising-docs/docs/guides/font-subsetting', 'cbe'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/display-advertising-docs/docs/guides/google-spreadsheets-feed',
        component: ComponentCreator('/display-advertising-docs/docs/guides/google-spreadsheets-feed', '595'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/display-advertising-docs/docs/guides/GSDevTools',
        component: ComponentCreator('/display-advertising-docs/docs/guides/GSDevTools', '84d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/display-advertising-docs/docs/guides/inline-svg',
        component: ComponentCreator('/display-advertising-docs/docs/guides/inline-svg', '2e6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/display-advertising-docs/docs/guides/using-handlebars',
        component: ComponentCreator('/display-advertising-docs/docs/guides/using-handlebars', '54a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/display-advertising-docs/docs/guides/using-utils',
        component: ComponentCreator('/display-advertising-docs/docs/guides/using-utils', '66d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/display-advertising-docs/docs/richmediarc',
        component: ComponentCreator('/display-advertising-docs/docs/richmediarc', 'a30'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/display-advertising-docs/',
    component: ComponentCreator('/display-advertising-docs/', '20d'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
