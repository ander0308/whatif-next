
import { styled } from '@/styles'

import bgThumb from '@/assets/thumb-video.png'

export const StylePopupVideo = styled({
  width: "100%",
  maxWidth: 312,
  span: {
    display: "block",
    fontWeight: 600,
    fontSize: "12px",
    lineHeight: "18px",
    letterSpacing:"0.095em",
    color: "$gray200",
    marginBottom: 14
  },
  button: {
    width: "100%",
    height: 179,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: `url(${bgThumb.src}) no-repeat center center`,
    border: 0,
    borderRadius: 10,
    "& > div": {
      width: 47,
      height: 47,
      backgroundColor: "rgba(19, 19, 19, 0.8)",
      backdropFilter: "blur(2.5px)",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "transform .3s ease"
    },
    "&:hover": {
      "& > div": {
        transform: "scale(1.1)"
      }
    }
  }
})
