import React, { useState } from "react";
import SwiperCore, { Thumbs, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Container, Text, Heading, Image as Img } from "theme-ui";
import BlockTitle from "components/block-title";

SwiperCore.use([Thumbs, Autoplay]);

const TESTIMONIALS_DATA = [
  {
    // image: img1,
    heading: "Brad Nixon",
    designation: "Elementary Coffee, SA",
    content:
      " Southland was able to offer us much more than just an importing service. (...) After working with Southland, we  made a visit to Brazil in 2019 and were blown away not only by how passionate the producers were about their coffee but also how different in flavour a coffee from Brazil can be when processed differently.",
  },
  {
    // image: img2,
    heading: "Patio Roasters",
    designation: "",
    content:
      "It is a privilege to have partnered with Southland from their small beginnings in SA, ever since our first chat with Nadia here at Patio in September 2018. From the outset, their commitment to both the quality of their product and service has encouraged a great working relationship. This is also apparent with how Southland value and interact with the coffee growers with whom they partner. Nadia and Andre have further encouraged and extended to roasters the opportunity to engage with coffee growers at a personal level, making our Brazil visit to the farms like a meeting of old friends, not a facility tour.",
  },
  {
    // image: img3,
    heading: "Allan Yeh",
    designation: "Code Black coffee roasters, VIC",
    content:
      "We’ve always seen the potential of Brazil as an origin beyond blenders with usually around 1 or 2 incredible microlots entering our offers list across the season. It’s great to see Southland exceeding this standard from our point of view, with multiple lots entering our buying programme this year and a couple even exceeding our expectations of quality when arriving. It’s a testament to Southland's buying and connections at origin.",
  },
  {
    // image: img2,
    heading: "Alex & Heather",
    designation: "extraction coffee Roasters, QLD",
    content:
      "Southland shares our philosophy of 'community first'. They truly care about creating connections and developing relationships, which is at the forefront of everything we do at Extraction Coffee Roasters.",
  },
  {
    // image: img3,
    heading: "Matt, V",
    designation: "Antz Coffee Co team",
    content:
      "Our business is better for having worked with Southland Merchants. Our customers rely on us to make socially responsible decisions in how we operate, and that includes where and who we buy beans from. That responsibility is made easy, highly enjoyable and rewarding (ethically and taste wise) thanks to Southland Merchants. We have had no issues with supply, delivery or quality. 10/10",
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
          title="Why customers love us"
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
    background: "linear-gradient(160deg, #ede0d6 60%, #B2957F 100%)",
    pt: ["65px", null, null, null, null, "80px", "80px"],
    pb: ["65px", null, null, null, null, "80px", "80px"],
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
        fontSize: ["12px", null, 2, null, 3],
        mt: ["15px", null, null, null, null],
        mb: ["30px"],
        lineHeight: 1,
        color: "black",
        display: ["block", null, "block"],
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
    fontSize: [0, null, 3, null, 4, 4, 4],
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
  blockTitle: {
    // fontSize: [5, null, null, '21px', '36px', '32px', 3],
  },
};
