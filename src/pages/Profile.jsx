import React from "react";
import { Link } from "react-router-dom";
import { Button, Typography, Paper } from "@mui/material";
import Footer from "../components/Footer/Footer";
import { Bar } from "react-chartjs-2";

export function Profile() {
  const data = {
    labels: [1, 2, 3, 4],
    datasets: [
      {
        label: "aaaa",
        data: [34, 49, 90, 4],
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
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
          <h3 className="text-5xl">Личный кабинет</h3>
          <a
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
        <div className="w-full grid grid-cols-2 items-center p-5 mt-14">
          <div className="ml-28">
            <img src="/img/student.jpg" width="219" height="275" alt="" />
            <div className="mt-3 text-xl">
              <p>Волкова Мария</p>
            </div>
            <div className="mt-7">
              <Link to="/" className="w-[240px]">
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
                  расписание
                </Button>
              </Link>
            </div>
            <div className="mt-7">
              <Link to="/" className="">
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
                  успеваемость
                </Button>
              </Link>
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
          <div>
            <Bar data={data} options={options} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
