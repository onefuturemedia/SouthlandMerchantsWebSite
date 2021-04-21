import React from 'react';
import { graphql } from 'gatsby';
import { StickyProvider } from 'contexts/app/app.provider';
import { Box, Container, Text} from "theme-ui";
import SEO from 'components/seo';
import Layout from 'components/layout';

const MySinglePostPage = ({ data: { post }, ...props }) => {
	return (
		<StickyProvider>
			<Layout isHome={false}>
				<SEO />
				<Box sx={styles.box}>
					<Container>
						<div>
							<h3 sx={styles.title}>{post.title}</h3>
							<Text sx={styles.text} dangerouslySetInnerHTML={{ __html: post.content.encoded }}/>
						</div>
					</Container>
				</Box>
			</Layout>
		</StickyProvider>
	);
};

export const query = graphql`
	query($id: String!) {
		post: feedMediumData(id: { eq: $id }) {
			title
			pubDate
			link
			id
			guid
			content {
				encoded
			}
		}
	}
`;

export default MySinglePostPage;

const styles = {
  box:{},
  title:{}
}