import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import { Link } from "react-router-dom";

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import ProductSection from "./Sections/ProductSection.jsx";
import TeamSection from "./Sections/TeamSection.jsx";
import WorkSection from "./Sections/WorkSection.jsx";
import PropertySection from "./Sections/PropertySection.jsx";
import BlogSection from "./Sections/BlogSection.jsx";

import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";

import NavPills from "components/NavPills/NavPills.jsx";
import logo from "assets/img/bg6.jpg";
import Select from 'react-select';

import pillsStyle from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.jsx";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FilledInput from '@material-ui/core/FilledInput';

const dashboardRoutes = [];

const styles = theme => ({
   root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  button: {
    display: 'block',
    marginTop: theme.spacing.unit * 2,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});

const locationdata = [
  { label: "Gautam Marg", value: "Gautam-Marg" },
  { label: "Vaishali Nagar", value: "Vaishali-Nagar" },
  { label: "Sirsi Road", value: "Sirsi-Road"},
  { label: "Gandhi Path", value:"Gandhi-Path" },
  { label: "Panchawala", value: "Panchawala" },
];

const commercialData = [
  { label: "Shops", value: "Shops" },
  { label: "Warehouse", value: "Warehouse" },
  { label: "Commercial Land", value:"Land" },
  { label: "Office Space", value: "Office-Space" },
];


class LandingPage extends React.Component {

constructor(props) {
    super(props);
        this.commercialLochandleChange = this.commercialLochandleChange.bind(this);
        this.commercialpropthandleChange = this.commercialpropthandleChange.bind(this);
        this.btnClick = this.btnClick.bind(this);

  }


 state = {
    commercialLocOption: null,
        commercialproptOption: null,

  }
  commercialLochandleChange = (commercialLocOption) => {
    this.setState({ commercialLocOption });


  }
   commercialpropthandleChange = (commercialproptOption) => {
    this.setState({ commercialproptOption });


  }

    commercialpropthandleChange = (commercialproptOption) => {
    this.setState({ commercialproptOption });
    console.log(`Option selected:`, commercialproptOption);


  }
  btnClick() {
       console.log(`Option selected:`, this.state.commercialLocOption);
    console.log(`Option selected:`, this.state.commercialproptOption);

    let path = `/commercial/${JSON.stringify(this.state.commercialLocOption.value)}/${JSON.stringify(this.state.commercialproptOption.value)}`;
    this.props.history.push(path);
  }
 


  render() {
    const { classes, ...rest } = this.props;
        const { commercialLocOption } = this.state;
        const { commercialproptOption } = this.state;

    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand={logo}
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax filter image={require("assets/img/bg6.jpg")}>
          <div className={classes.container}>
            <GridContainer>
           <GridItem xs={12} sm={12} md={8} lg={6}>
                <NavPills 
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Commercial",
                      tabIcon: Dashboard,
                      tabContent: (
                        <form className={classes.root} autoComplete="off">
                            <FormControl className={classes.container}>
                             <div class="container">
                                <div class="row md-5">
                                <h4>Location</h4>
                                  <Select 
                                    value={commercialLocOption}
                                    options={ locationdata }
                                    onChange={this.commercialLochandleChange}
                                    
                                    >
                                  </Select>
                                  <h4>Property Type</h4>
                                  <Select 
                                    value={commercialproptOption}
                                    options={ commercialData }
                                    onChange={this.commercialpropthandleChange}
                                    
                                    >
                                  </Select>
                                      </div>

                                   <Button color="primary" round  onClick={this.btnClick}>
                                                  Submit
                                                </Button>
                              
                                        
                                    </div>
                            </FormControl>

                          </form>
                      )
                    },
                    {
                      tabButton: "Residential",
                      tabIcon: Schedule,
                      tabContent: (
                       <form className={classes.root} autoComplete="off">
                            <FormControl className={classes.container}>
                             <div class="container">
                                <div class="row md-5">
                                <h4>Location</h4>
                                  <Select 
                                    value={commercialLocOption}
                                    options={ locationdata }
                                    onChange={this.commercialLochandleChange}
                                    isMulti
                                    >
                                  </Select>
                                  <h4>Property Type</h4>
                                  <Select 
                                    value={commercialproptOption}
                                    options={ commercialData }
                                    onChange={this.commercialproptOption}
                                    isMulti
                                    >
                                  </Select>
                                
                                      </div>
                                   <Link to={`/residential/${this.state.selectedOption}`}>
                                   <Button color="primary" round onChange={this.handleChange}>
                                                  Submit
                                                </Button>
                                  </Link>
                                        
                                    </div>
                            </FormControl>

                          </form>
                      )
                    },
                    {
                      tabButton: "Rent Your Proper",
                      tabIcon: List,
                      tabContent: (
                        <span>
                          <p>
                            Collaboratively administrate empowered markets via
                            plug-and-play networks. Dynamically procrastinate
                            B2C users after installed base benefits.
                          </p>
                          <br />
                          <p>
                            Dramatically visualize customer directed convergence
                            without revolutionary ROI. Collaboratively
                            administrate empowered markets via plug-and-play
                            networks. Dynamically procrastinate B2C users after
                            installed base benefits.
                          </p>
                          <br />
                          <p>
                            Dramatically visualize customer directed convergence
                            without revolutionary ROI. Collaboratively
                            administrate empowered markets via plug-and-play
                            networks. Dynamically procrastinate B2C users after
                            installed base benefits.
                          </p>
                        </span>
                      )
                    }
                  ]}
                />
              </GridItem>

            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <TeamSection />
            <PropertySection />
            <BlogSection />
            <WorkSection />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
