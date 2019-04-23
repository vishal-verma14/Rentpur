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

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

import image from "assets/img/bg7.jpg";

class PropDetailForm extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.ref = firebase.firestore().collection("NewLead");
    this.state = {
      cardAnimaton: "cardHidden",
      title: '',
      phno: '',
      message: '',
      email: ''

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

    const { title, phno, message ,email} = this.state;

    this.ref.add({
      title,
      phno,
      message,
      email
    }).then((docRef) => {
      this.setState({
        title: '',
        phno: '',
        message: '',
        email : ''
      });
      this.props.history.push("/")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }





  render() {
    const { classes, ...rest } = this.props;
    const { title,  phno, message, email } = this.state;

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
                        labelText="Email..."
                        id="email"
                         value={email}
                         placeholder="Author"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "email",
                          name:"email",
                          onChange: this.onChange,
                          
                          endAdornment: (
                            <InputAdornment position="end">
                              <Email className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />

                        
                       <CustomInput
                        labelText="Phone no..."
                        id="phno"
                         value={phno}

                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "number",
                          name:"phno",
                           onChange: this.onChange,
                          endAdornment: (
                            <InputAdornment position="end">
                              <Phone className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                     <CustomInput
                        labelText="Message..."
                        id="message"
                         value={message}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                          name:"message",
                           onChange: this.onChange,
                          endAdornment: (
                            <InputAdornment position="end">
                              <Message className={classes.inputIconsColor} />
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

export default withStyles(loginPageStyle)(PropDetailForm);
