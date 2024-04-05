import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      links: [
        {
          text: 'SaaS',
          href: getPermalink('/homes/saas'),
          icon: "tabler:download"
        },
        {
          text: 'Startup',
          href: getPermalink('/homes/startup'),
          icon: "tabler:download"
        },
        {
          text: 'Mobile App',
          href: getPermalink('/homes/mobile-app'),
          icon: "tabler:download"
        },
        {
          text: 'Personal',
          href: getPermalink('/homes/personal'),
          icon: "tabler:download"
        },
      ],
    },
    {
      text: 'Pages',
      links: [
        {
          text: 'Features (Anchor Link)',
          href: getPermalink('/#features'),
          icon: "tabler:download"
        },
        {
          text: 'Services',
          href: getPermalink('/services'),
          icon: "tabler:download"
        },
        {
          text: 'Pricing',
          href: getPermalink('/pricing'),
          icon: "tabler:download"
        },
        {
          text: 'About us',
          href: getPermalink('/about'),
          icon: "tabler:download"
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
          icon: "tabler:download"
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
          icon: "tabler:download"
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
          icon: "tabler:download"
        },
      ],
    },
    {
      text: 'Landing',
      links: [
        {
          text: 'Lead Generation',
          href: getPermalink('/landing/lead-generation'),
          icon: "tabler:download"
        },
        {
          text: 'Long-form Sales',
          href: getPermalink('/landing/sales'),
          icon: "tabler:download"
        },
        {
          text: 'Click-Through',
          href: getPermalink('/landing/click-through'),
          icon: "tabler:download"
        },
        {
          text: 'Product Details (or Services)',
          href: getPermalink('/landing/product'),
          icon: "tabler:download"
        },
        {
          text: 'Coming Soon or Pre-Launch',
          href: getPermalink('/landing/pre-launch'),
          icon: "tabler:download"
        },
        {
          text: 'Subscription',
          href: getPermalink('/landing/subscription'),
          icon: "tabler:download"
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
          icon: "tabler:download"
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
          icon: "tabler:download"
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
          icon: "tabler:download"
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
          icon: "tabler:download"
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
          icon: "tabler:download"
        },
      ],
    },
    {
      text: 'Case Studies',
      href: '#',
      icon: "tabler:download"
    },
  ],
  actions: [{ text: 'Sign In', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
