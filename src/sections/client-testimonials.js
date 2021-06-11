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
		heading: 'Brad Nixon',
		designation: 'Elementary Coffee, SA',
		instagram: 'https://www.instagram.com/elementary_coffee/',
		content:
			'Coming from Brazil and having outstanding relationships with everyone from the smallest coffee producers to some of the largest exporters in Brazil, Southland was able to offer us much more than just an importing service.'
	},
	{
		// image: img2,
		heading: 'Andrew Mitchell',
		designation: 'Patio Roasters, SA',
		instagram: 'https://www.instagram.com/patiocoffeeroasters/',
		content:
			'The many now familiar industry terms such as transparency and farm direct are not labels on packaged items with Southland. These are clear and practiced values that Nadia and Andre live and breathe with every interaction, at origin and with roasters. I have enjoyed watching the organic growth of their business and feel excited for the future of our partnership and the partnerships we have made with our Brazilian Coffee Farmers.'
	},
	{
		// image: img3,
		heading: 'Allan Yeh',
		designation: 'Code Black coffee roasters, VIC',
		instagram: 'https://www.instagram.com/codeblackcoffee/',
		content: `We have always seen the potential of Brazil as an origin beyond blenders with usually around 1 or 2 incredible microlots entering our offers list across the season. It is great to see Southland exceeding this standard from our point of view, with multiple lots entering our buying programme this year and a couple even exceeding our expectations of quality when arriving. It is a testament to Southland's buying and connections at origin. 
It has been great to work with Southland over the past few years. Nadia is a pleasure to deal with, and we at Code Black Coffee share similar values in regard to quality and relationships.`
	},
	{
		// image: img2,
		heading: 'Alex Milosevic, Heather Scott',
		designation: 'Extration Artisan Coffee Roasters, QLD',
		instagram: 'https://www.instagram.com/extraction_artisan_coffee/',
		content:
			'Nadia and Andre are passionate and knowledgeable individuals who together make a powerhouse team. No matter how much coffee you purchase from them, they will do their best to provide you with exceptional service. You always feel supported in your coffee journey and they are quick to respond to questions or requests. We look forward to a long and rewarding relationship with Southland Merchants.'
	},
	{
		// image: img3,
		heading: 'Matthew Muhl',
		designation: 'Antz Coffee, WA',
		instagram: 'https://www.instagram.com/leafbean_machine/',
		content:
			'As a coffee roaster and green buyer – Southland is pretty much the best-case scenario as a supplier. The quality of the coffee is excellent. A pseudo extension of ourselves, with closely aligned values. Beyond a transactional relationship, Southland are the bridge that connects us in a meaningful way to the coffee industry at origin. We rely on you to make the right decisions for all stakeholders in your supply chain, and we could not be happier with our decision to trust our Brazil coffees to Southland Merchants.'
	},
	{
		// image: img3,
		heading: 'Brad Cassady',
		designation: 'Leaf Bean Machine, WA',
		instagram: 'https://www.instagram.com/leafbean_machine/',
		content:
			'As a coffee roaster and green buyer – Southland is pretty much the best-case scenario as a supplier. The quality of the coffee is excellent. A pseudo extension of ourselves, with closely aligned values. Beyond a transactional relationship, Southland are the bridge that connects us in a meaningful way to the coffee industry at origin. We rely on you to make the right decisions for all stakeholders in your supply chain, and we could not be happier with our decision to trust our Brazil coffees to Southland Merchants.'
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
				<BlockTitle
					// slogan="Customer Comments"
					title="How We Are Seen"
					styles={styles.blockTitle}
				/>
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
		// background: "linear-gradient(160deg, #ede0d6 60%, #B2957F 100%)",
		backgroundColor: 'background',
		pt: ['65px', null, null, null, null, '80px', '80px'],
		pb: ['65px', null, null, null, null, '80px', '80px'],
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
				mt: ['15px', null, null, null, null],
				mb: ['30px'],
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
		fontSize: [0, null, 3, null, 4, 4, 4],
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
	},
	blockTitle: {
		// fontSize: [5, null, null, '21px', '36px', '32px', 3],
	}
};
