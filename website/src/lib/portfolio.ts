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
      "IMG_6170c-scaled.jpg",
      "PH7-small.jpg",
      "20180811_114931-scaled.jpg",
      "20180811_115019-scaled.jpg",
      "20180811_115218-scaled.jpg",
      "20180811_115035-scaled.jpg",
      "20171012_173132-scaled.jpg",
      "FB_IMG_1509668443505.jpg",
      "20170915_160503-scaled.jpg",
      "20170901_113805-scaled.jpg",
      "20170920_150144-scaled.jpg",
      "20170818_103304-scaled.jpg",
      "20170817_145357-scaled.jpg",
      "20171003_095113-scaled.jpg",
      "20170814_133015-scaled.jpg",
      "20170819_085627-scaled.jpg",
      "20170815_171020-scaled.jpg",
      "20170814_174609-scaled.jpg",
      "20170920_150036-scaled.jpg",
      "20170814_154735-scaled.jpg",
      "20170814_154806-scaled.jpg",
      "20170814_133001-scaled.jpg",
      "20170814_092824-scaled.jpg",
      "IMG_20170814_183042_126.jpg",
      "20170814_113350-scaled.jpg",
    ].map(img),
  },
  {
    slug: "bob-cottage-renovation",
    name: "Bob: a Cottage Renovation",
    type: "renovation",
    featured: true,
    heroImage: img("IMG_5517-scaled.jpg"),
    summary:
      "A complete cottage overhaul with a new outdoor living space.",
    description:
      "This cottage had a complete overhaul on the inside as well as gained a new outdoor living space. Here is the finished product along with some mid-project photos.",
    gallery: [
      "IMG_5436-scaled.jpg",
      "IMG_5427-scaled.jpg",
      "IMG_5428-scaled.jpg",
      "IMG_5489-scaled.jpg",
      "IMG_5481-scaled.jpg",
      "IMG_5496-scaled.jpg",
      "IMG_5423-scaled.jpg",
      "IMG_5502-scaled.jpg",
      "IMG_5517-scaled.jpg",
      "IMG_5513-scaled.jpg",
      "IMG_5467-scaled.jpg",
      "IMG_5528-scaled.jpg",
      "IMG_5392-scaled.jpg",
      "IMG_5389-scaled.jpg",
      "IMG_5394-scaled.jpg",
      "IMG_5406-scaled.jpg",
      "IMG_5402-scaled.jpg",
      "IMG_5397-scaled.jpg",
      "IMG_5395-scaled.jpg",
      "IMG_5444-scaled.jpg",
      "IMG_5378-scaled.jpg",
      "IMG_5369-scaled.jpg",
      "IMG_5292-scaled.jpg",
      "IMG_5186-scaled.jpg",
      "IMG_5185-scaled.jpg",
      "IMG_5181-scaled.jpg",
      "IMG_5345-scaled.jpg",
      "IMG_5346-scaled.jpg",
      "IMG_5201-scaled.jpg",
      "IMG_5131-scaled.jpg",
      "IMG_5160-scaled.jpg",
      "IMG_5106-scaled.jpg",
      "IMG_5129-scaled.jpg",
      "IMG_5199-scaled.jpg",
      "IMG_5290-scaled.jpg",
      "DGAD1241-scaled.jpg",
      "IMG_5340-scaled.jpg",
      "IMG_5305-scaled.jpg",
      "IMG_5328-scaled.jpg",
      "IMG_5307-scaled.jpg",
      "Ceiling-2-scaled.jpg",
      "Ceiling-scaled.jpg",
    ].map(img),
  },
  {
    slug: "drag-house",
    name: "Drag: a House",
    type: "residential",
    featured: true,
    heroImage: img("IMG_0288-scaled.jpg"),
    summary:
      "A complete house shell built from the ground up.",
    description:
      "We completed this house's shell from the ground up. These photos show an overview of the building journey. We started with excavation, completed the shell, and finished with primed drywall on the main floor.",
    gallery: [
      "IMG_0337-scaled.jpg",
      "IMG_0288-scaled.jpg",
      "IMG_9930-scaled.jpg",
      "IMG_0350-scaled.jpg",
      "IMG_9931-scaled.jpg",
      "IMG_5467-1.jpg",
      "IMG_6152.jpg",
      "IMG_6134.jpg",
      "IMG_6112.jpg",
      "IMG_6136.jpg",
      "IMG_6111.jpg",
      "IMG_6032.jpg",
      "IMG_6135.jpg",
      "IMG_9993-1-scaled.jpg",
      "IMG_9992-1-scaled.jpg",
      "IMG_9688-scaled.jpg",
      "IMG_0250-scaled.jpg",
      "IMG_0183-scaled.jpg",
      "IMG_0161-scaled.jpg",
      "IMG_0123-scaled.jpg",
      "IMG_0038-scaled.jpg",
      "IMG_9603-scaled.jpg",
      "IMG_9593-1-scaled.jpg",
      "IMG_9588-scaled.jpg",
      "IMG_9584-1-scaled.jpg",
      "IMG_9577-1-scaled.jpg",
      "IMG_0013-scaled.jpg",
      "IMG_0007-scaled.jpg",
      "Basement-covered-scaled.jpg",
      "IMG_9468-scaled.jpg",
      "Floor-joists-going-in-scaled.jpg",
      "Pad-finished-and-second-beam-in-place-scaled.jpg",
      "Basement-wall-framed-scaled.jpg",
      "Basement-pad-with-burlap-scaled.jpg",
      "Basement-pad-scaled.jpg",
      "ICF-and-wire-mesh-scaled.jpg",
      "Roughin-Complete-scaled.jpg",
      "IMG_9353-1-scaled.jpg",
      "ICF-poured-scaled.jpg",
      "ICF-Formed-d-scaled.jpg",
      "Footings-poured-scaled.jpg",
      "Footings-forms-011-scaled.jpg",
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
      "This is a garage we built from the ground up. The interior was completed with basic appearance with plywood walls, which is a great surface for shelving and to hang items on. We also completed the landscaping from the garage down to the cottage.",
    gallery: [
      "20190614_153252-5-scaled.jpg",
      "20190614_152214-scaled.jpg",
      "20190507_174112-scaled.jpg",
      "20190510_140020-scaled.jpg",
      "20190411_145220-scaled.jpg",
      "20190411_150435-scaled.jpg",
      "20190411_150511-scaled.jpg",
      "20190318_071523-scaled.jpg",
      "20190320_113718-scaled.jpg",
      "20190318_071655-scaled.jpg",
      "20190318_071642-scaled.jpg",
      "20190319_140412-scaled.jpg",
      "20190222_164806-scaled.jpg",
      "20181221_113753-scaled.jpg",
      "20181214_131349-scaled.jpg",
      "1991_1541458311915.jpg",
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
      "We framed this garage, which is one of our favourite projects. Without much cell service, we were left without distractions to complete this project efficiently.",
    gallery: [
      "IMG_6209-1-scaled.jpg",
      "IMG_6208-scaled.jpg",
      "IMG_6210-1-scaled.jpg",
      "20191015_162343-scaled.jpg",
      "IMG_6112-1.jpg",
      "IMG_6113.jpg",
      "IMG_6079-scaled.jpg",
      "20191008_121157-scaled.jpg",
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
