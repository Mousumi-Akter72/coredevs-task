/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";

export default function Counter() {
  let [clockData, setClockData] = useState({
    dd: 0,
    hh: 0,
    mm: 0,
    ss: 0
  });
  let [remaining, setRemaining] = useState()
  useEffect(() => {
    const sec = 1000,
      min = sec * 60,
      hour = min * 60,
      day = hour * 24;

    let clockInterval = setInterval(() => {
      // change the date to 2022 to see the  "Website has been constructed" text
      const end = new Date("Jul 05, 2023 12:00:00").getTime();
      const current = new Date().getTime();
      setRemaining(end - current);

      let dd = Math.floor(remaining / day);
      let hh = Math.floor((remaining % day) / hour);
      let mm = Math.floor((remaining % hour) / min);
      let ss = Math.floor((remaining % min) / sec);

      setClockData(previous => {
        return { ...previous, dd, hh, mm, ss };
      });
    }, 1000);

    return () => {
      clearInterval(clockInterval);
    }
  }, [remaining]);
  return (
    <div className="flex-w flex-c-m cd100 p-b-33">
      {
        remaining < 0 ?
          <>
            <div className="m2-txt1">
              Website has been constructed!! Please visit <a style={{ textDecoration: `none`, color: "white" }} href="#">"Link"</a>
            </div>

          </>
          :
          <>
            <div className="flex-col-c-m size2 bor1 m-l-15 m-r-15 m-b-20">
              <span className="l2-txt1 p-b-9 days">{clockData.dd}</span>
              <span className="s2-txt1">Days</span>
            </div>

            <div className="flex-col-c-m size2 bor1 m-l-15 m-r-15 m-b-20">
              <span className="l2-txt1 p-b-9 hours">{clockData.hh}</span>
              <span className="s2-txt1">Hours</span>
            </div>

            <div className="flex-col-c-m size2 bor1 m-l-15 m-r-15 m-b-20">
              <span className="l2-txt1 p-b-9 minutes">{clockData.mm}</span>
              <span className="s2-txt1">Minutes</span>
            </div>

            <div className="flex-col-c-m size2 bor1 m-l-15 m-r-15 m-b-20">
              <span className="l2-txt1 p-b-9 seconds">{clockData.ss}</span>
              <span className="s2-txt1">Seconds</span>
            </div>
          </>
      }

    </div>
  );
}