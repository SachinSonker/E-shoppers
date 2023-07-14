import * as React from 'react';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import './OrderTracking.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SettingsIcon from '@mui/icons-material/Settings';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CottageIcon from '@mui/icons-material/Cottage';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import axios from "axios";
import { Spinner } from '../Spinner/Spinner';
import { useSearchParams } from "react-router-dom";

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
  display: 'flex',
  height: 22,
  alignItems: 'center',
  ...(ownerState.active && {
    color: '#784af4',
  }),
  '& .QontoStepIcon-completedIcon': {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
  '& .QontoStepIcon-circle': {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;
  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
};

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 18,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,RGB(161 103 255) 0%,rgb(118 68 199) 50%,rgb(56,24,105) 100%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,RGB(161 103 255) 0%,rgb(118 68 199) 50%,rgb(56,24,105) 100%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 5,
    marginTop: 5,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '40%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage:
      'linear-gradient( 136deg, RGB(161 103 255) 0%, rgb(118 68 199) 50%, rgb(56,24,105) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient( 136deg, RGB(161 103 255) 0%, rgb(118 68 199) 50%, rgb(56,24,105)  100%)',
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <ShoppingCartIcon />,
    2: <SettingsIcon />,
    3: <LocalPostOfficeIcon />,
    4: <LocalShippingIcon />,
    5: <CottageIcon />,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const steps = ['Order Confirmed', 'Processing Order', 'Dispatched', 'Out for Delivery', 'Delivered'];

export default function OrderTracking() {
  const [params] = useSearchParams();
  const [orderTrackingDetails, setOrderTrackingDetails] = useState({});

  useEffect(() => {
    axios
      .get(`http://65.0.17.17:8090/api/trackorder/${params.get('orderId')}/${params.get('trackingId')}`, {
        headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
      })
      .then((response) => {
        setOrderTrackingDetails(response.data)
        console.log(response.data)
      })
      .catch((err) => {
        console.log("My error", err)
      })
      ;
  }, [])

  return orderTrackingDetails.length === 0 ? (
    <Spinner />
  ) : (
    <React.Fragment>
      <br></br>
      <br></br>
      <br></br>
      <Card sx={{ display: 'flex' }} className="detailsCard">
        <CardMedia
          component="img"
          sx={{ width: 350, height: 450 }}
          //image={image}
          image={"data:image/jpeg;base64," + orderTrackingDetails.productImage}
          alt="Product Image"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', marginLeft: '3%' }}>

          <Stack sx={{ width: '100%', marginTop: 4, marginBottom: 6, }} spacing={4}>
            <Stepper alternativeLabel activeStep={orderTrackingDetails.status-1} connector={<ColorlibConnector />}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Stack>

          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              {orderTrackingDetails.productName}
            </Typography>
            <br></br>
            <Typography component="div" variant="p">
              Order ID : {orderTrackingDetails.orderId}
            </Typography>  
            <Typography component="div" variant="p">
                Tracking ID : { params.get('trackingId') }
            </Typography>
            <Typography component="div" variant="p">
              Name : {orderTrackingDetails.userName}
            </Typography>
            <Typography component="div" variant="p">
              Email : {orderTrackingDetails.email}
            </Typography>
            <Typography component="div" variant="p">
              Contact Number : {orderTrackingDetails.contactNo}
            </Typography>
            <Typography component="div" variant="p">
              Order Total : ₹ {orderTrackingDetails.orderTotal}
            </Typography>
            <Typography component="div" variant="p">
              Quantity : {orderTrackingDetails.quantity}
            </Typography>
            <Typography component="div" variant="p">
              Address : {orderTrackingDetails.deliveryAddress}
            </Typography>
            <Typography component="div" variant="p">
              Order Date : {orderTrackingDetails.orderedDate}
            </Typography>
            <Typography component="div" variant="p">
              Delivery Date : {orderTrackingDetails.deliveryDate}
            </Typography>
          </CardContent>
        </Box>
      </Card>
      <br></br>
      <br></br>
      <br></br>
    </React.Fragment>
  );
}