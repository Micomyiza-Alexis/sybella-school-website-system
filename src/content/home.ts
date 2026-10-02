export const homeContent = {
  introduction: {
    eyebrow: "About Our School",
    title: "A place where every learner is known, supported, and inspired to grow.",
    description:
      "We create a welcoming learning environment where strong academics, character, creativity, and practical skills come together to prepare students for a changing world.",
    highlights: [
      "Learner-centered education",
      "Strong academic foundations",
      "Character and leadership development",
    ],
    linkLabel: "Discover our school",
    linkHref: "/about",
  },

  academicJourney: {
    eyebrow: "Academic Journey",
    title: "Learning designed to help every student thrive.",
    description:
      "From foundational learning to secondary education, our academic journey develops knowledge, confidence, critical thinking, and the skills learners need for their next chapter.",
    programs: [
      {
        title: "Early Years",
        description:
          "A nurturing foundation focused on curiosity, confidence, communication, and early learning.",
      },
      {
        title: "Primary Education",
        description:
          "Strong foundations in literacy, numeracy, science, languages, and essential life skills.",
      },
      {
        title: "Secondary Education",
        description:
          "Focused academic pathways that prepare learners for further education, careers, and responsible citizenship.",
      },
    ],
    linkLabel: "Explore academics",
    linkHref: "/academics",
  },

  studentExperience: {
    eyebrow: "Student Experience",
    title: "Learning extends far beyond the classroom.",
    description:
      "Students are encouraged to discover their strengths, build meaningful relationships, take responsibility, and develop the confidence to contribute to their communities.",
    experiences: [
      {
        title: "Clubs & Activities",
        description:
          "Opportunities to explore interests, creativity, teamwork, and personal talents.",
      },
      {
        title: "Leadership",
        description:
          "Students develop responsibility, communication, initiative, and leadership through meaningful participation.",
      },
      {
        title: "Community",
        description:
          "A supportive school environment where learners build friendships, respect others, and grow together.",
      },
    ],
    linkLabel: "Explore student life",
    linkHref: "/student-life",
  },

  upcomingEvents: {
    eyebrow: "Upcoming Events",
    title: "What's happening at our school.",
    description:
      "Stay connected with important school activities, academic milestones, community events, and opportunities for students and families.",
    events: [
      {
        date: "12",
        month: "OCT",
        title: "Parents & Teachers Meeting",
        description:
          "An opportunity for families and teachers to discuss learner progress and development.",
        category: "Community",
      },
      {
        date: "18",
        month: "OCT",
        title: "Academic Showcase",
        description:
          "Students present projects, ideas, and achievements from across their learning journey.",
        category: "Academic",
      },
      {
        date: "02",
        month: "NOV",
        title: "School Community Day",
        description:
          "A day of activities bringing students, families, teachers, and the wider community together.",
        category: "Community",
      },
    ],
    linkLabel: "View all events",
    linkHref: "/events",
  },

  testimonials: {
    eyebrow: "What Parents Say",
    title: "A school experience families can feel good about.",
    description:
      "The strongest school communities are built on trust, communication, and a shared commitment to every learner's growth.",
    quotes: [
      {
        quote:
          "The school has created an environment where my child feels supported, confident, and excited to learn.",
        name: "Parent of a student",
        role: "School Community",
      },
      {
        quote:
          "I appreciate the communication between teachers and families and the attention given to each learner.",
        name: "Parent of a student",
        role: "School Community",
      },
      {
        quote:
          "My child has grown academically and personally, and we have seen a real increase in confidence.",
        name: "Parent of a student",
        role: "School Community",
      },
    ],
  },

  highlights: {
    eyebrow: "School Highlights",
    title: "Growing learners. Building futures.",
    description:
      "Our school experience is built around more than academic results. We focus on developing capable, responsible, and confident young people.",
    items: [
      {
        value: "01",
        label: "Academic Growth",
        description:
          "Strong foundations that help learners progress with confidence.",
      },
      {
        value: "02",
        label: "Character",
        description:
          "Values, responsibility, respect, and integrity woven into school life.",
      },
      {
        value: "03",
        label: "Confidence",
        description:
          "Opportunities for students to express ideas, lead, create, and participate.",
      },
      {
        value: "04",
        label: "Community",
        description:
          "A connected environment where students, families, and teachers grow together.",
      },
    ],
  },

  journeyCta: {
    eyebrow: "Begin Your Journey With Us",
    title: "Give your child a place to learn, grow, and become more.",
    description:
      "Discover a school community committed to helping every learner build a strong foundation for the future.",
    primaryAction: {
      label: "Apply to our school",
      href: "/admissions",
    },
    secondaryAction: {
      label: "Contact us",
      href: "/contact",
    },
  },
} as const;