import React from "react";
import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import Footer from "../components/Footer/Footer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardActions } from "@mui/material";

export function Repetitors() {
  return (
    <div>
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
        <h1 className="text-6xl ">РЕПЕТИТОРЫ</h1>
        <div></div>
      </header>
      <div className="flex justify-center items-center pt-10">
        <Button
          className="w-[480px] rounded-md"
          variant="outlined"
          color="inherit"
          style={{ textTransform: "none", borderRadius: "20px" }}
        >
          поиск
        </Button>
      </div>
      <div className="grid grid-cols-6 items-center mt-10">
        <div></div>
        <Card sx={{ width: 250, height: 500 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image=" ./img/woman1.jpg "
              alt=""
            />
            <CardContent>
              <Typography gutterBottom variant="h7" component="div">
                Ольга Васина
              </Typography>
              <Typography gutterBottom variant="h7" component="div">
                английский язык
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Записаться
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ width: 250, height: 500 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image=" ./img/woman2.jpg "
              alt=""
            />
            <CardContent>
              <Typography gutterBottom variant="h7" component="div">
                Екатерина Давыдова
              </Typography>
              <Typography gutterBottom variant="h7" component="div">
                русский язык/литература
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Записаться
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ width: 250, height: 500 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image=" ./img/woman3.jpg "
              alt=""
            />
            <CardContent>
              <Typography gutterBottom variant="h7" component="div">
                Василиса Ангерова
              </Typography>
              <Typography gutterBottom variant="h7" component="div">
                биология/химия
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Записаться
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ width: 250, height: 500 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="145"
              image=" ./img/woman5.jpg "
              alt=""
            />
            <CardContent>
              <Typography gutterBottom variant="h7" component="div">
                Алла Васина
              </Typography>
              <Typography gutterBottom variant="h7" component="div">
                информатика
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Записаться
            </Button>
          </CardActions>
        </Card>
        <div></div>
      </div>
      <div className="grid grid-cols-6 items-center mt-10 pb-10">
        <div></div>
        <Card sx={{ width: 250, height: 500 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image=" ./img/woman1.jpg "
              alt=""
            />
            <CardContent>
              <Typography gutterBottom variant="h7" component="div">
                Ольга Васина
              </Typography>
              <Typography gutterBottom variant="h7" component="div">
                английский язык
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Записаться
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ width: 250, height: 500 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image=" ./img/woman2.jpg "
              alt=""
            />
            <CardContent>
              <Typography gutterBottom variant="h7" component="div">
                Екатерина Давыдова
              </Typography>
              <Typography gutterBottom variant="h7" component="div">
                русский язык/литература
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Записаться
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ width: 250, height: 500 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image=" ./img/woman3.jpg "
              alt=""
            />
            <CardContent>
              <Typography gutterBottom variant="h7" component="div">
                Василиса Ангерова
              </Typography>
              <Typography gutterBottom variant="h7" component="div">
                биология/химия
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Записаться
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ width: 250, height: 500 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="145"
              image=" ./img/woman5.jpg "
              alt=""
            />
            <CardContent>
              <Typography gutterBottom variant="h7" component="div">
                Алла Васина
              </Typography>
              <Typography gutterBottom variant="h7" component="div">
                информатика
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Записаться
            </Button>
          </CardActions>
        </Card>
        <div></div>
      </div>
      <Footer />
    </div>
  );
}
