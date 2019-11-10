const { fs, path } = require("@vuepress/shared-utils");
const package = require("../../package.json");
console.log(`test:${package.version}`);


module.exports = ctx => ({
  base: `/${package.dir}/${package.version}/`,
  dest: "dist",
  title: package.name,
  description: package.description,
  theme: 'idg',
  markdown: {
    extendMarkdown: md => {
      md.set({ html: true })
      md.use(require('markdown-it-katex'))
      md.use(require('markdown-it-plantuml'))
      md.use(require('markdown-it-admonition'))
    }
  },
  head: [
    ["link", { rel: "icon", href: `/logo.png` }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: `/icons/apple-touch-icon-152x152.png` }
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/icons/safari-pinned-tab.svg",
        color: "#3eaf7c"
      }
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/icons/msapplication-icon-144x144.png"
      }
    ],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }]
  ],
  themeConfig: {
    // repo: "evildoerX/did-docs",
    editLinks: true,
    docsDir: "packages/docs/docs",
    editLinkText: "在 GitHub 上编辑此页",
    lastUpdated: "上次更新",
    nav: require("./nav"),
    sidebar: {
      "/dids/": getGuideSidebar("指南", "深入"),
      "/w3c/": getW3cSidebar(),
      "/didserver/": getDIDServiceSidebar(),
      "/idg/": getIdgSidebar(),
      "/protocol/code/":getProtocolBar(),
      "/protocol/design/":getProtocolBar(),
      "/didService/":getDIDServiceBar(),
      "/did-resolution/":getDIDServiceBar(),
      "/vc-data-model/":getDIDServiceBar()
    }
  },
  plugins: [
    ["flowchart", true],
    ["@vuepress/back-to-top", true],
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: true
      }
    ],
    ["@vuepress/medium-zoom", true],
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-128189152-1"
      }
    ],
    [
      "container",
      {
        type: "vue",
        before: '<pre class="vue-container"><code>',
        after: "</code></pre>"
      }
    ],
    [
      "container",
      {
        type: "upgrade",
        before: info => `<UpgradePath title="${info}">`,
        after: "</UpgradePath>"
      }
    ]
  ],
  extraWatchFiles: [".vuepress/nav/index.js"]
});

function getW3cSidebar() {
  return [
    {
      title: "指南",
      collapsable: false,
      sidebarDepth: 2,
      children: [
        "",
      ]
    },
    {
      title: "深入",
      collapsable: false,
      sidebarDepth: 2,
      children: [
        'abnf',
        'ld-cryptosuite-registry'
      ]
    }
  ];
}

function getDIDServiceSidebar (){
  return [
    {
      // title: "指南",
      collapsable: false,
      sidebarDepth: 2,
      children: [
        "",
        'DIDSystem',
        'DIDDesign'
      ]
    }
    
  ];
}

function getGuideSidebar(groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      sidebarDepth: 2,
      children: ["Guide"]
    },
    {
      title: groupB,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        "",
        "Terminology",
        "DataModel",
        "DecentralizedIdentifiers",
        "DIDDocuments",
        "DIDDocumentSyntax",
        "DIDMethods",
        "Resolvers",
        "SecurityConsiderations",
        "PrivacyConsiderations",
        "FutureWork",
        "Registries",
        "RealWorldExample",
        "References"
      ]
    }
  ];
}

function getIdgSidebar (){
  return [
    {
      // title: "指南",
      collapsable: false,
      sidebarDepth: 2,
      children: [
        "",
        "Service"
      ]
    }
    
  ];
}

function getProtocolBar (){
  return [
    {
      // title: "指南",
      collapsable: false,
      sidebarDepth: 2,
      children: [
        ""
      ]
    }
    
  ];
}

function getDIDServiceBar (){
  return [
    {
      // title: "指南",
      collapsable: false,
      sidebarDepth: 2,
      children: [
        ""
      ]
    }
    
  ];
}