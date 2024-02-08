import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import { useForm } from "react-hook-form";
const AddressBox = ({ isClicked, setIsClicked }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleSubmitBtn = (data) => {
    if (data.Address && data.city && data.landmark) {
      alert(`successfully saved ${data.Address}`);
      console.log(data);
      reset();
    } else {
      alert("Data Not entered ");
    }
  };
  const [homeClicked, setHomeClicked] = useState(false);
  const [workClicked, setWorkClicked] = useState(false);
  const [otherClicked, setOtherClicked] = useState(false);
  return (
    <>
      <div
        className={`w-full h-full absolute transition-all ease-in-out duration-700 ${
          isClicked ? "left-0 top-0" : "-left-[115%]"
        } bg-white  top-0  flex justify-start items-center gap-5 shadow-lg p-5`}
      >
        <div className="absolute top-5 left-[30%] text-3xl font-bold text-orange-400">
          Save delivery address
        </div>
        <div className="gmap w-72 h-60 border-2 relative">
          <div className="absolute -top-[30%] -left-[15%]">
            <i
              onClick={() => {
                setIsClicked(!isClicked);
              }}
              className="bx bx-window-close text-3xl cursor-pointer"
            ></i>
          </div>
          {/* <img
            className="w-full h-full overflow-hidden"
            src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*DMEPtaZPmIjdwALQSbMcaA.jpeg"
            alt=""
          /> */}
          <div className="w-full h-full overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.70906459657!2d73.69814984457464!3d18.52487061439116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1707366390417!5m2!1sen!2sin"
              allowFullscreen=""
              loading="lazy"
              reFerrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <form
          className="pt-2 w-96"
          onSubmit={handleSubmit((data) => handleSubmitBtn(data))}
        >
          <div className="w-full py-2 border-[1px] my-2 border-orange-400">
            <input
              {...register("Address")}
              className="w-full outline-none"
              type="text"
              placeholder="Enter your Address"
            />
          </div>
          <div className="w-full  my-2 py-2 border-[1px] border-orange-400">
            <input
              {...register("city")}
              className="w-full outline-none"
              type="text"
              placeholder="Enter your city"
            />
          </div>
          <div className="w-full py-2  my-2 border-[1px] border-orange-400">
            <input
              {...register("landmark")}
              className="w-full outline-none"
              type="text"
              placeholder="Enter Landmark"
            />
          </div>
          <div className="w-full flex  my-2 h-10 border-2 border-orange-400 relative">
            {otherClicked && (
              <input
                {...register("others")}
                type="text"
                className="w-full h-full absolute outline-none border-[1px]"
                placeholder="Dads home ,friends home"
              />
            )}

            <div
              onClick={() => {
                setHomeClicked(!homeClicked);
                setOtherClicked(false);
                setWorkClicked(false);
              }}
              className={`w-1/3 text-center pt-1 h-full hover:bg-orange-400 hover:text-white hover:font-semibold cursor-pointer ${
                homeClicked ? "bg-orange-400" : ""
              }`}
            >
              Home
            </div>

            <div
              onClick={() => {
                setHomeClicked(false);
                setOtherClicked(false);
                setWorkClicked(!workClicked);
              }}
              className={`w-1/3 text-center pt-1 border-l h-full hover:bg-orange-400 hover:text-white hover:font-semibold cursor-pointer ${
                workClicked ? "bg-orange-400" : ""
              }`}
            >
              Work
            </div>

            <div
              onClick={() => {
                setHomeClicked(false);
                setOtherClicked(!otherClicked);
                setWorkClicked(false);
              }}
              className={`w-1/3 text-center pt-1 border-l h-full hover:bg-orange-400 hover:text-white hover:font-semibold cursor-pointer ${
                otherClicked ? "bg-orange-400" : ""
              }`}
            >
              Others
            </div>
          </div>

          <div className="w-full rounded-lg bg-orange-400 text-white font-semibold hover:bg-orange-500 transition-all ease-in-out duration-200 py-2 ">
            <input
              className="w-full outline-none"
              type="submit"
              value="Save address"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default AddressBox;