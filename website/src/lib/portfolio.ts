export type ProjectType = "residential" | "garage" | "renovation";

export interface PortfolioProject {
  slug: string;
  name: string;
  type: ProjectType;
  featured: boolean;
  heroImage: string;
  summary: string;
  description: string;
  gallery: string[];
  year?: string;
}

const img = (name: string) => `/images/portfolio/${name}`;

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "kash-passive-house",
    name: "Kash: a Passive House",
    type: "residential",
    featured: true,
    heroImage: img("PH6-small.jpg"),
    year: "2017",
    summary:
      "Above Board Carpentry's first Passive House. A stunning, extremely energy-efficient home in the Haliburton Highlands.",
    description:
      "This is Above Board Carpentry's first Passive House that we started in 2017. It is not only a stunning home, but it is extremely energy efficient. Here is a look at the finished exterior along with some mid-project photos that showcase the building science and craftsmanship behind every detail.",
    gallery: [
      "PH6-small.jpg",
      "PH7-small.jpg",
      "IMG_6170c-scaled.jpg",
      "20180811_114931-scaled.jpg",
      "20180811_115019-scaled.jpg",
      "20180811_115218-scaled.jpg",
      "20171012_173132-scaled.jpg",
      "20170915_160503-scaled.jpg",
      "20170901_113805-scaled.jpg",
      "20170818_103304-scaled.jpg",
      "20170817_145357-scaled.jpg",
      "20170814_133015-scaled.jpg",
    ].map(img),
  },
  {
    slug: "bob-cottage-renovation",
    name: "Bob: a cottage renovation",
    type: "renovation",
    featured: true,
    heroImage: img("IMG_5517-scaled.jpg"),
    summary:
      "A complete cottage overhaul with a new outdoor living space.",
    description:
      "This cottage had a complete overhaul on the inside as well as gained a new outdoor living space. Here is the finished product along with some mid-project photos.",
    gallery: [
      "IMG_5517-scaled.jpg",
      "IMG_5436-scaled.jpg",
      "IMG_5438-scaled.jpg",
      "IMG_5440-scaled.jpg",
    ].map(img),
  },
  {
    slug: "drag-house",
    name: "Drag: a house",
    type: "residential",
    featured: true,
    heroImage: img("IMG_0288-scaled.jpg"),
    summary:
      "A complete house shell built from the ground up.",
    description:
      "We completed this house's shell from the ground up. These photos show an overview of the building journey. We started with excavation, completed the shell, and finished with primed drywall on the main floor.",
    gallery: [
      "IMG_0288-scaled.jpg",
      "IMG_0337-scaled.jpg",
      "IMG_0338-scaled.jpg",
      "IMG_0339-scaled.jpg",
      "IMG_0340-scaled.jpg",
    ].map(img),
  },
  {
    slug: "kash-garage",
    name: "Kash: a Garage",
    type: "garage",
    featured: false,
    heroImage: img("20190614_153252-5-scaled.jpg"),
    summary: "Garage construction with expert framing and finishing.",
    description:
      "Garage construction project showcasing structural framing expertise and the same attention to detail that goes into every Above Board Carpentry build.",
    gallery: [
      "20190614_153252-5-scaled.jpg",
      "20190614_152214-scaled.jpg",
    ].map(img),
  },
  {
    slug: "selarno-garage-framing",
    name: "Selarno: a Garage Framing",
    type: "garage",
    featured: false,
    heroImage: img("IMG_6209-1-scaled.jpg"),
    summary: "Precision garage framing from the ground up.",
    description:
      "A garage framing project highlighting the structural expertise and precision that Above Board Carpentry brings to every frame, whether residential or an outbuilding.",
    gallery: [
      "IMG_6209-1-scaled.jpg",
      "IMG_6210-scaled.jpg",
      "IMG_6211-scaled.jpg",
    ].map(img),
  },
];

export function getProject(slug: string) {
  return portfolioProjects.find((p) => p.slug === slug);
}

export function getProjectsByType(type?: ProjectType) {
  if (!type) return portfolioProjects;
  return portfolioProjects.filter((p) => p.type === type);
}
