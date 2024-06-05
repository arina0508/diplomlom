import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, TextField, Alert } from "@mui/material";

export function Auth() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleToggle = () => {
    setIsRegistering(!isRegistering);
    setError("");
  };

  const handleLoginChange = (e) => setLogin(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSubmit = () => {
    if (isRegistering) {
      if (!firstName || !lastName || !email) {
        setError("Заполните поля");
      } else {
        setError("");
      }
    } else {
      if (!login || !password) {
        setError("Заполните поля");
      } else {
        setError("");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-80 p-6 bg-white rounded shadow-md">
        {isRegistering ? (
          <>
            <p className="text-center text-2xl mb-6">Регистрация</p>
            <div className="mb-4">
              <TextField
                id="first-name"
                label="Имя"
                variant="outlined"
                fullWidth
                value={firstName}
                onChange={handleFirstNameChange}
              />
            </div>
            <div className="mb-4">
              <TextField
                id="last-name"
                label="Фамилия"
                variant="outlined"
                fullWidth
                value={lastName}
                onChange={handleLastNameChange}
              />
            </div>
            <div className="mb-4">
              <TextField
                id="email"
                label="Электронная почта"
                variant="outlined"
                fullWidth
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            {error && (
              <Alert severity="error" className="mb-4">
                {error}
              </Alert>
            )}

            <Link to="/profile">
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleSubmit}
                disabled={!firstName || !lastName || !email}
              >
                Зарегистрироваться
              </Button>
            </Link>
          </>
        ) : (
          <>
            <p className="text-center text-2xl mb-6">Авторизация</p>
            <div className="mb-4">
              <TextField
                id="login"
                label="Логин"
                variant="outlined"
                fullWidth
                value={login}
                onChange={handleLoginChange}
              />
            </div>
            <div className="mb-4">
              <TextField
                id="password"
                label="Пароль"
                type="password"
                variant="outlined"
                fullWidth
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            {error && (
              <Alert severity="error" className="mb-4">
                {error}
              </Alert>
            )}

            <Link to="/profile">
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleSubmit}
                disabled={!login || !password}
              >
                Вход
              </Button>
            </Link>
          </>
        )}
        <div className="mt-4 text-center">
          <Button onClick={handleToggle} color="secondary">
            {isRegistering ? "Уже есть аккаунт? Войти" : "Регистрация"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Auth;
