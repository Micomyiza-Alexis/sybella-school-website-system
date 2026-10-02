export type PageSection =
  | {
      type: "intro";
      id: string;
      eyebrow?: string;
      title: string;
      description: string;
    }
  | {
      type: "story";
      id: string;
      eyebrow?: string;
      title: string;
      description: string;
      image: string;
      imageAlt: string;
      highlights: string[];
    }
  | {
      type: "mission";
      id: string;
      eyebrow?: string;
      title: string;
      mission: {
        title: string;
        description: string;
      };
      vision: {
        title: string;
        description: string;
      };
    }
  | {
      type: "values";
      id: string;
      eyebrow?: string;
      title: string;
      description?: string;
      items: {
        number: string;
        title: string;
        description: string;
      }[];
    }
  | {
      type: "leadership";
      id: string;
      eyebrow?: string;
      title: string;
      description: string;
      image: string;
      imageAlt: string;
      groups: {
        title: string;
        description: string;
      }[];
    }
  | {
      type: "facilities";
      id: string;
      eyebrow?: string;
      title: string;
      description: string;
      images: {
        src: string;
        alt: string;
      }[];
      items: {
        title: string;
        description: string;
      }[];
    }
  | {
      type: "cards";
      id: string;
      eyebrow?: string;
      title: string;
      description?: string;
      items: {
        title: string;
        description: string;
        href?: string;
      }[];
    }
  | {
      type: "steps";
      id: string;
      eyebrow?: string;
      title: string;
      description?: string;
      items: {
        number: string;
        title: string;
        description: string;
      }[];
    }
  | {
      type: "timeline";
      id: string;
      eyebrow?: string;
      title: string;
      description?: string;
      items: {
        title: string;
        description: string;
      }[];
    }
  | {
      type: "gallery";
      id: string;
      eyebrow?: string;
      title: string;
      description?: string;
      images: {
        src: string;
        alt: string;
        caption?: string;
      }[];
    }
  | {
      type: "contact";
      id: string;
      eyebrow?: string;
      title: string;
      description?: string;
    };
export type PageConfig = {
  title: string;
  description: string;
  sections: PageSection[];
};

export type PageKey = "about" | "academics" | "student-life" | "contact";

export const pages: Record<PageKey, PageConfig> = {
  about: {
    title: "More Than a School. A Place to Grow.",
    description:
      "Discover the people, values, and environment that shape the experience of learning at our school.",

    sections: [
      {
        type: "story",
        id: "story",
        eyebrow: "Our Story",
        title: "Building a strong foundation for every learner.",
        description:
          "Our school is committed to creating a supportive environment where students are encouraged to learn with curiosity, grow with confidence, and develop the character and skills they need for the future.",
        image: "/images/gallery/images.jpg",
        imageAlt: "Students learning at school",
        highlights: [
          "Learner-centered education",
          "Strong academic foundations",
          "Character and leadership development",
        ],
      },

      {
        type: "mission",
        id: "purpose",
        eyebrow: "Our Purpose",
        title: "What guides everything we do.",
        mission: {
          title: "Our Mission",
          description:
            "To provide quality education that develops knowledge, character, creativity, and practical skills.",
        },
        vision: {
          title: "Our Vision",
          description:
            "To nurture responsible, confident, and capable young people prepared to contribute positively to society.",
        },
      },

      {
        type: "values",
        id: "values",
        eyebrow: "What We Believe",
        title: "Values that shape everyday school life.",
        description:
          "Our values influence how we learn, lead, collaborate, and care for one another.",
        items: [
          {
            number: "01",
            title: "Respect",
            description:
              "We create an environment where every learner is valued and treated with dignity.",
          },
          {
            number: "02",
            title: "Integrity",
            description:
              "We encourage honesty, responsibility, and doing what is right.",
          },
          {
            number: "03",
            title: "Excellence",
            description:
              "We challenge learners to pursue meaningful growth and give their best.",
          },
          {
            number: "04",
            title: "Responsibility",
            description:
              "We help students understand their role in their school and wider community.",
          },
          {
            number: "05",
            title: "Collaboration",
            description:
              "We believe students grow through cooperation, communication, and shared experiences.",
          },
          {
            number: "06",
            title: "Lifelong Learning",
            description:
              "We encourage curiosity and a mindset that continues beyond the classroom.",
          },
        ],
      },

      {
        type: "leadership",
        id: "leadership",
        eyebrow: "Our People",
        title: "People who make the difference.",
        description:
          "A strong school community depends on people who care deeply about learning, student wellbeing, and the future of every learner.",
        image: "/images/gallery/images (1).jpg",
        imageAlt: "School community",
        groups: [
          {
            title: "School Leadership",
            description:
              "School leaders guide academic direction, student welfare, and long-term development.",
          },
          {
            title: "Teaching Team",
            description:
              "Dedicated teachers support students through engaging lessons, mentorship, and continuous assessment.",
          },
          {
            title: "Support Staff",
            description:
              "Our wider team helps create a welcoming, reliable, and supportive experience for students and families.",
          },
        ],
      },

      {
        type: "facilities",
        id: "facilities",
        eyebrow: "Our Campus",
        title: "Spaces designed for learning and belonging.",
        description:
          "From classrooms to shared spaces, our environment is designed to support learning, creativity, collaboration, and student wellbeing.",
        images: [
          {
            src: "/images/gallery/images.jpg",
            alt: "School learning environment",
          },
          {
            src: "/images/gallery/images (1).jpg",
            alt: "Students at school",
          },
        ],
        items: [
          {
            title: "Classrooms",
            description:
              "Comfortable learning spaces designed for focused teaching and active participation.",
          },
          {
            title: "Learning Resources",
            description:
              "Resources that help students explore subjects beyond the basic classroom experience.",
          },
          {
            title: "Student Spaces",
            description:
              "Shared spaces that encourage interaction, creativity, recreation, and community.",
          },
        ],
      },
    ],
  },

  academics: {
    title: "Academics",
    description:
      "Explore our curriculum, admissions process, and academic calendar.",
    sections: [
      {
        type: "intro",
        id: "curriculum",
        eyebrow: "Curriculum",
        title: "Learning that prepares students for the future",
        description:
          "Our academic approach combines strong foundations with practical learning, critical thinking, creativity, and character development.",
      },
      {
        type: "steps",
        id: "admissions",
        eyebrow: "Admissions",
        title: "How to Apply",
        description:
          "A simple process to help families understand and complete admission.",
        items: [
          {
            number: "01",
            title: "Make an Enquiry",
            description:
              "Contact the school or visit our campus to learn about available programmes and requirements.",
          },
          {
            number: "02",
            title: "Submit an Application",
            description:
              "Complete the application with the required student and parent information.",
          },
          {
            number: "03",
            title: "Complete the Assessment",
            description:
              "Where applicable, students complete the required assessment or admission process.",
          },
          {
            number: "04",
            title: "Confirm Enrolment",
            description:
              "Complete the final admission requirements and prepare for the start of the academic year.",
          },
        ],
      },
      {
        type: "timeline",
        id: "calendar",
        eyebrow: "Academic Calendar",
        title: "Important Academic Periods",
        description:
          "A clear overview of the major periods in the school year.",
        items: [
          {
            title: "Term One",
            description:
              "Opening of the academic year, foundation learning, and first assessments.",
          },
          {
            title: "Term Two",
            description:
              "Continued academic development, projects, activities, and mid-year assessments.",
          },
          {
            title: "Term Three",
            description:
              "Final learning period, examinations, results, and preparation for the next academic year.",
          },
        ],
      },
    ],
  },

  "student-life": {
    title: "Student Life",
    description:
      "Discover activities, sports, events, and experiences beyond the classroom.",
    sections: [
      {
        type: "intro",
        id: "clubs",
        eyebrow: "Clubs & Activities",
        title: "Learning continues beyond the classroom",
        description:
          "Students have opportunities to explore interests, build confidence, work with others, and discover new talents.",
      },
      {
        type: "cards",
        id: "sports",
        eyebrow: "Sports",
        title: "Active, healthy, and connected",
        items: [
          {
            title: "Team Sports",
            description:
              "Opportunities for students to participate in team-based sporting activities.",
          },
          {
            title: "Fitness & Recreation",
            description:
              "Activities that encourage movement, healthy habits, and personal wellbeing.",
          },
          {
            title: "Competition",
            description:
              "Students develop teamwork, discipline, confidence, and sportsmanship through competition.",
          },
        ],
      },
      {
        type: "gallery",
        id: "gallery",
        eyebrow: "Gallery",
        title: "Life Around Our School",
        description:
          "A visual collection of learning, activities, events, and everyday school moments.",
        images: [
          {
            src: "/images/gallery/gallery-1.jpg",
            alt: "Students learning at school",
          },
          {
            src: "/images/gallery/gallery-2.jpg",
            alt: "Students participating in an activity",
          },
          {
            src: "/images/gallery/gallery-3.jpg",
            alt: "School community activity",
          },
          {
            src: "/images/gallery/gallery-4.jpg",
            alt: "Students enjoying school life",
          },
        ],
      },
      {
        type: "cards",
        id: "news",
        eyebrow: "News & Events",
        title: "What's Happening",
        items: [
          {
            title: "School Events",
            description:
              "Important events and activities that bring students, families, and staff together.",
          },
          {
            title: "Student Achievements",
            description:
              "Celebrating academic, creative, sporting, and community achievements.",
          },
          {
            title: "Community Updates",
            description:
              "News and announcements from across the school community.",
          },
        ],
      },
    ],
  },

  contact: {
    title: "Contact Us",
    description: "Have a question? Get in touch with our school team.",
    sections: [
      {
        type: "contact",
        id: "contact",
        eyebrow: "Get In Touch",
        title: "We would love to hear from you",
        description:
          "Contact us for admissions information, school enquiries, visits, or any other questions about our community.",
      },
    ],
  },
};
