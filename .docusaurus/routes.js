
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','473'),
  
  routes: [
{
  path: '/docs/all-apps',
  component: ComponentCreator('/docs/all-apps','6a0'),
  exact: true,
},
{
  path: '/docs/doc1',
  component: ComponentCreator('/docs/doc1','392'),
  exact: true,
},
{
  path: '/docs/experience',
  component: ComponentCreator('/docs/experience','b9e'),
  exact: true,
},
{
  path: '/docs/my-background',
  component: ComponentCreator('/docs/my-background','848'),
  exact: true,
},
{
  path: '/docs/projects',
  component: ComponentCreator('/docs/projects','e3a'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
