
import { styled } from '@/styles'

import bgHero from '@/assets/bg-hero.jpg'
import { Container } from '@/styles/global'

export const SectionHeroStyle = styled("section", {
  position: "relative",
  zIndex: 1,
  widows: "100%",
  height: 731,
  background: `url(${bgHero.src}) no-repeat top center`,
  backgroundAttachment: "fixed",
  paddingTop: 96,
  display: "flex",
  [`${Container}`]: {
    display: "flex",
    alignItems: "flex-start"
  },
  "&:after": {
    content: "",
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: 300,
    backgroundImage: "linear-gradient(transparent, $black)",
    zIndex: -1
  }
})

export const ContentSocial = styled("div", {
  width: 72,
  height: "100%",
  borderLeft: "1px solid rgba(255, 255, 255, 0.2)",
  borderRight: "1px solid rgba(255, 255, 255, 0.2)",
  ul: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    listStyle: "none",
    padding: "30px 0",
    borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
    li: {
      "&:not(:last-child)": {
        marginBottom: 32
      },
      a: {
        display: "block",
        img: {
          transition: "transform .3s ease"
        },
        "&:hover": {
          img: {
            transform: "scale(1.2)"
          }
        }
      }
    }
  },
  "@mobile": {
    display: "none"
  }
})

export const ContentText = styled("div", {
  height: "100%",
  paddingLeft: 96,
  paddingRight: 71,
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "space-between",
  flex: 1,
  paddingBottom: 31,
  borderRight: "1px solid rgba(255, 255, 255, 0.2)",
  ".left": {
    flex: 1,
    maxWidth: 574,
    paddingBottom: "10.1rem",
    h3: {
      fontWeight: 700,
      fontSize: 14,
      lineHeight: "21px",
      letterSpacing: "0.095em",
      color: "#FFA800",
      marginBottom: 8
    },
    h1: {
      fontWeight: 700,
      fontSize: "6.1rem",
      lineHeight: "7.1rem",
      marginBottom: 24,
      maxWidth: 400
    },
    p: {
      fontWeight: 400,
      fontSize: "1.6rem",
      lineHeight: "2.4rem",
      color: "$gray200",
      maxWidth: 490,
      marginBottom: 32
    },
    a: {
      display: "inline-block",
      padding: "15px 52px",
      backgroundColor: "$red900",
      borderRadius: 5,
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "24px",
      color: "$white",
      textDecoration: "none",
      transition: "filter .3s ease",
      "&:hover": {
        filter: "brightness(0.8)"
      }
    }
  },
  "@tablet": {
    flexDirection: 'column',
    alignItems: "center",
    ".left": {
      textAlign: "center",
      paddingBottom: "5rem",
      paddingTop:"2rem",
      h1: {
        fontSize: "5rem",
        lineHeight: "5.6rem",
        marginBottom: 24,
        maxWidth: 400,
      },
      p: {
        fontSize: "1.4rem",
        lineHeight: "2rem",
      },
      a: {
        padding: "15px 30px",
        backgroundColor: "$red900",
        borderRadius: 5,
        fontWeight: 600,
        fontSize: "1.4rem",
        lineHeight: "1.6rem",
      }
    }
  },
  "@mobile": {
    padding: 15,
    paddingRight: 15,
    ".left": {
      paddingBottom: "1rem",
      h1: {
        fontSize: "32px",
        maxWidth: "100%",
        marginBottom: "2rem"
      },
      p: {
        fontSize: "1.2rem",
        lineHeight: "2rem",
      },
    }
  }
})
