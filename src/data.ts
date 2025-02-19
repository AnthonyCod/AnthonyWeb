import javascript from './Images/javascript.svg'
import react from './Images/react.svg'
import tailwind from './Images/tailwind.svg'
import typescript from './Images/typescript.svg'
import css from './Images/css.svg'
import html from './Images/html.svg'

const data = {
  cards: [
    {
      frontIcon: javascript,
      backIcon: javascript,
      frontText: "JavaScript",
      backText: "JavaScript"
    },
    {
      frontIcon: react,
      backIcon: react,
      frontText: "React",
      backText: "React",
      isFlipped: true
    },
    {
      frontIcon: tailwind,
      backIcon: tailwind,
      frontText: "Tailwind",
      backText: "Tailwind"
    },
    {
      frontIcon: typescript,
      backIcon: typescript,
      frontText: "Typescript",
      backText: "Typescript",
      isFlipped: true
    },
    {
      frontIcon: css,
      backIcon: css,
      frontText: "Css",
      backText: "Css"
    },
    {
      frontIcon: html,
      backIcon: html,
      frontText: "Html",
      backText: "Html",
      isFlipped: true
    }
  ]
};

export default data;
