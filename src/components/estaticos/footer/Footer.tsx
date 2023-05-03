import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/TokensReducer";
import "./Footer.css";

function Footer() {
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  var footerComponent;

  if (token !== "") {
    footerComponent = (
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid alignItems="center" item xs={12}>
          <Box className="box1">
            <Box
              paddingTop={3}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                variant="h5"
                align="center"
                gutterBottom
                className="texto"
              >
                Contate-me pelas redes sociais!
              </Typography>
            </Box>
            <Box className="rodape">
              <a href="https://github.com/JuliaOliveira-Dev" target="_blank">
                <GitHubIcon className="icons" />
              </a>

              <a
                href="https://www.linkedin.com/in/j%C3%BAlia-oliveira-67648b253/"
                target="_blank"
              >
                <LinkedInIcon className="icons" />
              </a>
            </Box>
          </Box>
          <Box className="box2">
            <Box paddingTop={1}>
              <Typography
                variant="subtitle2"
                align="center"
                gutterBottom
                className="texto"
              >
                © 2023 Copyright:
              </Typography>
            </Box>
            <Box>
              <a target="_blank" href="https://github.com/JuliaOliveira-Dev">
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  className="texto"
                  align="center"
                >
                  Julia Oliveira
                </Typography>
              </a>
            </Box>
          </Box>
        </Grid>
      </Grid>
    );
  }

  return <>{footerComponent}</>;
}

export default Footer;
