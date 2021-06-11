import React, { useState } from 'react';
import SwiperCore, { Thumbs, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Container, Text, Heading } from 'theme-ui';
import { FaInstagram } from 'react-icons/fa';
import BlockTitle from 'components/block-title';

SwiperCore.use([Thumbs, Autoplay]);

const TESTIMONIALS_DATA = [
	{
		// image: img1,
		heading: 'Gil and Edu Melo',
		designation: 'Espigao Farm, Cerrado Mineiro',
		instagram: 'https://www.instagram.com/coffeeomelo',
		content:
			'Selling our coffees to Southland has had a significant impact on our lives. Not only has working with Southland changed our perspective on speciality coffee, but we have a complete understanding of who purchases our coffee, how it is marketed and what feedback our coffee receives. We have never experienced such transparency. We know our coffee is valued, and we are happy with the prices we receive. Nadia and Andre have become great partners for us!'
	},
	{
		// image: img2,
		heading: 'Leda Fernandes and Edvaldo',
		designation: 'Roseira Farm, Mantiqueira de Minas',
		instagram: 'https://www.instagram.com/leda.fernandes.3950',
		content:
			'I was looking for ways to improve but was not aware what God sent us with Southland Merchants. We get paid fair prices, receive invaluable recognition, knowledge and apprenticeship. Gratitude is an understatement!!! We  are blessed to work with such a wonderful Family!!!'
	},
	{
		// image: img3,
		heading: 'Carlos Atoe',
		designation: 'Coopeavi, Espirito Santo state',
		instagram: 'https://www.instagram.com/coopeavi',
		content: `We strongly believe in purpose! And Southland's purpose is in unison with ours. Our goal is to improve producers and their families’ quality of life in a fair and sustainable way with determination, confidence, and professionalism. Southland fills us with pride. We are astounded how noticeably the producers' outlook on life has changed. And we, as partners, understand that we must continually improve our knowledge, so we can consistently deliver the best work possible; after all, we will travel this path with dozens of families who will have the joy and gratitude of a better future.`
	},
	{
		// image: img3,
		heading: 'Luiz Carlos',
		designation: 'Embira Farm, Campo das Vertentes region',
		instagram: 'https://www.instagram.com/luizcarlos17_edilaineadriano_',
		content:
			'We see Southland as a great partner with a big impact on us who has helped us a lot to sell our coffee in another overseas / abroad in a very honest way.'
	},
	{
		// image: img3,
		heading: 'Tatiane Abreu',
		designation: 'St Edwiges farm, Mantiqueira de Minas Region',
		instagram: 'https://www.instagram.com/tatiane.abreu.775',
		content:
			'Southland value and encourage the small coffee producer. It was the first time that we were able to sell coffee at a fair price. We started to produce a special coffee without having the experience, without knowing if we could achieve a good score and good sales. We are happy to sell coffee to Southland and this encourages us more and more.'
	},
	{
		// image: img3,
		heading: 'Silvanius Kutz',
		designation: 'Kutz Farm, The Mountains of Espirito Santo',
		instagram: '',
		content:
			'Working with Southland helped me to improve the quality of my coffees with time. They recognise our coffees and it motivates us to always improve.'
	},
	{
		// image: img3,
		heading: 'Quezia Tavares',
		designation: 'Taquara Farm, Caparao, MG',
		instagram: 'https://www.instagram.com/queziatavaresdasilva',
		content:
			'Southland brought us a new vision, they brought hope and the desire to seek improvement in the quality of our coffees. A company that aims to value the producer. We must thank God for the life of Nádia and André, as they were an important guide for us. We believe that we will still do a lot of business, as it is a company that we can trust!'
	}
];

const Testimonials = () => {
	// store thumbs swiper instance
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	const infoParams = {
		spaceBetween: 15,
		slidesPerView: 3,
		autoplay: {
			delay: 5000
		},
		breakpoints: {
			576: {
				slidesPerView: 2,
				spaceBetween: 30
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 30
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 60
			}
		}
	};
	const contentParams = {
		spaceBetween: 0,
		slidesPerView: 1,
		autoHeight: true,
		autoplay: {
			delay: 5000
		}
	};
	return (
		<Box as="section" id="testimonials" sx={styles.testimonials}>
			<Container>
				<BlockTitle title="What Drives Us" styles={styles.blockTitle} />
				<Swiper id="testimonialsContent" thumbs={{ swiper: thumbsSwiper }} {...contentParams}>
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
							<a href={testimonial.instagram}>
								<FaInstagram />
							</a>
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
		// background:
		//   "linear-gradient(200deg, #ede0d6 30%, #ede0d6 60%, #B2957F 100%)",
		backgroundColor: 'background',
		pt: ['65px', null, null, null, null, null, null],
		'.blockTitle': {
			textAlign: 'center',
			marginBottom: ['25px', null, null, null, null, '50px']
		},
		'#testimonialsInfo': {
			textAlign: ['center', null, null, null, null, 'center'],
			marginTop: ['30px', null, null, null, '40px', '50px'],
			width: '100%',
			maxWidth: '820px',
			'.swiper-slide': {
				cursor: 'pointer',
				borderTop: ['5px solid transparent', null, null, null, null, '5px solid transparent'],
				position: 'relative',
				paddingLeft: ['0', null, null, null, null, '0'],
				paddingTop: ['0', null, null, null, null, '25px'],
				paddingBottom: ['0', null, null, null, null, '15px'],
				minHeight: ['auto', null, null, null, null, '50px'],
				'&.swiper-slide-thumb-active': {
					borderColor: 'logo_green'
				}
			},
			img: {
				borderRadius: '50%',
				display: 'block',
				marginLeft: ['auto', null, null, null, null, '0'],
				marginRight: ['auto', null, null, null, null, '0'],
				marginBottom: ['15px', null, null, null, null, '0'],
				position: ['relative', null, null, null, null, 'absolute'],
				top: ['auto', null, null, null, null, '50%'],
				left: ['auto', null, null, null, null, '10px'],
				mt: ['10px', null, null, null, null, 0],
				transform: ['translateY(0)', null, null, null, null, 'translateY(calc(-50% + 8px))']
			},
			h3: {
				fontSize: ['12px', null, 2, null, 3],
				my: ['15px', null, null, null, null],
				lineHeight: 1,
				color: 'black',
				display: ['block', null, 'block']
			},
			span: {
				color: 'text',
				opacity: '0.8',
				fontSize: [15, null, '15px'],
				lineHeight: 1,
				display: ['none', null, 'block'],
				marginTop: '10px'
			}
		}
	},
	testimonialsContent: {
		margin: 0,
		fontSize: [2, null, 3, null, 4, 4, 4],
		color: 'black',
		lineHeight: [2.3, null, 1.8],
		textAlign: 'center',
		fontFamily: 'special',
		width: '100%',
		marginLeft: 'auto',
		marginRight: 'auto',
		maxWidth: '820px',
		marginTop: ['0', null, null, null, null, null],
		fontStyle: 'italic'
	}
};
