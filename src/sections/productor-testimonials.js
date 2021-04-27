import React, { useState } from "react";
import SwiperCore, { Thumbs, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Container, Text, Heading, Image as Img } from "theme-ui";
import BlockTitle from "components/block-title";

SwiperCore.use([Thumbs, Autoplay]);

const TESTIMONIALS_DATA = [
  {
    // image: img1,
    heading: "Elio Uliana",
    designation: "Grower",
    content:
      "The impact in our life is very big, because of them I am able to invest in my farm, in the building and the price that they pay us brings much safety. Last year I was able to buy a piece of land which was near our property. I have always wanted it and thanks to them I was able to do so.",
  },
  {
    // image: img2,
    heading: "Edval Soares de Paula",
    designation: "Grower",
    content:
      "They have changed my vision on coffee production. Now I am always aware about the quality, in order to sell to them and aggregate value to my coffee.",
  },
  {
    // image: img3,
    heading: "Edilio Soares",
    designation: "Grower",
    content:
      "With the higher price at which they buy our coffee, we are able to improve our properties and mainly in our family quality of life. Because of them we are now known for the quality of our coffee.",
  },
];

const Testimonials = () => {
  // store thumbs swiper instance
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const infoParams = {
    spaceBetween: 15,
    slidesPerView: 3,
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 60,
      },
    },
  };
  const contentParams = {
    spaceBetween: 0,
    slidesPerView: 1,
    autoHeight: true,
    autoplay: {
      delay: 5000,
    },
  };
  return (
    <Box as="section" id="testimonials" sx={styles.testimonials}>
      <Container>
        <BlockTitle
          // slogan="Customer Comments"
          title="How Growers Lives Are Impacted"
          styles={styles.blockTitle}
        />
        <Swiper
          id="testimonialsContent"
          thumbs={{ swiper: thumbsSwiper }}
          {...contentParams}
        >
          {TESTIMONIALS_DATA.map((testimonialText, index) => (
            <SwiperSlide key={`testimonial-content-${index}`}>
              <Text sx={styles.testimonialsContent} as="p">
                "{testimonialText.content}"
              </Text>
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          id="testimonialsInfo"
          onSwiper={setThumbsSwiper}
          watchSlidesVisibility
          watchSlidesProgress
          {...infoParams}
        >
          {TESTIMONIALS_DATA.map((testimonial, index) => (
            <SwiperSlide key={`testimonial-info-${index}`}>
              {/* <Img src={testimonial.image} alt="testimonials image" /> */}
              <Heading as="h3">{testimonial.heading}</Heading>
              <Text as="span">{testimonial.designation}</Text>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default Testimonials;

const styles = {
  testimonials: {
    background:
      "linear-gradient(200deg, #ede0d6 30%, #ede0d6 60%, #B2957F 100%)",
    pt: ["65px", null, null, null, null, null, null],
    ".blockTitle": {
      textAlign: "center",
      marginBottom: ["25px", null, null, null, null, "50px"],
    },
    "#testimonialsInfo": {
      textAlign: ["center", null, null, null, null, "center"],
      marginTop: ["30px", null, null, null, "40px", "50px"],
      width: "100%",
      maxWidth: "820px",
      ".swiper-slide": {
        cursor: "pointer",
        borderTop: [
          "5px solid transparent",
          null,
          null,
          null,
          null,
          "5px solid transparent",
        ],
        position: "relative",
        paddingLeft: ["0", null, null, null, null, "0"],
        paddingTop: ["0", null, null, null, null, "25px"],
        paddingBottom: ["0", null, null, null, null, "15px"],
        minHeight: ["auto", null, null, null, null, "50px"],
        "&.swiper-slide-thumb-active": {
          borderColor: "logo_green",
        },
      },
      img: {
        borderRadius: "50%",
        display: "block",
        marginLeft: ["auto", null, null, null, null, "0"],
        marginRight: ["auto", null, null, null, null, "0"],
        marginBottom: ["15px", null, null, null, null, "0"],
        position: ["relative", null, null, null, null, "absolute"],
        top: ["auto", null, null, null, null, "50%"],
        left: ["auto", null, null, null, null, "10px"],
        mt: ["10px", null, null, null, null, 0],
        transform: [
          "translateY(0)",
          null,
          null,
          null,
          null,
          "translateY(calc(-50% + 8px))",
        ],
      },
      h3: {
        fontSize: ["18px", null, 2, null, 3],
        lineHeight: 1,
        color: "black",
        display: ["none", null, "block"],
      },
      span: {
        color: "text",
        opacity: "0.8",
        fontSize: [15, null, "15px"],
        lineHeight: 1,
        display: ["none", null, "block"],
        marginTop: "10px",
      },
    },
  },
  testimonialsContent: {
    margin: 0,
    fontSize: [2, null, 3, null, 4, 4, 4],
    color: "black",
    lineHeight: [2.3, null, 1.8],
    textAlign: "center",
    fontFamily: "special",
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "820px",
    marginTop: ["0", null, null, null, null, null],
    fontStyle: "italic",
  },
};
