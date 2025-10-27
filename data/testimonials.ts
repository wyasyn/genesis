// types.ts or at the top of your data file
export interface Testimonial {
  name: string;
  role: string;
  content: string;
  stars: number;
  avatar: string;
}

// Sample testimonials data from clients
const testimonialsData: Testimonial[] = [
  {
    name: "David Thompson",
    role: "CEO, TechStart Solutions",
    content:
      "Working with this developer was a game-changer for our startup. They built our entire web platform from scratch and delivered ahead of schedule. The code quality is exceptional and they provided great insights throughout the project.",
    stars: 5,
    avatar: "DT",
  },
  {
    name: "Lisa Martinez",
    role: "Marketing Director, BrandFlow",
    content:
      "Our e-commerce site was struggling with performance issues. They completely rebuilt it and now it's lightning fast. Sales have increased by 40% since launch. Couldn't be happier with the results!",
    stars: 5,
    avatar: "LM",
  },
  {
    name: "Robert Kimani",
    role: "Founder, EduConnect Africa",
    content:
      "They understood our vision for an online learning platform and brought it to life beautifully. The mobile experience is seamless and our students love using it. Highly professional and responsive.",
    stars: 5,
    avatar: "RK",
  },
  {
    name: "Amanda Foster",
    role: "Operations Manager, LogiTrack",
    content:
      "We needed a custom inventory management system and they delivered exactly what we needed. The dashboard is intuitive and has saved our team countless hours. Worth every penny.",
    stars: 5,
    avatar: "AF",
  },
  {
    name: "Michael Chen",
    role: "Restaurant Owner, Fusion Bistro",
    content:
      "They built our online ordering and reservation system. Setup was smooth, and they even trained our staff on how to use it. Our customers love how easy it is to order. Great communication throughout!",
    stars: 5,
    avatar: "MC",
  },
  {
    name: "Priya Sharma",
    role: "HR Director, TalentHub",
    content:
      "Our recruitment portal needed a complete overhaul. They modernized everything and integrated it with our existing tools perfectly. The candidate experience has improved dramatically. A true professional!",
    stars: 5,
    avatar: "PS",
  },
  {
    name: "John Okello",
    role: "Clinic Administrator, HealthFirst",
    content:
      "They developed our patient management system with care and attention to detail. It's secure, HIPAA compliant, and our staff finds it easy to use. Excellent work and ongoing support.",
    stars: 5,
    avatar: "JO",
  },
  {
    name: "Sophie Williams",
    role: "Creative Director, PixelCraft Studio",
    content:
      "We needed a portfolio website that showcased our work beautifully. They exceeded expectations with stunning animations and a perfect mobile experience. Our client inquiries have tripled!",
    stars: 5,
    avatar: "SW",
  },
];

/**
 * Get a subset of testimonials
 * @param count - Number of testimonials to return (default: all)
 * @returns Array of testimonials
 */
export function getTestimonials(count?: number): Testimonial[] {
  if (!count) {
    return testimonialsData;
  }
  return testimonialsData.slice(0, count);
}

/**
 * Generate avatar URL using a placeholder service
 * You can replace this with your actual avatar storage solution
 * @param initials - User initials or identifier
 * @param size - Size of the avatar in pixels
 * @returns Avatar URL
 */
export function getAvatarUrl(initials: string, size: number = 48): string {
  // Option 1: Using UI Avatars (free service)
  const encodedInitials = encodeURIComponent(initials);
  return `https://ui-avatars.com/api/?name=${encodedInitials}&size=${size}&background=random&color=fff&bold=true`;

  // Option 2: Using DiceBear (more varied avatars)
  // return `https://api.dicebear.com/7.x/initials/svg?seed=${encodedInitials}&size=${size}`

  // Option 3: Using boring-avatars (geometric patterns)
  // return `https://source.boringavatars.com/beam/${size}/${encodedInitials}?colors=264653,2a9d8f,e9c46a,f4a261,e76f51`

  // Option 4: For production, use your own CDN
  // return `https://your-cdn.com/avatars/${initials}.jpg?w=${size}&h=${size}`
}

/**
 * Get a single testimonial by name
 * @param name - Name of the person
 * @returns Testimonial or undefined
 */
export function getTestimonialByName(name: string): Testimonial | undefined {
  return testimonialsData.find((t) => t.name === name);
}

/**
 * Get testimonials filtered by minimum star rating
 * @param minStars - Minimum star rating
 * @returns Filtered testimonials
 */
export function getTestimonialsByRating(minStars: number): Testimonial[] {
  return testimonialsData.filter((t) => t.stars >= minStars);
}
