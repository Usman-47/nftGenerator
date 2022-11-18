import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";

const Edit = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };
  const handleHide = () => {
    setShow(false);
  };
  return (
    <div>
      <Container>
        <Grid container xl={12} lg={12} md={12} sm={12} xs={12} spacing={4}>
          <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
            <Typography variant='h4' sx={{ color: "#fff" }}>
              Parameters
            </Typography>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Grid
                  container
                  xl={12}
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                  spacing={2}
                  sx={{ marginBottom: "2%" }}
                >
                  <Grid item xl={4} lg={4} md={4}>
                    <Typography>Supply</Typography>
                    <TextField
                      id='outlined-number'
                      type='number'
                      placeholder='100'
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                  <Grid item xl={4} lg={4} md={4}>
                    <Typography>width (px)</Typography>
                    <TextField
                      id='outlined-number'
                      placeholder='400'
                      type='number'
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                  <Grid item xl={4} lg={4} md={4}>
                    <Typography>Height (px)</Typography>
                    <TextField
                      id='outlined-number'
                      placeholder='400'
                      type='number'
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                </Grid>
                <Typography>Name prefix</Typography>
                <TextField
                  fullWidth
                  id='fullWidth'
                  placeholder='Name'
                  sx={{ marginBottom: "2%", width: "97%" }}
                />
                <Typography>Symbol</Typography>
                <TextField
                  fullWidth
                  id='fullWidth'
                  placeholder='Symbol'
                  sx={{ marginBottom: "2%", width: "97%" }}
                />
                <Typography>Royalty Percent</Typography>
                <TextField
                  fullWidth
                  id='fullWidth'
                  placeholder='Royalty Percent'
                  sx={{ marginBottom: "2%", width: "97%" }}
                />
                <Typography>Royalty Wallet</Typography>
                <TextField
                  fullWidth
                  id='fullWidth'
                  placeholder='Royalty Wallet'
                  sx={{ marginBottom: "2%", width: "97%" }}
                />
                <Typography>External Link</Typography>
                <TextField
                  fullWidth
                  id='fullWidth'
                  placeholder='Website Link'
                  sx={{ marginBottom: "2%", width: "97%" }}
                />
                <Typography>Description</Typography>
                <TextField
                  fullWidth
                  id='fullWidth'
                  placeholder='description'
                  sx={{ marginBottom: "4%", width: "97%" }}
                />
                <Typography sx={{ marginBottom: "3%" }}>Creators</Typography>
                <Button variant='contained' sx={{ borderRadius: "15px" }}>
                  +
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xl={4} lg={4} md={4}>
            <Grid container xl={12} lg={12} md={12}>
              <Grid item xl={6} lg={6} md={6}>
                <Typography variant='h4' sx={{ color: "#fff" }}>
                  Traits
                </Typography>
              </Grid>
              <Grid item xl={6} lg={6} md={6}>
                <Button
                  variant='contained'
                  sx={{ fontSize: "12px", marginTop: "4%" }}
                >
                  Configure groups
                </Button>
              </Grid>
            </Grid>
            {show && (
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography>Rarity %: 0/100</Typography>
                  <Typography>Name</Typography>
                  <TextField
                    fullWidth
                    id='fullWidth'
                    placeholder='eg. Background'
                    sx={{ marginBottom: "4%", width: "97%" }}
                  />
                </CardContent>
                <Grid container xl={12} lg={12} md={12}>
                  <Grid
                    item
                    xl={6}
                    lg={6}
                    md={6}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Button
                      variant='contained'
                      sx={{
                        borderRadius: "15px",
                        marginBottom: "4%",
                        width: "50%",
                      }}
                    >
                      +
                    </Button>
                    <Button
                      variant='contained'
                      sx={{
                        borderRadius: "15px",
                        // marginTop: "4%",
                        backgroundColor: "red",
                        width: "50%",
                        marginBottom: "4%",
                      }}
                      onClick={handleHide}
                    >
                      -
                    </Button>
                  </Grid>

                  <Grid
                    item
                    xl={6}
                    lg={6}
                    md={6}
                    sx={{
                      position: "relative",
                    }}
                  >
                    <input
                      type='file'
                      className='fileUpload'
                      name='inputTag'
                      id='inputTag'
                      class='custom-file-input'
                    />
                    {/* <label htmlFor='inputTag'>
                      <Button
                        variant='contained'
                        sx={{ borderRadius: "10px", marginTop: "12%" }}
                      >
                        Select folder
                      </Button>
                    </label> */}
                  </Grid>
                </Grid>
              </Card>
            )}

            <Button
              variant='contained'
              sx={{ borderRadius: "15px", marginTop: "4%" }}
              onClick={handleShow}
            >
              +
            </Button>
          </Grid>
          <Grid item xl={4} lg={4} md={4}>
            <Typography>Generation</Typography>
            <Grid container xl={12} lg={12} md={12}>
              <Grid item xl={6} lg={6} md={6}>
                <Button variant='contained' sx={{ backgroundColor: "orange" }}>
                  Import config
                </Button>
              </Grid>
              <Grid item xl={6} lg={6} md={6}>
                <Button variant='contained'>Export config</Button>
              </Grid>
            </Grid>
            <Button
              variant='contained'
              sx={{
                backgroundColor: "#8f2f28",
                marginTop: "4%",
                display: "flex",
                justifyContent: "center",
                // paddingLeft: "6%",
                // paddingRight: "6%",
                width: "94%",
                marginBottom: "4%",
              }}
            >
              Generation is exclusive holders
            </Button>
            <Typography
              sx={{
                width: "94%",
                height: "40%",
                backgroundColor: "#fff",
              }}
            >
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Generation
              </Typography>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Edit;
