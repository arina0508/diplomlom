import React from "react";
import { Link } from "react-router-dom";
import { Button, TextField } from "@mui/material";

export function EditProfile() {
  return (
    <div>
      <div className="w-full grid grid-cols-3 items-center p-5 mt-14">
        <Link to="/profile" className="w-[140px] rounded-md ml-8">
          <Button
            variant="text"
            color="inherit"
            style={{ textTransform: "none", borderRadius: "20px" }}
          >
            Назад
          </Button>
        </Link>
        <h1 className="text-3xl pb-12">Редактировать личный кабинет</h1>
        <div></div>
      </div>
      <body>
        <div className="flex flex-col items-center justify-center ">
          <div className="w-80">
            {" "}
            <div>
              <p className="py-6 text-left">Фамилия</p>
              <TextField
                id="outlined-basic"
                label="Фамилия"
                variant="outlined"
                fullWidth
              />
            </div>
            <div>
              <p className="py-6 text-left">Имя</p>
              <TextField
                id="outlined-basic"
                label="Имя"
                variant="outlined"
                fullWidth
              />
            </div>
            <div>
              <p className="py-6 text-left">Номер телефона</p>
              <TextField
                id="outlined-basic"
                label="Номер телефона"
                variant="outlined"
                fullWidth
              />
            </div>
            <div>
              <p className="py-6 text-left">Электронная почта</p>
              <TextField
                id="outlined-basic"
                label="Электронная почта"
                variant="outlined"
                fullWidth
              />
            </div>
            <div className="py-6">
              <Button
                variant="contained"
                color="success"
                style={{ textTransform: "none", borderRadius: "20px" }}
                fullWidth
              >
                Сохранить изменения
              </Button>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}
