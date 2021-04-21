import React from 'react';
import { Image, Box, Heading, Text } from 'theme-ui';
import { Link } from 'components/link';
var slugify = require('slugify');

const BlogCard = props => {
	return (
		<Box sx={styles.fevCard}>
			<Link alt={props.title} path={`/${slugify(props.title, '-')}`}>
				<Box className="image" sx={styles.image}>
					<Image src={props.image} alt="props.title" />
					<Image src={props.image} alt="props.title" />
				</Box>
				<Box sx={styles.content}>
					<Heading as="h3">{props.title}</Heading>
					<Text as="p">{props.contentSnippet}</Text>
					{/* <Text as="p">{props.contentSnippet.substring(0, 120) + '...'}</Text> */}
				</Box>
			</Link>
		</Box>
	);
};

export default BlogCard;

const styles = {
	fevCard: {
		transition: '500ms',
		borderRadius: '5px',
		'&:hover': {
			boxShadow: '0px 15px 50px rgba(69, 88, 157, 0.1)'
		}
	},
	image: {
		overflow: 'hidden',
		borderTopLeftRadius: ['5px'],
		borderTopRightRadius: ['5px'],
		height: '210px',
		img: {
			display: 'block',
			width: '100%'
		}
	},
	content: {
		paddingLeft: [20, null, null, '30px'],
		paddingRight: [20, null, null, '30px'],
		paddingTop: ['15px', null, null, '25px'],
		borderBottomLeftRadius: ['5px'],
		borderBottomRightRadius: ['5px'],
		minHeight:"155px",
		pb: ['10px', null, null, null, '30px'],
		border: '3px solid black',
		borderTop: '0',
		h3: {
			fontWeight: 'bold',
			fontSize: ['18px', null, '17px', 3, 3],
			lineHeight: [1.8],
			textAlign:"center",
			a: {
				transition: '500ms',
				'&:hover': {
					color: 'primary'
				}
			}
		},
		p: {
			display: 'flex',
			alignItems: 'center',
			textAlign:"center",
			fontSize: [1, null, 2],
			lineHeight: ['1.3em'],
			color: 'text',
			opacity: 0.8,
			mt: ['4px'],
			img: {
				width: ['16px', null, 'auto'],
				mr: ['8px']
			}
		}
	}
};
