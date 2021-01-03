module.exports = {
  title: "Prashanna Rai",
  tagline: `Passionate Developer who loves React`,
  url: "https://patrick.github.io",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "rai-prashanna", // Usually your GitHub org/user name.
  projectName: "personal-website", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Patrick Rai",
      logo: {
        alt: "FullStack Javascript Engineer, Nepal",
        src: "img/avataaars.svg",
      },
      items: [
        {
          to: "docs/experience",
          activeBasePath: "docs",
          label: "More",
          position: "left",
        },
        { to: "docs/experience", label: "Experience", position: "left" },
        { to: "docs/projects", label: "Works", position: "left" },

        { to: "blog", label: "Notes", position: "left" },
        {
          href: "https://github.com/rai-prashanna",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "LinkedIn",
              href: "https://linkedin.com/in/prashanna-rai",
            },
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/users/patrick",
            }
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/rai-prashanna",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Prashanna Rai. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          path: 'docs',
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: "all",
            copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc.`,
          },
          // Please change this to your repo.
          // editUrl:
          // "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
