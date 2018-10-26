import kamboIcon from "../assets/images/projectsIcons/kambo-logo.png";
import proplanIcon from "../assets/images/projectsIcons/proplan-logo.png";
import partnersPortalIcon from "../assets/images/projectsIcons/pp-logo.png";
import fortyTwoIcon from "../assets/images/projectsIcons/forty-two-logo.png";
import roomyIcon from "../assets/images/projectsIcons/roomy-logo.png";
import istanbulClinikIcon from "../assets/images/projectsIcons/istanbul-clinik-icon.png";
import kamboScreenShot1 from "../assets/images/screenshots/kambo/1.png";
import kamboScreenShot2 from "../assets/images/screenshots/kambo/2.png";
import kamboScreenShot3 from "../assets/images/screenshots/kambo/3.png";
import kamboScreenShot4 from "../assets/images/screenshots/kambo/4.png";
import kamboScreenShot5 from "../assets/images/screenshots/kambo/5.png";
import kamboScreenShot6 from "../assets/images/screenshots/kambo/6.png";
import kamboScreenShot7 from "../assets/images/screenshots/kambo/7.png";

import istanbulScreenShot1 from '../assets/images/screenshots/istanbulCosmeticClinic/1.png'
import istanbulScreenShot2 from '../assets/images/screenshots/istanbulCosmeticClinic/2.png'
import istanbulScreenShot3 from '../assets/images/screenshots/istanbulCosmeticClinic/3.png'
import istanbulScreenShot5 from '../assets/images/screenshots/istanbulCosmeticClinic/5.png'
import istanbulScreenShot6 from '../assets/images/screenshots/istanbulCosmeticClinic/6.png'
import istanbulScreenShot7 from '../assets/images/screenshots/istanbulCosmeticClinic/7.png'

import partnersPortal1 from '../assets/images/screenshots/partnersPortal/1.png'
import partnersPortal2 from '../assets/images/screenshots/partnersPortal/2.png'
import partnersPortal3 from '../assets/images/screenshots/partnersPortal/3.png'
import partnersPortal4 from '../assets/images/screenshots/partnersPortal/4.png'
import partnersPortal5 from '../assets/images/screenshots/partnersPortal/5.png'
import partnersPortal6 from '../assets/images/screenshots/partnersPortal/6.png'
import partnersPortal7 from '../assets/images/screenshots/partnersPortal/7.png'
import partnersPortal8 from '../assets/images/screenshots/partnersPortal/8.png'
import partnersPortal9 from '../assets/images/screenshots/partnersPortal/9.png'
import partnersPortal10 from '../assets/images/screenshots/partnersPortal/10.png'
import partnersPortal11 from '../assets/images/screenshots/partnersPortal/11.png'
import partnersPortal13 from '../assets/images/screenshots/partnersPortal/13.png'
import partnersPortal14 from '../assets/images/screenshots/partnersPortal/14.png'
import proPlan1 from '../assets/images/screenshots/proPlan/1.png'
import proPlan2 from '../assets/images/screenshots/proPlan/2.png'
import proPlan3 from '../assets/images/screenshots/proPlan/3.png'
import proPlan4 from '../assets/images/screenshots/proPlan/4.png'
import ticker1 from '../assets/images/screenshots/ticker/1.jpg'
import ticker2 from '../assets/images/screenshots/ticker/2.jpg'
import ticker3 from '../assets/images/screenshots/ticker/3.jpg'
import ticker4 from '../assets/images/screenshots/ticker/4.jpg'

import { FETCH_ALL_PROJECTS } from "../actions/index";
import { FETCH_TYPE_PROJECT } from "../actions/index";
const projectsList = [
  {
    title: "Kambo.io",
    year: "2018",
      bgColor:'black',

      type: "react",
    icon: kamboIcon,
    screenShots: [
      kamboScreenShot1,
      kamboScreenShot2,
      kamboScreenShot3,
      kamboScreenShot4,
      kamboScreenShot5,
      kamboScreenShot6,
      kamboScreenShot7
    ],
    company: "Global Kapital",
    description:
      "Kambo is a financial service that provides loans backed with crypto-assets (BTC and ETH)",
    stack: ["AngularJs", "HTML5", "JQuery", "Sass", "Webpack"],
    id: 0,
    link: "https://kambo.io",
    highlights: [
      "dsakdsk ajndj ksandj a ksnd sad  jkdsadadas asd saajndj ksandj a ksnd sad  jkdsadadas asd sa",
      "dsakdsk ajndj ksandj a ksnd sad  jkdsadadas asd saajndj ksandj a ksnd sad  jkdsadadas asd sa",
      "dsakdsk ajndj ksandj a ksnd sad  jkdsadadas asd saajndj ksandj a ksnd sad  jkdsadadas asd sa",
      "dsakdsk ajndj ksandj a ksnd sad  jkdsadadas asd saajndj ksandj a ksnd sad  jkdsadadas asd sa",
      "dsakdsk ajndj ksandj a ksnd sad  jkdsadadas asd saajndj ksandj a ksnd sad  jkdsadadas asd sa"
    ]
  },
  {
    title: "Istanbul Cosmatic Clinic",
    year: "2018",
    type: "angular",
      bgColor:'green',

    icon: istanbulClinikIcon,
    screenShots: [
        istanbulScreenShot1,
        istanbulScreenShot2,
        istanbulScreenShot3,
        istanbulScreenShot5,
        istanbulScreenShot6,
        istanbulScreenShot7
    ],
    company: "Global Kapital",
    description:
      "Kambo is a financial service that provides loans backed with crypto-assets (BTC and ETH)",
    stack: ["AngularJs", "HTML5", "JQuery", "Sass", "Webpack"],
    id: 1,
    link: "https://kambo.io",
    highlights: [
      "dsakdsk ajndj ksandj a ksnd sad  jkdsadadas asd saajndj ksandj a ksnd sad  jkdsadadas asd sa",
      "dsakdsk ajndj ksandj a ksnd sad  jkdsadadas asd saajndj ksandj a ksnd sad  jkdsadadas asd sa",
      "dsakdsk ajndj ksandj a ksnd sad  jkdsadadas asd saajndj ksandj a ksnd sad  jkdsadadas asd sa",
      "dsakdsk ajndj ksandj a ksnd sad  jkdsadadas asd saajndj ksandj a ksnd sad  jkdsadadas asd sa",
      "dsakdsk ajndj ksandj a ksnd sad  jkdsadadas asd saajndj ksandj a ksnd sad  jkdsadadas asd sa"
    ]
  },
  {
    type: "angular",
      bgColor:'black',

    title: "Partners Protal",
    year: "2018",
    icon: partnersPortalIcon,
    screenShots: [
     partnersPortal1,
     partnersPortal2,
     partnersPortal3,
     partnersPortal4,
     partnersPortal5,
     partnersPortal6,
     partnersPortal7,
     partnersPortal8,
     partnersPortal9,
     partnersPortal10,
     partnersPortal11,
     partnersPortal13,
     partnersPortal14,
    ],
    company: "Global Kapital",
    description:
      "Kambo is a financial service that provides loans backed with crypto-assets (BTC and ETH)",
    stack: ["AngularJs", "HTML5", "JQuery", "Sass", "Webpack"],
    id: 2,
    link: "https://kambo.io",
      highlights: [
          "dsakdsk ajndj ksandj a ksnd sad  jkdsadadas asd saajndj ksandj a ksnd sad  jkdsadadas asd sa",
          "dsakdsk ajndj ksandj a ksnd sad  jkdsadadas asd saajndj ksandj a ksnd sad  jkdsadadas asd sa",
          "dsakdsk ajndj ksandj a ksnd sad  jkdsadadas asd saajndj ksandj a ksnd sad  jkdsadadas asd sa",
          "dsakdsk ajndj ksandj a ksnd sad  jkdsadadas asd saajndj ksandj a ksnd sad  jkdsadadas asd sa",
          "dsakdsk ajndj ksandj a ksnd sad  jkdsadadas asd saajndj ksandj a ksnd sad  jkdsadadas asd sa"
      ]

  },
  {
    type: "others",
    title: "ProPlan",
      bgColor:'blue',

      year: "2018",
    icon: proplanIcon,
    screenShots: [
     proPlan1,
     proPlan2,
     proPlan3,
     proPlan4,
    ],
    company: "Global Kapital",
    description:
      "Kambo is a financial service that provides loans backed with crypto-assets (BTC and ETH)",
    stack: ["AngularJs", "HTML5", "JQuery", "Sass", "Webpack"],
    id: 3,
    link: "https://kambo.io",
    highlights: [
      "dsakdsk ajndj ksandj a ksnd sad  jkdsadadas asd saajndj ksandj a ksnd sad  jkdsadadas asd sa",
      "dsakdsk ajndj ksandj a ksnd sad  jkdsadadas asd saajndj ksandj a ksnd sad  jkdsadadas asd sa",
      "dsakdsk ajndj ksandj a ksnd sad  jkdsadadas asd saajndj ksandj a ksnd sad  jkdsadadas asd sa",
      "dsakdsk ajndj ksandj a ksnd sad  jkdsadadas asd saajndj ksandj a ksnd sad  jkdsadadas asd sa",
      "dsakdsk ajndj ksandj a ksnd sad  jkdsadadas asd saajndj ksandj a ksnd sad  jkdsadadas asd sa"
    ]
  },
  {
    title: "forty two",
    year: "2018",
      bgColor:'black',
    icon: fortyTwoIcon,
    screenShots: [
      kamboScreenShot1,
      kamboScreenShot2,
      kamboScreenShot3,
      kamboScreenShot4,
      kamboScreenShot5,
      kamboScreenShot6,
      kamboScreenShot7
    ],
    company: "Global Kapital",
    description:
      "Kambo is a financial service that provides loans backed with crypto-assets (BTC and ETH)",
    stack: ["AngularJs", "HTML5", "JQuery", "Sass", "Webpack"],
    id: 4,
    link: "https://kambo.io",
    highlights: [
      "dsakdsk ajndj ksandj a ksnd sad  jkdsadadas asd saajndj ksandj a ksnd sad  jkdsadadas asd sa",
      "dsakdsk ajndj ksandj a ksnd sad  jkdsadadas asd saajndj ksandj a ksnd sad  jkdsadadas asd sa",
      "dsakdsk ajndj ksandj a ksnd sad  jkdsadadas asd saajndj ksandj a ksnd sad  jkdsadadas asd sa",
      "dsakdsk ajndj ksandj a ksnd sad  jkdsadadas asd saajndj ksandj a ksnd sad  jkdsadadas asd sa",
      "dsakdsk ajndj ksandj a ksnd sad  jkdsadadas asd saajndj ksandj a ksnd sad  jkdsadadas asd sa"
    ]
  },
  {
    title: "roomy",
    year: "2018",

    icon: roomyIcon,
      bgColor:'orange',
    screenShots: [
      kamboScreenShot1,
      kamboScreenShot2,
      kamboScreenShot3,
      kamboScreenShot4,
      kamboScreenShot5,
      kamboScreenShot6,
      kamboScreenShot7
    ],
    company: "Global Kapital",
    description:
      "Kambo is a financial service that provides loans backed with crypto-assets (BTC and ETH)",
    stack: ["AngularJs", "HTML5", "JQuery", "Sass", "Webpack"],
    id: 4,
    link: "https://kambo.io",
    highlights: [
      "dsakdsk ajndj ksandj a ksnd sad  jkdsadadas asd saajndj ksandj a ksnd sad  jkdsadadas asd sa",
      "dsakdsk ajndj ksandj a ksnd sad  jkdsadadas asd saajndj ksandj a ksnd sad  jkdsadadas asd sa",
      "dsakdsk ajndj ksandj a ksnd sad  jkdsadadas asd saajndj ksandj a ksnd sad  jkdsadadas asd sa",
      "dsakdsk ajndj ksandj a ksnd sad  jkdsadadas asd saajndj ksandj a ksnd sad  jkdsadadas asd sa",
      "dsakdsk ajndj ksandj a ksnd sad  jkdsadadas asd saajndj ksandj a ksnd sad  jkdsadadas asd sa"
    ]
  },
  {
    title: "ticker",
    year: "2014",

    icon: roomyIcon,
      bgColor:'orange',
    screenShots: [
      ticker1,
      ticker2,
      ticker3,
      ticker4,

    ],
    company: "Global Kapital",
    description:
      "Kambo is a financial service that provides loans backed with crypto-assets (BTC and ETH)",
    stack: ["AngularJs", "HTML5", "JQuery", "Sass", "Webpack"],
    id: 4,
    link: "https://kambo.io",
    highlights: [
      "dsakdsk ajndj ksandj a ksnd sad  jkdsadadas asd saajndj ksandj a ksnd sad  jkdsadadas asd sa",
      "dsakdsk ajndj ksandj a ksnd sad  jkdsadadas asd saajndj ksandj a ksnd sad  jkdsadadas asd sa",
      "dsakdsk ajndj ksandj a ksnd sad  jkdsadadas asd saajndj ksandj a ksnd sad  jkdsadadas asd sa",
      "dsakdsk ajndj ksandj a ksnd sad  jkdsadadas asd saajndj ksandj a ksnd sad  jkdsadadas asd sa",
      "dsakdsk ajndj ksandj a ksnd sad  jkdsadadas asd saajndj ksandj a ksnd sad  jkdsadadas asd sa"
    ]
  }
];

export default function(state = projectsList, action) {
  switch (action.type) {
    case FETCH_ALL_PROJECTS:
      return projectsList;
    case FETCH_TYPE_PROJECT:
      return projectsList.filter(
        ({ type }) => type === action.payload.fetchType
      );

    default:
      break;
  }
  return state;
}
