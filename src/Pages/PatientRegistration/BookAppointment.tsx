"use client";
import "./PatientRegistration.css"; // Create a CSS file for HomePage layout
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

import { ReactComponent as BtnIcnBlue } from "../../Assets/icons/button-icn-blue.svg";
import { ReactComponent as BtnIcnGreen } from "../../Assets/icons/button-icn-green.svg";




import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  ChakraProvider,
  Checkbox,
} from "@chakra-ui/react";

const PatientRegistration = () => {
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
                <div className="hero-feature-card-title">Immunizations</div>
                <div className="hero-feature-card-description">
                  Protect your family with up-to-date vaccines for all ages.
                </div>
              </div>
              <div className="hero-feature-card-icon">
                <BtnIcnBlue />
              </div>
            </div>
            <div className="title-container-sub-pat">
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
                New Patient Registration
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
                Please fill out the form below to help us provide the best care
                for you.
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
                <div className="hero-feature-card-title">Physical Exams</div>
                <div className="hero-feature-card-description">
                  Convenient exams for work, school, or sports.
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
            <div className="form-container-pat">
              {/* Left side form */}
              <div>
                <div style={{ padding: "80px" }}>
                  {/* Form Title */}
                  <Heading
                    as="h1"
                    fontSize="50px"
                    fontWeight="500"
                    color="#292929"
                    mb={4}
                    fontFamily="Oswald"
                  >
                    Complete Your Details Below
                  </Heading>
                  <Text
                    color="#666"
                    fontSize="18px"
                    mb={8}
                    fontFamily="'Nunito Sans', sans-serif"
                  >
                    This information helps us prepare for your visit and offer
                    you the best possible care.
                  </Text>

                  {/* Form Fields */}
                  <form>
                    {/* Personal Information */}
                    <Text
                      as="h3"
                      fontSize="40px"
                      fontWeight="500"
                      color="#292929"
                      mb={4}
                      fontFamily="Oswald"
                    >
                      Personal Information
                    </Text>

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
                        height="44px"
                        _placeholder={{
                          color: "#D9D9D9",
                          fontFamily: "'Nunito Sans'",
                        }}
                        _focus={{
                          borderColor: "black",
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
                          Gender
                        </FormLabel>
                        <Input
                          width={"15rem"}
                          fontFamily={"Nunito Sans"}
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

                    <FormControl mb={4}>
                      <FormLabel
                        fontSize="20px"
                        fontWeight="500"
                        color="#292929"
                        fontFamily="'Nunito Sans', sans-serif"
                      >
                        Address
                      </FormLabel>
                      <Input
                        type="text"
                        placeholder="Enter your home address"
                        size="lg"
                        borderRadius="10px"
                        borderColor="#D9D9D9"
                        height="44px"
                        _placeholder={{ color: "#D9D9D9" }}
                        _focus={{ borderColor: "black" }}
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
                        height="44px"
                        _placeholder={{ color: "#D9D9D9" }}
                        _focus={{ borderColor: "black" }}
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
                        height="44px"
                        _placeholder={{ color: "#D9D9D9" }}
                        _focus={{ borderColor: "black" }}
                      />
                    </FormControl>

                    {/* Medical History */}
                    <Text
                      as="h3"
                      fontSize="40px"
                      fontWeight="500"
                      color="#292929"
                      mb={4}
                      fontFamily="Oswald"
                    >
                      Medical History
                    </Text>

                    <FormControl mb={4}>
                      <FormLabel
                        fontSize="20px"
                        fontWeight="500"
                        color="#292929"
                        fontFamily="Nunito Sans"
                      >
                        Current Medication
                      </FormLabel>
                      <Input
                        type="text"
                        placeholder="Enter information"
                        size="lg"
                        borderRadius="10px"
                        borderColor="#D9D9D9"
                        height="44px"
                        _placeholder={{ color: "#D9D9D9" }}
                        _focus={{ borderColor: "black" }}
                      />
                    </FormControl>

                    <FormControl mb={4}>
                      <FormLabel
                        fontSize="20px"
                        fontWeight="500"
                        color="#292929"
                        fontFamily="Nunito Sans"
                      >
                        Chronic Condition
                      </FormLabel>
                      <Input
                        type="text"
                        placeholder="Enter information"
                        size="lg"
                        borderRadius="10px"
                        borderColor="#D9D9D9"
                        height="44px"
                        _placeholder={{ color: "#D9D9D9" }}
                        _focus={{ borderColor: "black" }}
                      />
                    </FormControl>

                    <FormControl mb={4}>
                      <FormLabel
                        fontSize="20px"
                        fontWeight="500"
                        color="#292929"
                        fontFamily="Nunito Sans"
                      >
                        Past Surgeries
                      </FormLabel>
                      <Input
                        type="text"
                        placeholder="Enter information"
                        size="lg"
                        borderRadius="10px"
                        borderColor="#D9D9D9"
                        height="44px"
                        _placeholder={{ color: "#D9D9D9" }}
                        _focus={{ borderColor: "black" }}
                      />
                    </FormControl>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                      }}
                    >
                      {/* Allergies */}
                      <FormLabel
                        fontSize="20px"
                        fontWeight="500"
                        color="#292929"
                        fontFamily="'Nunito Sans', sans-serif"
                        mb={2}
                      >
                        Allergies
                      </FormLabel>
                      <Checkbox size="lg" mb={2}>
                        Pollen
                      </Checkbox>
                      <Checkbox size="lg" mb={2}>
                        Dust Mite
                      </Checkbox>
                      <Checkbox size="lg" mb={2}>
                        Latex
                      </Checkbox>
                      <Checkbox size="lg" mb={2}>
                        Insect Sting
                      </Checkbox>
                      <Checkbox size="lg" mb={6}>
                        Medication
                      </Checkbox>
                    </div>
                    {/* Insurance Information */}
                    <Text
                      as="h3"
                      fontSize="40px"
                      fontWeight="500"
                      color="#292929"
                      mb={4}
                      fontFamily="Oswald"
                    >
                      Insurance Information
                    </Text>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                      }}
                    >
                      <FormControl mb={4}>
                        <FormLabel
                          fontSize="20px"
                          fontWeight="500"
                          color="#292929"
                          fontFamily="'Nunito Sans', sans-serif"
                        >
                          Insurance Provider
                        </FormLabel>
                        <Input
                          type="text"
                          placeholder="Enter information"
                          size="lg"
                          borderRadius="10px"
                          borderColor="#D9D9D9"
                          height="44px"
                          _placeholder={{ color: "#D9D9D9" }}
                          _focus={{ borderColor: "black" }}
                        />
                      </FormControl>

                      <FormControl mb={4}>
                        <FormLabel
                          fontSize="20px"
                          fontWeight="500"
                          color="#292929"
                          fontFamily="'Nunito Sans', sans-serif"
                        >
                          Policy Number
                        </FormLabel>
                        <Input
                          type="text"
                          placeholder="Enter information"
                          size="lg"
                          borderRadius="10px"
                          borderColor="#D9D9D9"
                          height="44px"
                          _placeholder={{ color: "#D9D9D9" }}
                          _focus={{ borderColor: "black" }}
                        />
                      </FormControl>

                      <FormControl mb={4}>
                        <FormLabel
                          fontSize="20px"
                          fontWeight="500"
                          color="#292929"
                          fontFamily="'Nunito Sans', sans-serif"
                        >
                          Group Number
                        </FormLabel>
                        <Input
                          type="text"
                          placeholder="Enter information"
                          size="lg"
                          borderRadius="10px"
                          borderColor="#D9D9D9"
                          height="44px"
                          _placeholder={{ color: "#D9D9D9" }}
                          _focus={{ borderColor: "black" }}
                        />
                      </FormControl>

                      <FormControl mb={4}>
                        <FormLabel
                          fontSize="20px"
                          fontWeight="500"
                          color="#292929"
                          fontFamily="'Nunito Sans', sans-serif"
                        >
                          Insurance Contact
                        </FormLabel>
                        <Input
                          type="text"
                          placeholder="Enter information"
                          size="lg"
                          borderRadius="10px"
                          borderColor="#D9D9D9"
                          height="44px"
                          _placeholder={{ color: "#D9D9D9" }}
                          _focus={{ borderColor: "black" }}
                        />
                      </FormControl>
                    </div>
                    {/* Submit Button */}
                    <Button
                      border={"none"}
                      cursor={"pointer"}
                      colorScheme="black"
                      bg="#292929"
                      color="white"
                      size="lg"
                      w="17%"
                      borderRadius="122px"
                      fontWeight="300"
                    >
                      Submit
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </ChakraProvider>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PatientRegistration;
