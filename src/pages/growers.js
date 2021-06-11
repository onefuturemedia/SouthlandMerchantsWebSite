import React from 'react';
import 'swiper/swiper-bundle.min.css';
import 'rc-drawer/assets/index.css';
import 'react-modal-video/css/modal-video.min.css';

import { StickyProvider } from 'contexts/app/app.provider';
import SEO from 'components/seo';
import Layout from 'components/layout';
import GrowersRegion from 'sections/growers-region';
import { Container, Text, Heading } from 'theme-ui';

import camposDasVertentesImg from '../assets/campos-das-vertentes.png';
import cerradoImg from '../assets/cerrado.png';
import mataImg from '../assets/mata.png';
import mogianaImg from '../assets/mogiana.png';
import espiritoSantoImg from '../assets/espirito-santo.png';
import mantiqueiraImg from '../assets/chapada.png';
import chapadaImg from '../assets/chapada.png';
import foundersImg from '../assets/grower-example.jpg';
import cesarGalliPDF from '../assets/documents/Panorama.pdf';
import gabrielNunesPDF from '../assets/documents/Chapadao.pdf';
import gilMeloPDF from '../assets/documents/Espigao.pdf';
import tomasCostaPDF from '../assets/documents/Sao-Francisco.pdf';
import daniloDonesPDF from '../assets/documents/grower-document-example.pdf';
import edilioSoaresPDF from '../assets/documents/Coqueiral.pdf';
import elioUlianaPDF from '../assets/documents/Pedra-Bonita.pdf';
import marcosTomaziniPDF from '../assets/documents/Sitio-Tomazini.pdf';
import silvaniusKutzPDF from '../assets/documents/grower-document-example.pdf';
import vaniltoPDF from '../assets/documents/grower-document-example.pdf';
import andreGarciaPDF from '../assets/documents/Jaguara.pdf';
import cibelePDF from '../assets/documents/Embira.pdf';
import ednilsonPDF from '../assets/documents/Dutra.pdf';
import queziaTavaresPDF from '../assets/documents/Taquara.pdf';
import abelardoJosePDF from '../assets/documents/Divisa.pdf';
import carlosRenatoPDF from '../assets/documents/Pedra-Batista.pdf';
import guilhermeCastroPDF from '../assets/documents/Serra-da-Campanha.pdf';
import ledaAparecidaPDF from '../assets/documents/Roseira.pdf';
import luizPauloPDF from '../assets/documents/Santuario-do-Sul.pdf';
import tatianePDF from '../assets/documents/grower-document-example.pdf';
import ricardoTavaresPDF from '../assets/documents/Matilde.pdf';
import andreAquilaPDF from '../assets/documents/Aterradinho.pdf';
import pedroCorreaPDF from '../assets/documents/grower-document-example.pdf';
import biquinhaPDF from '../assets/documents/Biquinha.pdf';
import NiquinhoPDF from '../assets/documents/Niquinho.pdf';
import aterradinhoIMG from '../assets/grower/aterradinho.jpg';
import boaSorteIMG from '../assets/grower/boasorte.jpeg';
import chapadaoIMG from '../assets/grower/chapadao.jpeg';
import coqueiralIMG from '../assets/grower/coqueiral.jpg';
import divisaIMG from '../assets/grower/divisafarm.jpeg';
import donesIMG from '../assets/grower/dones.png';
import dutraIMG from '../assets/grower/dutra.jpeg';
import embiraIMG from '../assets/grower/embira.jpg';
import espigaoIMG from '../assets/grower/espigao.jpeg';
import feeEsperancaIMG from '../assets/grower/feeesperanca.jpg';
import kutzIMG from '../assets/grower/kutz.jpg';
import jaguaraIMG from '../assets/grower/jaguara.jpg';
import niquinhoIMG from '../assets/grower/niquinho.jpg';
import panoramaIMG from '../assets/grower/panorama.jpg';
import pedrabatistaIMG from '../assets/grower/pedrabatista.jpeg';
import pedrabonitaIMG from '../assets/grower/pedrabonita.jpg';
import roseiraIMG from '../assets/grower/roseira.jpeg';
import santaEdwigesIMG from '../assets/grower/santaedwiges.jpeg';
import santuarioIMG from '../assets/grower/santuario.jpg';
import serradaCampanhaIMG from '../assets/grower/serradacampanha.jpeg';
import taquaraIMG from '../assets/grower/taquara.jpg';
import biquinhaIMG from '../assets/grower/biquinha.jpeg';
import amanaIMG from '../assets/grower/Amana.jpg';
import anahyIMG from '../assets/grower/Anahy.png';
import andiraIMG from '../assets/grower/andira.png';
import apuaIMG from '../assets/grower/Apua.jpg';
import UyaraIMG from '../assets/grower/Uyara.png';

const data = [
	{
		name: 'Cerrado Mineiro',
		tag: 'cerrado-mineiro',
		img: cerradoImg,
		imgPosAlt: false,
		text: `The Cerrado Mineiro region, located northwest in Minas Gerais, is renowned for its high-quality coffee production globally. The large area produces annually 5 million bags of coffee comprising 25% of Minas Gerais and 12.7% of Brazil. The area's coffee industry is the first region with a Geographical Indication (GI) in Brazil. They received the renowned recognition in 2005 for their unique identity and distinct aroma notes. With hot and wet summers and mild and dry winters, cherries typically ripen at the same time. The ideal climate and altitude between 800 and 1,300 meters above sea level afford perfect conditions for cultivating this unique and extraordinary coffee with nice taste and intensive aromas from caramel to walnut, with a pleasant acidity and a vigorous chocolaty aftertaste. Coffee from Cerrado Mineiro is "Origin and Quality Certified" by the Cerrado Mineiro Region GI Regulatory Board and prides itself for its traceability and transparency.`,
		growers: [
			{
				name: 'Cesar Galli',
				description: 'Panorama Farm',
				img: panoramaIMG,
				documentPath: cesarGalliPDF,
				instagramUrl: 'https://www.instagram.com/southlandmerchants/'
			},
			{
				name: 'Gabriel Nunes',
				description: 'Chapadao Farm',
				img: chapadaoIMG,
				documentPath: gabrielNunesPDF,
				instagramUrl: 'https://www.instagram.com/southlandmerchants/'
			},
			{
				name: 'Gil Melo',
				description: 'Espigao Farm',
				img: espigaoIMG,
				documentPath: gilMeloPDF,
				instagramUrl: 'https://www.instagram.com/southlandmerchants/'
			},
			{
				name: 'Tomas Costa',
				description: 'Sao Francisco',
				img: foundersImg,
				documentPath: tomasCostaPDF,
				instagramUrl: 'https://www.instagram.com/southlandmerchants/'
			}
		]
	},
	{
		name: 'The Mountains of Espirito Santo',
		tag: 'espirito-santo',
		img: espiritoSantoImg,
		imgPosAlt: true,
		text: `Small-scale coffee growers dominate the Montanhas do Espirito Santo region who are actively engaged in the entire chain of the production process. Usually, growers in Espirito Santo work with family members and pass on their traditions and skill to younger generations. The coffee growers constantly strive for better innovation and development in speciality coffee production to improve their living standards. 
      Located in the southern area of the state of Espirito Santo, mild temperatures and steep highlands (between 700 and 1300 meters above sea level) provide ideal conditions for growing superb quality Arabica coffee with a round body, pleasant acidity, and delicate sweetness. The increasingly popular Pulped Naturals processing style coins the region's coffee characteristics, putting Espirito Santo on the map of high-quality speciality coffees. Espirito Santo is in the southeast of Brazil by the Atlantic Ocean. Its extensive coastline south of Bahia, east of Minas Gerais and north of Rio de Janeiro is a popular tourist destination. Our co-founder Andre was born and raised in its capital Vitoria. Inland Espirito Santo is home to nature parks and reserves that protect the rich biodiversity of the local flora and fauna. Many settlers in the mountains of Espirito Santo arrived at the beginning of the twentieth century from Europe. The state is home to large Italian communities and immigrants from the Pomeranian region, an area lying along the Baltic Sea coastal plain between northern Germany and Poland.`,
		growers: [
			{
				name: 'Danilo Dones',
				description: 'Dones Farm',
				img: donesIMG,
				documentPath: daniloDonesPDF,
				instagramUrl: 'https://www.instagram.com/southlandmerchants/'
			},
			{
				name: 'Edilio Soares',
				description: 'Coqueiral Farm',
				img: coqueiralIMG,
				documentPath: edilioSoaresPDF,
				instagramUrl: 'https://www.instagram.com/southlandmerchants/'
			},
			{
				name: 'Elio Uliana',
				description: 'Pedra Bonita Farm',
				img: pedrabonitaIMG,
				documentPath: elioUlianaPDF,
				instagramUrl: 'https://www.instagram.com/southlandmerchants/'
			},
			{
				name: 'Marcos Tomazini',
				description: 'Tomazini Farm',
				img: foundersImg,
				documentPath: marcosTomaziniPDF,
				instagramUrl: 'https://www.instagram.com/southlandmerchants/'
			},
			{
				name: 'Pedro Correa',
				description: 'Boa Sorte Farm',
				img: boaSorteIMG,
				documentPath: pedroCorreaPDF,
				instagramUrl: 'https://www.instagram.com/southlandmerchants/'
			},
			{
				name: 'Silvanius Kutz',
				description: 'Kutz Farm',
				img: kutzIMG,
				documentPath: silvaniusKutzPDF,
				instagramUrl: 'https://www.instagram.com/southlandmerchants/'
			},
			{
				name: 'Vanilto Grinewald',
				description: 'Fe Esperanca Farm',
				img: feeEsperancaIMG,
				documentPath: vaniltoPDF,
				instagramUrl: 'https://www.instagram.com/southlandmerchants/'
			}
		]
	},
	{
		name: 'Campos das Vertentes',
		tag: 'campos-das-vertentes',
		img: camposDasVertentesImg,
		imgPosAlt: false,
		text: `Campo das Vertentes, an area with high mountains and lush forests, lies next to the Mantiqueira de Minas region in the State of Minas Gerais.
      The region’s mild climate and ideal altitude offer perfect conditions for its high-quality coffee production.
      The region of Campo das Vertentes region houses 17 cities: Bom Sucesso, Camacho, Campo Belo, Cana Verde, Candeias, Carmo da Mata, Conceição da Barra de Minas, Ibituruna, Nazareno, Oliveira, Perdões, Ritápolis, Santana do Jacaré, Santo Antônio do Amparo, São Francisco de Paula, São João Del Rei and São Tiago. 
      Campo das Vertentes was recognised with the Geographical Indication (GI) in November 2020. Along the Mantiqueira de Minas region and Cerrado Mineiro, it is another region to receive this honour for coffee production. It demonstrates the hard work ethic, dedication and commitment to promoting the area's economic development in liaison with the Brazilian ONG Sebrae. 
      `,
		growers: [
			{
				name: 'Andre Garcia',
				description: 'Jaguara Farm',
				img: jaguaraIMG,
				documentPath: andreGarciaPDF,
				instagramUrl: 'https://www.instagram.com/southlandmerchants/'
			},
			{
				name: 'Cibele',
				description: 'Embira Farm',
				img: embiraIMG,
				documentPath: cibelePDF,
				instagramUrl: 'https://www.instagram.com/southlandmerchants/'
			}
		]
	},
	{
		name: 'Matas de Minas',
		tag: 'mata-de-minas',
		img: mataImg,
		imgPosAlt: true,
		text:
			'Located on the border between Sao Paulo and Minas Gerais state, this region is traditionally known as the producer of the finest specialty coffees given its climate (20ºC all-year round), fertile soil, ideal altitude (Between 900m and 1000m) and excellent infrastructure and technologies for the production and transportation of coffee. Processing methods are fully natural. The coffees of Mogiana normally have a heavy body and medium acidity.',
		growers: [
			{
				name: 'Ednilson/Walter',
				description: 'Dutra Farm',
				img: dutraIMG,
				documentPath: ednilsonPDF,
				instagramUrl: 'https://www.instagram.com/southlandmerchants/'
			},
			{
				name: 'Quezia Tavares',
				description: 'Taquara Farm',
				img: taquaraIMG,
				documentPath: queziaTavaresPDF,
				instagramUrl: 'https://www.instagram.com/southlandmerchants/'
			}
		]
	},
	{
		name: 'Mantiqueira de Minas',
		tag: 'mantiqueira-de-minas',
		img: mantiqueiraImg,
		imgPosAlt: false,
		text: `The region of Mantiqueira de Minas in the southern part of Minas Gerais is an excellent area to produce speciality coffee. It is one of the most recognised and awarded regions in Brazil. This region’s longstanding traditions and expertise in producing high quality coffees with unique profiles. 
      Mantiqueira de Minas benefits from a colder than usual climate, good geological conditions and an ideal altitude. Most of the over 7,000 growers own small farms and cultivate their coffee on slopes between 900 and 1,500 metres above sea level. They maintain their rich traditions and a deep connection to the land and their ancestors. Manual harvesting guarantees that only the best and ripe fruit is used for the approximately 1 million bags of coffee. Their rigorous approach results in the region’s respected reputation and their outstanding, distinctive product the world’s coffee lovers benefit from.
      As part of the Serra da Mantiqueira micro-region, the Mantiqueira de Minas lies within the municipalities of Lambari, Cristina, Olímpio Noronha, Santa Rita do Sapucaí and Mantiqueira; the latter being home to our milling process warehouse
      `,
		growers: [
			{
				name: 'Abelardo José',
				description: 'Divisa Farm',
				img: divisaIMG,
				documentPath: abelardoJosePDF,
				instagramUrl: 'https://www.instagram.com/southlandmerchants/'
			},
			{
				name: 'Carlos Renato',
				description: 'Pedra Batista Farm',
				img: pedrabatistaIMG,
				documentPath: carlosRenatoPDF,
				instagramUrl: 'https://www.instagram.com/southlandmerchants/'
			},
			{
				name: 'Guilherme Castro',
				description: 'Biquinha Farm',
				img: biquinhaIMG,
				documentPath: biquinhaPDF,
				instagramUrl: 'https://www.instagram.com/southlandmerchants/'
			},
			{
				name: 'Guilherme Castro',
				description: 'Serra da Campanha',
				img: serradaCampanhaIMG,
				documentPath: guilhermeCastroPDF,
				instagramUrl: 'https://www.instagram.com/southlandmerchants/'
			},
			{
				name: 'Leda Aparecida',
				description: 'Roseira Farm',
				img: roseiraIMG,
				documentPath: ledaAparecidaPDF,
				instagramUrl: 'https://www.instagram.com/southlandmerchants/'
			},
			{
				name: 'Luiz Paulo Pereira',
				description: 'Niquinho Farm',
				img: niquinhoIMG,
				documentPath: NiquinhoPDF,
				instagramUrl: 'https://www.instagram.com/southlandmerchants/'
			},
			{
				name: 'Luiz Paulo Pereira',
				description: 'Santuario do Sul',
				img: santuarioIMG,
				documentPath: luizPauloPDF,
				instagramUrl: 'https://www.instagram.com/southlandmerchants/'
			},
			{
				name: 'Tatiane Gonçalves',
				description: 'Santa Edwiges Farm',
				img: santaEdwigesIMG,
				documentPath: tatianePDF,
				instagramUrl: 'https://www.instagram.com/southlandmerchants/'
			}
		]
	},
	{
		name: 'Chapada de Minas',
		tag: 'chapada-de-minas',
		img: chapadaImg,
		imgPosAlt: true,
		text:
			'This region has rough terrains with a warm and humid climate ideal for the production of some of the highly internationally acclaimed Brazilian Coffees. Coffees from Matas de Minas have a delicate and balanced acidity and have a medium to full body. Processing methods are pulped natural and natural.',
		growers: [
			{
				name: 'Ricardo Tavares',
				description: 'Matilde Farm',
				img: foundersImg,
				documentPath: ricardoTavaresPDF,
				instagramUrl: 'https://www.instagram.com/southlandmerchants/'
			}
		]
	},
	{
		name: 'Mogiana',
		tag: 'mogiana',
		img: mogianaImg,
		imgPosAlt: false,
		text:
			'Located in the northeast of the São Paulo state along the border of Minas Gerais, Mogiana has elevations between 900 and 1,000 meters above sea level and an average annual temperature of 21 degrees Celsius. It is home to some of the most consistent coffees in Brazil. With its gently rolling hills, rich soil, sufficient water supplies from the Rio Grande, and higher elevations, the terrain is well suited for growing outstanding Brazilian coffee. Although small family-owned farms dominate the region, the investment into the mechanisation of the harvest, the well-established infrastructure and favourable access to innovative technologies enables the well-skilled farmers of Mogiana to play a leading role in the volume of highly regarded coffee production.',
		growers: [
			{
				name: 'Andre Aguila',
				description: 'Aterradinho Farm',
				img: aterradinhoIMG,
				documentPath: andreAquilaPDF,
				instagramUrl: 'https://www.instagram.com/southlandmerchants/'
			}
		]
	}
];

const coffeData = [
	{
		name: 'Anahy Coffee',
		tag: 'anahy',
		img: anahyIMG,
		imgPosAlt: false,
		isCoffee: true,
		text: `Anahy Coffee is our signature coffee, in natural process, available throughout the entire year. "Anahy" means 'sweet voice' in the native Tupi-Guarani language, which is evident in the coffee's clean and balanced nice profile of chocolaty and nutty tasting notes; a classic example of Brazilian coffee blends.`,
		growers: []
	},
	{
		name: 'Uyará Coffee',
		tag: 'uyara',
		img: UyaraIMG,
		imgPosAlt: true,
		isCoffee: true,
		text: `Uyará delivers a very sweet coffee, in natural process, from Cerrado Mineiro. It exemplifies the consistent quality created by Brazil's coffee growers and offers the same profile throughout all seasons, despite changing environmental conditions.`,
		growers: []
	},
	{
		name: 'Andirá Coffee',
		tag: 'andira',
		img: andiraIMG,
		imgPosAlt: false,
		isCoffee: true,
		text: `Andirá delivers a high-quality classic natural processed coffee from Cerrado Mineiro. It represents the consistent quality with a good body, great sweetness and velvet after taste created by Brazil's coffee farmers, who are committed to improving coffee production with a balanced and smooth profile using all available technologies. `,
    growers: []
	},
	{
		name: 'Apua Coffee',
		tag: 'apua',
		img: apuaIMG,
		imgPosAlt: true,
		isCoffee: true,
		text: `Apua delivers a superior quality of a classic pulped natural processed coffee. Apua means "mountains" and is a perfect example of what we can find around the beautiful mountains of Espirito Santo. It is a great coffee, grown and harvested by the regional seasoned coffee growers, and offers a balanced, round-bodied, pleasantly sweet profile with hints of fruit and a nice acidity.`,
    growers: []
	},
	{
		name: 'Amana Coffee',
		tag: 'amana',
		img: amanaIMG,
		imgPosAlt: false,
		isCoffee: true,
		text: `Amana, meaning "heaven water, rain", is an impressive washed coffee from the mountains of Espirito Santo. The regional seasoned farmers consistently cultivate a balanced round-bodied coffee with a pleasant acidity and a delightful sweetness. Unusual for Brazil, Amana coffee is a washed process coffee, setting it apart from your standard Brazilian coffees.`,
    growers: []
	}
];

export default function GrowersPage() {
	return (
		<StickyProvider>
			<Layout isHome={false}>
				<SEO title="Southland Merchants" />
				<Container sx={styles.container}>
					<Heading as="h3">Facts from the Origin</Heading>
					<Text as="p">
						With an area of 2.4 million hectares to grow coffee and many different altitudes and climates
						plus the use of different processing methods, Brazil produces more than 50 million bags (60kg)
						with an incredible number of varieties of Arabica and Robusta coffees. The region where the
						founders of Southland Merchants are from and the quality department is based at is responsible
						for more than 50% of the national coffee production.
					</Text>
				</Container>
				{data.map(regionData => (
					<GrowersRegion region={regionData} />
				))}
				<Container sx={styles.containerCoffee}>
					<Heading as="h3">Our Signature Coffee</Heading>
					<Text as="p">
						Apart from our single estate coffees, we offer a wide range of speciality coffee throughout the
						entire year. <br />
						Our Signature coffees, named in the Tupi-Guarani language, maintain a consistent flavour profile
						through swapping and combining different crops, predominantly sourced from medium and small
						growers within one region. Rather than working with one individual farmer, we collaborate with
						several growers in the same region to create the right balance and consistency. If you aim for a
						consistent result throughout the entire year, our signature coffees are an excellent option.
					</Text>
				</Container>
				{coffeData.map(coffeeData => (
					<GrowersRegion region={coffeeData}/>
				))}
			</Layout>
		</StickyProvider>
	);
}

const styles = {
	container: {
		mt: ['200px'],
		mb: '5%',
		h3: {
			fontSize: [6, 7, 7, 7, 7, 8, 8],
			textAlign: 'center',
			maxWidth: [null, null, null, '400px', 'none'],
			mx: [null, null, null, 'auto', '0'],
			color: 'text',
			fontWeight: 'bold',
			letterSpacing: ['-0.5px', null, null, null, null, null, '-1.5px'],
			lineHeight: [1.5, null, 1.25],
			mb: ['30px', null, null, null, '30px']
		},
		p: {
			fontSize: [2, 2, 3, 3, 4, 5, 5],
			fontStyle: 'italic',
			mb: ['80px', '80px', '100px', 3, 4, 5, 5]
		}
	},
	containerCoffee: {
		mt: ['50px'],
		mb: '5%',
		h3: {
			fontSize: [6, 7, 7, 7, 7, 8, 8],
			textAlign: 'center',
			maxWidth: [null, null, null, '400px', 'none'],
			mx: [null, null, null, 'auto', '0'],
			color: 'text',
			fontWeight: 'bold',
			letterSpacing: ['-0.5px', null, null, null, null, null, '-1.5px'],
			lineHeight: [1.5, null, 1.25],
			mb: ['30px', null, null, null, '30px']
		},
		p: {
			fontSize: [2, 2, 3, 3, 4, 5, 5],
			fontStyle: 'italic',
			mb: ['80px', '80px', '100px', 3, 4, 5, 5]
		}
	}
};
