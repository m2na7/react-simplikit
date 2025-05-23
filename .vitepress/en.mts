import { defineConfig, DefaultTheme } from 'vitepress';
import { getSidebarItems } from './libs/getSidebarItems.mts';
import { sortByText } from './libs/sortByText.mts';
import { sourceRoot } from './shared.mts';

export const en = defineConfig({
  lang: 'en',
  themeConfig: {
    nav: nav(),
    sidebar: sidebar(),
    editLink: {
      pattern: 'https://github.com/toss/react-simplikit/edit/main/src/:path',
      text: 'Edit this page on GitHub',
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © ${new Date().getFullYear()} Viva Republica, Inc.`,
    },
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: 'Home', link: '/' },
    { text: 'Introduction', link: '/intro.html' },
    { text: 'Reference', link: '/hooks/useBooleanState.html' },
  ];
}

function sidebar(): DefaultTheme.Sidebar {
  return [
    {
      text: 'Guide',
      items: [
        { text: 'Introduction', link: '/intro' },
        { text: 'Why react-simplikit matters', link: '/why-react-simplikit-matters' },
        { text: 'Installation', link: '/installation' },
        { text: 'Design Principles', link: '/design-principles' },
        { text: 'Contributing', link: '/contributing' },
      ],
    },
    {
      text: 'Reference',
      items: sortByText([
        {
          text: 'Components',
          items: getSidebarItems(sourceRoot, 'components', '*'),
        },
        {
          text: 'Hooks',
          items: getSidebarItems(sourceRoot, 'hooks', '*'),
        },
        {
          text: 'Utils',
          items: getSidebarItems(sourceRoot, 'utils', '*'),
        },
      ]),
    },
  ];
}
