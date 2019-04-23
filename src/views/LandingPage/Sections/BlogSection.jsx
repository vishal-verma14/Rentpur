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

class BlogSection extends React.Component {
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
            <h1>Blog</h1>
     </div>          
      <h2>
        <Small>We Know you are genius.... but even Doctor Strange will love some advice</Small>
      </h2>
      
      <br />
  
  </div>   

    <div>
          <GridContainer>
           <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem className={classes.itemGrid}>
                  <br />  
                    <img src={team1} alt="..." className={imageClasses} />
                </GridItem>
               
                <h4 className={classes.cardTitle}>
                  2019 Digital Marketing Conferences – 400+ Events Yearly (+Exclusive Discounts)
                  <br />
                </h4>
                <CardBody>
                  <p className={classes.description}>
                  2019 Digital Marketing Conferences – 400+ Events Yearly (+Our Discounts) Accept no imitations. This page is updated multiple times per week, year after year.Many updates are coming after I get back from
                  </p>
               
                </CardBody>
             
              </Card>
            </GridItem>
           
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem className={classes.itemGrid}>
                <br />  
                  <img src={team2} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  2019 Digital Marketing Conferences – 400+ Events Yearly (+Exclusive Discounts)
                  <br />
                </h4>
                <CardBody>
                  <p className={classes.description}>
                  2019 Digital Marketing Conferences – 400+ Events Yearly (+Our Discounts) Accept no imitations. This page is updated multiple times per week, year after year.Many updates are coming after I get back from
                  </p>
               
                </CardBody>
             
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem className={classes.itemGrid}>
                <br />  
                  <img src={team3} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  2019 Digital Marketing Conferences – 400+ Events Yearly (+Exclusive Discounts)
                  <br />
                </h4>
                <CardBody>
                  <p className={classes.description}>
                  2019 Digital Marketing Conferences – 400+ Events Yearly (+Our Discounts) Accept no imitations. This page is updated multiple times per week, year after year.Many updates are coming after I get back from
                  </p>
               
                </CardBody>
             
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(teamStyle)(BlogSection);
