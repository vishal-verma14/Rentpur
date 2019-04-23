import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import profile from "assets/img/faces/christian.jpg";
import PropertySection from "./Sections/PropertySection.jsx";
import PropDetailForm from "./Sections/PropDetailForm.jsx";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

import team1 from "assets/img/faces/propimg.jpg";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import firebase from "./../../Firebase";
import Small from "components/Typography/Small.jsx";
import { Link } from "react-router-dom";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
        padding: theme.spacing.unit * 2,

    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
   divStyle : {
  background: "#eee",
  padding: "50px",
  margin: "20px"
},
});

class SearchPropertyTemplate extends React.Component {

constructor(props) {
    super(props);
    // this.ref1 = firebase.firestore().collection('Apartments');
    this.ref1 = firebase.firestore();
    this.unsubscribe = null;
    this.comloc = this.props.match.params.comloc;

    this.compropt = this.props.match.params.compropt;
    this.respropt = this.props.match.params.respropt;

    this.resloc = this.props.match.params.resloc;

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
      .collection("Commercial").
          where("locality", "==",this.comloc)   
         .where("propertyType", "==",this.compropt)
          .onSnapshot(this.onCollectionUpdate);
  }


  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
       classes.imgRaised,
      classes.imgRounded,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        <Header
          color="transparent"
          brand="Material Kit React"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />
        <Parallax small filter image={require("assets/img/profile-bg.jpg")} style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
           <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title} style={{ color: "white"}} >   Material Kit React.</h1>
                  <h3 className={classes.subtitle} style={{ color: "white"}} >
                    A Badass Material-UI Kit based on Material Design.
                  </h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>  
              </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div>
              <GridContainer>

               <Grid item xs={9} className={classes.divStyle}>
                    <Paper className={classes.paper}>  
                          <div className={classes.section}> 
                            <div>
                              <GridContainer style={{padding: 55 }}>      
                              
                              {this.state.detail.map(detail => (
             
                                  <GridItem xs={12} sm={12} md={4} direction="row" >
                                   <Link to={`/property-template-detail-page/${detail.key}/${"Commercial"}`}>
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
                    </Paper>
              </Grid>

                  <Grid item xs={3}>
                     <Paper className={classes.paper}>
                            <PropDetailForm />
                    </Paper>
                 </Grid>
              </GridContainer>

            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(teamStyle)(SearchPropertyTemplate);
