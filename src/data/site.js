/**
 * Global site configuration and data
 * This file contains all the reusable site-wide variables like navigation,
 * social media links, company information, etc.
 */

export const siteData = {
  company: {
    name: "Creative Learning Haven",
    email: "creativelearninghaven.ug@gmail.com",
  },
  
  navigation: {
    main: [
      { title: "Home", href: "/" },
      { title: "About", href: "/about" },
      { title: "Support Us", href: "/support-us" },
      { title: "Events", href: "/events" },
      { title: "Blog", href: "/blog" },
      { title: "Contact", href: "/contact" },
    ],
  },
  
  social: {
    facebook: "https://www.facebook.com/creativelearninghaven",
    twitter: "https://twitter.com/creativelearninghvn",
    instagram: "https://www.instagram.com/creativelearninghaven/",
    youtube: "https://www.youtube.com/@creativelearninghaven",
  },
};

// You can also export individual sections for more granular imports
export const { company, navigation, social } = siteData;

// Example of how you could add computed values or environment variables:
// export const siteUrl = import.meta.env.PUBLIC_SITE_URL || 'https://creativelearninghaven.com';
// export const apiUrl = import.meta.env.PUBLIC_API_URL || 'https://api.creativelearninghaven.com';
