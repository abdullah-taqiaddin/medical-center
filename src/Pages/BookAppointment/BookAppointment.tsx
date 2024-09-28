"use client";
import "./BookAppointment.css"; // Create a CSS file for HomePage layout
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

import { ReactComponent as BtnIcnBlue } from "../../Assets/icons/button-icn-blue.svg";
import { ReactComponent as BtnIcnGreen } from "../../Assets/icons/button-icn-green.svg";

import drimage from "../../Assets/images/drimage.png";
import drimageplaceholder from "../../Assets/images/placeholderdrimage.png";

import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";

import formimg1 from "../../Assets/images/formimg1.png";
import formimg2 from "../../Assets/images/formimage2.png";
import formimg3 from "../../Assets/images/formimage3.png";

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Input,
  Textarea,
  Text,
  ChakraProvider,
} from "@chakra-ui/react";

const DrCard = ({
  imagePath,
  name,
  major,
}: {
  imagePath?: string;
  name?: string;
  major?: string;
}) => {
  return (
    <div className="dr-card-book">
      <div>
        <img src={imagePath ? imagePath : drimageplaceholder} alt="dr"></img>
      </div>
      <div className="dr-card-name-book">{name || "Doctor Name"}</div>
      <div className="dr-card-major-book">{major || "Specialty/Major"}</div>
    </div>
  );
};

const BookAppointment = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="homepage">
      <Header />
      <main className="main-content">
        {/* Hero Section */}
        <div className="background">
          <div className="left-arch"></div>
          <div className="right-arch"></div>
          <div className="content">
            {" "}
            <div
              className="hero-feature-card-sndpage hero-feature-card-blue"
              style={{ textAlign: "left" }}
            >
              <div className="hero-feature-card-content">
                <div className="hero-feature-card-title">Pediatric Care</div>
                <div className="hero-feature-card-description">
                  Specialized healthcare for children, ensuring a healthy start.
                </div>
              </div>
              <div className="hero-feature-card-icon">
                <BtnIcnBlue />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                maxWidth: "41%",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  color: "#292929",
                  fontFamily: "Oswald",
                  fontSize: "64px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "125%",
                }}
              >
                Book Your Appointment
              </div>
              <div
                style={{
                  color: "#292929",
                  textAlign: "center",
                  fontFamily: '"Nunito Sans", sans-serif',
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: 300,
                  lineHeight: "125%",
                }}
              >
                Schedule a convenient time for your visit with our experienced
                medical team.
              </div>
            </div>
            <div
              className="hero-feature-card-sndpage hero-feature-card-blue"
              style={{
                textAlign: "left",
                background: "rgba(178, 235, 224, 1)",
              }}
            >
              <div className="hero-feature-card-content">
                <div className="hero-feature-card-title">Pediatric Care</div>
                <div className="hero-feature-card-description">
                  Specialized healthcare for children, ensuring a healthy start.
                </div>
              </div>
              <div className="hero-feature-card-icon">
                <BtnIcnGreen />
              </div>
            </div>
          </div>
        </div>
        <section>
          <ChakraProvider resetCSS={false}>
            <div className="form-container">
              {/* Left side form */}
              <GridItem>
                <Box padding={"80px"}>
                  {/* Form Title */}
                  <Heading
                    as="h1"
                    fontSize="50px"
                    fontWeight="700"
                    color="#292929"
                    mb={4}
                    fontFamily="Oswald"
                  >
                    Enter Your Details
                  </Heading>
                  <Text
                    color="#666"
                    fontSize="18px"
                    mb={8}
                    fontFamily="'Nunito Sans', sans-serif"
                  >
                    Provide basic information so we can confirm your
                    appointment.
                  </Text>

                  {/* Form Fields */}
                  <form>
                    <FormControl mb={4}>
                      <FormLabel
                        fontSize="20px"
                        fontWeight="500"
                        color="#292929"
                        fontFamily="Nunito Sans"
                      >
                        Name
                      </FormLabel>
                      <Input
                        type="text"
                        placeholder="Enter patient's full name"
                        size="lg"
                        borderRadius="10px"
                        borderColor="#D9D9D9"
                        height="44px" // Height set to 44px
                        _placeholder={{
                          color: "#D9D9D9",
                          fontFamily: "'Nunito Sans'",
                        }} // Placeholder color
                        _focus={{
                          borderColor: "black", // Active state border color
                        }}
                      />
                    </FormControl>

                    <FormControl mb={4}>
                      <FormLabel
                        fontSize="20px"
                        fontWeight="500"
                        color="#292929"
                        fontFamily="'Nunito Sans', sans-serif"
                      >
                        Email
                      </FormLabel>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        size="lg"
                        borderRadius="10px"
                        borderColor="#D9D9D9"
                        height="44px" // Height set to 44px
                        _placeholder={{ color: "#D9D9D9" }} // Placeholder color
                        _focus={{
                          borderColor: "black", // Active state border color
                        }}
                      />
                    </FormControl>

                    <FormControl mb={4}>
                      <FormLabel
                        fontSize="20px"
                        fontWeight="500"
                        color="#292929"
                        fontFamily="'Nunito Sans', sans-serif"
                      >
                        Phone
                      </FormLabel>
                      <Input
                        type="tel"
                        placeholder="Enter your phone number"
                        size="lg"
                        borderRadius="10px"
                        borderColor="#D9D9D9"
                        height="44px" // Height set to 44px
                        _placeholder={{ color: "#D9D9D9" }} // Placeholder color
                        _focus={{
                          borderColor: "black", // Active state border color
                        }}
                      />
                    </FormControl>

                    <FormControl mb={4}>
                      <FormLabel
                        fontSize="20px"
                        fontWeight="500"
                        color="#292929"
                        fontFamily="'Nunito Sans', sans-serif"
                      >
                        Tell Us About Your Health Concern
                      </FormLabel>
                      <Textarea
                        resize={"none"}
                        placeholder="Message"
                        size="lg"
                        borderRadius="10px"
                        borderColor="#D9D9D9"
                        height="150px" // Keeping the height for Textarea
                        _placeholder={{
                          color: "#D9D9D9",
                          fontFamily: "'Nunito Sans'",
                        }} // Placeholder color
                        _focus={{
                          borderColor: "black", // Active state border color
                        }}
                      />
                    </FormControl>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "1rem",
                        marginBottom: "1rem",
                        flexWrap: "wrap",
                      }}
                    >
                      <div>
                        <FormLabel
                          fontSize="20px"
                          fontWeight="500"
                          color="#292929"
                          fontFamily="'Nunito Sans', sans-serif"
                        >
                          Select Date
                        </FormLabel>
                        <Input
                          width={"15rem"}
                          fontFamily={"Nunito Sans"}
                          type="date"
                          size="lg"
                          borderRadius="10px"
                          borderColor="#D9D9D9"
                          height="44px" // Height set to 44px
                          _placeholder={{ color: "#D9D9D9" }} // Placeholder color
                          _focus={{
                            borderColor: "black", // Active state border color
                          }}
                        />
                      </div>
                      <div>
                        <FormLabel
                          fontSize="20px"
                          fontWeight="500"
                          color="#292929"
                          fontFamily="'Nunito Sans', sans-serif"
                        >
                          Select Time
                        </FormLabel>
                        <Input
                          width={"15rem"}
                          fontFamily={"Nunito Sans"}
                          type="time"
                          size="lg"
                          borderRadius="10px"
                          borderColor="#D9D9D9"
                          height="44px" // Height set to 44px
                          _placeholder={{ color: "#D9D9D9" }} // Placeholder color
                          _focus={{
                            borderColor: "black", // Active state border color
                          }}
                        />
                      </div>
                    </div>

                    <Button
                      colorScheme="black"
                      bg="#292929"
                      color="white"
                      size="lg"
                      w="45%"
                      borderRadius={"122px"}
                      fontWeight={"300"}
                    >
                      Confirm Appointment
                    </Button>
                  </form>
                </Box>
              </GridItem>

              {/* Right side placeholder */}
              <GridItem>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <div style={{ width: "100%" }}>
                    <img alt="form-stock" src={formimg1} />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "1rem",
                    }}
                  >
                    <img alt="form-stock" src={formimg2} />
                    <img alt="form-stock" src={formimg3} />
                  </div>
                </div>
              </GridItem>
            </div>
          </ChakraProvider>
        </section>

        <section className="team-section-book">
          <div className="team-heading-book">
            <div className="team-subtitle-book">our team</div>
            <div className="team-title-book">Meet Our Expert Medical Team</div>
          </div>
          <div className="team-list-book">
            <DrCard imagePath={drimage} /> <DrCard />
            <DrCard />
            <DrCard />
            <DrCard />
            <DrCard />
            <DrCard />
            <DrCard />
            <DrCard />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BookAppointment;
