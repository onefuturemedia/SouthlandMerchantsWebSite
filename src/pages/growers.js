import React from "react";
import "swiper/swiper-bundle.min.css";
import "rc-drawer/assets/index.css";
import "react-modal-video/css/modal-video.min.css";

import { StickyProvider } from "contexts/app/app.provider";
import SEO from "components/seo";
import Layout from "components/layout";
import GrowersRegion from "sections/growers-region";
import { Container, Text, Heading } from "theme-ui";

import camposDasVertentesImg from "../assets/campos-das-vertentes.png";
import cerradoImg from "../assets/cerrado.png";
import mataImg from "../assets/mata.png";
import mogianaImg from "../assets/Mogiana-MG-SP.png";
import espiritoSantoImg from "../assets/espirito-santo.png";
import mantiqueiraImg from "../assets/mantiqueira.jpeg";
import chapadaImg from "../assets/chapada.png";
import cesarGalliPDF from "../assets/documents/Panorama.pdf";
import gabrielNunesPDF from "../assets/documents/Chapadao.pdf";
import gilMeloPDF from "../assets/documents/Espigao.pdf";
import tomasCostaPDF from "../assets/documents/SaoFrancisco.pdf";
import daniloDonesPDF from "../assets/documents/Dones.pdf";
import edilioSoaresPDF from "../assets/documents/Coqueiral.pdf";
import elioUlianaPDF from "../assets/documents/Pedra Bonita.pdf";
import marcosTomaziniPDF from "../assets/documents/Tomazini.pdf";
import silvaniusKutzPDF from "../assets/documents/Irmao-Kutz.pdf";
import vaniltoPDF from "../assets/documents/Fe-e-Esperanca.pdf";
import andreGarciaPDF from "../assets/documents/Jaguara.pdf";
import cibelePDF from "../assets/documents/Embira.pdf";
import ednilsonPDF from "../assets/documents/Dutra.pdf";
import queziaTavaresPDF from "../assets/documents/Taquara.pdf";
import abelardoJosePDF from "../assets/documents/Divisa Farm.pdf";
import carlosRenatoPDF from "../assets/documents/Pedra Batista.pdf";
import guilhermeCastroPDF from "../assets/documents/Serra da Campanha.pdf";
import ledaAparecidaPDF from "../assets/documents/Roseira.pdf";
import luizPauloPDF from "../assets/documents/Santuario do Sul.pdf";
import tatianePDF from "../assets/documents/SantaEdwiges.pdf";
import ricardoTavaresPDF from "../assets/documents/Matilde.pdf";
import andreAquilaPDF from "../assets/documents/Aterradinho.pdf";
import pedroCorreaPDF from "../assets/documents/Boa Sorte.pdf";
import biquinhaPDF from "../assets/documents/Biquinha.pdf";
import NiquinhoPDF from "../assets/documents/Niquinho.pdf";
import nakamuraPDF from "../assets/documents/nakamura.pdf";
import resplendorPDF from "../assets/documents/resplendor.pdf";
import saoMatheusPDF from "../assets/documents/saoMatheus.pdf";
import santaCruzPDF from "../assets/documents/santaCruz.pdf";
import cachoeirinhaPDF from "../assets/documents/cachoeirinha.pdf";
import vinciPDF from "../assets/documents/vinci.pdf";
import calilPDF from "../assets/documents/calil.pdf";
import farroupilhaPDF from "../assets/documents/farroupilha.pdf";
import vinhalPDF from "../assets/documents/vinhal.pdf";
import pedraPretaPDF from "../assets/documents/pedrapreta.pdf";
import mumbucaPDF from "../assets/documents/mumbuca.pdf";
import assumcpaoPDF from "../assets/documents/assumpcao.pdf";
import boavistaPDF from "../assets/documents/boavista.pdf";
import seteirmaosPDF from "../assets/documents/seteirmaos.pdf";
import grunnwaldPDF from "../assets/documents/grunnwald.pdf";
import bateiaPDF from "../assets/documents/bateia.pdf";
import rezendePDF from "../assets/documents/rezende.pdf";
import caratingaPDF from "../assets/documents/caratinga.pdf";
import saoVicentePDF from "../assets/documents/saovicente.pdf";
import sementesPDF from "../assets/documents/semente.pdf";
import borgesPDF from "../assets/documents/borges.pdf";
import dantasPDF from "../assets/documents/ranchodantas.pdf";
import tresMeninasPDF from "../assets/documents/tresMeninas.pdf";
import saoPedroPDF from "../assets/documents/saoPedro.pdf";
import boaVistaESPDf from "../assets/documents/boaVistaES.pdf"
import altoLagoaPDF from "../assets/documents/altoLagoa.pdf"
import engenhoPDF from "../assets/documents/EngenhoFarmPDF.pdf"
import terraNovaPDF from "../assets/documents/TerraNovaPDF.pdf"
import cafeDasMariasPDF from "../assets/documents/CafeDasMariasPDF.pdf"







import aterradinhoIMG from "../assets/grower/aterradinho.jpeg";
import boaSorteIMG from "../assets/grower/boasorte.jpeg";
import chapadaoIMG from "../assets/grower/chapadao.jpeg";
import coqueiralIMG from "../assets/grower/coqueiral.jpg";
import divisaIMG from "../assets/grower/divisafarm.jpeg";
import donesIMG from "../assets/grower/dones.png";
import dutraIMG from "../assets/grower/dutra.jpeg";
import espigaoIMG from "../assets/grower/espigao.jpeg";
import feeEsperancaIMG from "../assets/grower/feeesperanca.jpg";
import kutzIMG from "../assets/grower/kutz.jpg";
import jaguaraIMG from "../assets/grower/jaguara.jpg";
import niquinhoIMG from "../assets/grower/niquinho.jpeg";
import panoramaIMG from "../assets/grower/panorama.jpg";
import pedrabatistaIMG from "../assets/grower/pedrabatista.jpeg";
import pedrabonitaIMG from "../assets/grower/pedrabonita.jpg";
import roseiraIMG from "../assets/grower/roseira.jpeg";
import santaEdwigesIMG from "../assets/grower/santaedwiges.jpeg";
import santuarioIMG from "../assets/grower/santuario.png";
import serradaCampanhaIMG from "../assets/grower/serradacampanha.jpeg";
import taquaraIMG from "../assets/grower/taquara.jpg";
import biquinhaIMG from "../assets/grower/biquinha.jpeg";
import amanaIMG from "../assets/grower/Amana.jpg";
import anahyIMG from "../assets/grower/Anahy.png";
import andiraIMG from "../assets/grower/andira.png";
import apuaIMG from "../assets/grower/Apua.jpg";
import UyaraIMG from "../assets/grower/Uyara.png";
import tomascostaImg from "../assets/grower/tomasdacosta.png";
import marcostomaziniIMG from "../assets/grower/marcostomazini.jpg";
import ricardoleonardotavaresIMG from "../assets/grower/ricardo_leonardo_tavares.jpeg";
import luizcarlosedilaineIMG from "../assets/grower/luizcarloseedilaine.jpeg";
import nakamuraIMG from "../assets/grower/nakamura.jpg";
import resplendorIMG from "../assets/grower/resplendor.jpeg";
import saoMatheusIMG from "../assets/grower/saoMatheus.jpg";
import santaCruzIMG from "../assets/grower/santaCruz.png";
import cachoeirinhaIMG from "../assets/grower/cachoeirinha.jpg";
import vinciIMG from "../assets/grower/vinci.jpeg";
import calilIMG from "../assets/grower/calil.jpeg";
import farroupilhaIMG from "../assets/grower/farroupilha.jpg";
import vinhalIMG from "../assets/grower/vinhal.jpeg";
import pedraPretaIMG from "../assets/grower/pedrapreta.png";
import mumbucaIMG from "../assets/grower/mumbuca.png";
import assumpcaoIMG from "../assets/grower/assumpcao.png";
import boavistaIMG from "../assets/grower/boavista.png";
import seteirmaosIMG from "../assets/grower/seteirmaos.png";
import grunnwaldIMG from "../assets/grower/grunnwald.png";
import bateiaIMG from "../assets/grower/bateia.png";
import rezendeIMG from "../assets/grower/rezende.png";
import caratingaIMG from "../assets/grower/caratinga.png";
import saoVicenteIMG from "../assets/grower/saovicente.png";
import sementesIMG from "../assets/grower/semente.png";
import borgesIMG from "../assets/grower/borges.png";
import dantasIMG from "../assets/grower/dantas.png";
import tresMeninasIMG from "../assets/grower/tresMeninas.jpeg";
import saoPedroIMG from "../assets/grower/saoPedro.jpg";
import boaVistaESIMG from "../assets/grower/boaVista.jpeg"
import altoLagoaIMG from "../assets/grower/altoLagoa.jpg"
import engenhoIMG from "../assets/grower/EngenhoFarm.jpg"
import terraNovaIMG from "../assets/grower/TerraNovaIMG.jpg"
import cafeDasMariasIMG from "../assets/grower/CafeDasMariasIMG.jpg"














const data = [
  {
    name: "Cerrado Mineiro",
    tag: "cerrado-mineiro",
    img: cerradoImg,
    imgPosAlt: false,
    text: `The Cerrado Mineiro region, located northwest in Minas Gerais, is globally renowned for its high-quality coffee production. The large area covers 210,000 hectares of coffee plantations with over 4500 farmers and produces 5 million bags of coffee annually. This equates to 25% of Minas Gerais and 12.7% of Brazil's coffee crop. Quantity plays a big part in defining the region's output, but not at the expense of quality. Many factors contribute to the outstanding coffee's excellence. Hot and wet summers and mild and dry winters result in one ripening season eliminating the risk of under or overripened fruit at harvest. Other favourable contributors to growing the region's extraordinary green coffee are the ideal altitude between 800 and 1,300 metres above sea level, rich soil and the indispensable knowledge and wisdom of the growers to produce the area's unique and exceptional product. It is not surprising that the area's coffee industry is the first region with a Geographical Indication (GI) in Brazil. They received the renowned recognition in 2005 for their unique identity and distinct aroma notes from caramel to walnut, with a pleasant acidity and a vigorous chocolaty aftertaste.`,
    growers: [
      {
        name: "Erika Urban",
        description: "Cafe das Marias Farm",
        img: cafeDasMariasIMG,
        documentPath: cafeDasMariasPDF,
        instagramUrl: "https://www.instagram.com/southlandmerchants/",
      },
      {
        name: "Cesar Galli",
        description: "Panorama Farm",
        img: panoramaIMG,
        documentPath: cesarGalliPDF,
        instagramUrl: "https://www.instagram.com/southlandmerchants/",
      },
      {
        name: "Bia and Luiz",
        description: "Sete Irmaos Farm",
        img: seteirmaosIMG,
        documentPath: seteirmaosPDF,
        instagramUrl: "https://www.instagram.com/southlandmerchants/",
      },
      {
        name: "Gabriel Nunes",
        description: "Chapadao Farm",
        img: chapadaoIMG,
        documentPath: gabrielNunesPDF,
        instagramUrl: "https://www.instagram.com/southlandmerchants/",
      },
      {
        name: "Gil Melo",
        description: "Espigao Farm",
        img: espigaoIMG,
        documentPath: gilMeloPDF,
        instagramUrl: "https://www.instagram.com/southlandmerchants/",
      },
      {
        name: "Tomas Costa",
        description: "Sao Francisco",
        img: tomascostaImg,
        documentPath: tomasCostaPDF,
        instagramUrl: "https://www.instagram.com/southlandmerchants/",
      },

      
      {
        name: "Inacio Carlos",
        description: "Farroupilha Farm",
        img: farroupilhaIMG,
        documentPath: farroupilhaPDF,
        instagramUrl: "https://www.instagram.com/southlandmerchants/",
      },
      {
        name: "Rafael Vinhal",
        description: "Vinhal Farm",
        img: vinhalIMG,
        documentPath: vinhalPDF,
        instagramUrl: "https://www.instagram.com/southlandmerchants/",
      },
      {
        name: "Virginia Coutinho",
        description: "Sementes Farm",
        img: sementesIMG,
        documentPath: sementesPDF,
        instagramUrl: "https://www.instagram.com/southlandmerchants/",
      },
      {
        name: "Marcelo e Paula",
        description: "Tres Meninas Farm",
        img: tresMeninasIMG,
        documentPath: tresMeninasPDF,
        instagramUrl: "https://www.instagram.com/southlandmerchants/",
      },

    ],
  },
  {
    name: "The Mountains of Espirito Santo",
    tag: "espirito-santo",
    img: espiritoSantoImg,
    imgPosAlt: true,
    text: `Small-scale coffee growers dominate the Mountains do Espirito Santo region who are actively engaged in the entire chain of the production process. Usually, growers in Espirito Santo work with family members and pass on their traditions and skill to younger generations. The coffee growers constantly strive for better innovation and development in speciality coffee production to improve their living standards. Located in the southern area of the state of Espirito Santo, mild temperatures and steep highlands (between 700 and 1300 meters above sea level) provide ideal conditions for growing superb quality Arabica coffee with a good body, pleasant acidity, and delicate sweetness. The increasingly popular Pulped Naturals processing style coins the region's coffee characteristics, putting Espirito Santo on the map of high-quality speciality coffees. Espirito Santo is in the southeast of Brazil by the Atlantic Ocean. Its extensive coastline south of Bahia, east of Minas Gerais and north of Rio de Janeiro is a popular tourist destination. Our co-founder Andre was born and raised in its capital Vitoria. Inland Espirito Santo is home to nature parks and reserves that protect the rich biodiversity of the local flora and fauna. Many settlers in the mountains of Espirito Santo arrived at the beginning of the twentieth century from Europe. The state is home to large Italian communities and immigrants from the Pomeranian region, an area lying along the Baltic Sea coastal plain between northern Germany and Poland.`,
    growers: [
      {
        name: "Danilo Dones",
        description: "Dones Farm",
        img: donesIMG,
        documentPath: daniloDonesPDF,
        instagramUrl: "https://www.instagram.com/southlandmerchants/",
      },
      {
        name: "Edval de Paula",
        description: "Rancho Dantas Farm",
        img: dantasIMG,
        documentPath: dantasPDF,
        instagramUrl: "https://www.instagram.com/southlandmerchants/",
      },
      {
        name: "Renilto Gering",
        description: "Caratinga Farm",
        img: caratingaIMG,
        documentPath: caratingaPDF,
        instagramUrl: "https://www.instagram.com/southlandmerchants/",
      },
      {
        name: "Valdecir Tomanzini",
        description: "Bateia Farm",
        img: bateiaIMG,
        documentPath: bateiaPDF,
        instagramUrl: "https://www.instagram.com/southlandmerchants/",
      },
      {
        name: "Levi Hammer",
        description: "Grünewald Farm",
        img: grunnwaldIMG,
        documentPath: grunnwaldPDF,
        instagramUrl: "https://www.instagram.com/southlandmerchants/",
      },
      {
        name: "Edilio Soares",
        description: "Coqueiral Farm",
        img: coqueiralIMG,
        documentPath: edilioSoaresPDF,
        instagramUrl: "https://www.instagram.com/southlandmerchants/",
      },
      {
        name: "Elio Uliana",
        description: "Pedra Bonita Farm",
        img: pedrabonitaIMG,
        documentPath: elioUlianaPDF,
        instagramUrl: "https://www.instagram.com/southlandmerchants/",
      },
      {
        name: "Marcos Tomazini",
        description: "Tomazini Farm",
        img: marcostomaziniIMG,
        documentPath: marcosTomaziniPDF,
        instagramUrl: "https://www.instagram.com/southlandmerchants/",
      },
      {
        name: "Jonatas Klippel",
        description: "Boa Vista Farm",
        img: boaVistaESIMG,
        documentPath: boaVistaESPDf,
        instagramUrl: "https://www.instagram.com/southlandmerchants/",
      },
      {
        name: "Pedro Correa",
        description: "Boa Sorte Farm",
        img: boaSorteIMG,
        documentPath: pedroCorreaPDF,
        instagramUrl: "https://www.instagram.com/southlandmerchants/",
      },
      {
        name: "Silvanius Kutz",
        description: "Kutz Farm",
        img: kutzIMG,
        documentPath: silvaniusKutzPDF,
        instagramUrl: "https://www.instagram.com/southlandmerchants/",
      },
      {
        name: "Vanilto Grinewald",
        description: "Fe Esperanca Farm",
        img: feeEsperancaIMG,
        documentPath: vaniltoPDF,
        instagramUrl: "https://www.instagram.com/southlandmerchants/",
      },
      {
        name: "Victor Endlich",
        description: "Sao Pedro",
        img: saoPedroIMG,
        documentPath: saoPedroPDF,
        instagramUrl: "https://www.instagram.com/southlandmerchants/",
      },
      {
        name: "Eleonor Brandt",
        description: "Alto Lagoa",
        img: altoLagoaIMG,
        documentPath: altoLagoaPDF,
        instagramUrl: "https://www.instagram.com/southlandmerchants/",
      }
      
    ],
  },
  {
    name: "Campos das Vertentes",
    tag: "campos-das-vertentes",
    img: camposDasVertentesImg,
    imgPosAlt: false,
    text: `Campo das Vertentes, an area with high mountains and lush forests, lies next to the Mantiqueira de Minas region in the State of Minas Gerais. The region’s mild climate and ideal altitude offer perfect conditions for its high-quality coffee production. The region of Campo das Vertentes region houses 17 cities: Bom Sucesso, Camacho, Campo Belo, Cana Verde, Candeias, Carmo da Mata, Conceição da Barra de Minas, Ibituruna, Nazareno, Oliveira, Perdões, Ritápolis, Santana do Jacaré, Santo Antônio do Amparo, São Francisco de Paula, São João Del Rei and São Tiago. Campo das Vertentes was recognised with the Geographical Indication (GI) in November 2020. Along the Mantiqueira de Minas region and Cerrado Mineiro, it is another region to receive this honour for coffee production. It demonstrates the hard work ethic, dedication and commitment to promoting the area's economic development in liaison with the Brazilian ONG Sebrae.`,
    growers: [
      {
        name: "Andre Garcia",
        description: "Jaguara Farm",
        img: jaguaraIMG,
        documentPath: andreGarciaPDF,
        instagramUrl: "https://www.instagram.com/southlandmerchants/",
      },
      {
        name: "Luiz C. e Edilaine",
        description: "Embira Farm",
        img: luizcarlosedilaineIMG,
        documentPath: cibelePDF,
        instagramUrl: "https://www.instagram.com/southlandmerchants/",
      },
    ],
  },
  {
    name: "Matas de Minas",
    tag: "mata-de-minas",
    img: mataImg,
    imgPosAlt: true,
    text: `Another region of significance for coffee production in Minas Gerais is the Matas de Minas region, located in the Brazilian Atlantic Forest in the eastern part of the state. It consists in around 60 municipalities and covers 275,000 hectares of production area, where 80% of the 36,000 growers harvest on small family farms. Sustainability and the connection between the people and the land play a vital role in the region’s coffee industry.  
		Coffees from Matas de Minas are of Arabica variety that grow on mountainous terrain between 600 and 1,200 metres above sea level. Artisanal processes are a significant influence on producing coffee of outstanding quality. The farmers harvest the cherries manually to ensure that only the ripest fruit is selected for the final product. They purposefully plant the trees with broader spacing to expose them to more sunlight for better ripening. After harvest, they follow a rigorous process with a focus on best results, ensuring only to use treated water for washing and pulping and a meticulous and careful process for drying. The results are exceptional coffees of rich diversity with floral and citrusy aroma notes, delicate acidity, a medium to full body with sweet flavours and a pleasant and long-lasting aftertaste. `,
    growers: [
      {
        name: "Nilson Assumpcao",
        description: "Assumpcao Farm",
        img: assumpcaoIMG,
        documentPath: assumcpaoPDF,
        instagramUrl: "https://www.instagram.com/southlandmerchants/",
      },
      {
        name: "Ednilson/Walter",
        description: "Dutra Farm",
        img: dutraIMG,
        documentPath: ednilsonPDF,
        instagramUrl: "https://www.instagram.com/southlandmerchants/",
      },
      {
        name: "Sinival",
        description: "São Vicente Farm",
        img: saoVicenteIMG,
        documentPath: saoVicentePDF,
        instagramUrl: "https://www.instagram.com/southlandmerchants/",
      },
      {
        name: "Quezia Tavares",
        description: "Taquara Farm",
        img: taquaraIMG,
        documentPath: queziaTavaresPDF,
        instagramUrl: "https://www.instagram.com/southlandmerchants/",
      },

    ],
  },
  {
    name: "Mantiqueira de Minas",
    tag: "mantiqueira-de-minas",
    img: mantiqueiraImg,
    imgPosAlt: false,
    text: `The region of Mantiqueira de Minas in the southern part of Minas Gerais is an excellent and Traditional area to produce speciality coffee. It is one of the most recognised and awarded regions in Brazil. This region’s longstanding traditions and expertise in producing high quality coffees with unique profiles. Mantiqueira de Minas benefits from a colder than usual climate, good geological conditions and an ideal altitude. Most of the over 8,200 growers own small and medium farms and cultivate their coffee on slopes between 900 and 1,500 MASL. They maintain their rich traditions and a deep connection to the land and their ancestors. Manual harvesting guarantees that only the best and ripe fruit is used for the approximately 1,2 million bags of coffee. Their rigorous approach results in the region’s respected reputation and their outstanding, distinctive product the world’s coffee lovers benefit from. As part of the Serra da Mantiqueira micro-region, the Mantiqueira de Minas lies within the municipalities of Lambari, Cristina, Olímpio Noronha, Santa Rita do Sapucaí and Mantiqueira; the latter being home to our milling process warehouse.`,
    growers: [
      {
        name: "Augusto Borges",
        description: "Terra Nova Farm",
        img: terraNovaIMG,
        documentPath: terraNovaPDF,
        instagramUrl: "https://www.instagram.com/southlandmerchants/",
      },
      {
        name: "Jose Ronaldo",
        description: "Engenho Farm",
        img: engenhoIMG,
        documentPath: engenhoPDF,
        instagramUrl: "https://www.instagram.com/southlandmerchants/",
      },
      {
        name: "Luciana Avincula",
        description: "Mumbuca Farm",
        img: mumbucaIMG,
        documentPath: mumbucaPDF,
        instagramUrl: "https://www.instagram.com/southlandmerchants/",
      },
      {
        name: "Patricia Borges",
        description: "Fortaleza dos Borges",
        img: borgesIMG,
        documentPath: borgesPDF,
        instagramUrl: "https://www.instagram.com/southlandmerchants/",
      },
      {
        name: "Jeferson",
        description: "Rezende Farm",
        img: rezendeIMG,
        documentPath: rezendePDF,
        instagramUrl: "https://www.instagram.com/southlandmerchants/",
      },
      {
        name: "Claudia Maria",
        description: "Pedra Preta Farm",
        img: pedraPretaIMG,
        documentPath: pedraPretaPDF,
        instagramUrl: "https://www.instagram.com/southlandmerchants/",
      },
      {
        name: "Valeria and Silvano",
        description: "Bela Vista Farm",
        img: boavistaIMG,
        documentPath: boavistaPDF,
        instagramUrl: "https://www.instagram.com/southlandmerchants/",
      },
      {
        name: "Abelardo José",
        description: "Divisa Farm",
        img: divisaIMG,
        documentPath: abelardoJosePDF,
        instagramUrl: "https://www.instagram.com/southlandmerchants/",
      },
      {
        name: "Carlos Renato",
        description: "Pedra Batista Farm",
        img: pedrabatistaIMG,
        documentPath: carlosRenatoPDF,
        instagramUrl: "https://www.instagram.com/southlandmerchants/",
      },
      {
        name: "Leda Aparecida",
        description: "Roseira Farm",
        img: roseiraIMG,
        documentPath: ledaAparecidaPDF,
        instagramUrl: "https://www.instagram.com/southlandmerchants/",
      },
      {
        name: "Luiz Paulo Pereira",
        description: "Niquinho Farm",
        img: niquinhoIMG,
        documentPath: NiquinhoPDF,
        instagramUrl: "https://www.instagram.com/southlandmerchants/",
      },
      {
        name: "Luiz Paulo Pereira",
        description: "Santuario do Sul",
        img: santuarioIMG,
        documentPath: luizPauloPDF,
        instagramUrl: "https://www.instagram.com/southlandmerchants/",
      },
      {
        name: "Tatiane Gonçalves",
        description: "Santa Edwiges Farm",
        img: santaEdwigesIMG,
        documentPath: tatianePDF,
        instagramUrl: "https://www.instagram.com/southlandmerchants/",
      },
      {
        name: "Jessica Pimentel",
        description: "Santa Cruz Farm",
        img: santaCruzIMG,
        documentPath: santaCruzPDF,
        instagramUrl: "https://www.instagram.com/southlandmerchants/",
      },
      {
        name: "Lucelia and Lucimar",
        description: "Cachoeirinha Farm",
        img: cachoeirinhaIMG,
        documentPath: cachoeirinhaPDF,
        instagramUrl: "https://www.instagram.com/southlandmerchants/",
      },
      {
        name: "Ines Vinci",
        description: "Vinci Farm",
        img: vinciIMG,
        documentPath: vinciPDF,
        instagramUrl: "https://www.instagram.com/southlandmerchants/",
      },
      {
        name: "Juliana Calil",
        description: "Calil Farm",
        img: calilIMG,
        documentPath: calilPDF,
        instagramUrl: "https://www.instagram.com/southlandmerchants/",
      },
    ],
  },
  {
    name: "Chapada de Minas",
    tag: "chapada-de-minas",
    img: chapadaImg,
    imgPosAlt: true,
    text: `Chapada de Minas, is a small region in the north east of Minas Gerais. Until recently, the area was overshadowed by the better-known coffee farms in the south of the state, but it is establishing an appreciated reputation on the map of coffee lovers due to its high-quality coffees and innovative farming.  
			The diverse terrain is characterised by plateaus and river canyons. Coffee growers take advantage of both the uneven and flatter landscape to grow and harvest coffee, the latter encouraging farmers to integrate the mechanisation of coffee harvesting. High humidity, a climate similar to Central America, consistent rain periods, and access to freshwater streams influence the superior quality of the harvest. 
			Coffees from the region are mainly Natural Processed, but the Washed Process is gaining popularity, which provides a very intriguing and exciting alternative to the traditional approach.  
			The Chapada de Minas region’s importance in the coffee industry has steadily grown and significantly influences the region’s economy. `,
    growers: [
      {
        name: "Ricardo Tavares",
        description: "Matilde Farm",
        img: ricardoleonardotavaresIMG,
        documentPath: ricardoTavaresPDF,
        instagramUrl: "https://www.instagram.com/southlandmerchants/",
      },
      {
        name: "Claudio Nakamura",
        description: "Nakamura Farm",
        img: nakamuraIMG,
        documentPath: nakamuraPDF,
        instagramUrl: "https://www.instagram.com/southlandmerchants/",
      },
      {
        name: "Gustavo Vieira",
        description: "Resplendor",
        img: resplendorIMG,
        documentPath: resplendorPDF,
        instagramUrl: "https://www.instagram.com/southlandmerchants/",
      },
      {
        name: "Luis M. Martins",
        description: "Sao Mateus",
        img: saoMatheusIMG,
        documentPath: saoMatheusPDF,
        instagramUrl: "https://www.instagram.com/southlandmerchants/",
      },
    ],
  },
  {
    name: "Mogiana",
    tag: "mogiana",
    img: mogianaImg,
    imgPosAlt: false,
    text:
      'Located in the northeast of the São Paulo state along the border of Minas Gerais, Mogiana has elevations between 900 and 1,000 meters above sea level and an average annual temperature of 21 degrees Celsius. With its gently rolling hills, rich soil, sufficient water supplies from the Rio Grande river, and higher elevations, the terrain is well suited for growing outstanding Brazilian coffee. Although small family-owned farms dominate the region, the investment into the mechanisation of the harvest, the well-established infrastructure and favourable access to innovative technologies enables the well-skilled coffee farmers of Mogiana to play a new role in the volume of highly regarded coffee production. The name "Mogiana" stems from "Mogiana Railroad", a railway built in 1872 by 21 coffee growers in the region. The farmers who have gained enough wealth through coffee production were frustrated that 10% of their cost went into transporting their coffee beans on the British owned "Sao Paulo Railway". To combat their frustration, they decided to collaborate and build a track which they named "Mogiana Railroad". With more demand for coffee, the region grew more inland, requiring more labour for coffee production. ',
    growers: [
      {
        name: "Andre Aguila",
        description: "Aterradinho Farm",
        img: aterradinhoIMG,
        documentPath: andreAquilaPDF,
        instagramUrl: "https://www.instagram.com/southlandmerchants/",
      },
    ],
  },
];

const coffeData = [
  {
    name: "Anahy Coffee",
    tag: "anahy",
    img: anahyIMG,
    imgPosAlt: false,
    isCoffee: true,
    text: `Anahy Coffee is our signature coffee, in natural process, available throughout the entire year. "Anahy" means 'sweet voice' in the native Tupi-Guarani language, which is evident in the coffee's clean and balanced nice profile of chocolaty and nutty tasting notes; a classic example of Brazilian coffee blends.`,
    growers: [],
  },
  {
    name: "Uyará Coffee",
    tag: "uyara",
    img: UyaraIMG,
    imgPosAlt: true,
    isCoffee: true,
    text: `Uyará delivers a very sweet coffee, in natural process, from Cerrado Mineiro. It exemplifies the consistent quality created by Brazil's coffee growers and offers the same profile throughout all seasons, despite changing environmental conditions.`,
    growers: [],
  },
  {
    name: "Andirá Coffee",
    tag: "andira",
    img: andiraIMG,
    imgPosAlt: false,
    isCoffee: true,
    text: `Andirá delivers a high-quality classic natural processed coffee from Cerrado Mineiro. It represents the consistent quality with a good body, great sweetness and velvet after taste created by Brazil's coffee farmers, who are committed to improving coffee production with a balanced and smooth profile using all available technologies. `,
    growers: [],
  },
  {
    name: "Apua Coffee",
    tag: "apua",
    img: apuaIMG,
    imgPosAlt: true,
    isCoffee: true,
    text: `Apua delivers a superior quality of a classic pulped natural processed coffee. Apua means "mountains" and is a perfect example of what we can find around the beautiful mountains of Espirito Santo. It is a great coffee, grown and harvested by the regional seasoned coffee growers, and offers a balanced, round-bodied, pleasantly sweet profile with hints of fruit and a nice acidity.`,
    growers: [],
  },
  {
    name: "Amana Coffee",
    tag: "amana",
    img: amanaIMG,
    imgPosAlt: false,
    isCoffee: true,
    text: `Amana, meaning "heaven water, rain", is an impressive washed coffee from the mountains of Espirito Santo. The regional seasoned farmers consistently cultivate a balanced round-bodied coffee with a pleasant acidity and a delightful sweetness. Unusual for Brazil, Amana coffee is a washed process coffee, setting it apart from your standard Brazilian coffees.`,
    growers: [],
  },
];

export default function GrowersPage() {
  return (
    <StickyProvider>
      <Layout isHome={false}>
        <SEO title="Southland Merchants" />
        <Container sx={styles.container}>
          <Heading as="h3">Facts from the Origin</Heading>
          <Text as="p">
            With an area of 2.4 million hectares to grow coffee and many
            different altitudes and climates plus the use of different
            processing methods, Brazil produces more than 50 million bags (60kg)
            with an incredible number of varieties of Arabica and Robusta
            coffees. The region where the founders of Southland Merchants are
            from and the quality department is based at is responsible for more
            than 50% of the national coffee production.
          </Text>
        </Container>
        {data.map((regionData) => (
          <GrowersRegion region={regionData} />
        ))}
        <Container sx={styles.containerCoffee}>
          <Heading as="h3">Our Signature Coffees</Heading>
          <Text as="p">
            Apart from our single estate coffees, we offer a wide range of
            speciality coffee throughout the entire year. <br />
            Our Signature coffees, named in the Tupi-Guarani language, maintain
            a consistent flavour profile through swapping and combining
            different crops, predominantly sourced from medium and small growers
            within one region. Rather than working with one individual farmer,
            we collaborate with several growers in the same region to create the
            right balance and consistency. If you aim for a consistent result
            throughout the entire year, our signature coffees are an excellent
            option.
          </Text>
        </Container>
        {coffeData.map((coffeeData) => (
          <GrowersRegion region={coffeeData} />
        ))}
      </Layout>
    </StickyProvider>
  );
}

const styles = {
  container: {
    mt: ["200px"],
    mb: "5%",
    h3: {
      fontSize: [6, 7, 7, 7, 7, 8, 8],
      textAlign: "center",
      maxWidth: [null, null, null, "400px", "none"],
      mx: [null, null, null, "auto", "0"],
      color: "text",
      fontWeight: "bold",
      letterSpacing: ["-0.5px", null, null, null, null, null, "-1.5px"],
      lineHeight: [1.5, null, 1.25],
      mb: ["30px", null, null, null, "30px"],
    },
    p: {
      fontSize: [2, 2, 3, 3, 4, 5, 5],
      fontStyle: "italic",
      mb: ["80px", "80px", "100px", 3, 4, 5, 5],
    },
  },
  containerCoffee: {
    mt: ["50px"],
    mb: "5%",
    h3: {
      fontSize: [6, 7, 7, 7, 7, 8, 8],
      textAlign: "center",
      maxWidth: [null, null, null, "400px", "none"],
      mx: [null, null, null, "auto", "0"],
      color: "text",
      fontWeight: "bold",
      letterSpacing: ["-0.5px", null, null, null, null, null, "-1.5px"],
      lineHeight: [1.5, null, 1.25],
      mb: ["30px", null, null, null, "30px"],
    },
    p: {
      fontSize: [2, 2, 3, 3, 4, 5, 5],
      fontStyle: "italic",
      mb: ["80px", "80px", "100px", 3, 4, 5, 5],
    },
  },
};
