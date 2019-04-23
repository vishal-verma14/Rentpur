import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";
import Small from "components/Typography/Small.jsx";

import team1 from "assets/img/faces/avatar.jpg";
import team2 from "assets/img/faces/christian.jpg";
import team3 from "assets/img/faces/kendall.jpg";

class TeamSection extends React.Component {
  render() {
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRounded,
      classes.imgFluid
    );
    return (
      <div className={classes.section}>

  <div className={classes.typo}>
     <div className={classes.title}>
                  <h1>Featured Circle</h1>
                </div>          
                      <h2>
                  <Small>Descover treanding circles for rent</Small>
                </h2>
                <br />
              </div>   
     <div>
        
 <GridContainer justify="center">
              <GridItem>
                <Button size="lg" >Sirsi Road</Button>
                <Button color="primary" size="lg">Gandhi Path</Button>
                <Button color="info" size="lg">Vaishali Nagar</Button>
                <Button color="success" size="lg">Vidhyadhar Nagar</Button>
                <Button color="warning" size="lg">Khatipura</Button>
                <Button color="danger" size="lg">Raja Park</Button>
                <Button color="rose" size="lg">Chitrakoot</Button>
              </GridItem>
            </GridContainer>

        </div>
      </div>
    );
  }
}

export default withStyles(teamStyle)(TeamSection);
