export interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
}

export const products = [
  {
    id: "1",
    title: "AirPods",
    image: "/images/airpods.jpg",
    price: 199,
  },
  {
    id: "2",
    title: "AirPods Max",
    image: "/images/airpods-max.jpg",
    price: 549,
  },
  {
    id: "3",
    title: "Beats",
    image: "/images/beats.jpg",
    price: 299,
  },
  {
    id: "4",
    title: "Creative",
    image: "/images/creative.jpg",
    price: 129,
  },
  {
    id: "5",
    title: "Philips",
    image: "/images/philips.jpg",
    price: 99,
  },
  {
    id: "6",
    title: "Razer",
    image: "/images/razer.jpg",
    price: 199,
  },
  {
    id: "7",
    title: "Rode",
    image: "/images/rode.jpg",
    price: 399,
  },
  {
    id: "8",
    title: "Sony",
    image: "/images/sony.jpg",
    price: 249,
  },
];
