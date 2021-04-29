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
import mogianaImg from "../assets/mogiana.png";
import espiritoSantoImg from "../assets/espirito-santo.png";
import mantiqueiraImg from "../assets/chapada.png";
import chapadaImg from "../assets/chapada.png";
import foundersImg from "../assets/grower-example.jpg";
import cesarGalliPDF from "../assets/documents/grower-document-example.pdf";
import gabrielNunesPDF from "../assets/documents/grower-document-example.pdf";
import gilMeloPDF from "../assets/documents/grower-document-example.pdf";
import tomasCostaPDF from "../assets/documents/grower-document-example.pdf";
import daniloDonesPDF from "../assets/documents/grower-document-example.pdf";
import edilioSoaresPDF from "../assets/documents/grower-document-example.pdf";
import elioUlianaPDF from "../assets/documents/grower-document-example.pdf";
import marcosTomaziniPDF from "../assets/documents/grower-document-example.pdf";
import silvaniusKutzPDF from "../assets/documents/grower-document-example.pdf";
import vaniltoPDF from "../assets/documents/grower-document-example.pdf";
import andreGarciaPDF from "../assets/documents/grower-document-example.pdf";
import cibelePDF from "../assets/documents/grower-document-example.pdf";
import ednilsonPDF from "../assets/documents/grower-document-example.pdf";
import queziaTavaresPDF from "../assets/documents/grower-document-example.pdf";
import abelardoJosePDF from "../assets/documents/grower-document-example.pdf";
import carlosRenatoPDF from "../assets/documents/grower-document-example.pdf";
import guilhermeCastroPDF from "../assets/documents/grower-document-example.pdf";
import ledaAparecidaPDF from "../assets/documents/grower-document-example.pdf";
import luizPauloPDF from "../assets/documents/grower-document-example.pdf";
import tatianePDF from "../assets/documents/grower-document-example.pdf";
import ricardoTavaresPDF from "../assets/documents/grower-document-example.pdf";
import andreAquilaPDF from "../assets/documents/grower-document-example.pdf";
import pedroCorreaPDF from "../assets/documents/grower-document-example.pdf";

const data = [
  {
    name: "Cerrado Mineiro",
    tag: "cerrado-mineiro",
    img: cerradoImg,
    imgPosAlt: false,
    text:
      "This region is characterized by high plateaus that alternate with valleys, crossed by rivers. Most of the coffees from Chapada de Minas are natural processed, but the washed coffee production technique is constantly increasing the popularity.",
    growers: [
      {
        name: "Cesar Galli",
        description: "Panorama Farm",
        img: foundersImg,
        documentPath: cesarGalliPDF,
      },
      {
        name: "Gabriel Nunes",
        description: "Chapadao Farm",
        img: foundersImg,
        documentPath: gabrielNunesPDF,
      },
      {
        name: "Gil Melo",
        description: "Espigao Farm",
        img: foundersImg,
        documentPath: gilMeloPDF,
      },
      {
        name: "Tomas Costa",
        description: "Sao Francisco",
        img: foundersImg,
        documentPath: tomasCostaPDF,
      },
    ],
  },
  {
    name: "The Mountains of Espirito Santo",
    tag: "espirito-santo",
    img: espiritoSantoImg,
    imgPosAlt: true,
    text:
      "Located on the border between Sao Paulo and Minas Gerais state, this region is traditionally known as the producer of the finest specialty coffees given its climate (20ºC all-year round), fertile soil, ideal altitude (Between 900m and 1000m) and excellent infrastructure and technologies for the production and transportation of coffee. Processing methods are fully natural. The coffees of Mogiana normally have a heavy body and medium acidity.",
    growers: [
      {
        name: "Danilo Dones",
        description: "Dones Farm",
        img: foundersImg,
        documentPath: daniloDonesPDF,
      },
      {
        name: "Edilio Soares",
        description: "Coqueiral Farm",
        img: foundersImg,
        documentPath: edilioSoaresPDF,
      },
      {
        name: "Elio Uliana",
        description: "Pedra Bonita Farm",
        img: foundersImg,
        documentPath: elioUlianaPDF,
      },
      {
        name: "Marcos Tomazini",
        description: "Tomazini Farm",
        img: foundersImg,
        documentPath: marcosTomaziniPDF,
      },
      {
        name: "Pedro Correa",
        description: "Boa Sorte Farm",
        img: foundersImg,
        documentPath: pedroCorreaPDF,
      },
      {
        name: "Silvanius Kutz",
        description: "Kutz Farm",
        img: foundersImg,
        documentPath: silvaniusKutzPDF,
      },
      {
        name: "Vanilto Grinewald",
        description: "Fe Esperanca Farm",
        img: foundersImg,
        documentPath: vaniltoPDF,
      },
    ],
  },
  {
    name: "Campos das Vertentes",
    tag: "campos-das-vertentes",
    img: camposDasVertentesImg,
    imgPosAlt: false,
    text:
      "This is the heart of coffee production in Brazil. The climate here is mild with a constant rainfalls and stable weather, providing ideal conditions for year-round. production of beans. Processing methods are pulped natural, washed and natural. The coffees of this area stand out due to their fruity aroma and low acidity.",
    growers: [
      {
        name: "Andre Garcia",
        description: "Jaguara Farm",
        img: foundersImg,
        documentPath: andreGarciaPDF,
      },
      {
        name: "Cibele",
        description: "Embira Farm",
        img: foundersImg,
        documentPath: cibelePDF,
      },
    ],
  },
  {
    name: "Mata de Minas",
    tag: "mata-de-minas",
    img: mataImg,
    imgPosAlt: true,
    text:
      "Located on the border between Sao Paulo and Minas Gerais state, this region is traditionally known as the producer of the finest specialty coffees given its climate (20ºC all-year round), fertile soil, ideal altitude (Between 900m and 1000m) and excellent infrastructure and technologies for the production and transportation of coffee. Processing methods are fully natural. The coffees of Mogiana normally have a heavy body and medium acidity.",
    growers: [
      {
        name: "Ednilson/Walter",
        description: "Dutra Farm",
        img: foundersImg,
        documentPath: ednilsonPDF,
      },
      {
        name: "Quezia Tavares",
        description: "Taquara Farm",
        img: foundersImg,
        documentPath: queziaTavaresPDF,
      },
    ],
  },
  {
    name: "Mantiqueira de Minas",
    tag: "mantiqueira-de-minas",
    img: mantiqueiraImg,
    imgPosAlt: false,
    text:
      "This region comprises plateaus with highland tropical climate, characterized by rainy summers and dry winters, ideal for cropping with an annual medium temperature of 19 ºC. Altitudes vary between 800 and 1,300 meters and this area has a reputation of consistently producing high-quality coffees with a unique identity.",
    growers: [
      {
        name: "Abelardo José",
        description: "Divisa Farm",
        img: foundersImg,
        documentPath: abelardoJosePDF,
      },
      {
        name: "Carlos Renato",
        description: "Pedra Batista Farm",
        img: foundersImg,
        documentPath: carlosRenatoPDF,
      },
      {
        name: "Guilherme Castro",
        description: "Biquinha Farm",
        img: foundersImg,
        documentPath: guilhermeCastroPDF,
      },
      {
        name: "Guilherme Castro",
        description: "Serra da Campanha",
        img: foundersImg,
        documentPath: guilhermeCastroPDF,
      },
      {
        name: "Leda Aparecida",
        description: "Roseira Farm",
        img: foundersImg,
        documentPath: ledaAparecidaPDF,
      },
      {
        name: "Luiz Paulo Pereira",
        description: "Niquinho Farm",
        img: foundersImg,
        documentPath: luizPauloPDF,
      },
      {
        name: "Luiz Paulo Pereira",
        description: "Santuario do Sul",
        img: foundersImg,
        documentPath: luizPauloPDF,
      },
      {
        name: "Tatiane Gonçalves",
        description: "Santa Edwiges Farm",
        img: foundersImg,
        documentPath: tatianePDF,
      },
    ],
  },
  {
    name: "Chapada de Minas",
    tag: "chapada-de-minas",
    img: chapadaImg,
    imgPosAlt: true,
    text:
      "This region has rough terrains with a warm and humid climate ideal for the production of some of the highly internationally acclaimed Brazilian Coffees. Coffees from Matas de Minas have a delicate and balanced acidity and have a medium to full body. Processing methods are pulped natural and natural.",
    growers: [
      {
        name: "Ricardo Tavares",
        description: "Matilde Farm",
        img: foundersImg,
        documentPath: ricardoTavaresPDF,
      },
    ],
  },
  {
    name: "Mogiana",
    tag: "mogiana",
    img: mogianaImg,
    imgPosAlt: false,
    text:
      "Located on the border between Sao Paulo and Minas Gerais state, this region is traditionally known as the producer of the finest specialty coffees given its climate (20ºC all-year round), fertile soil, ideal altitude (Between 900m and 1000m) and excellent infrastructure and technologies for the production and transportation of coffee. Processing methods are fully natural. The coffees of Mogiana normally have a heavy body and medium acidity.",
    growers: [
      {
        name: "Andre Aguila",
        description: "Aterradinho Farm",
        img: foundersImg,
        documentPath: andreAquilaPDF,
      },
    ],
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
      color: "text_secondary",
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
