export default {
  "title": "Prashanna Rai",
  "tagline": "Passionate Developer who loves Full Stack development",
  "url": "https://rai-prashanna.github.io/",
  "baseUrl": "/",
  "favicon": "img/favicon.ico",
  "organizationName": "rai-prashanna",
  "projectName": "personal-website",
  "themeConfig": {
    "navbar": {
      "title": "Prashanna Rai",
      "logo": {
        "alt": "FullStack Developer, Sweden",
        "src": "img/avataaars.svg"
      },
      "items": [
        {
          "to": "docs/experience",
          "activeBasePath": "docs",
          "label": "More",
          "position": "left"
        },
        {
          "to": "docs/experience",
          "label": "Experience",
          "position": "left"
        },
        {
          "to": "docs/projects",
          "label": "Works",
          "position": "left"
        },
        {
          "to": "blog",
          "label": "Notes",
          "position": "left"
        },
        {
          "href": "https://github.com/rai-prashanna",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Community",
          "items": [
            {
              "label": "LinkedIn",
              "href": "https://linkedin.com/in/prashanna-rai"
            },
            {
              "label": "Stack Overflow",
              "href": "https://stackoverflow.com/users/patrick"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Blog",
              "to": "blog"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/rai-prashanna"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2023 Prashanna Rai. Built with Docusaurus."
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "metadatas": []
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "path": "docs",
          "sidebarPath": "/home/oem/workspace/rai-prashanna.github.io/sidebars.js"
        },
        "blog": {
          "showReadingTime": true,
          "feedOptions": {
            "type": "all",
            "copyright": "Copyright © 2023 Facebook, Inc."
          }
        },
        "theme": {
          "customCss": "/home/oem/workspace/rai-prashanna.github.io/src/css/custom.css"
        }
      }
    ]
  ],
  "onBrokenLinks": "throw",
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": []
};