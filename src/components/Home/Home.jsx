import { useState } from "react";

const Home = () => {
  // console.log("home ///////////////////////");
  const [codeImage, setCodeImage] = useState(false);
  const [xValue, setXvalue] = useState(0);
  const [yValue, setYvalue] = useState(0);

  const handleCodeImage = () => {
    // handleCodeImage
    setCodeImage(!codeImage);
  };
  // const codeTextMove = (e) => {
  //   let x = e.clientX;
  //   let y = e.clientY;
  //   let xCode = 0;
  //   xCode = x / 100;
  //   setXvalue(xCode);
  //   let yCode = 0;
  //   yCode = y % 70;
  //   setYvalue(yCode);
  // };
  console.log(xValue);
  return (
    <div className="homebg -mt-28 pt-28  py-8      rounded min-h-screen  ">
      {/*  class code image */}
      <div className="homebg2 min-h-screen flex justify-center items-center">
        <div
          // onMouseMove={codeTextMove}
          onMouseOver={handleCodeImage}
          className="  flex justify-center items-center "
          style={{
            transform: ` rotateY(${yValue}deg)`,
            // transformStyle: "preserve-3d",
          }}
        >
          {codeImage ? (
            <figure className="flex justify-center container mx-auto">
              <img
                src="https://i.ibb.co/XW3r1bT/code-text-err.gif"
                className=" w-[90%]"
                alt=""
              />
            </figure>
          ) : (
            <figure className="flex justify-center container mx-auto">
              <img
                src="https://i.ibb.co/93t3vRQ/code-text.png"
                className=" w-[90%]"
                alt=""
              />
            </figure>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
