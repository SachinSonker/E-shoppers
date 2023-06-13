import * as React from 'react';
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

import image from '../../assets/download.jfif'

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { width } from '@mui/system';

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
    1: <ShoppingCartIcon/>,
    2: <SettingsIcon/>,
    3: <LocalPostOfficeIcon/>,
    4: <LocalShippingIcon/>,
    5: <CottageIcon/>,
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

  const theme = useTheme();

  return (
    <React.Fragment>
    <br></br>
    <br></br>
    <br></br>
      <Card sx={{ display: 'flex' }} className="detailsCard">
      <CardMedia
        component="img"
        sx={{ width: 350, height: 450}}
        image={image}
        alt="Product Image"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', marginLeft: '3%' }}>

        <Stack sx={{ width: '100%', marginTop: 4, marginBottom: 6, }} spacing={4}>
          <Stepper alternativeLabel activeStep={2} connector={<ColorlibConnector />}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Stack>

        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
          Stalder Transparent Lantern Head
          </Typography>
          <br></br>
          <Typography component="div" variant="p">
          Order ID : 28acb3-dn89h-jh83g-90ik0
          </Typography>
          <Typography component="div" variant="p">
          Name : Krishna Ravat
          </Typography>
          <Typography component="div" variant="p">
          Email : krishna@gmail.com
          </Typography>
          <Typography component="div" variant="p">
          Contact Number : 9146645638
          </Typography>
          <Typography component="div" variant="p">
          Order Total : ₹ 36,000
          </Typography>
          <Typography component="div" variant="p">
          Delivery Address : 301, Gokul Housing Society, Jagtap Dairy, Pune - 440013
          </Typography>
          <Typography component="div" variant="p">
          Delivery Date : 15-06-2023
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