import React from "react";
import "swiper/swiper-bundle.min.css";
import "rc-drawer/assets/index.css";
import "react-modal-video/css/modal-video.min.css";

import { StickyProvider } from "contexts/app/app.provider";
import SEO from "components/seo";
import Layout from "components/layout";

import Banner from "sections/banner";
import Services from "sections/services";
import Testimonials from "sections/testimonials";
import CustomerSupport from "sections/customer-support";
import VideoOne from "sections/video-one";
import CallToAction from "sections/call-to-action";
import BoostAgencies from "sections/boost-agencies";
import AboutUs from "sections/about-us";
import Growers from "sections/growers";
import BlogHeader from "sections/blog-header";

export default function IndexPage() {
  return (
    <StickyProvider>
      <Layout>
        <SEO title="Southland Merchants" />
        <Banner />
        {/* <Services /> */}
        <AboutUs />
        {/* <BoostAgencies /> */}
        {/* <VideoOne /> */}
        {/* <Testimonials /> */}
        {/* <CustomerSupport /> */}
        <Growers />
        {/* <Feature /> */}
        <BlogHeader />
        {/* <CallToAction /> */}
      </Layout>
    </StickyProvider>
  );
}
