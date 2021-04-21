/** @jsx jsx */
import { jsx, Box, Text, Container, Grid } from 'theme-ui';
import { Link } from 'components/link';
import { Link as ScrollLink } from 'react-scroll';
import Logo from 'components/logo';
import menuItems from '../header/header.data';

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
					flexDirection: ['column', null, null, null, 'row'],
					paddingTop: [30, 40],
					paddingBottom: [30, 65]
				}}
			>
				<Box sx={styles.left}>
					{/* <Logo /> */}
					<Grid sx={{ gridGap: '0.1em' }}>
						<Text as="p">Phone: +61 (0) 409 007 565</Text>
						<Text as="p">E-mail:info@southlandmerchants.com.au</Text>
						<Text as="p">Adelaide SA Australia</Text>
					</Grid>
				</Box>
				<Box sx={styles.right}></Box>
				{/* <Box sx={styles.right}>
					{menuItems.map(({ path, label }, i) => (
						<ScrollLink
							activeClass="active"
							sx={styles.right.navLink}
							to={path}
							spy={true}
							smooth={true}
							offset={10}
							duration={500}
							key={i}
						>
							{label}
						</ScrollLink>
					))}
				</Box> */}

				<Text as="p">
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
	right: {
		display: ['none', null, null, null, 'flex'],
		fontSize: 2,
		alignItems: 'center',
		color: 'black',
		a: {
			transition: '500ms',
			'&:hover': {
				color: 'primary'
			}
		},
		'a+a': {
			marginLeft: '30px'
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
	}
};
