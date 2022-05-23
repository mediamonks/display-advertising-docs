import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: 'https://mediamonks.github.io/display-advertising-docs/search',
    component: ComponentCreator('https://mediamonks.github.io/display-advertising-docs/search', '505'),
    exact: true
  },
  {
    path: 'https://mediamonks.github.io/display-advertising-docs/docs',
    component: ComponentCreator('https://mediamonks.github.io/display-advertising-docs/docs', '471'),
    routes: [
      {
        path: 'https://mediamonks.github.io/display-advertising-docs/docs/banner-validation',
        component: ComponentCreator('https://mediamonks.github.io/display-advertising-docs/docs/banner-validation', '0b8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: 'https://mediamonks.github.io/display-advertising-docs/docs/category/contributing',
        component: ComponentCreator('https://mediamonks.github.io/display-advertising-docs/docs/category/contributing', '4b6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: 'https://mediamonks.github.io/display-advertising-docs/docs/category/getting-started',
        component: ComponentCreator('https://mediamonks.github.io/display-advertising-docs/docs/category/getting-started', 'bbd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: 'https://mediamonks.github.io/display-advertising-docs/docs/category/guides',
        component: ComponentCreator('https://mediamonks.github.io/display-advertising-docs/docs/category/guides', '3b3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: 'https://mediamonks.github.io/display-advertising-docs/docs/contributing/contributing-display-docs',
        component: ComponentCreator('https://mediamonks.github.io/display-advertising-docs/docs/contributing/contributing-display-docs', '86c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: 'https://mediamonks.github.io/display-advertising-docs/docs/contributing/create-issue',
        component: ComponentCreator('https://mediamonks.github.io/display-advertising-docs/docs/contributing/create-issue', 'cab'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: 'https://mediamonks.github.io/display-advertising-docs/docs/getting-started/creating-a-new-project',
        component: ComponentCreator('https://mediamonks.github.io/display-advertising-docs/docs/getting-started/creating-a-new-project', 'a58'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: 'https://mediamonks.github.io/display-advertising-docs/docs/getting-started/generate-a-build',
        component: ComponentCreator('https://mediamonks.github.io/display-advertising-docs/docs/getting-started/generate-a-build', '9b8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: 'https://mediamonks.github.io/display-advertising-docs/docs/getting-started/installation',
        component: ComponentCreator('https://mediamonks.github.io/display-advertising-docs/docs/getting-started/installation', '16c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: 'https://mediamonks.github.io/display-advertising-docs/docs/getting-started/start-the-server',
        component: ComponentCreator('https://mediamonks.github.io/display-advertising-docs/docs/getting-started/start-the-server', 'bac'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: 'https://mediamonks.github.io/display-advertising-docs/docs/getting-started/upload-a-preview',
        component: ComponentCreator('https://mediamonks.github.io/display-advertising-docs/docs/getting-started/upload-a-preview', 'b83'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: 'https://mediamonks.github.io/display-advertising-docs/docs/guides/commands',
        component: ComponentCreator('https://mediamonks.github.io/display-advertising-docs/docs/guides/commands', 'f9c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: 'https://mediamonks.github.io/display-advertising-docs/docs/guides/dataBind',
        component: ComponentCreator('https://mediamonks.github.io/display-advertising-docs/docs/guides/dataBind', '037'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: 'https://mediamonks.github.io/display-advertising-docs/docs/guides/dco',
        component: ComponentCreator('https://mediamonks.github.io/display-advertising-docs/docs/guides/dco', '427'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: 'https://mediamonks.github.io/display-advertising-docs/docs/guides/extends-animation',
        component: ComponentCreator('https://mediamonks.github.io/display-advertising-docs/docs/guides/extends-animation', '2ed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: 'https://mediamonks.github.io/display-advertising-docs/docs/guides/font-subsetting',
        component: ComponentCreator('https://mediamonks.github.io/display-advertising-docs/docs/guides/font-subsetting', '0ec'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: 'https://mediamonks.github.io/display-advertising-docs/docs/guides/google-spreadsheets-feed',
        component: ComponentCreator('https://mediamonks.github.io/display-advertising-docs/docs/guides/google-spreadsheets-feed', '318'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: 'https://mediamonks.github.io/display-advertising-docs/docs/guides/GSDevTools',
        component: ComponentCreator('https://mediamonks.github.io/display-advertising-docs/docs/guides/GSDevTools', 'f22'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: 'https://mediamonks.github.io/display-advertising-docs/docs/guides/inline-svg',
        component: ComponentCreator('https://mediamonks.github.io/display-advertising-docs/docs/guides/inline-svg', 'cbd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: 'https://mediamonks.github.io/display-advertising-docs/docs/guides/using-handlebars',
        component: ComponentCreator('https://mediamonks.github.io/display-advertising-docs/docs/guides/using-handlebars', '7aa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: 'https://mediamonks.github.io/display-advertising-docs/docs/guides/using-utils',
        component: ComponentCreator('https://mediamonks.github.io/display-advertising-docs/docs/guides/using-utils', '42a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: 'https://mediamonks.github.io/display-advertising-docs/docs/richmediarc',
        component: ComponentCreator('https://mediamonks.github.io/display-advertising-docs/docs/richmediarc', 'beb'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: 'https://mediamonks.github.io/display-advertising-docs/',
    component: ComponentCreator('https://mediamonks.github.io/display-advertising-docs/', '114'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
