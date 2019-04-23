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
import SectionCarousel from "./Sections/SectionCarousel.jsx";
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
import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

import team1 from "assets/img/faces/propimg.jpg";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import firebase from "../../Firebase";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
        padding: theme.spacing.unit * 2,

 textAlign: 'left',
     color: theme.palette.text.secondary,
  },
});

class PropertyDetailTemplate extends React.Component {

  constructor(props) {
    super(props);
    this.props = props.id;
    this.params = props.params;

      this.proptitle = props.match.params.slug;
      this.propKey = props.match.params.id;

   

          this.state = {
            detail: {},
            key: ''
          };
  }



  componentDidMount() {
    const ref = firebase
      .firestore()
      .collection(this.proptitle)
      .doc(this.propKey);

          ref.get().then(doc => {
              if (doc.exists) {
                this.setState({
                  detail: doc.data(),
                  key: doc.id,
                  isLoading: false
                });
              } else {
                console.log("No such document!");
              }
            });
  }



  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
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
        <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div >
                    <GridContainer  spacing={14} >
                       <Grid item xs={8}>
                            <Paper className={classes.paper}>  
                                     
                                      <GridContainer  container direction="row" justify="center" alignItems="center"> 
                                           <SectionCarousel id={this.props.match.params.id} state={this.state} slug={this.props.match.params.slug} />
                                            <GridItem xs={12} sm={12} md={6}  >
                                              <div className={classes.profile} >            
                                                <div className={classes.name} >
                                                  <h3 className={classes.title}>{this.state.detail.title}</h3>
                                                  <h4>{this.state.detail.locality}, {this.state.detail.city}, {this.state.detail.state}</h4>
                          
                                                    <br />

                                                  <h3 className={classes.profile}>Rent :  {this.state.detail.rent}</h3>
                                                  
                                                  <h3 className={classes.profile}>Deposit :  {this.state.detail.deposit}</h3>
                                                 
                                                    <br />

                                                  <hr />
                                                
                                                </div>
                                              </div>
                                            </GridItem>
                                      </GridContainer>
                                              
                                                  <br />

                                      <GridContainer  container direction="row" justify="center" alignItems="center">
                                        <Grid container spacing={24} direction="row" >
                                            <Grid item xs={12} sm={6} >
                                                <p className={classes.descriptionover}>
                                                Area : {this.state.detail.size} sqft
                                                </p>
                                                 <p className={classes.descriptionover}>
                                                propertyType : {this.state.detail.propertyType} sqft
                                                </p>
                                                 <p className={classes.descriptionover}>
                                                Available For : {this.state.detail.availableFor}
                                                </p>
                                              
                                                <p className={classes.descriptionover}>
                                                  Furnished status : {this.state.detail.fstatus}
                                                </p>
                                           </Grid>

                                           <Grid item xs={12} sm={6} >
                                              <p className={classes.descriptionover}>
                                               Parking : {this.state.detail.parking}
                                              </p>
                                               <p className={classes.descriptionover}>
                                                Floor : {this.state.detail.floor}
                                              </p>
                                               <p className={classes.descriptionover}>
                                                 Lease Duration : {this.state.detail.lease} 
                                              </p>
                                          </Grid>
                                       </Grid>
                                     </GridContainer>
                                     <br />
                                     <hr />
                                     <br />
                                      <GridContainer>
                                             <span>
                                                 <h3 className={classes.descriptionover}>Description</h3>

                                                  <p className={classes.descriptionover}>
                                                    Collaboratively administrate empowered markets via
                                                    plug-and-play networks. Dynamically procrastinate
                                                    B2C users after installed base benefits.
                                                  </p>
                                                  <br />
                                                  <p className={classes.descriptionover}>
                                                    Dramatically visualize customer directed convergence
                                                    without revolutionary ROI. Collaboratively
                                                    administrate empowered markets via plug-and-play
                                                    networks. Dynamically procrastinate B2C users after
                                                    installed base benefits.
                                                  </p>
                                                  <br />
                                                  <p className={classes.descriptionover}>
                                                    Dramatically visualize customer directed convergence
                                                    without revolutionary ROI. Collaboratively
                                                    administrate empowered markets via plug-and-play
                                                    networks. Dynamically procrastinate B2C users after
                                                    installed base benefits.
                                                  </p>                        
                                              </span>
                                       </GridContainer>
                                         <br />
                                     <br />
                            </Paper>
                     </Grid>
                    
                    <Grid item xs={4}>
                      <Paper className={classes.paper}><PropDetailForm /></Paper>
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

export default withStyles(profilePageStyle)(PropertyDetailTemplate);
