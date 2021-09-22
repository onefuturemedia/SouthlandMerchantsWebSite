import React from "react";
import "swiper/swiper-bundle.min.css";
import "rc-drawer/assets/index.css";
import "react-modal-video/css/modal-video.min.css";

import { useEffect } from "react";
import { StickyProvider } from "contexts/app/app.provider";
import SEO from "components/seo";
import Layout from "components/layout";

import Banner from "sections/banner";
import ClientTestimonials from "sections/client-testimonials";
import ProductorTestimonials from "sections/productor-testimonials";
import AboutUs from "sections/about-us-2";
import Growers from "sections/growers";
import BlogHeader from "sections/blog-header";

export default function IndexPage() {
  

    // function to guarantee navigation to href ids
    useEffect(() => {
      const id = document.location.hash
      if ( id != undefined && id != ""){
        const elem = document.getElementById(id.replace("#", ""));
        elem.scrollIntoView();
      }
  
    })
  
    return (
      <StickyProvider>
        <Layout isHome={false}>
          <SEO title="Southland Merchants" />
          <AboutUs />
        </Layout>
      </StickyProvider>
    );
  } 