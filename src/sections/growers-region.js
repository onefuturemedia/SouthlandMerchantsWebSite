import React from 'react';
import { Box, Container, Grid, Heading, Text, Image, Flex } from 'theme-ui';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'components/link';
import GrowerCard from 'components/grower-card';

// import img1 from "assets/growers-home.jpg";

const GrowersRegion = ({ region }) => {
	//   console.log(region.growers)
	return (
		<Box as="section" sx={styles.growers} id="our-growers">
			<Container>
				<Grid sx={region.imgPosAlt ? styles.row : styles.reverseRow}>
					<Box sx={styles.col}>
						<Box sx={styles.content}>
							<Heading as="h3">{region.name}</Heading>
							<Flex sx={styles.growerGrid}>
								{region.growers.map(growerData => (
									<GrowerCard grower={growerData} />
								))}
							</Flex>
						</Box>
					</Box>
					<Box sx={styles.imgCol}>
						<Image src={region.img} alt={region.tag} />
						<Text as="p" sx={styles.imgCol.specialText}>
							{region.text}
						</Text>
					</Box>
				</Grid>
			</Container>
		</Box>
	);
};

export default GrowersRegion;

const styles = {
	growers: {
		overflow: 'hidden',
		pt: [null, null, null, null, null, null],
		pb: [null, null, null, null, null, null, null]
	},
	row: {
		display: 'grid',
		gridGap: [0, null, null, null, '25px', null, '55px'],
		gridTemplateColumns: ['1fr', null, null, null, '1fr 1fr']
	},
	reverseRow: {
		display: 'grid',
		gridGap: [0, null, null, null, '25px', null, '55px'],
		gridTemplateColumns: ['1fr', null, null, null, '1fr 1fr'],
		direction: 'rtl'
	},
	imgCol: {
		img: {
			maxWidth: ['100%', null, null, '60%', '100%', '100%'],
			mx: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto'],
			display: [null, null, null, 'block'],
			mt: [null, null, null, null, '6em', '6em']
		},
		specialText: {
			fontSize: [0, null, 2, null, '17px'],
			// color: 'text',
			// lineHeight: ['26px', null, null, 1.8, null, 2.06],
			// '+p': {
			//   mt: ['15px', null, null, null, '15px']
			// }
			mt: ['-50px'],
			textAlign: 'center',
			color: 'heading',
			opacity: 0,
			backgroundColor: 'logo_green_dark',
			borderRadius: '1em',
			border: '2px solid',
			borderColor: 'secondary',
			color: 'white',
			transition: 'opacity 1s ease'
		},
		'&:hover': {
			p: {
				opacity: 0.7
			}
		}
	},
	content: {
		pt: [0, null, null, null, '30px', '30px'],
		mb: [null, null, null, '-40px', '0'],
		position: 'relative',
		zIndex: 10,
		paddingLeft: ['12px', null, null, null, '0'],
		paddingRight: ['12px', null, null, null, '0', '75px', '0'],
		pb: ['10px'],
		maxWidth: [null, null, null, '590px', null, '100%'],
		width: ['100%'],
		mx: [null, null, null, 'auto', null, '0'],
		textAlign: ['center', null, null, null, 'center'],
		h3: {
			fontSize: [5, null, '21px', null, 7, '32px', 8],
			maxWidth: [null, null, null, '400px', 'none'],
			mx: [null, null, null, 'auto', '0'],
			color: 'black',
			fontWeight: 'bold',
			letterSpacing: ['-0.5px', null, null, null, null, null, '-1.5px'],
			lineHeight: [1.5, null, 1.25],
			mb: ['30px', null, null, null, '30px']
		},
		p: {
			fontSize: [0, null, 2, null, '17px'],
			color: 'text',
			lineHeight: ['26px', null, null, 1.8, null, 2.06],
			'+p': {
				mt: ['15px', null, null, null, '15px']
			}
		}
	},
	link: {
		// color: "primary",
		// fontSize: [1, null, 2],
		// display: "inline-block",
		// verticalAlign: "middle",
		// fontWeight: "bold",
		// mt: ["10px", null, null, null, "10px"],
		// svg: {
		//   position: "relative",
		//   top: "3px",
		// },
		backgroundColor: 'rgba(0,0,0,0)',
		fontSize: '16px',
		fontWeight: 'bold',
		letterSpacing: '-0.16px',
		borderRadius: '5px',
		border: '2px solid',
		borderColor: 'primary',
		color: 'primary',
		padding: '8px 24px',
		display: ['inline-block', 'inline-block', 'inline-block', 'inline-block', 'inline-block'],
		ml: ['0', null, null, 'auto', '30%'],
		mr: ['0', null, null, '20px', '0'],
		mt: '3em',
		'&:hover': {
			color: '#fff'
		}
	},
	growerGrid: {
		flexWrap: 'wrap',
		flexDirection: 'row-reverse',
		justifyContent: 'center'
	}
};
