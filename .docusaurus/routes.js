import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '8a1'),
    exact: true
  },
  {
    path: '/blog/2023/08/01/hello-world',
    component: ComponentCreator('/blog/2023/08/01/hello-world', '0f7'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '78e'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '44e'),
    exact: true
  },
  {
    path: '/blog/tags/hello-world',
    component: ComponentCreator('/blog/tags/hello-world', 'be0'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '4f3'),
    routes: [
      {
        path: '/docs/all-apps',
        component: ComponentCreator('/docs/all-apps', 'd37'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/doc1',
        component: ComponentCreator('/docs/doc1', '392'),
        exact: true
      },
      {
        path: '/docs/experience',
        component: ComponentCreator('/docs/experience', 'c94'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/my-background',
        component: ComponentCreator('/docs/my-background', 'faa'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/projects',
        component: ComponentCreator('/docs/projects', '8e0'),
        exact: true,
        sidebar: "someSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '1dd'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
