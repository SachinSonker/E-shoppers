import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import "./Coupon.css";
import CheckoutPage from "../Checkout/CheckoutPage";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 500,
  overflow: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Modalpopup(props) {
  const [coupon, setCoupon] = useState([]);

  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    props.onClose(false);
    props.setOrderTotalAgain1(Math.round(discount));
    props.setCouponCode1(couponName);
  };

  const [discount, setDiscount] = useState(0);
  const [click2, setClick2] = useState(false);
  const totalPrice = props.OrderTotal;
  const [couponName, setCouponName] = useState([]);

  useEffect(() => {
    axios
      .get("http://65.0.17.17:8090/api/coupon", {
        headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
      })
      .then((response) => {
        setCoupon(response.data);
        console.log(response.data);
      });
  }, []);

  const CalculateDiscountPrice = (deal) => {
    const totalPrice = props.OrderTotal;
    const discount = (deal.discountPercent / 100) * totalPrice;
    const discounted = totalPrice - discount;
    const CouponName = deal.couponName;
    console.log(CouponName);
    setCouponName(CouponName);
    setDiscount(discounted);
    setClick2(true);
  };

  useEffect(() => {
    if (click2) handleClose();
  }, [click2]);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
      >
        <Box sx={style}>
          <Button
            className="cross"
            style={{ left: "95%", marginTop: -25, color: "black" }}
            onClick={handleClose}
          >
            x
          </Button>
          <div>
            <Typography
              id="modal-modal-title"
              style={{ fontSize: 30, fontFamily: "ui-serif" }}
            >
              See Available Coupon's For You
            </Typography>

            {coupon.map((deal) => (
              <div
                key={deal.couponId}
                style={{ borderStyle: "dashed", padding: 20, marginTop: 20 }}
              >
                {/* <Checkbox key={deal.couponId} onClick={()=> CalculateDiscountPrice(deal)}/> */}
                <Typography
                  id="modal-modal-description"
                  sx={{ mt: 2 }}
                  style={{ fontSize: 25, fontFamily: "ui-serif" }}
                >
                  Flat {deal.discountPercent}% Percent off &nbsp;&nbsp;
                  <br />
                  <Typography style={{ paddingTop: 20, paddingBottom: 20 }}>
                    COUPON CODE :- {deal.couponName}
                  </Typography>
                </Typography>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#8B3DFF",
                    borderRadius: 0,
                    color: "White",
                  }}
                  onClick={() => CalculateDiscountPrice(deal)}
                >
                  APPLY COUPON
                </Button>
                {click2 ? (
                  <div style={{ marginLeft: 165, marginTop: -45 }}>
                    <Typography>Original price: {props.OrderTotal}</Typography>

                    <Typography>
                      Coupon Discounted price: {Math.round(discount)}
                    </Typography>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Modalpopup;
