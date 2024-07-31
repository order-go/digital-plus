import type { IconType } from "react-icons";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
  description: string;
}

export interface Category {
  id: number;
  name: string;
  products: Product[];
}
export interface PayDates {
  bank: string;
  code: string;
  cedula: string;
  phone: string;
}
export interface ContactItem {
  name: string;
  link: string;
  icon: IconType;
}
export interface DeliveryOptions {
  name: string;
  fee: number;
}
const data: {
  categories: Category[];
  paydates: PayDates;
  contactData: ContactItem[];
  deliveryOptions: DeliveryOptions[];
} = {
  categories: [
    {
      id: 1,
      name: "Smart TV",
      products: [
        {
          id: 1,
          title: "LG UHD TV 55",
          price: 449,
          images: [
            "/digital-plus/tv/SmartTv.jpg",
            "/digital-plus/tv/smart-1.jpg",
            "/digital-plus/tv/smart-2.jpg",
          ],
          description:
            "LG 55 Class 4K UHD 2160P webOS Smart TV 55UQ7070ZUE (2022 Model).",
        },
        {
          id: 2,
          title: "Samsung UHD 4K",
          price: 800.49,
          images: [
            "/digital-plus/tv/samsung-2.jpg",
            "/digital-plus/tv/samsung-1.jpg",
          ],
          description:
            "Smart TV 75” Crystal 4K Samsung 75AU7700 Wi-Fi - Bluetooth HDR Alexa Built in 3 HDMI 1 USB - TV 4K Ultra HD .",
        },
      ],
    },
    {
      id: 2,
      name: "Neveras",
      products: [
        {
          id: 1,
          title: "Nevera LG",
          price: 1249.99,
          images: [
            "/digital-plus/nevera/nevera-lg.jpg",
            "/digital-plus/nevera/nevera-lg-2.jpg",
          ],
          description:
            "The Door-in-Door LG Instaview™ Refrigerator Features a Tinted Glass Panel that Illuminates With Two Quick Knocks. Discover the InstaView™ Refrigerator Today..",
        },
        {
          id: 2,
          title: "Freezer Samsung",
          price: 1099.99,
          images: ["/digital-plus/nevera/nevera-lg-3.jpg"],
          description:
            "Doble hamburguesa con rWith a modern silver finish, this fantastic freezer from Samsung will make a stunning addition to a stylish kitchen. There's plenty of space and technology to keep all your frozen food in great condition as well.",
        },
        {
          id: 3,
          title: "Freezer Smart ",
          price: 999.99,
          images: ["/digital-plus/nevera/samsung-4.jpg"],
          description:
            "This graded Samsung RF65A967FS9 Fridge Freezer is brand new with small marks to the doors, back and side panels. Please see images PLEASE NOTE: This item is a very large appliance. Delivery is strictly to the front of the property ONLY.",
        },
      ],
    },
    {
      id: 3,
      name: "Muebles",
      products: [
        {
          id: 1,
          title: "Sofa Velvet",
          price: 149.99,
          images: [
            "/digital-plus/muebles/sofa.jpg",
            "/digital-plus/muebles/sofa-1.jpg",
          ],
          description:
            "This velvet cloth and solid wood frame make the sofa very luxurious in a modern sense with sophistication and durability. It is designed for comfort, ergonomically made for long-lasting comfort and support with high resilience foam.",
        },
        {
          id: 2,
          title: "Green Sofa",
          price: 99.99,
          images: ["/digital-plus/muebles/green-sofa.jpg"],
          description:
            "This velvet cloth and solid wood frame make the sofa very luxurious in a modern sense with sophistication and durability. It is designed for comfort, ergonomically made for long-lasting comfort and support with high resilience foam.",
        },
      ],
    },
    {
      id: 4,
      name: "Lavadoras",
      products: [
        {
          id: 1,
          title: "Lavadora Samsung",
          price: 700.99,
          images: ["/digital-plus/lavadora/lavadora.jpg"],
          description: "Combo dLG 10kg top load washing machinee.",
        },
        {
          id: 2,
          title: "Lavadora LG Smart",
          price: 590.99,
          images: ["/digital-plus/lavadora/lg-lavadora.jpg"],
          description:
            "Combo dLG 10kg top load washing machinee piensa habla y transmire sensaciones de limpieza mientras hace tu trabajo por ti.",
        },
      ],
    },
    {
      id: 5,
      name: "Aires Acondicionado",
      products: [
        {
          id: 1,
          title: "Split LG Smart",
          price: 299.99,
          images: [
            "/digital-plus/aire/aire-acondicionado.jpg",
            "/digital-plus/aire/aire-acondicionado-1.jpg",
          ],
          description:
            "Installare un condizionatore: Quali sono i costi e la normativa da rispettare,le detrazioni fiscali, cercare un istallatore di impianti di aria condizionata.",
        },
        {
          id: 2,
          title: "Aire Samsung Smart",
          price: 399.99,
          images: ["/digital-plus/aire/aire-acondicionado-2.jpg"],
          description:
            "Samsung smart' new air conditioner produces up to 70 watts of power per hour via solar cell modules attached to the top of this outdoor unit..",
        },
      ],
    },
    {
      id: 6,
      name: "Smart Phone",
      products: [
        {
          id: 1,
          title: "Xiaomi Mi 10T",
          price: 99.99,
          images: ["/digital-plus/phone/xiaomi.jpg"],
          description:
            "Enjoy unprecedented smoothness with Xiaomi Mi 10T is equipped an ultra-fast 144Hz refresh rate lets you display up to 144 fps, The seamless transitions between screens will reduce eye discomfort and dizziness, especially when playing games or swiping through content. ",
        },
        {
          id: 2,
          title: "Xiaomi MIX Alpha",
          price: 179.5,
          images: [
            "/digital-plus/phone/xiaomi-2.jpg",
            "/digital-plus/bebidas/Coca-Cola2.jfif",
          ],
          description:
            "(GP) — Even though some folks still regard Xiaomi as an Apple copycat, we think the Chinese company has done",
        },
      ],
    },
  ],
  paydates: {
    bank: "Venezuela",
    code: "0102",
    cedula: "24685881",
    phone: "4124676968",
  },
  contactData: [
    {
      name: "Digital Plus",
      link: "https://www.instagram.com/mostazaburger",
      icon: FaInstagram,
    },
    {
      name: "WhatsApp Digital",
      link: "https://wa.me/4124676968",
      icon: FaWhatsapp,
    },
  ],
  deliveryOptions: [
    { name: "Caña de Azucar", fee: 0 },
    { name: "El Limon", fee: 2 },
    { name: "San Vicente", fee: 3 },
  ],
};

export default data;
