import axios from "axios";
import React, { useState, useEffect } from "react";
import * as S from "./Style.js";
const Api = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((resposta) => {
        setInfo(resposta.data.results);
      })
      .catch((error) => {
        console.log("desculpe, houve erro ao requisitar a sua api", error);
      });
  }, []);

  return (
    <S.Caixa>
      {info.map((item) => (
        <S.Infos>
          <figure>
            <S.Image src={item.image} alt={item.name} />
          </figure>
          <p>{item.name}</p>
          <p className="secondP">{item.species}</p>
        </S.Infos>
      ))}
    </S.Caixa>
  );
};

export default Api;
