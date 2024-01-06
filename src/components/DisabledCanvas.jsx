import React, { useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import { useSelector, useDispatch} from "react-redux";
import WarningModal from "./WarningModal";
import { setGate_M_Data, setPriceTotal } from "../redux/slices/selectedMaterials";



const customStyles = {
  content: {
    width: "80%", // 80% of the viewport width
    maxWidth: "500px", // Maximum width for larger screens
    height: "60vh", // 60% of the viewport height
    maxHeight: "400px", // Maximum height for taller screens
    margin: "auto",
    padding: "0px",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    backgroundColor: "white",
    // padding: '20px',
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

Modal.setAppElement("#root");

const DisabledCanvas = () => {
  const canvasRef = useRef(null);

  const [lineProperties, setLineProperties] = useState({});
  const renderlines = useSelector((state) => state.selectedDesign.Design);
  const [enteredWidth, setEnteredWidth] = useState("");
  let selectedLineIndex = null;
  const [showModal, setShowModal] = useState(false);
  const [firstModalVal, setFirstModalVal] = useState("");
  const [secondModalVal, setSecondModalVal] = useState("");
  const [selectedInfo, setSelectedInfo] = useState(null);
  const dispatch = useDispatch()

  const drawLine = (ctx, x1, y1, x2, y2, lineIndex) => {
    const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

    if (Math.ceil(length) > 0) {
      const angle = Math.atan2(y2 - y1, x2 - x1);

      // Set line color based on selection or properties
      const lineColor =
        selectedLineIndex === lineIndex
          ? "#009a3d"
          : lineProperties[lineIndex]?.color || "#91d2aa";

      // Draw the line
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = lineColor;
      ctx.stroke();
      ctx.closePath();

      // Draw circle at the start and end points
      ctx.beginPath();
      ctx.arc(x1, y1, 7, 0, 3 * Math.PI);
      ctx.fillStyle = "";
      ctx.closePath();

      ctx.beginPath();
      ctx.arc(x2, y2, 7, 0, 3 * Math.PI);
      ctx.fillStyle = "";
      ctx.closePath();

      // Calculate midpoint of the line
      const midX = (x1 + x2) / 2;
      const midY = (y1 + y2) / 2;

      let circleWidth = lineProperties[lineIndex]?.width || 20;
      let circleHeight = 20; // Initial height

      // Draw a rotated ellipse at the midpoint with the specified width and height
      ctx.translate(midX, midY);
      ctx.rotate(angle);
      ctx.beginPath();
      ctx.ellipse(0, 0, circleWidth / 2, circleHeight / 2, 0, 0, 2 * Math.PI);

      if (lineProperties[lineIndex]?.width !== undefined) {
        // User entered a width, update the height to 14
        ctx.fillStyle = "#4792d2";
        circleHeight = 14;

        // console.log("After Enter Width Circle Height: ", circleHeight);
      } else {
        ctx.fillStyle = "#cee0d5";
      }

      ctx.fill();
      ctx.closePath();
      ctx.rotate(-angle);
      ctx.translate(-midX, -midY);

      if (lineProperties[lineIndex]?.width !== undefined) {
        ctx.fillStyle = "#000000";
        ctx.font = "bold 18px Arial";
        const textWidth = ctx.measureText(
          `Width: ${lineProperties[lineIndex]?.width}`
        ).width;
        ctx.fillText(
          `Width: ${lineProperties[lineIndex]?.width}`,
          midX - textWidth / 2 - -20, // Subtract 10 pixels
          midY - 20
        );
      }
    }
  };

  // Place Button Click

  const handlePlaceButtonClick = () => {
    if (!+enteredWidth) {
      setShowModal(true);
      setFirstModalVal("Selection Warning");
      setSecondModalVal("Plz Enter The Width Of the Selected Fence Side");
    } else {
      setShowModal(true);
      setFirstModalVal("Width Added");
      setSecondModalVal("Select a Particular Fence to Display a Width");
      // console.log("enteredWidth : ", +enteredWidth);

      dispatch(setGate_M_Data({
        price: 100 * enteredWidth,
        width:enteredWidth
      }))

      dispatch(setPriceTotal())

    }
  };

  // Reset When Remove Selection
  const resetLineProperties = (lineIndex) => {
    setLineProperties((prevProperties) => {
      const newProperties = { ...prevProperties };
      delete newProperties[lineIndex];
      return newProperties;
    });
  };

  const clearAndRedrawCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Redraw lines with updated widths and colors
    renderlines.forEach((line, index) => {
      drawLine(context, line.startX, line.startY, line.endX, line.endY, index);
    });
  };

  const handleCanvasClick = (event) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Check if the click is within a certain range of a line (adjust the range as needed)
    selectedLineIndex = renderlines.findIndex((line) => {
      const distanceToLine =
        Math.abs(
          (line.startY - line.endY) * mouseX -
            (line.startX - line.endX) * mouseY +
            line.startX * line.endY -
            line.startY * line.endX
        ) /
        Math.sqrt(
          (line.startY - line.endY) ** 2 + (line.startX - line.endX) ** 2
        );

      return distanceToLine < 10; // Adjust the range as needed
    });

    if (selectedLineIndex !== -1) {
      const clickedLine = renderlines[selectedLineIndex];
      const length = Math.sqrt(
        (clickedLine.endX - clickedLine.startX) ** 2 +
          (clickedLine.endY - clickedLine.startY) ** 2
      );

      // console.log(`Length of line ${selectedLineIndex}: ${length}`);
      let enterWidth = enteredWidth;

      // Check if entered width is greater than the length of the line
      if (!enterWidth) {
        setShowModal(true);
        setFirstModalVal("Selection Warning");
        setSecondModalVal(
          "Plz Enter the Width to Select the Fence Side"
        );
      } else if(enterWidth < 20){
        setShowModal(true);
        setFirstModalVal("Selection Warning");
        setSecondModalVal(
          "Atleast Add Width '20'"
        );
      } else if (enterWidth > length) {
        setShowModal(true);
        setFirstModalVal("Selection Warning");
        setSecondModalVal(
          "Entered width is greater than the length of the line. This is not possible."
        );
      } else {
        setLineProperties((prevProperties) => ({
          ...prevProperties,
          [selectedLineIndex]: {
            width: enterWidth,
            color: "green",
          },
        }));
      }
    } else {
      // No line clicked, do nothing
    }


    if(enteredWidth){

      dispatch(setGate_M_Data({
        price: 100 * enteredWidth,
        width:enteredWidth
      }))

      dispatch(setPriceTotal())

    }


    // Clear and redraw the canvas after processing the click
    clearAndRedrawCanvas();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const resizeCanvas = () => {
      if (window.innerHeight <= 1100 && window.innerWidth <= 800) {
        canvas.width = window.innerWidth - 40;
        canvas.height = window.innerHeight - 15;
      } else {
        canvas.width = window.innerWidth - 400;
        canvas.height = window.innerHeight - 150;
      }

      // Clear and redraw lines after resizing
      clearAndRedrawCanvas();

      // Redraw lines after resizing
      renderlines.forEach((line, index) => {
        drawLine(
          context,
          line.startX,
          line.startY,
          line.endX,
          line.endY,
          index
        );
      });
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    context.lineWidth = 12.5;
    context.strokeStyle = "#91d2aa";

    clearAndRedrawCanvas(); // Initial drawing

    renderlines.forEach((line, index) => {
      drawLine(context, line.startX, line.startY, line.endX, line.endY, index);
    });

    canvas.addEventListener("click", handleCanvasClick);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("click", handleCanvasClick);
    };
  }, [renderlines, lineProperties, enteredWidth]);

  const openModal = () => {
    const gateType = localStorage.getItem("gate");

    let selectedInfo = {};

    if (gateType === "remove") {
      selectedInfo = {
        title: "Remove Gate",
        includes: [],
        description:
          "You have selected to remove the gate. Please proceed accordingly.",
        imageSrc:
          "https://designit.menards.com/media/Fence/selection/remove-selection.jpg",
      };

      // Reset properties for the selected line when removing
      if (selectedLineIndex !== undefined) {
        resetLineProperties(selectedLineIndex);
      }
    } else if (gateType === "openings") {
      selectedInfo = {
        title: "ADD A MATCHING GATE",
        includes: [],
        description:
          "You have selected to remove the gate. Please proceed accordingly.",
        imageSrc:
          "https://designit.menards.com/media/Fence/selection/opening.jpg",
      };
    } else {
      selectedInfo = {
        title: "ADD A MATCHING GATE",
        includes: ["Posts", "Hardware", "Hinges", "Latch"],
        description:
          "Design includes materials recommended for installation. Please refer to the installation instructions for specifications and use.",
        imageSrc:
          "https://designit.menards.com/media/Fence/selection/gates/wood-picket/1731257-gate.jpg",
      };
    }

    setSelectedInfo(selectedInfo);
  };

  const closeModal = () => {
    setSelectedInfo(null);
    setShowModal(false);
  };

  return (
    <>
      <div className="self-start ms-0">
        <button
          className="px-4 py-1 mb-1 my-1 bg-green-500 rounded-b-none rounded-md text-white"
          onClick={closeModal}
        >
          Design
        </button>
        <button
          className="px-4 py-1 mx-2 bg-green-500 rounded-b-none rounded-md text-white"
          onClick={openModal}
        >
          Information
        </button>
      </div>

      <div>
        <div className="w-full h-full flex items-center justify-center">
          <div className="">
            <canvas
              style={{
                backgroundImage:
                  "url(https://www.xmple.com/wallpaper/graph-paper-grey-white-grid-1920x1080-c2-ffffff-d3d3d3-l2-1-11-a-60-f-20.svg)",
              }}
              className={`border-black border bg-center bg-cover`}
              ref={canvasRef}
            />
          </div>
        </div>
      </div>

      <div
        className="w-full h-full mt-5"
        style={{ width: "360px", marginLeft: "-24rem", marginTop: "-5rem" }}
      >
        <div className="w-full h-12 bg-gray-400 flex items-center justify-between px-5">
          <h1>Build A Gate (width 3'0" ~ 10'0")"</h1>
          <h1 className="text-green-800 text-2xl">
            <i className="fa-solid fa-angle-down"></i>
          </h1>
        </div>
        <div className="flex items-center gap-2 p-2">
          <p>Width:</p>
          <input
            type="number"
            value={enteredWidth}
            onChange={(e) => setEnteredWidth(e.target.value)}
            className="w-20 border border-black rounded-full"
          />{" "}
          <p>ft</p>
          <input
            type="number"
            onChange={(e) => {
              e.preventDefault();
              setEnteredWidth(e.target.value);
            }}
            className="w-20 border border-black rounded-full"
          />{" "}
          <p>inchs</p>
          <button
            onClick={handlePlaceButtonClick}
            className="p-2 rounded-full bg-green-500 text-white"
          >
            Place
          </button>
        </div>
      </div>

      {!showModal && selectedInfo && (
        <div
          className="modal flex justify-left items-center"
          style={{ width: "100%" }}
        >
          <div className="w-full max-w-md p-4 bg-white rounded-md">
            <h1 className="font-bold text-2xl">{selectedInfo.title}</h1>
            <hr />
            <p className="text-2xl my-2">Fence Design Includes</p>
            <ul>
              {selectedInfo.includes.map((item, i) => (
                <li key={i} className="font-bold">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mb-2 my-1">{selectedInfo.description}</p>
            <img
              src={selectedInfo.imageSrc}
              alt="Random Image"
              className="h-100 w-full"
            />
            <button
              className="px-4 py-2  my-1 bg-green-500 rounded-b-none rounded-md text-white"
              onClick={closeModal}
            >
              Hide Information
            </button>
          </div>
        </div>
      )}

      <WarningModal
        isOpen={showModal}
        setIsOpen={setShowModal}
        heading={firstModalVal}
        content={secondModalVal}
      />
    </>
  );
};

export default DisabledCanvas;
