import * as React from "react";

import { Button, Fade, TextField } from "@material-ui/core";
import { NumberOfCopies, ObjectContext, TreeContext } from "./EditingPage";
import { ToastContainer, toast } from "react-toastify";

import { Backdrop } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { DemoCarousel } from "./Carousel";
import { Modal } from "@material-ui/core";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  height: 650,
  // bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  borderRadius: "10px",
  padding: "30px 70px 20px 20px",
  // backgroundColor: "#525050d7",
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
     style={{overflowY:"scroll"}}
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
          <Box sx={style}>
            {!next && (
              <div
                style={{
                  // backgroundColor: "rgba(255, 255, 255, 0.336)",
                  padding: "10px",
                  borderRadius: "20px",
                }}
              >
                <div
                  style={{
                    justifyContent: "center",
                    display: "flex",
                    fontWeight: "bold",
                    fontSize: "20px",
                    fontFamily: "Muller-ExtraBold",
                    marginBottom: "20px",
                    color: "white",
                  }}
                >
                  REVIEW
                </div>
                <div className="review">
                  <div>
                    <div
                      style={{
                        justifyContent: "flex-start",
                        display: "flex",
                        fontSize: "14px",
                        fontWeight: 500,
                        fontFamily: "poppins-light",
                        marginTop: "30px",
                        color: "#CECECE",
                        marginLeft: "1%",
                      }}
                    >
                      NFT Project name :
                    </div>
                    <TextField
                      size="medium"
                      variant="standard"
                      inputProps={{ style: { textAlign: "center" } }}
                      placeholder="name"
                      onBlur={(event) => {
                        setName(event.target.value);
                      }}
                      style={{
                        justifyContent: "flex-start",
                        display: "flex",
                        width: "500px",
                        marginLeft: "10px",
                        borderRadius: "10px",
                        background:
                          "linear-gradient(180deg, rgba(67, 49, 118, 0.0728) 0%, rgba(24, 3, 67, 0) 100%)",
                        border: "1px solid #32306A",
                      }}
                    />

                    <div
                      style={{
                        justifyContent: "flex-start",
                        display: "flex",
                        fontSize: "14px",
                        fontWeight: 500,
                        fontFamily: "poppins-light",
                        marginTop: "30px",
                        color: "#CECECE",
                        marginLeft: "1%",
                      }}
                    >
                      Symbol :
                    </div>
                    <TextField
                      size="medium"
                      variant="standard"
                      inputProps={{ style: { textAlign: "center" } }}
                      placeholder="symbol"
                      onBlur={(event) => {
                        setSymbol(event.target.value);
                      }}
                      style={{
                        justifyContent: "flex-start",
                        display: "flex",
                        width: "500px",
                        marginLeft: "10px",
                        borderRadius: "10px",
                      }}
                    />

                    <div
                      style={{
                        justifyContent: "flex-start",
                        display: "flex",
                        fontSize: "14px",
                        fontWeight: 500,
                        fontFamily: "poppins-light",
                        marginTop: "30px",
                        color: "#CECECE",
                        marginLeft: "1%",
                      }}
                    >
                      Seller Fee Basis Points :
                    </div>
                    <TextField
                      size="medium"
                      variant="standard"
                      inputProps={{ style: { textAlign: "center" } }}
                      placeholder="Seller Fee"
                      onBlur={(event) => {
                        setSellerFee(event.target.value);
                      }}
                      style={{
                        justifyContent: "flex-start",
                        display: "flex",
                        width: "500px",
                        marginLeft: "10px",
                        borderRadius: "10px",
                      }}
                    />

                    <div
                      style={{
                        justifyContent: "flex-start",
                        display: "flex",
                        fontSize: "14px",
                        fontWeight: 500,
                        fontFamily: "poppins-light",
                        marginTop: "30px",
                        color: "#CECECE",
                        marginLeft: "1%",
                      }}
                    >
                      Creators :
                    </div>
                    {inputFields.map((input, index) => (
                      <>
                        <TextField
                          size="medium"
                          variant="standard"
                          inputProps={{ style: { textAlign: "center" } }}
                          placeholder="creator"
                          name="creator"
                          onBlur={(event) => {
                            handleFormChange(index, event);
                          }}
                          style={{
                            justifyContent: "flex-start",
                            display: "flex",
                            width: "500px",
                            marginLeft: "10px",
                            borderRadius: "10px",
                          }}
                        />
                        <TextField
                          size="small"
                          variant="standard"
                          inputProps={{ style: { textAlign: "center" } }}
                          placeholder="share"
                          name="share"
                          onBlur={(event) => {
                            handleFormChange(index, event);
                          }}
                          style={{
                            justifyContent: "flex-start",
                            display: "flex",
                            width: "500px",
                            marginLeft: "10px",
                            borderRadius: "10px",
                          }}
                        />
                      </>
                    ))}
                    <button onClick={addFields}>Add More..</button>

                    <div
                      style={{
                        justifyContent: "flex-start",
                        display: "flex",
                        fontSize: "14px",
                        fontWeight: 500,
                        fontFamily: "poppins-light",
                        marginTop: "30px",
                        color: "#CECECE",
                        marginLeft: "1%",
                      }}
                    >
                      External Link (Website):
                    </div>
                    <TextField
                      size="medium"
                      variant="standard"
                      inputProps={{ style: { textAlign: "center" } }}
                      placeholder="URL"
                      onBlur={(event) => {
                        setURL(event.target.value);
                      }}
                      style={{
                        justifyContent: "center",
                        display: "flex",
                        width: "500px",
                        marginLeft: "10px",
                        borderRadius: "10px",
                      }}
                    />
                    <div
                      style={{
                        justifyContent: "flex-start",
                        display: "flex",
                        fontSize: "14px",
                        fontWeight: 500,
                        fontFamily: "poppins-light",
                        marginTop: "30px",
                        color: "#CECECE",
                        marginLeft: "1%",
                      }}
                    >
                      Description :
                    </div>
                    <TextField
                      size="small"
                      variant="outlined"
                      inputProps={{ style: { textAlign: "center" } }}
                      placeholder="description"
                      onBlur={(event) => {
                        setDescription(event.target.value);
                      }}
                      multiline={true}
                      style={{
                        justifyContent: "flex-start",
                        display: "flex",
                        width: "600px",
                        marginLeft: "10px",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                </div>
                <div
                  style={{
                    justifyContent: "center",
                    display: "flex",
                    marginTop: "30px",
                  }}
                >
                  <Button
                  style={{background: 'linear-gradient(100.86deg, #4E39D7 14.47%, #C615A9 123.62%)'}}
                    variant="contained"
                    color="secondary"
                    size="large"
                    onClick={handleFormSubmit}
                  >
                    Next
                  </Button>
                </div>
              </div>
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
                  style={{background: 'linear-gradient(100.86deg, #4E39D7 14.47%, #C615A9 123.62%)'}}
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
