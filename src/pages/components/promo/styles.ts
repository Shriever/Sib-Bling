import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  withStyles,
} from "@material-ui/core";

export const PromoBar = withStyles({
  root: {
    height: 40,
    textTransform: "uppercase",
    backgroundColor: "#aaa",
    // position: "fixed",
    width: '100vw',
    boxShadow: 'none',
    display: 'flex',
  },
})(AppBar);

// export const CarouselBar = withStyles({
//   root: {
//     backgroundColor: "#000",
//     boxShadow: "none",
//     justifyContent: "space-between",
//     width: "100%",
//     minHeight: 40,
//   },
// })(Toolbar);

export const CarouselTitle = withStyles({
  root: {
    color: "#fff",
  },
})(Typography);

export const FlexBox = withStyles({
  root: {
    display: "flex",
    alignItems: "center",
  },
})(Box);
