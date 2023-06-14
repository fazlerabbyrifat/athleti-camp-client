import axios from "axios";
import React, { useEffect, useState } from "react";
import ClassCard from "./ClassCard";

const Classes = () => {
  const [allClasses, setAllClasses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/classes")
      .then((res) => {
        setAllClasses(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="mb-5">
      <h3 className="text-3xl lg:text-5xl font-bold uppercase text-center p-10">
        Our Classes
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
        {
            allClasses ?. map(allClass => <ClassCard key={allClass._id} allClass={allClass}
            ></ClassCard>)
        }
      </div>
    </div>
  );
};

export default Classes;
