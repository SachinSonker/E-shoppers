import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/11.png";
import img2 from "../../assets/22.png";
import img3 from "../../assets/33.png";
import img4 from "../../assets/140.png";
import img5 from "../../assets/44.png";
import img6 from "../../assets/66.png";
import img7 from "../../assets/77.png";
import "./Review.css";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { useState } from "react";

const images = [
  { url: img1 },
  { url: img2 },
  { url: img3 },
  { url: img4 },
  { url: img5 },
  { url: img6 },
  { url: img7 },
];
const StyledRating = styled(Rating)({
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

export default class SwipeToSlide extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      swipeToSlide: true,
    };
    const [reviewimage ,setReviewImage] = useState;
    return (
      <div>
        <h2>Rating and Review's</h2>
        <p>Our Community Guidelines help customers write honest reviews.</p>
        <Box sx={{
            width: "100%",
            height: 200,
            backgroundColor: "#f5f5f5",
            borderRadius: 5,
            textAlign:'center'
          }}>
            <div style={{position: "relative",paddingTop:55 }}>
              <Rating name="customized-5" defaultValue={2} max={5} />
            </div>
          </Box>
        <h2>Customer Photos</h2>
        <Slider {...settings}>
          <div className="slider-box">
          {reviewimage.map(r =>(
            <img
              style={{ height: 240, width: 300, borderRadius: 30 }}
              src={img1}
            />
          ))}
            
          </div>
          {/* <div>
            <img
              style={{ height: 240, width: 300, borderRadius: 30 }}
              src={img2}
            />
          </div>
          <div>
            <img
              style={{ height: 240, width: 300, borderRadius: 30 }}
              src={img3}
            />
          </div>
          <div>
            <img
              style={{ height: 240, width: 300, borderRadius: 30 }}
              src={img4}
            />
          </div>
          <div>
            <img
              style={{ height: 240, width: 300, borderRadius: 30 }}
              src={img5}
            />
          </div>
          <div>
            <img
              style={{ height: 240, width: 300, borderRadius: 30 }}
              src={img6}
            />
          </div>
          <div>
            <img
              style={{ height: 240, width: 300, borderRadius: 30 }}
              src={img7}
            />
          </div> */}
        </Slider>
        <Box
          sx={{
            width: "100%",
            height: 'auto',
            backgroundColor: "#f5f5f5",
          }}
        >
          <div
            className="text-container"
            style={{ display: "flex", paddingTop: 20 }}
          >
            <div className="text-box" style={{ padding: 30 }}>
              <h2>Buyer's Name</h2>
              <h3>Address</h3>
            </div>
            <div style={{ left: "10%", position: "relative" }}>
              <Rating name="customized-5" defaultValue={2} max={5} />
            </div>
            <div
              className="description-box"
              style={{ paddingTop: 60, paddingRight: 150 }}
            >
              <p>
                LOVE IT!! The seat cushions are PERFECT! The back pillows are
                just comfortable enough, but I am going to add stuffing to them
                for a better feel and fuller look. I couldn’t have chosen better
                for this price!!
              </p>
            </div>
          </div>
          <hr />
          <div
            className="text-container"
            style={{ display: "flex", paddingTop: 20 }}
          >
            <div className="text-box" style={{ padding: 30 }}>
              <h2>Buyer's Name</h2>
              <h3>Address</h3>
            </div>
            <div style={{ left: "10%", position: "relative" }}>
              <Rating name="customized-5" defaultValue={2} max={5} />
            </div>
            <div
              className="description-box"
              style={{ paddingTop: 60, paddingRight: 150 }}
            >
              <p>
                LOVE IT!! The seat cushions are PERFECT! The back pillows are
                just comfortable enough, but I am going to add stuffing to them
                for a better feel and fuller look. I couldn’t have chosen better
                for this price!!
              </p>
            </div>
          </div>
          <hr />
        </Box>
      </div>
    );
  }
}
