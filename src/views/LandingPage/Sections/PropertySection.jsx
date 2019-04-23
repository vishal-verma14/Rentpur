import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";

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
import firebase from "../../../Firebase";
 
class ProductSection extends React.Component {

constructor(props) {
    super(props);
    // this.ref1 = firebase.firestore().collection('Apartments');
    this.ref1 = firebase.firestore();
    this.unsubscribe = null;
    this.id = props.id;
    this.slug = props.slug;

    this.state = {
      detail: []
    };
  }

    onCollectionUpdate = querySnapshot => {
    const detail = [];
    querySnapshot.forEach(doc => {
      const {
        city,
        country,
        date,
        deposit,
        description,
        face,
        floor,
        fstatus,
        lease,
        locality,
        parking,
        propertyType,
        rent,
        size,
        state,
        title,
        availableFor
      } = doc.data();
      detail.push({
         key: doc.id,
              city,
              country,
              date,
              deposit,
              description,
              face,
              floor,
              fstatus,
              lease,
              locality,
              parking,
              propertyType,
              rent,
              size,
              state,
              title,
              availableFor
      });
    });
    this.setState({ detail });
  };

  componentDidMount() {
    this.unsubscribe = this.ref1
      .collection("CommercialTreandingProperty")
      .onSnapshot(this.onCollectionUpdate);
  }



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
                      {this.state.detail.map(detail => (
             
                                  <GridItem xs={12} sm={12} md={4} direction="row" >
                             <Link to={`/property-template-detail-page/${detail.key}/${"CommercialTreandingProperty"}`}>

                                      <Card>
                                        <GridItem className={classes.itemGrid}>
                                        <br />  
                                          <img src={team1} alt="..." className={imageClasses} />
                                        </GridItem>
                                        <h4 className={classes.cardTitle}>
                                      {detail.title}          
                                             <br />
                                          <small className={classes.smallTitle}> {detail.locality}</small>
                                          <hr />
                                        </h4>
                                        <CardBody>
                                          <p className={classes.description}>
                                          Area : {detail.size} sqft
                                          </p>
                                           <p className={classes.description}>
                                          propertyType : {detail.propertyType} sqft
                                          </p>
                                           <p className={classes.description}>
                                          Available For : {detail.availableFor}
                                          </p>
                                        
                                          <p className={classes.description}>
                                            Furnished status : {detail.fstatus}
                                          </p>
                                          <p className={classes.description}>
                                           Deposit :₹ {detail.deposit}
                                          </p>
                                        </CardBody>
                                        <CardFooter className={classes.justifyCenter}>
                                              <h3 className={classes.cardTitle}>₹ {detail.rent}</h3>

                                        </CardFooter>
                                      </Card>
                                     </Link>
                                    </GridItem>
                                          ))}
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(teamStyle)(ProductSection);
