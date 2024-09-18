"use client";
import { StoryblokCMS } from "@/utils/cms";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import Page from "@/components/content-types/Page";

import Teaser from "@/components/nestable/Teaser";
import RichTextDefault from "@/components/nestable/RichText";
import Hero from "@/components/nestable/Hero";
import HeroImage from "@/components/nestable/HeroImage";
import ProductPage from "@/components/content-types/ProductPage";
import ProductList from "@/components/nestable/ProductList";
import About from "@/components/nestable/About";
import Header from "@/components/nestable/Header";
import Footer from "@/components/nestable/Footer";
import DetailPage from "@/components/nestable/DetailPage";
import heroes from "@/components/nestable/Heroes";

const components = {
  "Page": Page,
  "teaser":Teaser,
  "richtext": RichTextDefault,
  "Hero": Hero,
  "HeroImage": HeroImage,
  "productpage": ProductPage,
  "productlist": ProductList,
  "about": About,
  "header": Header,
  "footer": Footer,
  "product detail page": DetailPage,
  "heroes":heroes
}

storyblokInit({
  accessToken: StoryblokCMS.TOKEN,

  use: [apiPlugin],
  components
});

export default function StoryblokProvider({ children }) {
  return (
    children
  );
}