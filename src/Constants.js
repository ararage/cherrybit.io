import splash1 from "./images/splash-1.jpg";
import splash2 from "./images/splash-2.jpg";
import splash3 from "./images/splash-3.jpg";
import splash4 from "./images/splash-4.jpg";

import MitzuImage1 from "./images/mitzu/06.png";
import MitzuImage2 from "./images/mitzu/10.png";
import MitzuImage3 from "./images/mitzu/11.png";

import RamirezImage1 from "./images/ramirez/01.png";
import RamirezImage2 from "./images/ramirez/02.png";
import RamirezImage3 from "./images/ramirez/03.png";

import MitzuImage from "./images/mitzu.jpg";
import RamirezImage from "./images/ramirez.png";

import MexGasImage from "./images/mexgas.jpg";
import KSRImage from "./images/ksr.png";
import LoveLemonsImage from "./images/lovelemons.png";

import parallax1 from "./images/parallax-1.jpeg";
import parallax2 from "./images/parallax-2.jpg";

import arciaImage from "./images/36333917.jpg";
import ricardoImage from "./images/7683853.png";

const parallaxes = [
  {
    title: "Innovation and Code",
    subtitle: "We design, plan, code and deliver your needs",
    img: parallax1,
    pclassName: "black-text text-lighten-3 lighten-3"
  },
  {
    title: "Multiple Solutions",
    subtitle:
      "CherryBit provides end-to-end software development using the latest technologies such as NodeJS, Python, React, etc. ",
    img: parallax2,
    pclassName: "black-text text-lighten-3 lighten-3"
  }
];

const slides = [
  {
    title: "We're passionate",
    subtitle: "About what we do ",
    img: splash1,
    placement: "left"
  },
  {
    title: "Always thinking in the future",
    subtitle: "Step by step reaching your goals",
    img: splash4
  },
  {
    title: "We launch your solution to the stars and beyond!",
    subtitle: "To the cloud!",
    img: splash3,
    placement: "right"
  },
  {
    title: "People First",
    subtitle:
      "We think people it's more important than anything else in the world",
    img: splash2
  }
];

const customers = [
  {
    title: "Expo Mitzu Mobile App",
    image: MitzuImage,
    urlPage: "https://www.mitzu.com/",
    urlLabel: "Mitzu Web Page",
    reveal: [MitzuImage1, MitzuImage2, MitzuImage3],
    width: "10em",
    s: 4,
    technologies: "Ionic 3 (Angular 4), NodeJS, MongoDB, AWS (EC2, RDS, S3)"
  },
  {
    title: "Mexgas",
    image: MexGasImage,
    urlPage: "http://mgi-ai.com/filiales/mex-gas-trading",
    urlLabel: "Mexgas Web Page",
    reveal: [],
    technologies: "Yii2 Framework, PostgreSQL, Codeignater, Python, Angular"
  },
  {
    title: "KSR Bocinas Ecommerce",
    image: KSRImage,
    urlPage: "https://baflesksr.com/",
    urlLabel: "KSR Web Page",
    reveal: [],
    technologies: "WooCommerce, MySQL"
  },
  {
    title: "Ramirez Arambula Altamarino Abogados S.C.",
    image: RamirezImage,
    urlPage:
      "https://www.ramirezarambulaaltamiranoabogadossc.com.mx/index.html",
    urlLabel: "Web Page",
    reveal: [RamirezImage1, RamirezImage2, RamirezImage3],
    width: "40em",
    s: 12,
    technologies: "HTML5, MaterializeCSS"
  },
  {
    title: "Love and Lemons (Ecommerce)",
    image: LoveLemonsImage,
    urlPage: "http://www.loveandlemons.mx/",
    urlLabel: "Love and LemonsWeb Page",
    reveal: [],
    technologies: "WooCommerce, MySQL"
  }
];

const people = [
  {
    name: "Oscar Arcia, CEO",
    image: arciaImage,
    github: "https://github.com/oarcia",
    twitter: "https://twitter.com/@oarcia99",
    linkedin: "https://www.linkedin.com/in/oscar-arcia-a48388162/",
    email: "arciaoscar@cherrybit.com.mx"
  },
  {
    name: "Ricardo Pérez, COO",
    image: ricardoImage,
    github: "https://github.com/ararage",
    twitter: "https://twitter.com/ararage_kun",
    linkedin:
      "https://www.linkedin.com/in/jos%C3%A9-ricardo-p%C3%A9rez-32681959/",
    email: "perezricardo@cherrybit.com.mx"
  }
];

export { slides, customers, parallaxes, people };
