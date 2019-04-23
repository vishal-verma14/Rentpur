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

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

import image from "assets/img/bg7.jpg";

class PropDetailForm extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
            userDetail: {},

    };

     this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(
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


 handleChange(e) {
    let userDetail = this.state.userDetail;

    userDetail[e.target.name] = e.target.value;
    this.setState({
      userDetail
    });
  }

  submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let userDetail = this.state.userDetail;

      this.ref2
        .add({
          userDetail
        })
        .then(docRef => {
          this.setState({ userDetail: userDetail });
          this.props.history.push("/");
        })
        .catch(error => {
          console.error("Error adding document: ", error);
        });

      userDetail["username"] = "";
      userDetail["emailid"] = "";
      userDetail["mobileno"] = "";

      alert("Form submitted");
    }
  }

  validateForm() {
    let userDetail = this.state.userDetail;
    let errors = {};
    let formIsValid = true;

      userDetail['username'] = '';
      userDetail['emailid'] = '';
      userDetail['mobileno'] = '';
      userDetail['message'] = '';

      alert('Form submitted');
    
  }

  validateForm() {
    let userDetail = this.state.userDetail;
    let errors = {};
    let formIsValid = true;

    if (typeof userDetail["emailid"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(userDetail["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "*Please enter valid email-ID.";
      }
    }

    if (typeof userDetail['username'] !== 'undefined') {
      if (!userDetail['username'].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors['username'] = '*Please enter alphabet characters only.';
      }
    }

    if (!userDetail['emailid']) {
      formIsValid = false;
      errors['emailid'] = '*Please enter your email-ID.';
    }

    this.setState({
      errors: errors
    });
    return formIsValid;
  }


  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
     
          <div className={classes.container}>
           
                <Card className={classes[this.state.cardAnimaton]}>
                  <form className={classes.form}>
                    <CardHeader color="primary" className={classes.cardHeader}>
                      <h4>Like it... Contact Us</h4>
                      <h6>7297905256</h6>
                    </CardHeader>
                    <p className={classes.divider}>Or Message Us</p>
                    <CardBody>
                      <form
                  method="post"
                  name="userRegistrationForm"
                  onSubmit={this.submituserRegistrationForm}
                >
                      <CustomInput
                        labelText="Full Name..."
                        id="fullname"
                         value={this.state.userDetail.username}
                    onChange={this.handleChange}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
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
                         value={this.state.userDetail.emailid}
                    onChange={this.handleChange}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: ".`1m                      nnik j        jj   ",
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
                         value={this.state.userDetail.mobileno}
                    onChange={this.handleChange}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "number",
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
                         value={this.state.userDetail.message}
                    onChange={this.handleChange}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Message className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      </form>
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
