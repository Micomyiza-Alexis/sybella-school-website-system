export type NavChild = {
  label: string;
  href: string;
  id: string;
  description?: string;
};

export type NavItem = {
  label: string;
  href: string;
  id: string;
  children?: readonly NavChild[];
};

export const navigation: readonly NavItem[] = [
  {
    label: "Home",
    href: "/",
    id: "home",
  },
  {
    label: "About Us",
    href: "/about",
    id: "about",
    children: [
      {
        label: "Our Story",
        href: "/about#story",
        id: "story",
        description: "Who we are and how we began",
      },
      {
        label: "Mission & Vision",
        href: "/about#mission",
        id: "mission",
        description: "What we stand for",
      },
      {
        label: "Leadership & Staff",
        href: "/about#leadership",
        id: "leadership",
        description: "The people who lead and teach",
      },
      {
        label: "Facilities",
        href: "/about#facilities",
        id: "facilities",
        description: "Our campus and learning spaces",
      },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    id: "academics",
    children: [
      {
        label: "Curriculum",
        href: "/academics#curriculum",
        id: "curriculum",
        description: "What students learn at each level",
      },
      {
        label: "Admissions",
        href: "/academics#admissions",
        id: "admissions",
        description: "How to apply and enrol",
      },
      {
        label: "Academic Calendar",
        href: "/academics#calendar",
        id: "calendar",
        description: "Terms, exams and holidays",
      },
    ],
  },
  {
    label: "Student Life",
    href: "/student-life",
    id: "student-life",
    children: [
      {
        label: "Clubs & Activities",
        href: "/student-life#clubs",
        id: "clubs",
        description: "Learning beyond the classroom",
      },
      {
        label: "Sports",
        href: "/student-life#sports",
        id: "sports",
        description: "Teams, games and fitness",
      },
      {
        label: "Gallery",
        href: "/student-life#gallery",
        id: "gallery",
        description: "Moments from school life",
      },
      {
        label: "News & Events",
        href: "/student-life#news",
        id: "news",
        description: "What's happening at school",
      },
    ],
  },
  {
    label: "Contact Us",
    href: "/contact",
    id: "contact",
  },
];
