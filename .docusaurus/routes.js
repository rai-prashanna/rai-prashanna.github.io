
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','c28'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','bd9'),
  exact: true,
},
{
  path: '/blog/2019/05/28/docker',
  component: ComponentCreator('/blog/2019/05/28/docker','0bf'),
  exact: true,
},
{
  path: '/blog/2020/06/05/my-goal',
  component: ComponentCreator('/blog/2020/06/05/my-goal','3ce'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','a25'),
  exact: true,
},
{
  path: '/blog/tags/docker',
  component: ComponentCreator('/blog/tags/docker','0b4'),
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
