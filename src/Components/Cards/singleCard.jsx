import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import TextField from "@mui/material/TextField";
import { FaFilter } from "react-icons/fa";
import { PropagateLoader } from "react-spinners";

const SingleCard = () => {
  const [singleCards, setSingleCards] = useState([]);
  const [selecteds, setSelected] = useState("All");
  const [searches, setSearches] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/Jobs");
        setSingleCards(response.data.Jobs);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="my-2" id="job">
      <div className="topic flex justify-between mx-10 mb-10 sticky top-0">
        <h1 className="text-2xl font-bold ">
          <TextField
            id="search"
            label="Search"
            variant="outlined"
            size="small"
            onChange={(e) => setSearches(e.target.value)}
            className="md:w-[400px]"
          />
        </h1>
        <div className="sort flex items-center border px-2 justify-between">
          <FaFilter />
          <select
            name=""
            id=""
            className="border-0 focus:outline-none bg-transparent "
            onChange={(e) => setSelected(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Part Time">PartTime</option>
            <option value="Full Time">FullTime</option>
          </select>
        </div>
      </div>
      <div className="flex flex-wrap mx-20 gap-5 my-5 justify-center">
        {isLoading ? (
          <p className="text-center">
            <PropagateLoader color="#36d7b7" />
          </p>
        ) : (
          singleCards
            .filter(
              (itm) =>
                (selecteds === "All" || itm.type === selecteds) &&
                itm.title.toLowerCase().includes(searches.toLowerCase())
            )
            .map((itm, index) => (
              <Card
                key={index}
                names={itm.title}
                desc={itm.description}
                id={itm.id}
                location={itm.location}
                imgs={itm.company_logo}
                salary={itm.salary}
                index={index}
                company={itm.company}
                type={itm.type}
                time={itm.created_at}
              />
            ))
        )}
      </div>
    </div>
  );
};

export default SingleCard;
