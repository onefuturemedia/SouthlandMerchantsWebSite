import React, { useRef } from "react";
import { Box, Container } from "theme-ui";
import BlockTitle from "components/block-title";
import Swiper from "react-id-swiper";

import BlogCard from "components/blog-card";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { useStaticQuery, graphql } from "gatsby";

const BlogHeader = () => {
  const { allFeedMediumData } = useStaticQuery(graphql`
    query MyQuery {
      allFeedMediumData {
        nodes {
          title
          id
          content {
            encodedSnippet
            encoded
          }
        }
      }
    }
  `);

  const ref = useRef(null);
  const goNext = () => {
    if (ref.current !== null && ref.current.swiper !== null) {
      ref.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (ref.current !== null && ref.current.swiper !== null) {
      ref.current.swiper.slidePrev();
    }
  };

  const params = {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
      },
      376: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
      },
      576: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 30,
      },
    },
  };

  const extractImageUrlFromPost = (content) => {
    const imgPattern = /<img([\w\W]+?)\/>/g;
    const srcPattern = /src="([\w\W]+?)"/g;
    const img = content.match(imgPattern);
    const src =
      img && img[0].match(srcPattern)[0].replace('src="', "").replace('"', "");

    return src || "";
  };

  return (
    <Box as="section" sx={styles.features} id="blog">
      <Container>
        <BlockTitle
          // slogan="blog"
          title="Check our blog!"
          styles={styles.blockTitle}
        />

        <Swiper {...params} ref={ref}>
          {allFeedMediumData.nodes.map((data, index) => (
            <div className="swiper-slider" key={`feature-card-key${index}`}>
              <BlogCard
                image={extractImageUrlFromPost(data.content.encoded)}
                title={data.title}
                contentSnippet={data.content.encodedSnippet}
              />
            </div>
          ))}
        </Swiper>
        <Box sx={styles.carouselBtns}>
          <button aria-label="left btn" onClick={goPrev}>
            <FaLongArrowAltLeft />
          </button>
          <button aria-label="right btn" onClick={goNext}>
            <FaLongArrowAltRight />
          </button>
        </Box>
      </Container>
    </Box>
  );
};

export default BlogHeader;

const styles = {
  blockTitle: {
    textAlign: "center",
  },
  features: {
    pt: ["80px", null, null, null, null, null, "120px"],
    pb: ["80px", null, null, null, "170px"],
    backgroundColor: "#F8FAFC",
    ".swiper-slider": {
      overflowY: "visible",
      overflowX: "hidden",
    },
  },
  carouselBtns: {
    display: ["flex", null, null, null, null, "none"],
    justifyContent: "center",
    alignItems: "center",
    button: {
      border: "none",
      outline: "none",
      backgroundColor: "transparent",
      fontSize: [2, null, 4, null, 5],
      color: "#BBC7D7",
      width: "auto",
      padding: [0],
      margin: "0 5px",
      mt: "15px",
      transition: "500ms",
      "&:hover, &:active, &:focus": {
        color: "primary",
      },
    },
  },
};
