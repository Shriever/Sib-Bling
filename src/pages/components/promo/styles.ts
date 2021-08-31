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
  },
})(AppBar);

export const CarouselBar = withStyles({
  root: {
    backgroundColor: "#000",
    height: 40,
    boxShadow: "none",
    justifyContent: "space-between",
  },
})(Toolbar);

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
