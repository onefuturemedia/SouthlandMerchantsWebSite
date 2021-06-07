import React from "react";
import "swiper/swiper-bundle.min.css";
import "rc-drawer/assets/index.css";
import "react-modal-video/css/modal-video.min.css";

import { StickyProvider } from "contexts/app/app.provider";
import SEO from "components/seo";
import Layout from "components/layout";

import Banner from "sections/banner";
import ClientTestimonials from "sections/client-testimonials";
import ProductorTestimonials from "sections/productor-testimonials";
import AboutUs from "sections/about-us";
import Growers from "sections/growers";
import BlogHeader from "sections/blog-header";

export default function IndexPage() {
  return (
    <StickyProvider>
      <Layout isHome={true}>
        <SEO title="Southland Merchants" />
        <Banner />
        <AboutUs />
        <ProductorTestimonials />
        <Growers />
        <ClientTestimonials />
        <BlogHeader />
      </Layout>
    </StickyProvider>
  );
}
