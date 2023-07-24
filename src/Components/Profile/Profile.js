import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { showToast } from '../../services/toastService';

import axios from 'axios';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import './Profile.css'
import { useState } from 'react';
import { useEffect } from 'react';

export default function ProfilePage() {

  const [open,setOpen] = useState(false);
  const [profileDetails, setProfileDetails] = useState({})
  const [name,setName] = useState();
  const [phone,setPhone] = useState("");
  const [address,setAddress] = useState("");
  const [errors, setErrors] = useState({});



  useEffect(()=>{
    getProfileDetails();
    console.log("Run hua")
  }, [])

  function getProfileDetails(){
    axios
    .get("http://localhost:8090/api/profile", {
      headers: { Authorization: "Bearer " + sessionStorage.getItem('token') },
    })

    .then((response) => {
        setProfileDetails(response.data)
        console.log(response.data)
    })
    .catch((err)=>{
      console.log("My error",err)
    })
    ;
  }

  const validateName = (event) => {
    const Name = event.target.value;
    setName(Name);
    if (Name.trim() === "") {
      setErrors({ ...errors, ["name"]: "Name is required" });
    } else {
      delete errors.name;
    }
  };

  const validatePhone = (event) => {
    const no = event.target.value;
    setPhone(no);
    if (no === "" || no.length !== 10 || !/^\d+$/.test(no)) {
      setErrors({ ...errors, ["phone"]: "Please enter a valid phone number" });
    } else {
      delete errors.phone;
    }
  };

  function editProfileDetails(){
    if (Object.keys(errors).length === 0) {
        const data = {
            "name" : name,
            "phoneNo" : phone,
            "address" : address,
            "email" : profileDetails.email
        }
        
        axios
        .put("http://localhost:8090/api/profile", data ,{
          headers: { Authorization: "Bearer " + sessionStorage.getItem('token')
        },
        })
        .then((response) => {
            setProfileDetails(response.data)
            handleClose()
            console.log(response.data)
        })
        .catch((err)=>{
          console.log("My error",err)
        });
        
    }else{
      showToast('Something went wrong!', 'error');
    }
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  function handleClose(){
    setOpen(false)
  }
  return (
    <section style={{ backgroundColor: '#eee', fontFamily: "Palanquin Dark" }}>
      <MDBContainer className="py-5">
        <MDBRow>
            
            <MDBCol >
                <MDBBreadcrumb className="profileHeading  rounded-3 p-3 mb-4">
                {/* <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem> */}
                {/* <div className='profileHeading'> */}
                <h3>User Profile</h3>
                {/* </div> */}
                </MDBBreadcrumb>
            </MDBCol>
        </MDBRow>

        <MDBRow style={{display:'flex',width:'100%'}}>
          <MDBCol style ={{width:'50%'}} lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://tse1.mm.bing.net/th/id/OIP.E5uOSxhlgBBUdpEqwAJ9lAHaHa?pid=ImgDet&w=191&h=191&c=7&dpr=1.5"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <p className="text-muted mb-1" style={{margin:20,marginLeft:'5!important'}}>{profileDetails.name}</p>
                <div className="d-flex justify-content-center mb-2">
                  {/* <MDBBtn>Follow</MDBBtn> */}
                  {/* <MDBBtn outline className="ms-1">Edit Profile</MDBBtn> */}
                  <button className='btn btn-outline-primary editProfile' onClick={()=>{setOpen(true)}}>Edit Profile</button>
                  <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="child-modal-title"
                        aria-describedby="child-modal-description">
                        <Box sx={{ ...style, width: 500,borderRadius: 5, border:"none" ,marginLeft:5,padding:12,}}>
                            <div className='title'>
                                <p>Edit Profile Details</p>
                                <hr className='line'/>
                            </div>
                            <div>
                            <div class="form-outline">
                                <label class="form-label" for="typeText">Name</label>
                                <input type="text" id="typeText" class="form-control"  defaultValue={profileDetails.name} onChange={(e)=>{validateName(e)}} />
                                {errors.name && <span className='errorMsg'>{errors.name}</span>}<br />
                                <label class="form-label" for="typeText">Email</label>
                                <input type="text" id="typeText" class="form-control" defaultValue={profileDetails.email} disabled="true"/>
                                <label class="form-label" for="typeText">Phone No</label>
                                <input type="text" id="typeText" class="form-control" defaultValue={profileDetails.phoneNo} onChange={(e)=>{validatePhone(e)}}/>
                                {errors.phone && <span className='errorMsg'>{errors.phone}</span>}<br />
                                <label class="form-label" for="typeText">Address</label>
                                <input type="text" id="typeText" class="form-control" defaultValue={profileDetails.address}onChange={(e)=>{setAddress(e.target.value)}} />
                            </div>
                            </div>
                            <div className='actionButton'>
                                <button className='btn btn-primary editBtn' onClick={() => editProfileDetails()}>Edit</button>
                                <button className='btn btn-outline-primary closeBtn' onClick={handleClose}>Close</button>
                            </div>
                            
                        </Box>
                  </Modal>
                </div>
              </MDBCardBody>
            </MDBCard>

          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{profileDetails.name}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{profileDetails.email}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Mobile No</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{profileDetails.number}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{profileDetails.address}</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
            </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}