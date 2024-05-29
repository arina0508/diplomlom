import React from "react";
import { Link } from "react-router-dom";
import { Button, Typography, Paper } from "@mui/material";
import Footer from "../components/Footer/Footer";

export function Profile() {
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
            <img class="w-10 h-10 rounded-md ml-8" src="/img/bell.svg" alt="" />
          </a>
        </header>
        <body className="w-full grid grid-cols-2 items-center p-5 mt-14">
          <div className=" ml-28">
            <img src="/img/student.jpg" width="219" height="275" alt="" />
            <div className=" mt-7">
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
            <div className=" mt-7">
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
            <div className=" mt-7">
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
            <div className=" mt-7">
              <Link to="/" className="w-[140px]">
                <Button
                  variant="outlined"
                  color="inherit"
                  style={{
                    textTransform: "none",
                    borderRadius: "20px",
                    width: "219px'",
                  }}
                >
                  главная страница
                </Button>
              </Link>
            </div>
          </div>
          <div></div>
        </body>
      </div>

      <Footer />
    </div>
  );
}
