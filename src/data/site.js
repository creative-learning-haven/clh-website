/**
 * Global site configuration and data
 * This file contains all the reusable site-wide variables like navigation,
 * social media links, company information, etc.
 */

// Import images for activities
import groupStudyImg from '../assets/group_study.avif';
import libraryImg from '../assets/library.avif';
import paintingImg from '../assets/painting.avif';
import womanKnittingImg from '../assets/woman_knitting.avif';
import paintingOfWomanImg from '../assets/painting_of_woman.avif';

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
      { title: "Art", href: "/art" },
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
      image: libraryImg,
      heading: "Community Libraries",
      text: "We establish and maintain libraries and learning spaces run by community members, providing access to educational resources. When you enter one of our libraries, our library team explains the book categorization system, recommends books, and introduces new activities."
    },
    {
      image: groupStudyImg,
      heading: "Literacy Classes",
      text: `<p>Schools in the settlements can have as many as 300 students per teacher. Many primary schoolers don't get the literacy education they need. To fill the gap, we offer literacy classes for students in primary 3 to 5. We cover the alphabet, basic phonics, and use the <a href="https://readinguniverse.org/article/explore-teaching-topics/features-of-structured-literacy-instruction/what-is-structured-literacy" target="_blank">Structured Literacy</a> approach. This way, students can benefit from the books in our libraries and beyond.</p>`
    },
    {
      image: paintingImg,
      heading: "Creative Activities",
      text: `Visitors to our libraries want to draw, take photos, write, and tell stories. However, these activities have been historically undervalued in the settlements. Our activities include drawing and painting, creative writing, video workshops and a media team. We create space for art and creativity not only for the mental health benefits they provide, but to preserve the voices and stories of Imvepi and Rhino for future generations.`
    },
    {
      image: womanKnittingImg,
      heading: "Women's Groups",
      text: `82% of refugees in the Imvepi and Rhino settlements are women and children. To address the needs of the women and girls in these communities, we have creative arts and income-generating activities for women. We will soon begin offering literacy classes for women as well.`
    },
    {
      image: paintingOfWomanImg,
      heading: "Art Pen Pals",
      text: `Students in Winchester, MA are paired with students in Imvepi Refugee Camp to exchange pen pal emails and art they create in response to shared prompts. We have showcases of our pen pals' work coming up this fall. Check out our <a href="/events">events page</a> for more details!`
    }
  ],
};

// You can also export individual sections for more granular imports
export const { company, navigation, social, activities } = siteData;

// Example of how you could add computed values or environment variables:
// export const siteUrl = import.meta.env.PUBLIC_SITE_URL || 'https://creativelearninghaven.com';
// export const apiUrl = import.meta.env.PUBLIC_API_URL || 'https://api.creativelearninghaven.com';
