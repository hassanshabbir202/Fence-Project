import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import WarningModal from "./WarningModal";
import { create_Design, updateDesign } from "../API_Calls/API_Calls_";
import MaterialsMenu from "./MaterialsMenu";
import EstimatePriceModal from "./EstimatePriceModal";
import { setDesignId } from "../redux/slices/selectedDesign";
import {
  setIsDraw,
  setIsMaterials,
  setIsStore,
  setIsSummary,
} from "../redux/slices/RoutesChecking";
import { setOption_M_Data_t1 } from "../redux/slices/selectedMaterials";

const token = localStorage.getItem("token");
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // ----------------Url--Defining------------------------------

  const currentUrl = window.location.pathname;

  // -------------------stack navigation bar handling----------------------------

  const [Openmenu, setOpenMenu] = useState("hidden");
  const [isCanvas, setisCanvas] = useState(false);
  const [showBottomNav, setshowBottomNav] = useState(false);
  const [showBottomNav_2, setshowBottomNav_2] = useState(false);
  const [showBottomNav_3, setshowBottomNav_3] = useState(false);

  // .................Redux states for Canvas and Map.............................................

  const mapDesign = useSelector((state) => state.selectedDesign.MapDesign);
  const FinalDesign = useSelector((state) => state.selectedDesign.Design);
  const Drawlength = useSelector((state) => state.selectedDesign.Design_length);
  const DB_Design = useSelector((state) => state.selectedDesign.DB_Design);
  const DB_Design_Id = useSelector((state) => state.selectedDesign.DesignId);

  // -------------------Modal handling----------------------------

  const [showModal, setShowModal] = useState(false);
  const [firstModalVal, setFirstModalVal] = useState("");
  const [secondModalVal, setSecondModalVal] = useState("");

  // .................Redux states for material Data.............................................

  const Types_M = useSelector((state) => state.selectedMaterials.Type_M);
  const Fence_M = useSelector((state) => state.selectedMaterials.Fence_M);
  const Gate_M = useSelector((state) => state.selectedMaterials.Gate_M);
  const Option_M_t1 = useSelector(
    (state) => state.selectedMaterials.Option_M_t1
  );
  const Option_M_t2 = useSelector(
    (state) => state.selectedMaterials.option_M_t2
  );
  const storeData = useSelector((state) => state.selectedStoreData.storeName);

  // -------------------------routes values ------------------------------------------------------

  const isStore = useSelector((state) => state.RoutesChecking.isStores);
  const isDraw = useSelector((state) => state.RoutesChecking.isDraw);
  const isMaterials = useSelector((state) => state.RoutesChecking.isMaterials);
  const isSummary = useSelector((state) => state.RoutesChecking.isSummary);
  const isPurchase = useSelector((state) => state.RoutesChecking.isPurchase);
  const isLoggedIn = Boolean(localStorage.getItem("loggedIn"))
  const [isLogout,setisLogout] = useState(false)
  const [nav_,setNav_] = useState("")

  const displayNavbarHandling = () => {
    if (
      currentUrl === `/stores` ||
      currentUrl === `/drawoptions` ||
      currentUrl === `/savedesign` ||
      currentUrl === `/gotoCart`
    ) {
      setshowBottomNav(false);
      setshowBottomNav_2(false);
      setshowBottomNav_3(false);
    }

    if (currentUrl === `/map`) {
      setshowBottomNav(false);
      setshowBottomNav_2(true);
      setshowBottomNav_3(true);
      setisCanvas(false);
    }
    if (currentUrl === `/canvas`) {
      setshowBottomNav(false);
      setshowBottomNav_2(true);
      setshowBottomNav_3(true);
      setisCanvas(true);
    }
    if (
      currentUrl === `/materials/type` ||
      currentUrl === `/materials/fence` ||
      currentUrl === `/materials/gate` ||
      currentUrl === `/materials/option`
    ) {
      setshowBottomNav(true);
      setshowBottomNav_2(true);
      setshowBottomNav_3(false);
    }
    if (currentUrl === `/summary`) {
      setshowBottomNav(false);
      setshowBottomNav_2(true);
      setshowBottomNav_3(false);
    }
  };

  const setDesignToDB = (Data) => {
    try {
      create_Design(Data)
        .then((resp) => {
          // console.log("response from setting Data in DB :", resp.data);

          if (resp.data === "Data added") {
            dispatch(setIsMaterials(true));
            navigate("/materials/type");
          }
        })
        .catch((err) => {
          // console.log("Error from setting Data in DB :", err);
        });
    } catch (err) {
      // console.log("error from setting data to db");
    }
  };

  const updateDesignToDB = (Data, id) => {
    try {
      updateDesign(id, Data)
        .then((resp) => {
          // console.log("response from updating Data in DB :", resp);

          dispatch(setIsMaterials(true));
          navigate("/materials/type");
        })
        .catch((err) => {
          // console.log("Error from updating Data in DB :", err);
        });
    } catch (err) {
      throw new err();
    }
  };

  const generateRandomId = () => {
    const length = 12;
    const characters = "0123456789";
    let randomId = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomId += characters.charAt(randomIndex);
    }

    return randomId;
  };

  const ContinueButtonHandling = () => {
    if (currentUrl === `/map`) {
      if (mapDesign.length > 0) {
        setShowModal(true);
        setFirstModalVal("Are you sure you want to leave without lines drawn?");
        setSecondModalVal("Choose 'Yes' if you still want to leave.");
        navigate("/canvas");
      }
    }
    if (currentUrl === `/canvas`) {
      if (FinalDesign.length > 0) {
        if (Drawlength > 0) {
          if (DB_Design.length > 0) {
            updateDesignToDB(
              {
                lines: FinalDesign,
              },
              DB_Design_Id
            );
          } else {
            const randomId = generateRandomId();
            var currentDate = new Date();
            var formattedDate = currentDate.toLocaleDateString("en-GB");

            dispatch(setDesignId(randomId));

            setDesignToDB({
              randomId: randomId,
              pstTime: formattedDate,
              lines: FinalDesign,
            });

            dispatch(setIsMaterials(true));
          }
        } else {
          setFirstModalVal("Design Warning");
          setSecondModalVal(
            "You must enter the length of all fence legs before continuing."
          );
          setShowModal(true);
        }
      }
    }
    if (currentUrl === `/materials/type`) {
      if (Types_M.index == 0 || Types_M.index > 0) {
        navigate("/materials/fence");
      } else if(!Types_M.index) {
        setShowModal(true);
        // navigate("/materials/fence");
        setFirstModalVal("Material Selection Warning");
        setSecondModalVal("Please Select the Material First !");
      }
    }
    if (currentUrl === `/materials/fence`) {
      if (Fence_M.index == 0 || Fence_M.index > 0) {
        navigate("/materials/gate");
      } else if(!Fence_M.index) {
        setShowModal(true);
        // navigate("/materials/gate");
        setFirstModalVal("Material Selection Warning");
        setSecondModalVal("Please Select the Fence First !");
      }
    }
    if (currentUrl === `/materials/gate`) {
      navigate("/materials/option");
    }
    if (currentUrl === `/materials/option`) {
      if (Option_M_t1 && Option_M_t2) {
        navigate("/summary");
      } else {
        setShowModal(true);
        setFirstModalVal("Material Selection Warning");
        setSecondModalVal("Please Select the Material First !");
      }
    }
    if (currentUrl === `/summary`) {
      navigate("/gotoCart");
    }
  };

  const navigationRoutesChecking = (value) => {
    if (currentUrl === `/stores`) {
      if (storeData === "") {
        setShowModal(true);
        setFirstModalVal("Warning");
        setSecondModalVal("select store before continue");
      } else {
        dispatch(setIsDraw(true));
        navigate(value);
      }
    }
    if (currentUrl === `/drawoptions`) {
      if (
        DB_Design.length > 0 ||
        mapDesign.length > 0 ||
        FinalDesign.length > 0
      ) {
        setShowModal(true);
        setFirstModalVal("Warning");
        setSecondModalVal("Draw Design before continue");
      } else {
        dispatch(setIsStore(true));
        navigate(value);
      }
    }
    if (currentUrl === `/materials/type`) {
      if (Types_M.length > 1) {
        setShowModal(true);
        setFirstModalVal("Warning");
        setSecondModalVal("select Materials before continue");
      } else {
        dispatch(setIsSummary(true));
        navigate(value);
      }
    }
    if (currentUrl === `/gotoCart`) {
      if (Types_M.length > 1) {
        setShowModal(true);
        setFirstModalVal("Warning");
        setSecondModalVal("select Materials before continue");
      } else {
        dispatch(setIsSummary(true));
        navigate(value);
      }
    }
  };

  useEffect(() => {
    displayNavbarHandling();
  }, []);

  return (
    <div>
      {/* Desktop screen */}

      <div className="hidden h-12 lg:flex  bg-green-700 text-white fixed w-full z-50">
        <div className="flex  w-4/12 h-full items-center pl-10">
          <div className="border-r border-white pr-2 ">
            <h1 className="text-sm">
              Design and Buy<sup>TM</sup> Fence{" "}
            </h1>
          </div>
          <img src="" alt="" />
        </div>

        <ul className="flex  w-full gap-5 justify-center h-full items-center ">
          <Link
            to={"/stores"}
            className="hover:bg-white hover:text-green-700 h-full flex items-center p-2 cursor-pointer"
          >
            Select Store
          </Link>

          <Link
            className="hover:bg-white hover:text-green-700 h-full flex items-center p-2 cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              if (isDraw) {
                navigate("/drawoptions");
              } else {
                setShowModal(true);
                setFirstModalVal("Warning");
                setSecondModalVal(" Select previous before continue !");
              }
            }}
          >
            Design
          </Link>

          <Link
            className="hover:bg-white hover:text-green-700 h-full flex items-center p-2 cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              if (isMaterials) {
                navigate("/materials/type");
                dispatch(setIsSummary(true));
              } else {
                setShowModal(true);
                setFirstModalVal("Warning");
                setSecondModalVal(" Select previous before continue !");
              }
            }}
          >
            Materials
          </Link>

          <Link
            className="hover:bg-white hover:text-green-700 h-full flex items-center p-2 cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              if (isSummary) {
                navigate("/summary");
                dispatch(setIsSummary(true));
              } else {
                setShowModal(true);
                setFirstModalVal("Warning");
                setSecondModalVal("Draw previous Routes First !");
              }
            }}
          >
            summary
          </Link>

          <Link
            className="hover:bg-white hover:text-green-700 h-full flex items-center p-2 cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              if (isPurchase) {
                navigate("/gotoCart")
              } else {
                setShowModal(true);
                setFirstModalVal("Warning");
                setSecondModalVal("Draw previous Routes First !");
              }
            }}
          >
            Purchase
          </Link>
        </ul>

        <ul className="flex  w-full gap-10 justify-end pr-20 h-full items-center p-2">
          <li className="flex gap-2 items-center cursor-pointer">
            <h1>
              <i className="fa-solid fa-sd-card "></i>
            </h1>{" "}
            save
          </li>
          <li className="flex gap-2 items-center cursor-pointer">
            <h1>
              <i className="fa-solid fa-sd-card "></i>
            </h1>{" "}
            save as
          </li>
          <Link
            onClick={(e)=>{
              e.preventDefault();
              
              if(isLoggedIn){
                setShowModal(true);
                setFirstModalVal("Warning");
                setSecondModalVal("Do you Want to Logout !");
                setisLogout(true);
                setNav_("/")

              }else
              [
                navigate("/login")
              ]

            }}
            className="flex gap-2 items-center cursor-pointer"
          >
            <h1>
              <i className="fa-solid fa-user"></i>
            </h1>{" "}
            {isLoggedIn ? "Logout" : "Login"}
          </Link>
          <Link
            onClick={(e) => {
              e.preventDefault();
              navigate("/cart");
            }}
            className="flex gap-2 items-center cursor-pointer"
          >
            <div>
              <i className="fa-solid fa-cart-plus"></i>
            </div>
            cart
          </Link>
        </ul>
      </div>

      {/* Mobile screen */}

      <div>
        <div className="lg:hidden h-auto p-4 flex bg-green-700 text-white fixed w-full">
          <div className="flex  w-full h-full items-center pl-2">
            <div className="border-r border-white pr-2 ">
              <h3 className="text-sm">
                Design and Buy<sup>TM</sup> Fence{" "}
              </h3>
            </div>
            <img src="" alt="" />
          </div>

          <div className="w-full h-full flex items-center justify-end pr-5 gap-7">
            <Link to={"/login"}>
              <i className="fa-solid fa-user"></i>
            </Link>
            <Link to={"/Cart"}>
              <i className="fa-solid fa-cart-plus"></i>
            </Link>
            <button
              onClick={(e) => {
                e.preventDefault();
                Openmenu == "hidden"
                  ? setOpenMenu("visible")
                  : setOpenMenu("hidden");
              }}
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
        <ul className={`w-full fixed mt-12 ${Openmenu} z-50`}>
          <Link
            to={"/stores"}
            className="w-full flex items-center justify-center border p-3 bg-green-700 hover:bg-white text-white hover:text-green-700"
          >
            Select Store
          </Link>
          <Link
            onClick={(e) => {
              e.preventDefault();
              if (isDraw) {
                navigate("/drawoptions");
              } else {
                setShowModal(true);
                setFirstModalVal("Warning");
                setSecondModalVal(" Select previous before continue !");
              }
            }}
            className="w-full flex items-center justify-center border p-3 bg-green-700 hover:bg-white text-white hover:text-green-700"
          >
            Design
          </Link>
          <Link
            onClick={(e) => {
              e.preventDefault();
              if (isMaterials) {
                navigate("/materials/type");
                dispatch(setIsSummary(true));
              } else {
                setShowModal(true);
                setFirstModalVal("Warning");
                setSecondModalVal(" Select previous before continue !");
              }
            }}
            className="w-full flex items-center justify-center border p-3 bg-green-700 hover:bg-white text-white hover:text-green-700"
          >
            Materials
          </Link>
          <Link
            onClick={(e) => {
              e.preventDefault();
              if (isSummary) {
                navigate("/summary");
                dispatch(setIsSummary(true));
              } else {
                setShowModal(true);
                setFirstModalVal("Warning");
                setSecondModalVal("Draw previous Routes First !");
              }
            }}
            className="w-full flex items-center justify-center border p-3 bg-green-700 hover:bg-white text-white hover:text-green-700"
          >
            summary
          </Link>
          <Link
            onClick={(e) => {
              e.preventDefault();
              if (isPurchase) {
                navigationRoutesChecking("/gotoCart");
              } else {
                setShowModal(true);
                setFirstModalVal("Warning");
                setSecondModalVal("Draw previous Routes First !");
              }
            }}
            className="w-full flex items-center justify-center border p-3 bg-green-700 hover:bg-white text-white hover:text-green-700"
          >
            Purchase
          </Link>
          <Link className="w-full flex items-center justify-center border p-3 bg-green-700 hover:bg-white text-white hover:text-green-700">
            <ul className="flex items-center justify-center gap-3 p-3 transition-all transform duration-300">
              <li className="flex gap-2 items-center cursor-pointer">
                <h1>
                  <i className="fa-solid fa-sd-card "></i>
                </h1>{" "}
                save
              </li>
              <li className="flex gap-2 items-center cursor-pointer">
                <h1>
                  <i className="fa-solid fa-sd-card "></i>
                </h1>{" "}
                save as
              </li>
              <li className="flex gap-2 items-center cursor-pointer">
                <i className="fa-solid fa-file-circle-question"></i> FAQ
              </li>
            </ul>
          </Link>
        </ul>
      </div>
      {showBottomNav ? (
        <div
          className={`mt-24 border fixed lg:h-12 h-22 items-center flex-col-reverse lg:flex-row flex justify-between bg-white  w-full p-2'`}
        >
          <div className="w-full h-full mt-4 lg:mt-0">
            <MaterialsMenu />
          </div>
          <div className="w-full h-full">
            <EstimatePriceModal />
          </div>
        </div>
      ) : null}
      {showBottomNav_2 ? (
        <div
          className={`z-40 fixed w-full border bg-slate-100 mt-12  h-12 flex items-center justify-end p-2`}
        >
          <button
            onClick={ContinueButtonHandling}
            className="bg-green-500 text-white p-2 rounded-full mr-5 cursor-pointer "
          >
            Continue
          </button>
        </div>
      ) : null}
      {showBottomNav_3 ? (
        <div
          className={`z-40 bg-white mt-24 border fixed w-full h-12 items-end gap-2 flex text-center justify-evenly lg:hidden md:hidden`}
        >
          <Link
            to={"/canvas"}
            className={`rounded-lg w-full p-1 rounded-b-none ${
              isCanvas ? "bg-green-500 text-white" : "bg-white"
            }`}
          >
            Canavs
          </Link>
          <Link
            to={"/map"}
            className={`rounded-lg w-full p-1 rounded-b-none ${
              !isCanvas ? "bg-green-500 text-white" : "bg-white"
            }`}
          >
            Map
          </Link>
        </div>
      ) : null}
      <WarningModal
        setIsOpen={setShowModal}
        isOpen={showModal}
        heading={firstModalVal}
        content={secondModalVal}
        isLogout={isLogout}
        navigate={nav_}
      />
    </div>
  );
};

export default Navbar;
