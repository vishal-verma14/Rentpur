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

import team1 from "assets/img/faces/propimg.jpg";
import team2 from "assets/img/faces/christian.jpg";
import team3 from "assets/img/faces/kendall.jpg";


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
        padding: theme.spacing.unit * 2,

    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class ProductSection extends React.Component {
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
                  <h1>Featured Properties</h1>
                </div>          
                      <h2>
                  <Small>Descover treanding properties for rent</Small>
                </h2>
                <br />
              </div>   
    <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <Card>
                <GridItem className={classes.itemGrid}>
                <br />  
                  <img src={team1} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
              Commercial Showroom            
                     <br />
                  <small className={classes.smallTitle}>Gandhi Path</small>
                  <hr />
                </h4>
                <CardBody>
                  <p className={classes.description}>
                  Area : 190 sqft
                  </p>
                   <p className={classes.description}>
                  Floor : Ground Floor
                  </p>
                   <p className={classes.description}>
                  Available For : Restaurants|| Office Space
                  </p>
                
                 <p className={classes.description}>
                  Furnished status : Semi-Furnished
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                      <h3 className={classes.cardTitle}>₹ 42,000</h3>

                </CardFooter>
              </Card>
            </GridItem>
                  
          </GridContainer>
        </div>
      </div>
        );
  }
}

export default withStyles(teamStyle)(ProductSection);
