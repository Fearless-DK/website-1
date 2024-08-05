import {  getHomePermalink, getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getHomePermalink(),
    },
    {
      text: 'Conditions',
      href: getPermalink('/conditionshome'),
      /*links: [
        {
          text: 'Shoulder',
          href: getPermalink('/conditionshome#Shoulder'),
        },
        {
          text: 'Elbow',
          href: getPermalink('/conditionshome#Elbow'),
        },
        {
          text: 'Hip',
          href: getPermalink('/conditionshome#Hip'),
        },
        {
          text: 'Knee',
          href: getPermalink('/conditionshome#Knee'),
        },
      ],*/
    },
    {
      text: 'Treatments',
      href: getPermalink('/treatments'),
    },
    {
      text: 'Gallery',
      href: getPermalink('/gallery'),
    },
    {
      text: "ArthroSurgeon's Book",
      href: getPermalink('/books'),
      icon: 'mdi:new-box',
      
    },
    {
      text: 'About',
      href: getPermalink('/personal'),
    },
    /*
    {
      text: 'Conditions',
      links: [
        {
          text: 'SaaS',
          href: getPermalink('/homes/saas'),
        },
        {
          text: 'Startup',
          href: getPermalink('/homes/startup'),
        },
        {
          text: 'Mobile App',
          href: getPermalink('/homes/mobile-app'),
        },
        {
          text: 'Personal',
          href: getPermalink('/homes/personal'),
        },
      ],
    },
    {
      text: 'Treatment',
      links: [
        {
          text: 'Features (Anchor Link)',
          href: getPermalink('/#features'),
        },
        {
          text: 'Services',
          href: getPermalink('/services'),
        },
        {
          text: 'Pricing',
          href: getPermalink('/pricing'),
        },
        {
          text: 'About us',
          href: getPermalink('/about'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
      ],
    },*/
    
    /*
    {
      text: 'Landing',
      links: [
        {
          text: 'Lead Generation',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: 'Long-form Sales',
          href: getPermalink('/landing/sales'),
        },
        {
          text: 'Click-Through',
          href: getPermalink('/landing/click-through'),
        },
        {
          text: 'Product Details (or Services)',
          href: getPermalink('/landing/product'),
        },
        {
          text: 'Coming Soon or Pre-Launch',
          href: getPermalink('/landing/pre-launch'),
        },
        {
          text: 'Subscription',
          href: getPermalink('/landing/subscription'),
        },
      ],
    },*/
    // {
    //   text: 'Blog',
    //   href: getBlogPermalink(),
      /*links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],*/
  //   },
  // ],
  //actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
// };
    ],};

export const footerData = {
  links: [
    {
      title: 'Conditions',
      links: [
        { text: 'Shoulder Conditions', href: '/conditionshome#Shoulder' },
        { text: 'Elbow Conditions', href: '/conditionshome#Elbow' },
        { text: 'Hip Conditions', href: '/conditionshome#Hip' },
        { text: 'Knee Conditions', href: '/conditionshome#Knee' },
      ],
    },
    {
      title: 'Treatments',
      links: [
        { text: 'Surgical Treatments', href: '/treatments#surgicaltreatments' },
        { text: 'Non Surgical Treatments', href: '/treatments#nonsurgicaltreatments' },
      ],
    },
    {
      title: 'Quick Links',
      links: [
        { text: 'Home', href: '/' },
        { text: 'Conditions', href: '/conditionshome' },
        { text: 'Treatments', href: '/treatments' },
        { text: 'Gallery', href: '/gallery' },
        { text: "ArthroSurgeon's Book", href: '/books' ,icon: 'mdi:new-box',},
        { text: 'About', href: '/personal' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'E-Mail:<a class="text-amber-400 hover:text-amber-600"href="mailto:dcrules@gmail.com">dcrules@gmail.com</a>', href:'mailto:dcrules@gmail.com' },
    { text: 'For Appointments,Call:<a class="text-amber-400 hover:text-amber-600 " href="tel:9940349640">9940349640</a>', href:'tel:9940349640'},
  ],
  socialLinks: [
    // { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/arthrosurgeon/reels/', target: '_blank' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/DrDineshChoudary/', target:'_blank' },
    { ariaLabel: 'Youtube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/playlist?list=PLk1o7HXwMA8JC_G1mnJNY4s-8hW9BLlBB' },
    // { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <a class="text-[#cffdfc]">
    Made by </a> <a class="text-amber-400 hover:text-amber-600 underline" href="https://saivalabs.com/"  target:'_blank'> SaivaLabs</a> <a class="text-[#cffdfc]">All rights reserved.</a>
  `,
};



/*
<span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(~/assets/images/Brainstack.png)]"></span>
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
      title: 'Quick Links',
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
*/