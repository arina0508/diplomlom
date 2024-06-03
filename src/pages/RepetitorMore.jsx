import React from "react";
import { useParams, Link } from "react-router-dom";
import { repetitors } from "../data";

export const RepetitorMore = () => {
  const { repetitorId } = useParams();
  const repetitor = repetitors.find((rep) => rep.id === parseInt(repetitorId));

  if (!repetitor) {
    return <div>Репетитор не найден</div>;
  }

  return (
    <div>
      <div className="w-full grid grid-cols-3 items-center p-5 mt-14">
        <Link to="/rep" className="w-[140px] rounded-md ml-8">
          <button
            variant="text"
            color="inherit"
            style={{ textTransform: "none", borderRadius: "20px" }}
          >
            Назад
          </button>
        </Link>
        <h1 className="text-5xl">Описание репетитора</h1>
        <div></div>
      </div>
      <div className="p-5">
        <div className="flex justify-center">
          <img
            className="w-[240px] h-[340px]"
            src={repetitor.img}
            alt={`${repetitor.firstName} ${repetitor.lastName}`}
          />
        </div>
        <div className="mt-5 text-center">
          <h2>
            {repetitor.firstName} {repetitor.lastName}
          </h2>
          <p>{repetitor.subject}</p>
          {repetitor.examE && <p>Подготовка к ЕГЭ</p>}
          {repetitor.examO && <p>Подготовка к ОГЭ</p>}
        </div>
      </div>
    </div>
  );
};
