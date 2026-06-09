export const site = {
  name: "Above Board Carpentry",
  tagline: "Integrity | Ingenuity",
  founded: 2017,
  owner: "Graham Borgdorff",
  description:
    "High-performance home builder in the Haliburton Highlands. Red Seal certified, Passive House trained, and committed to stunning homes with exceptionally low operating costs.",
  url: "https://aboveboardcarpentry.com",
  address: {
    street: "1724 Tom Bolton Road",
    city: "Minden",
    province: "ON",
    postalCode: "K0M 2K0",
    region: "Haliburton Highlands",
    full: "1724 Tom Bolton Road, Minden, ON K0M 2K0",
  },
  contact: {
    phone: "(705) 455-2196",
    phoneTel: "+17054552196",
    email: "info@aboveboardcarpentry.com",
    hours: "Monday to Friday, 8:00 AM to 5:00 PM",
    responseTime: "We respond within one business day.",
  },
  social: {
    facebook: "https://www.facebook.com/aboveboardcarpentry/",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/store", label: "ABC Store" },
  { href: "/contact", label: "Contact" },
] as const;

export const certifications = [
  {
    name: "Red Seal General Carpenter",
    url: "http://www.red-seal.ca/about/pr.4gr.1m-eng.html",
    image: "/images/branding/REDSEAL-sq.png",
  },
  {
    name: "RenoMark Certified",
    url: "https://renomark.ca/",
    image: "/images/branding/RenoMark-R-png.png",
  },
  {
    name: "Passive House Tradesperson",
    url: "https://cms.passivehouse.com/en/training/data/tradespersons/detail/h6317/",
    image: "/images/branding/Passive-Certification-Icon.png",
  },
  {
    name: "Net Zero Trained Builder",
    url: "https://www.chba.ca/CHBA/BuyingNew/Net-Zero-Homes.aspx",
    image: "/images/branding/logo_netzerohome_colour-no-tag-web-RGB.png",
  },
] as const;

export const memberships = [
  {
    name: "Ontario Home Builders' Association",
    url: "https://www.ohba.ca/",
    image: "/images/branding/ohba-logo.png",
  },
  {
    name: "Passive Buildings Canada",
    url: "https://www.passivebuildings.ca/",
    image: "/images/branding/Passive-buildings-canada.png",
  },
] as const;

export const team = [
  {
    name: "Graham Borgdorff",
    role: "Owner",
    since: 2017,
    photo: "/images/team/GB-small-1.jpg",
    bio: "Graham has been part of construction for over 20 years. He is a Red Seal certified carpenter, certified passive house tradesperson, and certified and trained in Net Zero & Net Zero Ready. Graham also has a passion for traditional hand-cut custom timber framing and fine carpentry work. His background is not only in construction, but also in teaching.",
    extended:
      "Graham has committed a significant amount of his time to being an expert at building science in order to build high-performance homes with the best products and systems available. This type of build performs at an extremely low operation cost, but ultimately has a greener impact on our world. Graham lives in the Haliburton Highlands with his family.",
    featured: true,
  },
  {
    name: "Liam Stringer",
    role: "General Labourer",
    since: 2017,
    photo: "/images/team/ACE4075-scaled.jpg",
    bio: "Liam has worked for Above Board Carpentry since 2017. He has a strong attention to detail and has always proven to rise up to any problem-solving challenge he runs into in construction.",
    featured: false,
  },
  {
    name: "Aaron Alfano",
    role: "General Labourer",
    since: 2018,
    photo: "/images/team/AA-better-small.jpg",
    bio: "Aaron has been with the company since 2018. He brings an artist background to the team and really enjoys learning new skills.",
    featured: false,
  },
  {
    name: "Sarah Langemann",
    role: "Administrative Assistant",
    since: 2019,
    photo: "/images/team/SL-small.jpg",
    bio: "Sarah has been with the company since 2019. She has an Honours Bachelor of Science in Kinesiology. She focuses on administration for the company, but also works hard at everything new she works on in construction. Her favourite task by far is painting.",
    featured: false,
  },
] as const;

export const services = [
  {
    title: "High-Performance Homes",
    description:
      "Passive House and Net Zero ready builds engineered for comfort, health, and exceptionally low operating costs.",
    icon: "home",
  },
  {
    title: "Renovations & Cottages",
    description:
      "Significant renovations and cottage transformations with full project management from start to finish.",
    icon: "hammer",
  },
  {
    title: "Garages & Outbuildings",
    description:
      "Expert framing and construction for garages, bunkies, and custom outbuildings.",
    icon: "building",
  },
  {
    title: "Timber Framing",
    description:
      "Traditional hand-cut custom timber framing, including work at the Haliburton Welcome Centre.",
    icon: "timber",
  },
  {
    title: "Interiors & Finishing",
    description:
      "Kitchens, bathrooms, decks, and fine interior finishing with meticulous attention to detail.",
    icon: "interior",
  },
  {
    title: "Project Management",
    description:
      "Full-scope expertise from groundwork and foundation through to interior finishing.",
    icon: "clipboard",
  },
] as const;
