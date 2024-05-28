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
          <h1 className="text-5xl ">Личный кабинет</h1>
          <div></div>
        </header>
      </div>

      <Footer />
    </div>
  );
}
