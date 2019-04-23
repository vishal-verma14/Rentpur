import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import carouselStyle from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.jsx";
import image1 from "assets/img/bg.jpg";
import image2 from "assets/img/bg2.jpg";
import image3 from "assets/img/bg3.jpg";
import firebase from "../../../Firebase";

class SectionCarousel extends React.Component {

constructor(props) {
    super(props);
    console.log(JSON.stringify(props));

this.proptitle = props.slug;
      this.propKey = props.id;

    this.state = {
      detail: {},
      key: '',
      image:[]
    };
  }

    onCollectionUpdate = querySnapshot => {
    const image = [];
    querySnapshot.forEach(doc => {
      const { imgUrl, title } = doc.data();
      image.push({
        key: doc.id,
        doc,
        imgUrl,
        title 
      });
    });
    this.setState({ image });
  };


  componentDidMount() {
     const ref = firebase
      .firestore()
      .collection(this.proptitle)
      .doc(this.propKey);

 console.log(JSON.stringify(this.proptitle + "===" +this.propKey));

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

    this.unsubscribe = ref
      .collection("image")
      .onSnapshot(this.onCollectionUpdate);

  }

  render() {
    const { classes } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false
    };
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer>

            <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
              <Card carousel>
                <Carousel {...settings}>
              {this.state.image.map(image => (
                  <div>

                    <img
                      src={image.imgUrl}
                      alt="First slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <LocationOn className="slick-icons" />
                        {image.title}
                      </h4>
                    </div>
                  </div>
                  ))}
                  <div>

                    <img
                      src={"https://images.pexels.com/photos/2073623/pexels-photo-2073623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
                      alt="First slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <LocationOn className="slick-icons" />
                       dsdd
                      </h4>
                    </div>
                  </div>
                      <div>

                    <img
                      src={"https://images.pexels.com/photos/1921252/pexels-photo-1921252.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
                      alt="First slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <LocationOn className="slick-icons" />
                        dfs
                      </h4>
                    </div>
                  </div>
                </Carousel>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(carouselStyle)(SectionCarousel);
