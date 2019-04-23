import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import Phone from "@material-ui/icons/Phone";
import Message from "@material-ui/icons/Message";

// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import firebase from "../../../Firebase";
import Select from 'react-select';

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

import image from "assets/img/bg7.jpg";

class Propfirebasetemplate extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.ref = firebase.firestore().collection("Commercial");
    this.state = {
      cardAnimaton: "cardHidden",
      availableFor: '',
      city: '',
      country: '',
      email: '',
      date: '',
      deposit: '',
      description: '',
      face: '',
      floor: '',
      fstatus: '',
      lease: '',
      locality: '',
      parking: '',
      propertyType: '',
      rent: '',
      size: '',
      state: '',
      title: ''


    };

    this.onChange = this.onChange.bind(this);

    this.onSubmit = this.onSubmit.bind(
      this
    );
    

  }


  
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }


onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

 onSubmit = (e) => {
    e.preventDefault();

    const { city ,
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
      title} = this.state;

    this.ref.add({
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
      title

    }).then((docRef) => {
      this.setState({
          city: '',
          country: '',
          email: '',
          date: '',
          deposit: '',
          description: '',
          face: '',
          floor: '',
          fstatus: '',
          lease: '',
          locality: '',
          parking: '',
          propertyType: '',
          rent: '',
          size: '',
        state: '',
        title: ''
      });
      this.props.history.push("/")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }





  render() {
    const { classes, ...rest } = this.props;
    const {     city,
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
      title } = this.state;

    return (
      <div>
     
          <div className={classes.container}>
           
                <Card className={classes[this.state.cardAnimaton]}>
                  <form className={classes.form}
                          onSubmit={this.onSubmit}>
                    <CardHeader color="primary" className={classes.cardHeader}>
                      <h4>Like it... Contact Us</h4>
                      <h6>7297905256</h6>
                    </CardHeader>
                    <p className={classes.divider}>Or Message Us</p>
                    <CardBody>
                     
                
                      <CustomInput
                        labelText="Full Name..."
                        id="fullname"
                       placeholder="Title"
                       value={title}

                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                           name:"title",
                          onChange: this.onChange,
                              
                          endAdornment: (
                            <InputAdornment position="end">
                              <People className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                        <CustomInput
                        labelText="City..."
                        id="city"
                       
                       placeholder="City"
                          value={city}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                           name:"city",
                          onChange: this.onChange,

                          endAdornment: (
                            <InputAdornment position="end">

                              <People className={classes.inputIconsColor} /> 
                            </InputAdornment>
                          )
                        }}
                      />
                         <CustomInput
                        labelText="Country..."
                        id="country"
                       
                       placeholder="Country"
                          value={country}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                           name:"country",
                          onChange: this.onChange,

                          endAdornment: (
                            <InputAdornment position="end">
                              <People className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                         <CustomInput
                        labelText="Date..."
                        id="date"
                       
                       placeholder="Date"
                          value={date}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                           name:"date",
                          onChange: this.onChange,

                          endAdornment: (
                            <InputAdornment position="end">
                              <People className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                         <CustomInput
                        labelText="Deposit..."
                        id="description"
                       
                       placeholder="Deposit"
                          value={description}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                           name:"deposit",
                          onChange: this.onChange,

                          endAdornment: (
                            <InputAdornment position="end">
                              <People className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                         <CustomInput
                        labelText="Description..."
                        id="description"
                       
                       placeholder="Description"
                          value={description}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                           name:"description",
                          onChange: this.onChange,

                          endAdornment: (
                            <InputAdornment position="end">
                              <People className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                         <CustomInput
                        labelText="Face..."
                        id="face"
                       
                       placeholder="Face"
                          value={face}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                           name:"face",
                          onChange: this.onChange,

                          endAdornment: (
                            <InputAdornment position="end">
                              <People className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                         <CustomInput
                        labelText="Floor..."
                        id="floor"
                       
                       placeholder="Floor"
                          value={floor}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                           name:"floor",
                          onChange: this.onChange,

                          endAdornment: (
                            <InputAdornment position="end">
                              <People className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                         <CustomInput
                        labelText="Fstatus..."
                        id="Fstatus"
                       
                       placeholder="Fstatus"
                          value={fstatus}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                           name:"fstatus",
                          onChange: this.onChange,

                          endAdornment: (
                            <InputAdornment position="end">
                              <People className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                         <CustomInput
                        labelText="Lease..."
                        id="Lease"
                       
                       placeholder="Lease"
                          value={lease}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                           name:"lease",
                          onChange: this.onChange,

                          endAdornment: (
                            <InputAdornment position="end">
                              <People className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                         <CustomInput
                        labelText="locality..."
                        id="locality"
                       
                       placeholder="Locality"
                          value={locality}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                           name:"locality",
                          onChange: this.onChange,

                          endAdornment: (
                            <InputAdornment position="end">
                              <People className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                         <CustomInput
                        labelText="Parking..."
                        id="parking"
                       
                       placeholder="Parking"
                          value={parking}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                           name:"parking",
                          onChange: this.onChange,

                          endAdornment: (
                            <InputAdornment position="end">
                              <People className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                         <CustomInput
                        labelText="PropertyType..."
                        id="propertyType"
                       
                       placeholder="PropertyType"
                          value={propertyType}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                           name:"propertyType",
                          onChange: this.onChange,

                          endAdornment: (
                            <InputAdornment position="end">
                              <People className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                         <CustomInput
                        labelText="Rent..."
                        id="rent"
                       
                       placeholder="rent"
                          value={rent}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                           name:"rent",
                          onChange: this.onChange,

                          endAdornment: (
                            <InputAdornment position="end">
                              <People className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                         <CustomInput
                        labelText="Size..."
                        id="size"
                       
                       placeholder="Size"
                          value={size}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                           name:"size",
                          onChange: this.onChange,

                          endAdornment: (
                            <InputAdornment position="end">
                              <People className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                         <CustomInput
                        labelText="State..."
                        id="State"
                       
                       placeholder="State"
                          value={state}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                           name:"state",
                          onChange: this.onChange,

                          endAdornment: (
                            <InputAdornment position="end">
                              <People className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      

                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button simple color="primary" size="lg" type="submit"  value="Register">
                        Get started
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
                <br />
          </div>
        </div>
    );
  }
}

export default withStyles(loginPageStyle)(Propfirebasetemplate);
