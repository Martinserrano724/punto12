import React, { useState, useEffect } from "react";
import { Form, Row } from "react-bootstrap";
import ListaNoticias from "./ListaNoticias";

const FormularioNoticia = ({ noticias }) => {
  const [select, setSelect] = useState("");
  const [selectPais, setSelectPais] = useState("");
  const arrayNoticias = [...noticias];

  const noticiasFiltradas = arrayNoticias.filter((noticia) => {
    if (select == noticia.category && selectPais == noticia.country) {
      return JSON.stringify(noticia);
    }
  });

  /*
  //nos permite saber las noticias por pais y categoria 
  const noticiasFiltradasPais = arrayNoticias.map((noticia) => {
    console.log(`pais: ${noticia.country} categoria ${noticia.category}`)
  });
  
  
*/
  return (
    <div className="container border border-black mt-5">
      <h1 className="text-center my-3">Noticias</h1>
      <hr className="mb-3" />
      <Form>
        <Row>
        <Form.Group className="d-flex p-5">
            <Form.Label className="col-sm-5 col-lg-2">
              Busque por Pais:
            </Form.Label>

            <select
              onChange={(e) => {
                return setSelectPais(e.target.value);
              }}
              value={selectPais}
              className="w-100"
            >
              <option>opcion</option>
              <option value="germany">Alemania</option>
              <option >Argentina</option>
              <option >Australia</option>
              <option >Austria</option>
              <option >canada</option>
              <option >hungary</option>
              <option >indonesia</option>
              <option value="italy">italia</option>
              <option >mexico</option>
              <option value="netherland" >Países Bajos</option>
              <option value="united kingdom" >Reino Unido</option>
            </select>
          </Form.Group>
          <Form.Group className="d-flex p-5">
            <Form.Label className="col-sm-5 col-lg-2">
              Busque por Categoria:
            </Form.Label>

            <select
              onChange={(e) => {
                return setSelect(e.target.value);
              }}
              value={select}
              className="w-100"
            >
              <option>opcion</option>
              <option>business</option>
              <option>politics</option>
              <option>top</option>
              <option>entertainment</option>
              <option>environment</option>
              <option>food</option>
              <option>health</option>

              <option>science</option>
              <option>sports</option>
              <option>technology</option>

              <option>tourism</option>
              <option>world</option>
            </select>
          </Form.Group>
          
        </Row>
      </Form>
      <hr />
      <ListaNoticias noticia={noticiasFiltradas}></ListaNoticias>
    </div>
  );
};

export default FormularioNoticia;
