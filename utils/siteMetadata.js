const siteMetadata = {
  title: 'Buzzer',
  author: 'HaivTech',
  headerTitle: 'The future of living',
  description:
    'We are determined to make living CONVENIENT for you while giving you time to do things that matters!',
  address: 'Ondo, Nigeria',
  currency: '₦',
  snippets: 'The future of living',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://colony.com.ng',
  siteRepo: 'https://github.com/HaivTech1/colonyHaiv',
  siteLogo: '/logo.png',
  image: '/logo.png',
  socialBanner: '/static/home.jpg',
  email: 'desk@colony.com.ng',
  phone: '09066100815',
  github: 'https://github.com/HiveTech1/colonyHaiv',
  twitter: 'https://twitter.com/colony',
  linkedin: 'https://www.linkedin.com/in/colony/',
  facebook: 'https://www.facebook.com/colony',
  instagram: 'https://www.instagram.com/colony',
  website: 'https://colony.com.ng',
  locale: 'en-US',
  analytics: {
    simpleAnalytics: true, // true or false
    googleAnalyticsId: 'G-2CJ7N2YNQK',
  },
  newsletter: {
    provider: 'emailOctopus',
  },
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      inputPosition: 'bottom',
      lang: 'en',
      darkTheme: 'dark',
      themeURL: '',
    },
  },
  socialAccount: {
    twitter: 'colony22',
  },
};

module.exports = siteMetadata;
