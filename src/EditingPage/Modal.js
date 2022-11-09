import * as React from "react";

import { Button, Fade, TextField } from "@material-ui/core";
import { NumberOfCopies, ObjectContext, TreeContext } from "./EditingPage";
import { ToastContainer, toast } from "react-toastify";
import AddIcon from '@material-ui/icons/Add';
import { Backdrop } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { DemoCarousel } from "./Carousel";
import { Modal } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: '65%',
  height: 650,
  // bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  borderRadius: "10px",
  padding: "30px 20px 20px 20px",
  // backgroundColor: "#525050d7",
  overflowY:"auto",
  overflowX:"hidden"
};

export const ModalComponent = (props) => {
  const { objects } = React.useContext(ObjectContext);
  const { total } = React.useContext(NumberOfCopies);
  const { fileData } = React.useContext(TreeContext);
  const [name, setName] = React.useState("");
  const [symbol, setSymbol] = React.useState("");
  const [sellerFee, setSellerFee] = React.useState("");
  const [inputFields, setInputFields] = React.useState([
    { creator: "", share: "" },
  ]);
  const [creators, setCreators] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [URL, setURL] = React.useState("");
  const [next, setNext] = React.useState(false);
  const [code, setCode] = React.useState("");

  const handleClick = async () => {
    const data = {
      objects: objects,
      total: total,
      sellerFee,
      symbol,
      creators: inputFields,
      uuid: JSON.parse(sessionStorage.uuid),
      canvasHeight: props.canvasHeight,
      canvasWidth: props.canvasWidth,
      folderTree: fileData,
      name: name,
      description: description,
      URL: URL,
    };
    console.log(data, "dataaaaaa");
    props.openLoadingModal();
    axios
      .post(`${process.env.REACT_APP_SERVERURL}/submitDetails`, data)
      .then(function (response) {
        window.location.href = "/loading";
        console.log(response);
     
      })
      .catch(function (error) {
        alert(error);
        window.location.href = "/error";
        console.log(error);
      });
  };

  const handleFormSubmit = async () => {
    const data = {
      hash: code,
      totalCopies: total,
      name: name,
    };
  
    // const response = await axios
    //   .post("https://sickalien.store/validate", data)
    //   .then(function (res) {
    //     setNext(true);
    //     toast.success("Secret Code Validated");
    //   })
    //   .catch(function (error) {
    //     toast.info(error);
    //     toast.error("Try Again");
    //   });
    setNext(true);
  };

  const handleModalClose = () => {
    setNext(false);
    props.handleClose();
  };

  const addFields = () => {
    let newfield = { creator: "", share: "" };

    setInputFields([...inputFields, newfield]);
  };

  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  };
  return (
    <div>
      <Modal
      className="carousel_modal_main_div"
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.isOpen}
        onClose={handleModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.isOpen}>
          <Box sx={style} className="carousel_box">
          <div style={{textAlign:"end"}}>
          <CloseIcon className="close_icon" style={{color:"white"}} onClick={()=>{props.handleClose()}}/>
          </div>
            {!next && (
              <>
              <div
                  style={{
                    justifyContent: "center",
                    display: "flex",
                    fontWeight: "bold",
                    fontSize: "40px",
                    fontFamily: "Muller-ExtraBold",
                    marginBottom: "20px",
                    color: "white",
                  }}
                >
                  Collection Description
                </div>
                <div
                style={{
                 
                  height: '80vh',
                  // backgroundColor: "rgba(255, 255, 255, 0.336)",
                  padding: "10px 10px 50px 10px",
                  borderRadius: "20px",
                }}
              >
               
                <div className="review">
                  <div style={{width:"100%", padding:"20px"}}>

                  <div style={{ background:
                          "linear-gradient(180deg, rgba(67, 49, 118, 0.0728) 0%, rgba(24, 3, 67, 0) 100%)",
                        border: "1px solid #32306A",  borderRadius: "10px", padding:"5px 0 0 10px", marginBottom:"10px"}}>

                    <div
                      style={{
                        justifyContent: "flex-start",
                        display: "flex",
                        fontSize: "14px",
                        fontWeight: 500,
                        fontFamily: "poppins-light",
                        color: "#CECECE",
                        marginLeft: "2%",
                      }}
                    >
                      NFT Project name :
                    </div>
                    <TextField
                    required
                      size="medium"
                      variant="standard"
                      // inputProps={{ style: { textAlign: "center" } }}
                      placeholder="name"
                      onBlur={(event) => {
                        setName(event.target.value);
                      }}
                      style={{
                        justifyContent: "flex-start",
                        display: "flex",
                        // width: "500px",
                        marginLeft: "10px",
                       
                       
                      }}
                    />
                        </div>
                   
                        <div style={{ background:
                          "linear-gradient(180deg, rgba(67, 49, 118, 0.0728) 0%, rgba(24, 3, 67, 0) 100%)",
                        border: "1px solid #32306A",  borderRadius: "10px", padding:"5px 0 0 10px", marginBottom:"10px"}}>

                    
                    <div
                      style={{
                        justifyContent: "flex-start",
                        display: "flex",
                        fontSize: "14px",
                        fontWeight: 500,
                        fontFamily: "poppins-light",
                       
                        color: "#CECECE",
                        marginLeft: "2%",
                      }}
                    >
                      Symbol :
                    </div>
                    <TextField
                      size="medium"
                      variant="standard"
                      // inputProps={{ style: { textAlign: "center" } }}
                      placeholder="symbol"
                      onBlur={(event) => {
                        setSymbol(event.target.value);
                      }}
                      style={{
                        justifyContent: "flex-start",
                        display: "flex",
                        // width: "500px",
                        marginLeft: "10px",
                        borderRadius: "10px",
                      }}
                    />
                    </div>

                    <div style={{ background:
                          "linear-gradient(180deg, rgba(67, 49, 118, 0.0728) 0%, rgba(24, 3, 67, 0) 100%)",
                        border: "1px solid #32306A",  borderRadius: "10px", padding:"5px 0 0 10px", marginBottom:"10px"}}>
                    <div
                      style={{
                        justifyContent: "flex-start",
                        display: "flex",
                        fontSize: "14px",
                        fontWeight: 500,
                        fontFamily: "poppins-light",
                        color: "#CECECE",
                        marginLeft: "2%",
                      }}
                    >
                      Royalty Percent :
                    </div>
                    <TextField
                      size="medium"
                      variant="standard"
                      // inputProps={{ style: { textAlign: "center" } }}
                      placeholder=" Royalty Percent"
                      onBlur={(event) => {
                        setSellerFee(event.target.value);
                      }}
                      style={{
                        justifyContent: "flex-start",
                        display: "flex",
                        // width: "500px",
                        marginLeft: "5px",
                        borderRadius: "10px",
                      }}
                    />
                    </div>
                      <div style={{display:"flex", alignItems:"center", justifyContent:"space-between",  marginBottom:"10px"}}>
                        <div style={{ background:
                              "linear-gradient(180deg, rgba(67, 49, 118, 0.0728) 0%, rgba(24, 3, 67, 0) 100%)",
                            border: "1px solid #32306A",  borderRadius: "10px", padding:"5px 0 0 10px", width:"88%"}}>
                        <div
                          style={{
                            justifyContent: "flex-start",
                            display: "flex",
                            fontSize: "14px",
                            fontWeight: 500,
                            fontFamily: "poppins-light",
                            color: "#CECECE",
                            marginLeft: "2%",
                          }}
                        >
                          Royalty Wallets :
                        </div>
                        {inputFields.map((input, index) => (
                          <>
                            <TextField
                              size="medium"
                              variant="standard"
                              // inputProps={{ style: { textAlign: "center" } }}
                              placeholder="Royalty Wallets"
                              name="creator"
                              onBlur={(event) => {
                                handleFormChange(index, event);
                              }}
                              style={{
                                justifyContent: "flex-start",
                                display: "flex",
                                // width: "500px",
                                marginLeft: "5px",
                                borderRadius: "10px",
                                padding:"10px 0 15px 0"
                              }}
                            />
                            <TextField
                              size="small"
                              variant="standard"
                              // inputProps={{ style: { textAlign: "center" } }}
                              placeholder="share"
                              name="share"
                              onBlur={(event) => {
                                handleFormChange(index, event);
                              }}
                              style={{
                                justifyContent: "flex-start",
                                display: "flex",
                                // width: "500px",
                                marginLeft: "5px",
                                borderRadius: "10px",
                                padding:"0 0 15px 0"
                              }}
                            />
                          </>
                        ))}
                        </div>
                        <button className="plus_btn" style={{padding:"10px 5px" , width:"60px", background:"linear-gradient(100.86deg, #4E39D7 14.47%, #C615A9 123.62%)", borderRadius:"8px", color:"#CECECE", borderColor:"rgba(39, 36, 52, 0.5)"}} onClick={addFields}><AddIcon/></button>
                      </div>
                    <div style={{ background:
                          "linear-gradient(180deg, rgba(67, 49, 118, 0.0728) 0%, rgba(24, 3, 67, 0) 100%)",
                        border: "1px solid #32306A",  borderRadius: "10px", padding:"5px 0 0 10px", marginBottom:"10px"}}>
                    <div
                      style={{
                        justifyContent: "flex-start",
                        display: "flex",
                        fontSize: "14px",
                        fontWeight: 500,
                        fontFamily: "poppins-light",
                       
                        color: "#CECECE",
                        marginLeft: "2%",
                      }}
                    >
                      External Link (Website):
                    </div>
                    <TextField
                      size="medium"
                      variant="standard"
                      // inputProps={{ style: { textAlign: "center" } }}
                      placeholder="URL"
                      onBlur={(event) => {
                        setURL(event.target.value);
                      }}
                      style={{
                        justifyContent: "center",
                        display: "flex",
                        // width: "500px",
                        marginLeft: "10px",
                        borderRadius: "10px",
                      }}
                    />
                    </div>

                    <div style={{ background:
                          "linear-gradient(180deg, rgba(67, 49, 118, 0.0728) 0%, rgba(24, 3, 67, 0) 100%)",
                        border: "1px solid #32306A",  borderRadius: "10px", padding:"5px 0 0 10px", marginBottom:"10px"}}>
                    <div
                      style={{
                        justifyContent: "flex-start",
                        display: "flex",
                        fontSize: "14px",
                        fontWeight: 500,
                        fontFamily: "poppins-light",
                      
                        color: "#CECECE",
                        marginLeft: "2%",
                      }}
                    >
                      Description :
                    </div>
                    <TextField
                      size="small"
                      // variant="outlined"
                      // inputProps={{ style: { textAlign: "center" } }}
                      placeholder="description"
                      onBlur={(event) => {
                        setDescription(event.target.value);
                      }}
                      multiline={true}
                      style={{
                        justifyContent: "flex-start",
                        display: "flex",
                        // width: "600px",
                        marginLeft: "10px",
                        borderRadius: "10px",
                       
                      }}
                    />
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    justifyContent: "center",
                    display: "flex",
                    marginTop: "30px",
                  }}
                >
                  {/* <Button
                  style={{background: 'linear-gradient(100.86deg, #4E39D7 14.47%, #C615A9 123.62%)'}}
                    variant="contained"
                    color="secondary"
                    size="large"
                    onClick={handleFormSubmit}
                  >
                    Next
                  </Button> */}
                  <Button
                  style={{background: 'linear-gradient(100.86deg, #4E39D7 14.47%, #C615A9 123.62%)', padding:"10px 44px", borderRadius:"0", fontFamily:"poppins-light"}}
                    variant="contained"
                    color="secondary"
                    size="large"
                    onClick={handleClick}
                  >
                    Create
                  </Button>
                </div>
              </div>
              </>
              
            )}

            {next && (
              <div>
                <DemoCarousel />
                <div
                  style={{
                    justifyContent: "center",
                    display: "flex",
                    marginTop: "-10px",
                  }}
                >
                  <Button
                  style={{background: 'linear-gradient(100.86deg, #4E39D7 14.47%, #C615A9 123.62%)', padding:"10px 44px", borderRadius:"0", fontFamily:"poppins-light"}}
                    variant="contained"
                    color="secondary"
                    size="large"
                    onClick={handleClick}
                  >
                    Create
                  </Button>
                 
                </div>
              </div>
            )}
          </Box>
        </Fade>
      </Modal>
      <div className="form-group">
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
  );
};
