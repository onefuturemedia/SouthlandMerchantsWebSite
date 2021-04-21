/** @jsx jsx */
import { jsx, Box, Text, Container, Grid, Image } from 'theme-ui';
import { Link } from 'components/link';
import { Link as ScrollLink } from 'react-scroll';
import icon from 'assets/logo-icon.png';
import menuItems from '../header/header.data';
import { FaInstagram, FaFacebookSquare, FaMedium } from 'react-icons/fa';
import { RiMailLine } from 'react-icons/ri';

export default function Footer() {
	return (
		<footer
			sx={{
				variant: 'layout.footer'
			}}
		>
			<Container
				sx={{
					variant: 'layout.toolbar',
					justifyContent: ['center', null, null, 'space-between'],
					flexDirection: ['column', null, null, null, 'column'],
					paddingTop: [0],
					paddingBottom: [0]
				}}
			>
				<Container
					sx={{
						variant: 'layout.toolbar',
						justifyContent: ['center', null, null, 'space-between'],
						flexDirection: ['row', null, null, null, 'row'],
						py: [10, 20]
					}}
				>
					<Box sx={styles.left}>
						<Link path="/">
							<Image src={icon} alt="southland merchants logo" sx={styles.logo} />
						</Link>
					</Box>
					<Box sx={styles.middle}>
						<Grid sx={{ gridGap: '0.1em' }}>
							<Text as="p">Phone: +61 (0) 409 007 565</Text>
							<Text as="p">E-mail:info@southlandmerchants.com.au</Text>
							<Text as="p">Adelaide SA Australia</Text>
						</Grid>
					</Box>
					<Box sx={styles.right}>
						<a href="mailto:info@southlandmerchants.com.au">
							<RiMailLine />
						</a>
						<a href="https://www.instagram.com/southlandmerchants/">
							<FaInstagram />
						</a>
						<a href="https://www.facebook.com/southlandmerchants/">
							<FaFacebookSquare />
						</a>
						<a href="https://medium.com/southlandmerchants">
							<FaMedium />
						</a>
					</Box>
				</Container>
				<Text as="p" sx={{ fontSize: [1], color:"black" }}>
					&copy; {new Date().getFullYear()} All right reserved - Design & Developed by On Future Media.
				</Text>
			</Container>
		</footer>
	);
}

const styles = {
	left: {
		display: 'flex',
		flexDirection: ['column', null, 'row'],
		alignItems: 'center',
		p: {
			fontSize: [0, 1],
			color: 'black',
			opacity: 0.6,
			mt: ['10px', null, '0']
		}
	},
	middle: {
		display: 'flex',
		flexDirection: ['column', null, 'row'],
		alignItems: 'center',
		p: {
			fontSize: [0, 1],
			color: 'black',
			opacity: 1,
			fontWeight:500,
			mt: ['10px', null, '0']
		}
	},
	right: {
		display: ['none', null, null, null, 'flex'],
		fontSize: 6,
		alignItems: 'center',
		color: 'black',
		a: {
			transition: '500ms',
			'&:hover': {
				color: 'primary'
			}
		},
		'a+a': {
			marginLeft: '10px'
		},
		navLink: {
			fontSize: '13px',
			color: '#02073E',
			fontWeight: '400',
			cursor: 'pointer',
			transition: '500ms',
			':last-child': {
				mr: '0'
			},
			'&:hover, &.active': {
				color: 'primary'
			}
		}
	},
	logo: {
		width: '90px'
	}
};
