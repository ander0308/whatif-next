
import { styled } from '@/styles'
import { Container } from '@/styles/global'


export const StylePageNotFound = styled("section",{
  marginTop: 96,
  paddingTop: 95,
  paddingBottom: 150,
  [`${Container}`]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    h1: {
      fontWeight: 600,
      fontSize: "4.9rem",
      lineHeight: "5.9rem",
      marginBottom: 24
    },
    p: {
      maxWidth: 641,
      fontSize: "1.6rem",
      lineHeight: "2.4rem",
      textAlign: "center",
      marginBottom: 40,
    },
    a: {
      display: "inline-block",
      background: "$red900",
      borderRadius: "0.5rem",
      lineHeight: "5.4rem",
      padding: "0 7.3rem",
      fontWeight: 600,
      fontSize: "1.6rem",
      color: "$white",
      marginBottom: 72,
      transition: "filter .3s ease",
      "&:hover": {
        filter: "brightness(0.8)"
      }
    }
  },
  "@tablet": {
    textAlign: "center"
  },
  "@mobile": {
    paddingLeft: 15,
    paddingRight: 15,
    [`${Container}`]: {
      h1: {
        fontSize: "3.6rem",
        lineHeight: "4rem",
      },
      p: {
        fontSize: "1.4rem",
        lineHeight: "2.4rem",
      }
    }
  }
})
