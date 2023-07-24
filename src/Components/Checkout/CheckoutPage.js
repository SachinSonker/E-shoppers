import React, { Component } from "react";
import Box from "@mui/system/Box";
import Grid from "@mui/system/Unstable_Grid";
import styled from "@mui/system/styled";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState, useEffect } from "react";
import { showToast } from '../../services/toastService';
import useRazorpay from "react-razorpay";
import {
  CountryDropdown,
  RegionDropdown
} from "react-country-region-selector";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./CheckoutPage.css";
import cartimg from "../../assets/cart-empty-img.png";
import Login from "../Login/Login";
import Coupon from "../Coupon/Coupon";
import Modal from "@mui/material/Modal";


const Item = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  border: "1px solid",
  borderColor: theme.palette.mode === "dark" ? "#444d58" : "#ced7e0",
  padding: theme.spacing(1),
  borderRadius: "4px",
  textAlign: "center",
}));

export default function CheckoutPage(props) {
  //gettings items data from backend
  const Razorpay = useRazorpay();
  const [cartItems, setCartItems] = useState({});
  const [data, setData] = useState([]);
  const [errors, setErrors] = useState({});
  const [unAuthorised, setUnAuthorised] = useState(false);
  const [isCartEmpty, setIsCartEmpty] = useState(false);
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [postalcode, setPostalCode] = useState("");
  const [orderTotal, setOrderTotal] = useState(0);
  const [coupon, setCoupon] = useState("");
  const token=sessionStorage.getItem('token');


  const setOrderTotalAgain = (num) => {
    setOrderTotal(num)
  }
  const setCouponCode = (sum) =>{
    setCoupon(sum)
  }

  //getting state and country data
  const [state, setState] = useState({
    country: "",
    region: "",
  });

  const [hasRender, setRender] = useState(false);
  const onShow = (() => setRender(true));
  const onClose = (() => {setRender(false);});

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    getAllItems();
    console.log(orderTotal, "Order Total")
  }, [orderTotal, hasRender,coupon]);

  function getAllItems() {
    axios
      .get("http://localhost:8090/api/cartDetails", {
        headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
      })
      .then((response) => {
        console.log(response);
        setCartItems(response.data);
        setData(response.data);
        if (response.data.length == 0) {
          setIsCartEmpty(true)
        } else {
          setIsCartEmpty(false)
        }
        setUnAuthorised(false);
      })
      .catch((err) => {
        if (err.response.status) {
          setUnAuthorised(true)
        }
        console.log("My error", err)
      });
  }

  console.log(data);

  //product increment 
  const incrementQuantity = (itemId,quantity) => {
    axios
      .put("http://localhost:8090/api/cartDetails", {
        productId: itemId,
        quantity: quantity + 1
      }, {
        headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
      })
      .then((response) => {
        console.log("From increase quantity", response)
        // setAddCartObject(response.data)
        getAllItems()
      })
  };

  //product decrement
  const decrementQuantity = (itemId,quantity) => {
    console.log(quantity, "Decrease request");
    quantity > 1
      ? updateCartItem(itemId, quantity)
      : deleteItem(itemId) 
  };

  //Payment
  const handlePayment = async (orderId, OrderTotal) => {
    //const order = await createOrder(params); //  Create order on your backend
  
    const options = {
      key: "rzp_test_DHE0D98Cg7lMgY", // Enter the Key ID generated from the Dashboard
      amount: OrderTotal*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Shoppers",
      order_id: orderId, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
      handler: function (response) {
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
        if (validate()) {
          handleOrder(orderId)
        }
        console.log("redirecting.....");
      },
      theme: {
        color: "#3399cc",
      },
    };
  
    const rzp1 = new Razorpay(options);
  
    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
  
    rzp1.open();
  };

  const handleOrder = (orderId) => {
    axios.post(`http://localhost:8090/api/placeorder`, {
      "address": address1 + ', ' + address2,
      "orderId": orderId,
      "totalAmount": OrderTotal
    }, {
      headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
    }).then((response) => {
      navigate("/SuccessPopup");
      return response.data
      // setOrderList(response.data);
    });
  }

  const updateCartItem = (itemId, quantity) => {
    axios
      .put("http://localhost:8090/api/cartDetails", {
        productId: itemId,
        quantity: quantity - 1
      }, {
        headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
      })
      .then((response) => {
        console.log("From decrease quantity", response)
        // setAddCartObject(response.data)
        getAllItems()
      })
  }

  // Order place
  const handleOrderId = () => {
    if (Object.keys(errors).length === 0 && address1!=="" && address2!=="") {
    axios.get(`http://localhost:8090/api/payment/${OrderTotal}`, {
      headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
    }).then((response) => {
      console.log(response.data, "Inside")
      handlePayment(response.data, orderTotal);
      return response.data
    });
  }else{
    showToast('Please enter details!', 'error');
  }
  }


  //calculating Total price
  const calculateTotalPrice = (price, quantity) => {
    let totalPrice = 0;
    totalPrice += price * quantity;
    return totalPrice;
  };

  //Calculating Subtotal
  const calculateSubTotal = () => {
    let subTotal = 0;
    data.map((item) => {
      subTotal += (item.price - item.price * 0.14) * item.quantity;
    });
    
    //setOrderTotal(Math.round(subTotal) + 100);
    return Math.round(subTotal);
  };

  //calculating order total
  const OrderTotal = 100 + calculateSubTotal();
  console.log(OrderTotal);
  //setOrderTotal(OrderTotal);

  //deleting items
  const deleteItem = (itemId) => {
    console.log(itemId)
    axios
      .delete(`http://localhost:8090/api/cartDetails/${itemId}`, {
        headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
      })
      .then((response) => {
        getAllItems();
        console.log(response);
        setCartItems(response.data);
        setData(response.data);
        alert("Are you sure You want to delete this Item...");
      });
  };

  //clearing cart on placing order
  const deleteAllItemFromCart = () => {
    axios.delete(`http://localhost:8090/api/cart`, {
      headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
    })
      .then(response => {
        console.log('all item deleted')
      }).catch(error => {
        console.log('Error deleting items from cart', error);
      })
  };

  //forms
  const selectCountry = (val) => {
    setState({ ...state, country: val });
  };

  const selectRegion = (val) => {
    setState({ ...state, region: val });
  };

  const { country, region } = state;

  //routing for checkout Page
  const navigate = useNavigate();

  function validate() {
    if (address1 == "" || address2 == "" || postalcode == "") {
      setErrors({ ...errors, ["invalid"]: "Required" });
      return false;
    } else {
      delete errors.invalid;
      return true;
    }
  }

  function validatePostalCode(){
    
  }
  const cart_image = [
    {
      "id": 1,
      "src": cartimg,
      "name": "Cart Empty Image",
    }
  ]


  return (
    <div>
      {unAuthorised ? <div style={{display: 'flex',
                                   justifyContent: 'center',
                                   paddingTop: '60px',
                                  color: 'red'}}>
                                 <p>Please sign in first</p>
      </div>:""}

      {
        isCartEmpty ? <div className="" style={{ textAlign: 'center', paddingTop: '80px', paddingBottom: '80px', fontFamily: "ui-serif" }}>
          <h1> Your Cart is Empty </h1>
          <img style={{ marginRight: '-195px' }} src={cartimg} />
          <Button variant="contained" disableElevation style={{ backgroundColor: '#8B3DFF', marginTop: 90, marginBottom: 20, borderRadius: 0, borderRadius: 5, color: 'white' }} onClick={() => { console.log("redirecting....."); navigate("/"); }}>Continue Shopping</Button>
        </div>
          : ""
      }
      {!unAuthorised && !isCartEmpty ?
        <Box sx={{ flexGrow: 1 }} style={{ position: "sticky" }}>
          <Grid container spacing={2}>
            <Grid xs={8}>
              <Item style={{ borderRadius: 0, border: "none" }}>
                <section className="section-pagetop bg">
                  <div className="container">
                    <h2
                      className="title-page"
                      style={{
                        textAlign: "Left",
                        paddingLeft: 75,
                        fontSize: 30,
                        fontWeight: 400,
                        fontFamily: "ui-serif",
                      }}
                    >
                      Your Shopping Bag
                    </h2>
                  </div>
                </section>

                <section className="section-content padding-y">
                  <div className="container">
                    <div className="row">
                      <main className="col-md-9">
                        <div className="card">
                          <table className="table table-borderless table-shopping-cart">
                            <thead
                              className="text-muted"
                              style={{
                                backgroundColor: "#8B3DFF",
                                color: "white",
                              }}
                            >
                              <tr className="small text-uppercase">
                                <th className="table_heading" scope="col">
                                  Product Name
                                </th>

                                <th
                                  className="table_heading"
                                  scope="col"
                                  width="120"
                                >
                                  Unit Price
                                </th>

                                <th
                                  className="table_heading"
                                  scope="col"
                                  width="120"
                                >
                                  Quantity
                                </th>

                                <th
                                  className="table_heading"
                                  scope="col"
                                  width="120"
                                >
                                  Sub Total
                                </th>

                                <th
                                  className="table_heading"
                                  scope="col"
                                  width="120"
                                >
                                  Remove
                                </th>
                              </tr>
                            </thead>

                            <tbody>
                              {data.map((item) => {
                                return (
                                  <tr key={item.id}>
                                    <td>
                                      <figure
                                        className="itemside"
                                        style={{ display: "flex" }}
                                      >
                                        <div className="aside">
                                          <img
                                            src={"data:image/jpeg;base64," + item.image}
                                            style={{ width: 100, height: 100 }}
                                          />
                                        </div>

                                        <figcaption
                                          className="info"
                                          style={{ padding: 5 }}
                                        >
                                          <a
                                            href="#"
                                            className="title text-dark"
                                            style={{
                                              textDecoration: "none",
                                              color: "black",
                                              fontSize: 16,
                                              fontFamily: "ui-serif",
                                            }}
                                          >
                                            {item.name.length > 10 ? item.name.slice(0, 10) + "..." : item.name}
                                          </a>

                                          <p
                                            className="text-muted small"
                                            style={{
                                              textDecoration: "none",
                                              color: "black",
                                              fontSize: 16,
                                              fontFamily: "ui-serif",
                                            }}
                                          >
                                            Color: {item.color}
                                          </p>
                                        </figcaption>
                                      </figure>
                                    </td>

                                    <td>
                                      <div
                                        className="price-wrap"
                                        style={{
                                          position: "absolute",
                                          marginLeft: 25,
                                        }}
                                      >
                                        <var className="price">
                                          ₹
                                          {Math.round(
                                            item.price - item.price * 0.14
                                          )}
                                        </var>
                                      </div>
                                    </td>

                                    <td>
                                      <div style={{ display: "flex" }}>
                                        <Box
                                          component="span"
                                          border={1}
                                          borderColor="black"
                                          style={{
                                            width: 20,
                                            height: 20,
                                            marginTop: 20,
                                            marginLeft: 15,
                                          }}
                                        >
                                          {item.quantity}
                                        </Box>

                                        <button
                                          onClick={() => incrementQuantity(item.productId,item.quantity)}
                                          variant="contained"
                                          style={{
                                            width: 20,
                                            height: 20,
                                            backgroundColor: "black",
                                            color: "white",
                                            marginTop: 20,
                                            marginRight: 15,
                                            marginLeft: 15,
                                          }}
                                        >
                                          +
                                        </button>

                                        <button
                                          onClick={() => decrementQuantity(item.productId,item.quantity)}
                                          variant="contained"
                                          style={{
                                            width: 20,
                                            height: 20,
                                            backgroundColor: "black",
                                            color: "white",
                                            marginTop: 20,
                                          }}
                                        >
                                          -
                                        </button>
                                      </div>
                                    </td>

                                    <td>
                                      <div
                                        className="price-wrap"
                                        style={{
                                          position: "absolute",
                                          marginLeft: 25,
                                        }}
                                      >
                                        <var className="price">
                                          ₹
                                          {Math.round(calculateTotalPrice(
                                            item.price,
                                            item.quantity - item.quantity * 0.14
                                          ))}
                                        </var>
                                      </div>
                                    </td>

                                    <td>
                                      <Grid item xs={8}>
                                        <DeleteIcon
                                          style={{
                                            marginLeft: 20,
                                            marginTop: 20,
                                          }}
                                          onClick={() =>
                                            deleteItem(item.productId)
                                          }
                                        >
                                          Remove
                                        </DeleteIcon>
                                      </Grid>
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </main>
                    </div>
                  </div>
                </section>
              </Item>
            </Grid>
           {/*Checkout Form*/}

            <Grid xs={4} style={{ paddingTop: 70, paddingRight: 30 }}>
              <Item style={{ borderRadius: 0 }}>
                <div className="cart-form">
                  <Typography variant="h6" gutterBottom>
                    Summary
                  </Typography>

                  <hr />

                  <Typography
                    variant="h6"
                    gutterBottom
                    style={{ textAlign: "Left", fontSize: 16, marginLeft: 30 }}
                  >
                    Name : {sessionStorage.getItem("name")}
                  </Typography>

                  <Typography
                    variant="h6"
                    gutterBottom
                    style={{ textAlign: "Left", fontSize: 16, marginLeft: 30 }}
                  >
                    Mobile : {sessionStorage.getItem("phone")}
                  </Typography>

                  <Typography
                    variant="h6"
                    gutterBottom
                    style={{ textAlign: "Left", fontSize: 16, marginLeft: 30 }}
                  >
                    Email : {sessionStorage.getItem("email")}
                  </Typography>

                  <hr />

                  <div className="details">
                    <label>Address Line 1</label>

                    <input
                      type="text"
                      name="address1"
                      placeholder=""
                      onChange={(event) => setAddress1(event.target.value)}
                      required
                    ></input>
                    {errors.invalid && (
                      <span className="errorMsg">{errors.invalid}</span>
                    )}

                    <label>Address Line 2</label>

                    <input
                      type="text"
                      name="address2"
                      placeholder=""
                      onChange={(event) => setAddress2(event.target.value)}
                    ></input>
                    {errors.invalid && (
                      <span className="errorMsg">{errors.invalid}</span>
                    )}

                    <div className="wrapper" style={{ display: "flex" }}>
                      <span className="selectrow">
                        <CountryDropdown
                          value={country}
                          country={country}
                          onChange={(val) => selectCountry(val)}
                        />
                      </span>

                      <span className="selectrow">
                        <RegionDropdown
                          country={country}
                          value={region}
                          onChange={(val) => selectRegion(val)}
                        />
                      </span>
                    </div>

                    <label>Postal Code</label>

                    <input
                      type="text"
                      name="postalcode"
                      placeholder=""
                      style={{ width: 140 }}
                      onChange={(event) => setPostalCode(event.target.value)}
                    ></input>
                    {errors.invalid && (
                      <span className="errorMsg">{errors.invalid}</span>
                    )}
                  </div>
                <div className="wrapper">
                  <span>
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "#8B3DFF",
                      borderRadius: 0,
                      color: "White",
                      width:'91%',
                    }}
                    onClick={onShow}
                  >
                    SEE AVAILABLE COUPON'S
                  </Button>
                  {hasRender ? <Coupon onClose={onClose} OrderTotal={OrderTotal} setOrderTotalAgain1={setOrderTotalAgain} orderTotal={orderTotal} setCouponCode1={setCouponCode} coupon={coupon}/> : ""}
                  </span>
                </div>
                  <hr />

                  <Typography
                    variant="h6"
                    style={{ textAlign: "Left", fontSize: 14, marginLeft: 30 }}
                  >
                    Sub Total &nbsp;<span style={{ marginRight: 130 }}></span> ₹{" "}
                    {calculateSubTotal()}
                  </Typography>

                  <Typography
                    variant="h6"
                    style={{ textAlign: "Left", fontSize: 14, marginLeft: 30 }}
                  >
                    Shipping &nbsp;<span style={{ marginRight: 135 }}></span> ₹
                    100
                  </Typography>

                  <Typography
                    variant="h6"
                    style={{ textAlign: "Left", fontSize: 14, marginLeft: 30 }}
                  >
                    Order Total &nbsp;<span style={{ marginRight: 120 }}></span>{" "}
                    ₹ {Math.round(OrderTotal)}
                  </Typography>

                  <Typography
                    variant="h6"
                    style={{ textAlign: "Left", fontSize: 14, marginLeft: 30 }}
                  >
                    Coupon Applied &nbsp;<span style={{ marginRight: 90 }}></span>{" "}
                    <span style={{color:'red'}}>{coupon}</span>
                  </Typography>

                  <Typography
                    variant="h6"
                    style={{ textAlign: "Left", fontSize: 14, marginLeft: 30 }}
                  >
                    Coupon Discount &nbsp;<span style={{ marginRight: 78 }}></span>{" "}
                    <span style={{color:'green'}}>{orderTotal==0 ? "":-Math.round(OrderTotal-orderTotal)}</span>
                      
                  </Typography>
                  
                  <Typography
                    variant="h6"
                    style={{ textAlign: "Left", fontSize: 14, marginLeft: 30 }}
                  >
                    Final Price &nbsp;<span style={{ marginRight: 120 }}></span>{" "}
                    <span style={{color:'red'}}>₹ {orderTotal} </span>   
                  </Typography>                 
                  <hr />
                  <Button
                    variant="contained"
                    disableElevation
                    style={{
                      backgroundColor: "#8B3DFF",
                      width: "80%",
                      marginTop: 20,
                      marginBottom: 20,
                      borderRadius: 0,
                    }}
                    onClick={() => {
                      const orderId = handleOrderId();
                    }
                    }
                  >
                    Place Order
                  </Button>
                </div>
              </Item>
            </Grid>
          </Grid>
        </Box>
        : ""}
    </div>
  );
}
