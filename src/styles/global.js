import { globalCss, styled } from './index'

export const globalStyles = globalCss({
  "*": {
    padding: 0,
    margin: 0,
    boxSizing: "border-box"
  },
  html: {
    fontSize: "62.5%"
  },
  body: {
    "-webkit-font-smoothing": "antialiased",
    background: "linear-gradient(119.36deg, #010101 0%, #000000 100%)",
    color: "$white",
  },
  img: {
    maxWidth: "100%",
    display: "block"
  },
  button: {
    cursor: "pointer"
  },
  a: {
    textDecoration: "none"
  }
})

export const Container = styled("div", {
  width: "100%",
  maxWidth: 1216,
  margin: "0 auto",
})
