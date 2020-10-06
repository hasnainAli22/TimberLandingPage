import {
  Box,
  Container,
  Grid,
  Card,
  makeStyles,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import AlternateEmail from "@material-ui/icons/AlternateEmail";
import PhoneEnabled from "@material-ui/icons/PhoneEnabled";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import React from "react";
import theme from "./theme";
const { secondary } = theme;
const useStyle = makeStyles((theme) => ({
  contact: {
    padding: theme.spacing(10, 2),
    background: "#f0f0f0",
  },
  addressCard2: {
    padding: theme.spacing(2, 2),
  },
  contactCard: {
    padding: theme.spacing(2, 2),
    textAlign: "center",
    background: secondary,
    color: "#fff",
  },
  addressTextBox: {
    display: "flex",
    alignItems: "center",
    marginBottom: "1rem",
  },
  formCard: {
    padding: theme.spacing(2, 2),
  },
  heading: {
    color: secondary,
  },
  formInputFeild: {
    color: secondary,
    border: secondary,
    marginBottom: "1rem !important",
  },
  formInputFeildLabel: {
    color: secondary,
  },
  formButton: {
    background: secondary,
    color: "#fff",
    marginTop: "1rem",
    "&:hover": {
      backgroundColor: secondary,
      color: "#fff",
    },
  },
  icons: { color: secondary, marginRight: "5px" },
}));

function Contact() {
  const classes = useStyle();
  return (
    <>
      <Box className={classes.contact}>
        <Container>
          <Typography gutterBottom align={"center"} variant={"h3"}>
            Contact <span className={classes.heading}>Us</span>
          </Typography>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
            spacing={2}
          >
            <Grid
              item
              xs={12}
              sm={10}
              md={6}
              container
              spacing={3}
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item xs={12}>
                <Card
                  elevation={4}
                  className={`${classes.contactCard} ${classes.addressCard}`}
                >
                  <CardContent>
                    <EmailIcon
                      gutterBottom
                      align={"center"}
                      style={{ fontSize: 55 }}
                    />

                    <Typography gutterBottom align={"center"} variant={"h5"}>
                      Our Address
                    </Typography>
                    <Typography align={"center"}>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Reprehenderit, molestias iste consectetur autem cupiditate
                      consequuntur Lorem ipsum dolor, sit amet consectetur
                      adipisicing elit. Sunt, dolorem.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card elevation={4} className={classes.addressCard2}>
                  <CardContent>
                    <Typography gutterBottom variant={"h5"}>
                      Main Office
                    </Typography>
                    <Typography gutterBottom variant={"p"}>
                      Book Timber
                    </Typography>
                    <Box className={classes.addressTextBox}>
                      <LocationOnIcon className={classes.icons} />
                      <Typography>
                        123 Street Gujranwala, Punjab Pakistan
                      </Typography>
                    </Box>
                    <Box className={classes.addressTextBox}>
                      <PhoneEnabled className={classes.icons} />
                      <Typography>+123 456 789</Typography>
                    </Box>
                    <Box className={classes.addressTextBox}>
                      <AlternateEmail className={classes.icons} />
                      <Typography>our.hasnain22@gmail.com</Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={10} md={6}>
              <Card className={classes.formCard} elevation={4}>
                <CardContent>
                  <Typography gutterBottom variant={"h5"}>
                    Please Fill This Form
                  </Typography>
                  <form className={classes.root} noValidate autoComplete="off">
                    <div>
                      <TextField
                        variant={"standard"}
                        gutterBottom
                        fullWidth
                        id="name"
                        label="Name"
                        required
                        InputLabelProps={{
                          className: classes.formInputFeildLabel,
                        }}
                        className={classes.formInputFeild}
                      />
                      <TextField
                        variant={"standard"}
                        fullWidth
                        type={"email"}
                        id="email"
                        label="Email"
                        required
                        InputLabelProps={{
                          className: classes.formInputFeildLabel,
                        }}
                        className={classes.formInputFeild}
                      />
                      <TextField
                        variant={"standard"}
                        type={"tel"}
                        fullWidth
                        id="phone"
                        label="Phone"
                        required
                        InputLabelProps={{
                          className: classes.formInputFeildLabel,
                        }}
                        className={classes.formInputFeild}
                      />
                      <TextField
                        variant={"standard"}
                        type={"text"}
                        fullWidth
                        id="message"
                        label="Message"
                        required
                        multiline
                        rows={4}
                        InputLabelProps={{
                          className: classes.formInputFeildLabel,
                        }}
                        className={classes.formInputFeild}
                      />
                      <Button
                        type={"submit"}
                        onClick={(e) => e.preventDefault()}
                        variant={"contained"}
                        className={classes.formButton}
                      >
                        Send
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Contact;
