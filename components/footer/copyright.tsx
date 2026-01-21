"use client";
import { useEffect, useState } from "react";

const Copyright = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="mx-auto py-2">
      <p className="text-center text-xs text-black">
        &copy;{" "}
        {dateTime.toLocaleDateString("en-US", {
          year: "numeric",
        })}{" "}
        Wearmerce Store. All rights reserved.
      </p>
    </div>
  );
};

export default Copyright;
