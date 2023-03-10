import { styled } from '@/styles'

export const StyleSectionCharacters = styled("section", {
  paddingTop: 56,
  paddingBottom: 72,
  ".title": {
    display: "flex",
    alignItems: "center",
    marginBottom: 56,
    span: {
      fontSize: "1.8rem",
      lineHeight: "2.7rem",
      color: "$white",
      opacity: 0.4,
      marginRight: "11.3rem"
    },
    h2: {
      position: "relative",
      fontWeight: 600,
      fontSize: "2.5rem",
      lineHeight: "3.5rem",
      maxWidth: "21.6rem",
      paddingLeft: 16,
      "&:before": {
        content: "",
        position: "absolute",
        top: 5.5,
        left: 0,
        width: 2,
        height: 59,
        backgroundColor: "$red800"
      }
    }
  },
  "@tablet": {
    padding: "0 15px",
    ".title": {
      display: "flex",
      flexDirection: "column",
    }
  },
})

export const StyleListCharacters = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridGap: "4rem 3.3rem",
  ".marvel": {
      maxWidth: 280,
      height: 368,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
  },
  "@tablet": {
    gridTemplateColumns: "repeat(3, 1fr)",
    justifyItems: "center",
  },
  "@mobile": {
    gridTemplateColumns: "1fr",
    width: "100%"
  }
})
