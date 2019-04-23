/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";



function HeaderLinks({ ...props }) {


  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Commercial"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/commercial/shop" className={classes.dropdownLink}>
              Shops
            </Link>,
             <Link to="/commercial/warehouse" className={classes.dropdownLink}>
              Warehouse
            </Link>,
               <Link to="/commercial/land" className={classes.dropdownLink}>
              Land 
            </Link>,
              <Link to="/commercial/office" className={classes.dropdownLink}>
              Office Space
            </Link>,
              <Link to="/commercial/restaurent" className={classes.dropdownLink}>
               Restaurent Space
            </Link>,
             <Link to="/commercial/commercialland" className={classes.dropdownLink}>
              Commercial Land
            </Link>
           
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
       <CustomDropdown
          noLiPadding
          buttonText="Residential"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            
             <Link to="/residentil/home" className={classes.dropdownLink}>
              Homes
            </Link>,
           <Link to="/residentil/hostel" className={classes.dropdownLink}>
              Hostel/PG
            </Link>,
            <Link to="/residentil/aptbach" className={classes.dropdownLink}>
              Apartments For Bachelor
            </Link>,
            <Link to="/residentil/aptfam" className={classes.dropdownLink}>
              Apartments For Family
            </Link>,
            <Link to="/residentil/residentilland" className={classes.dropdownLink}>
              Land 
            </Link>
           
          ]}
        />
       </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          href="https://www.creative-tim.com/product/material-kit-react"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <CloudDownload className={classes.icons} /> Rent Your Property
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          href="https://www.creative-tim.com/product/material-kit-react"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <CloudDownload className={classes.icons} /> Contact Us
        </Button>
      </ListItem>

        <ListItem className={classes.listItem}>
       <Link to="/login-page">
        <Button
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >Login
          </Button>
        </Link>
    
    <Link to="/register-page">
        <Button
          color="transparent"
          target="_blank"
          className={classes.navLink}>
          Register
          </Button>
        </Link>
      </ListItem>
       </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
