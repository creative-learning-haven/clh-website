/**
 * Global site configuration and data
 * This file contains all the reusable site-wide variables like navigation,
 * social media links, company information, etc.
 */

// Import images for activities
import groupStudyImg from '../assets/group_study.avif';
import groupPhotoImg from '../assets/group_photo.avif';
import womenGroupImg from '../assets/P1090543.jpg';
import backgroundImg from '../assets/background.svg';

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
  
  activities: [
    {
      image: backgroundImg,
      heading: "Community Libraries",
      text: "We establish and maintain libraries and learning spaces run by community members, providing access to educational resources."
    },
    {
      image: groupStudyImg,
      heading: "Literacy Classes",
      text: `<p>Schools in the settlements can have as many as 300 students per teacher. Many primary schoolers don't get the literacy education they need. To fill the gap, we offer literacy classes for students in primary 3 to 5. We cover the alphabet, basic phonics, and use the <a href="https://readinguniverse.org/article/explore-teaching-topics/features-of-structured-literacy-instruction/what-is-structured-literacy" target="_blank">Structured Literacy</a> approach. This way, students can benefit from the books in our libraries and beyond.</p>`
    },
    {
      image: groupPhotoImg,
      heading: "Creative Arts",
      text: `Visitors to our libraries want to draw, take photos, write, and tell stories. However, these activities have been historically undervalued in the settlements. We create space for art and creativity not only for the mental health benefits they provide, but to preserve the voices and stories of Imvepi and Rhino for future generations.`
    },
    {
      image: womenGroupImg,
      heading: "Women's Groups",
      text: `82% of refugees in the Imvepi and Rhino settlements are women and children. To address the needs of the women and girls in these communities, we have creative arts and income-generating activities for women. We will soon begin offering literacy classes for women as well.`
    },

  ],
};

// You can also export individual sections for more granular imports
export const { company, navigation, social, activities } = siteData;

// Example of how you could add computed values or environment variables:
// export const siteUrl = import.meta.env.PUBLIC_SITE_URL || 'https://creativelearninghaven.com';
// export const apiUrl = import.meta.env.PUBLIC_API_URL || 'https://api.creativelearninghaven.com';
