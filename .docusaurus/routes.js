import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'f54'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '1bc'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '37e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '405'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '792'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'eaf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '862'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '4e7'),
    exact: true
  },
  {
    path: '/blog/2023/08/01/hello-world',
    component: ComponentCreator('/blog/2023/08/01/hello-world', '587'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'f51'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '05d'),
    exact: true
  },
  {
    path: '/blog/tags/hello-world',
    component: ComponentCreator('/blog/tags/hello-world', '5c9'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'e66'),
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
    component: ComponentCreator('/', 'f6f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
