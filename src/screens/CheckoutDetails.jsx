import React, { useState } from "react";
import Navbar from "../components/Navbar";
import WarningModal from "../components/WarningModal";
import { useDispatch } from "react-redux";
import { setBillingDetails } from "../redux/slices/BillingDetails";
import { useNavigate } from "react-router-dom";

const CheckoutDetails = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [BuiessnessName, setBuiessnessName] = useState("");
  const [Address_1, setAddress_1] = useState("");
  const [Address_2, setAddress_2] = useState("");
  const [Zip_code, setZip_code] = useState("");
  const [city, setcity] = useState("");
  const [Country, setCounty] = useState("");
  const [State, setState] = useState("");
  const [Phone, setPhone] = useState("");
  const [isOpen, setIsOpen] = useState("");
  const [ModalContent, setModalContent] = useState("");
  const [ModalHeading, setModalHeading] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validatePhone = (phoneNumber) => {
    // Updated US phone number format: (XXX) XXX-XXXX or XXX-XXX-XXXX or XXXXXXXXXX or XXX-XXXXXXX
    const phoneRegex = /^(\(\d{3}\)\s?|\d{3}-?\s?)?\d{3}-?\d{4}$/;
    return phoneRegex.test(phoneNumber);
  };

  const validateZipCode = (zipCode) => {
    const zipCodeRegex = /^\d{5}$/;
    return zipCodeRegex.test(zipCode);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(
      firstName,
      lastName,
      BuiessnessName,
      Address_1,
      Address_2,
      Country,
      Zip_code,
      city,
      State,
      Phone
    );

    if (
      firstName !== "" &&
      lastName !== "" &&
      BuiessnessName !== "" &&
      Address_1 !== "" &&
      Address_2 !== "" &&
      validateZipCode(Zip_code) &&
      city !== "" &&
      State !== "" &&
      validatePhone(Phone)
    ) {
      dispatch(
        setBillingDetails({
          name: firstName + lastName,
          Buiessness: BuiessnessName,
          Address: Address_1 + Address_2,
          PostalCode: Zip_code,
          City: city,
          country: Country,
          state: State,
          Phone: Phone,
        })
      );

      navigate("/orderconfirmation");
    } else {
      setIsOpen(true);
      setModalContent("Warning");
      if (!validatePhone(Phone)) {
        setModalHeading("Please enter a valid phone number");
      } else if (!validateZipCode(Zip_code)) {
        setModalHeading("Please enter a valid zip code");
      } else {
        setModalHeading("Please Fill All the Input Fields are Required");
      }
    }
  };

  return (
    <div className="">
      <Navbar />
      <div className="w-full items-center flex flex-col justify-center  pt-20">
        <div className="flex">
          <form action="">
            <div className="w-full pt-2 px-16 flex flex-col gap-5">
              <div className="w-full flex lg:flex-row flex-col gap-5">
                <div className="w-full">
                  <h1 className="text-lg text-gray-900">First Name</h1>
                  <input
                    onChange={(e) => {
                      e.preventDefault();
                      setFirstName(e.target.value);
                    }}
                    type="text"
                    placeholder="Enter First Name"
                    className="rounded-md  border-gray-900 text-center shadow-md border h-10 w-full"
                  />
                </div>
                <div className="w-full">
                  <h1 className="text-lg text-gray-900">Last Name</h1>
                  <input
                    onChange={(e) => {
                      e.preventDefault();
                      setLastName(e.target.value);
                    }}
                    type="text"
                    placeholder="Enter Last Name"
                    className="rounded-md text-center border-gray-900 shadow-md border h-10 w-full"
                  />
                </div>
              </div>

              <div className="w-full flex lg:flex-row flex-col gap-5">
                <div className="w-full">
                  <h1 className="text-lg text-gray-900">Buiessness Name</h1>
                  <input
                    onChange={(e) => {
                      e.preventDefault();
                      setBuiessnessName(e.target.value);
                    }}
                    type="text"
                    placeholder="Enter Buiessness Name"
                    className="rounded-md border-gray-900 text-center shadow-md border h-10 w-full"
                  />
                </div>
              </div>

              <div className="w-full flex lg:flex-row flex-col gap-5">
                <div className="w-full">
                  <h1 className="text-lg text-gray-900">Address Line 1</h1>
                  <input
                    onChange={(e) => {
                      e.preventDefault();
                      setAddress_1(e.target.value);
                    }}
                    type="text"
                    placeholder="Enter Address Line 1"
                    className="rounded-md border-gray-900 text-center shadow-md border h-10 w-full"
                  />
                </div>
                <div className="w-full">
                  <h1 className="text-lg text-gray-900">Address Line 2</h1>
                  <input
                    onChange={(e) => {
                      e.preventDefault();
                      setAddress_2(e.target.value);
                    }}
                    type="text"
                    placeholder="Enter Address Line 2"
                    className="rounded-md border-gray-900 text-center shadow-md border h-10 w-full"
                  />
                </div>
              </div>

              <div className="w-full flex lg:flex-row flex-col gap-5">
                <div className="w-full">
                  <h1 className="text-lg text-gray-900">Zip/postal Code</h1>
                  <input
                    onChange={(e) => {
                      e.preventDefault();
                      setZip_code(e.target.value);
                    }}
                    type="number"
                    placeholder="Enter Zip/postal Code"
                    className="rounded-md border-gray-900 text-center shadow-md border h-10 w-full"
                  />
                </div>
                <div className="w-full">
                  <h1 className="text-lg text-gray-900">City</h1>
                  <input
                    onChange={(e) => {
                      e.preventDefault();
                      setcity(e.target.value);
                    }}
                    type="text"
                    placeholder="Enter City Name"
                    className="rounded-md border-gray-900 text-center shadow-md border h-10 w-full"
                  />
                </div>
                <div className="w-full">
                  <h1 className="text-lg text-gray-900">Country</h1>
                  <input
                    onChange={(e) => {
                      e.preventDefault();
                      setCounty(e.target.value);
                    }}
                    type="text"
                    placeholder="Enter Country Name"
                    className="rounded-md border-gray-900 text-center shadow-md border h-10 w-full"
                  />
                </div>
              </div>

              <div className="w-full flex lg:flex-row flex-col gap-5">
                <div className="w-full">
                  <h1 className="text-lg text-gray-900">State</h1>
                  <input
                    onChange={(e) => {
                      e.preventDefault();
                      setState(e.target.value);
                    }}
                    type="text"
                    placeholder="Enter State"
                    className="rounded-md border-gray-900 text-center shadow-md border h-10 w-full"
                  />
                </div>

                <div className="w-full">
                  <h1 className="text-lg text-gray-900">Cell Phone Number</h1>
                  <input
                    onChange={(e) => {
                      e.preventDefault();
                      setPhone(e.target.value);
                    }}
                    autoComplete="off"
                    type="number"
                    placeholder="Cell Phone Number"
                    className="rounded-md border-gray-900 text-center shadow-md border h-10 w-full"
                  />
                </div>
              </div>

              <div className="w-full flex items-center justify-center">
                <button
                  onClick={onSubmitHandler}
                  className="lg:w-6/12 w-full rounded-full h-auto p-2 shadow-md border bg-blue-700 text-white"
                >
                  continue
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="w-8/12 p-5 text-center self-center">
          <p>
            Please note: We do not currently ship to P.O. boxes, nor addresses
            outside of the U.S. and Canada. To complete an order on Menards.com,
            you must specify a valid street address as the shipping destination.
          </p>
        </div>
      </div>
      <WarningModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        heading={ModalHeading}
        content={ModalContent}
      />
    </div>
  );
};

export default CheckoutDetails;
