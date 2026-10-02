export type HeroImage =
  | string
  | {
      src: string;
      focus?: string;
    };

export type SchoolConfig = {
  name: string;
  shortName: string;
  tagline: string;
  description: string;

  location: {
    district: string;
    province: string;
    country: string;
    latitude: number;
    longitude: number;
  };
  contact: {
    phone: string;
    email: string;
  };

  branding: {
    primary: string;
    secondary: string;
    accent: string;
  };

  /** Local path inside /public, e.g. "/images/logo.png". Falls back to a monogram. */
  logo?: string;

  /** Hero background photos, paths inside /public. First one loads first. */
  heroImages: readonly HeroImage[];

  /** Optional facts strip in the hero. Only show real numbers. */
  stats?: readonly { value: string; label: string }[];
};

export const schoolConfig: SchoolConfig = {
  name: "GS Gacuba 2A",

  shortName: "Gacuba 2A",

  tagline: "Learning Today. Leading Tomorrow.",

  description:
    "A school committed to providing quality education and developing confident, responsible learners.",

  location: {
    district: "Rubavu",
    province: "Western Province",
    country: "Rwanda",
    latitude: -1.68,
    longitude: 29.26,
  },

  contact: {
    phone: "+250 000 000 000",
    email: "info@school.rw",
  },

  branding: {
    primary: "#123B5D",
    secondary: "#2F80ED",
    accent: "#F4B942",
  },

  // logo: "/images/logo.png",

  heroImages: [
    "/images/gallery/images.jpg",
    "/images/gallery/images (1).jpg",
    "/images/gallery/30+ Top Fully Funded International Scholarships for African Students - See Full Guide.jpg",
  ],

  // stats: [
  //   { value: "1,200", label: "Students" },
  // ],
};
