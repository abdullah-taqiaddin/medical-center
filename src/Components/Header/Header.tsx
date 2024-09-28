import { useState, useEffect, useRef } from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  useDisclosure,
  Button,
  ChakraProvider,
  DrawerFooter,
} from "@chakra-ui/react";
import Icn from "../../Assets/icons/Logo.png";
import "./Header.css";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Chakra UI Drawer control
  const [isDropdownOpen, setDropdownOpen] = useState(false); // Dropdown state for services in the main navigation
  const dropdownRef = useRef<HTMLDivElement>(null); // Ref for dropdown to detect outside clicks

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Cleanup
    };
  }, [isDropdownOpen]);

  return (
    <>
      <header className="header">
        <ChakraProvider resetCSS={false}>
          <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />

            <DrawerContent style={{ background: "white", zIndex: 10000 }}>
              {/* <DrawerHeader>
              <div className="logo">
                <img src={Icn} alt="Logo" style={{ height: "63px" }} />
              </div>
            </DrawerHeader> */}
              <DrawerBody>
                <nav>
                  <ul className="drawer-nav" style={{ paddingLeft: "unset" }}>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li style={{ cursor: "pointer" }}>Services</li>
                    <li>
                      <Link to="/PatientRegistration">New Patient Form</Link>
                    </li>
                    <li>
                      <Link to="/contanctus">Contact Us</Link>
                    </li>
                  </ul>
                </nav>
              </DrawerBody>
              <DrawerFooter>
                <Button
                  onClick={() => onClose()}
                  style={{
                    background: "#8bccf2",
                    width: "10% !important",
                    border: "none",
                    margin: "1rem",
                  }}
                >
                  Close
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </ChakraProvider>
        <div className="logo">
          <Link to="/" style={{ color: "#333", textDecoration: "none" }}>
            <img src={Icn} alt="logo" />
          </Link>
        </div>

        {/* Nav Links */}
        <nav className="nav-links">
          <ul>
            <li>
              <Link to="/" style={{ color: "#333", textDecoration: "none" }}>
                Home
              </Link>
            </li>
            <li
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
              style={{ position: "relative" }}
            >
              <div>Services</div>
            </li>
            <li>
              <Link to="/PatientRegistration">New Patient Form</Link>
            </li>
            <li>
              <Link to="/contanctus">Contact Us</Link>
            </li>
            <Link to={"/BookAppointment"}>
              <Button
                style={{
                  cursor: "pointer",
                  padding: "1rem",
                  border: "unset",
                  background: "rgba(41, 41, 41, 1)",
                  borderRadius: "50px",
                  color: "white",
                  width: "184px",
                  fontSize: "16px",
                }}
              >
                Book Appointment
              </Button>
            </Link>
          </ul>
        </nav>

        {/* Hamburger icon for small screens */}
        <div className="hamburger" onClick={onOpen}>
          <HamburgerIcon />
        </div>
      </header>
    </>
  );
};

export default Header;
