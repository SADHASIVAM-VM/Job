import React, { useContext, useState } from "react";
import info from "../../assets/images/info.png";
import "./Card.css";
import { FaStar } from "react-icons/fa";
import { MyContext } from "../../Contexts/Context";

const Card = (props) => {
  const {
    names,
    desc,
    salary,
    imgs,
    location,
    company,
    index,
    type,
    time,
    id,
  } = props;
  const { setWishList } = useContext(MyContext);
  const colors = [
    "bg-blue-200",
    "bg-green-200",
    "bg-yellow-200",
    "bg-red-200",
    "bg-purple-200",
  ];
  // Selecting color based on index
  const color = colors[index % colors.length];
  const dates = new Date(time);
  const year = dates.getFullYear();
  const month = dates.getMonth() + 1; // Months are zero-based, so add 1
  const date = dates.getDate();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthName = monthNames[month];

  const [started, setStared] = useState(false);

  return (
    <div className="">
      <div className="container bg-white w-[300px] shadow-lg border  rounded-lg">
        <div className={`${color} rounded-lg m-1 p-2 min-h-[200px]`}>
          <div className="flex justify-between items-center">
            <div className="year bg-white px-3 rounded-lg font-bold">
              {date} {monthName} {year}
            </div>
            <div
              className=" px-3 rounded-lg "
              onClick={(e) => {
                setStared(!started);
                setWishList((prevWishList) => [
                  ...prevWishList,
                  { id, names, company, desc, type },
                ]);
                console.log(props);
              }}
            >
              {started ? <FaStar color="tomato" /> : <FaStar color="white" />}
            </div>
          </div>
          <div className="job_title my-3">
            <p className="text-md">{company}</p>
            <h5 className="text-xl font-bold my-3">{names}</h5>
            <img src={imgs} alt="" />
          </div>
          <div className="required">
            <ul className="flex gap-4">
              <li className="border p-1 rounded-[10px] border-black">{type}</li>
            </ul>
          </div>
        </div>
        <div className="body_part flex justify-between px-3 my-3">
          <div className="cont">
            <h5 className="font-bold text-sm">{salary}</h5>
            <p className="text-gray-400">{location}</p>
          </div>
          <button
            className=" text-sm text-white rounded-md tooltip px-3 "
            title="Details"
          >
            <img src={info} alt="" className="h-5 rounded-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
