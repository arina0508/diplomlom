import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Eventcalendar, momentTimezone } from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import moment from "moment-timezone";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

momentTimezone.moment = moment;

export function Profile() {
  const [showChart, setShowChart] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  const data = {
    labels: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь"],
    datasets: [
      {
        label: "Посещаемость",
        data: [7, 9, 10, 6, 8, 10],
        backgroundColor: ["rgba(219, 169, 111, 1)"],
        borderColor: ["rgba(219, 169, 111, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const handleShowChart = () => {
    setShowChart(true);
    setShowCalendar(false);
  };

  const handleShowCalendar = () => {
    setShowChart(false);
    setShowCalendar(true);
  };

  return (
    <div>
      <div className="pb-10">
        <header className="w-full grid grid-cols-3 items-center p-5 mt-14">
          <Link to="/" className="w-[140px] rounded-md ml-8">
            <Button
              variant="text"
              color="inherit"
              style={{ textTransform: "none", borderRadius: "20px" }}
            >
              Назад
            </Button>
          </Link>
          <h1 className="text-5xl">Личный кабинет</h1>
          <a
            className="flex justify-end items-center"
            href="https://vk.com/rinatkp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-10 h-10 rounded-md ml-8"
              src="/img/bell.svg"
              alt=""
            />
          </a>
        </header>
        <div className="w-full grid grid-cols-10 items-center p-5 mt-14">
          <div className="col-span-3 ml-28">
            <img src="/img/student.jpg" width="219" height="275" alt="" />
            <div className="mt-3 text-xl">
              <p>Волкова Мария</p>
            </div>
            <div className="mt-7">
              <Button
                variant="outlined"
                color="inherit"
                size="medium"
                style={{
                  textTransform: "none",
                  borderRadius: "20px",
                  width: "219px",
                }}
                onClick={handleShowCalendar}
              >
                расписание
              </Button>
            </div>
            <div className="mt-7">
              <Button
                variant="outlined"
                color="inherit"
                size="medium"
                style={{
                  textTransform: "none",
                  borderRadius: "20px",
                  width: "219px",
                }}
                onClick={handleShowChart}
              >
                посещаемость
              </Button>
            </div>
            <div className="mt-7">
              <Link to="/" className="w-[140px]">
                <Button
                  variant="outlined"
                  color="inherit"
                  size="medium"
                  style={{
                    textTransform: "none",
                    borderRadius: "20px",
                    width: "219px",
                  }}
                >
                  редактировать профиль
                </Button>
              </Link>
            </div>
            <div className="mt-7">
              <Link to="/" className="w-[140px]">
                <Button
                  variant="outlined"
                  color="inherit"
                  style={{
                    textTransform: "none",
                    borderRadius: "20px",
                    width: "219px",
                  }}
                >
                  главная страница
                </Button>
              </Link>
            </div>
          </div>
          <div className="col-span-7">
            {showChart && (
              <div style={{ width: "800px", height: "600px" }}>
                <Bar data={data} options={options} width={800} height={600} />
              </div>
            )}
            {showCalendar && (
              <Eventcalendar
                data={[
                  {
                    start: new Date(),
                    title: "Today's event",
                  },
                  {
                    start: new Date(2020, 11, 18, 9, 0),
                    end: new Date(2020, 11, 20, 13, 0),
                    title: "Multi day event",
                  },
                ]}
                dataTimezone="utc"
                displayTimezone="local"
                timezonePlugin={momentTimezone}
                view={{
                  calendar: {
                    type: "month",
                    popover: true,
                  },
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
