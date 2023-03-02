import { styled } from "@/styles";

export const StyleCard = styled("div", {
  width: "100%",
  maxWidth: 280,
  "&:hover": {
    ".image": {
      img: {
        transform: "scale(1.05)"
      }
    },
    ".info" : {
      h3: {
        color: "$red800"
      }
    }
  },
  a: {
    display: "block"
  },
  ".image": {
    width: "100%",
    height: 372,
    marginBottom: 16,
    borderRadius: 5,
    overflow: "hidden",
    img: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform .3s ease"
    }
  },
  ".info": {
    display: "flex",
    justifyContent: "space-between",
    h3: {
      fontWeight: 600,
      fontSize: "18px",
      lineHeight: "27px",
      color: "$white",
      marginBottom: 4,
      transition: "color .3s ease"
    },
    span: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "21px",
      color: "$gray500",
    }
  }
})
