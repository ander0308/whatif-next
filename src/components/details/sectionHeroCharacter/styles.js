import { Container } from "@/styles/global";
import { styled } from "@/styles";


export const SectionCharacterStyle = styled("section", {
  marginTop: "9.6rem",
  height: "63.1rem",
  borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
  [`${Container}`]: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    borderLeft: "1px solid rgba(255, 255, 255, 0.2)",
    borderRight: "1px solid rgba(255, 255, 255, 0.2)"
  },
  ".image": {
    borderRadius: 5,
    overflow: "hidden",
    height: "100%"
  },
  ".info": {
    flex: 1,
    maxWidth: 650,
    marginLeft: 32,
    display: "flex",
    span: {
      fontSize: "1.8rem",
      lineHeight: "2.7rem",
      color: "$gray400",
      opacity: 0.6,
      marginTop: 20
    },
    "& > div": {
      flex: 1,
      maxWidth: 546,
      paddingLeft: 27,
      marginLeft: 19,
      h1: {
        fontWeight: 600,
        fontSize: "6.1rem",
        lineHeight: "7.1rem",
        color: "$white",
        marginBottom: 13,
        position: "relative",
        "&:before": {
          content: "",
          position: "absolute",
          width: 4,
          height: 46,
          left: -22,
          top: 12,
          background: "$red800",
        }
      },
      p: {
        fontSize: "1.6rem",
        lineHeight: "2.4rem",
        color: "$gray400"
      }
    }
  },
  "@tablet": {
    height: "60rem",
    marginBottom: 30,
    paddingBottom: 30,
    [`${Container}`]: {
      flexDirection: "column",
      ".info": {
        flexDirection: "column"
      },
      span: {
        paddingLeft: 27,
      },
      "& > div": {
        marginLeft: 0,
        h1: {
          fontSize: "4.1rem",
          lineHeight: "7.1rem",
          marginBottom: 13,
        },
        p: {
          fontSize: "1.4rem",
          lineHeight: "2rem",
        }
      }
    },
    ".image": {
        width: "350px",
    }
  }
})
