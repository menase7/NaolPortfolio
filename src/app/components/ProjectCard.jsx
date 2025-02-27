import React, { useState } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, previewUrl }) => {
  const [showModal, setShowModal] = useState(false); // State to handle modal visibility

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <button
            onClick={toggleModal} // Show modal on button click
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </button>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative bg-white p-4 rounded-lg max-w-3xl max-h-[600px] w-full mx-4 overflow-hidden">
            <button
              onClick={toggleModal}
              className="absolute top-3 right-3 text-red-500 hover:text-red-700 bg-white w-[45px] h-[45px] text-[40px] rounded-full flex items-center justify-center"
            >
              &times;
            </button>
            <img src={imgUrl} alt={title} className="w-full object-cover rounded-lg" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
