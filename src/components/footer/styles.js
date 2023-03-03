import { styled } from "@/styles";
import { Container } from "@/styles/global";


export const StyleFooter = styled("footer", {
  borderTop: "1px solid rgba(255, 255, 255, 0.2)",
  padding: "40px 0",
  [`${Container}`]: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    "& > div": {
      display: "flex",
      alignItems: "flex-start",
      strong: {
        fontWeight: 700,
        fontSize: "1.4rem",
        lineHeight: "2.1rem",
      },
      p: {
        flex: 1,
        maxWidth: 593,
        marginLeft: "18.6rem",
        fontSize: "1.4rem",
        lineHeight: "2.1rem",
        color: "$gray500",
      }
    }
  },
  "@tablet": {
    [`${Container}`]: {
      flexDirection: "column",
      alignItems: "center",
      "& > div": {
        flexDirection: "column",
        alignItems: "center",
        strong: {
          marginBottom: 20,
        },
        p: {
          marginLeft: 0,
          marginBottom: 20,
          fontSize: "1.2rem",
          lineHeight: "1.8rem",
          textAlign: "center"
        }
      }
    }
  },
})
