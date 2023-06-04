import React from 'react';
import CardNoticia from "./CardNoticia";
const ListaNoticias = ({noticia}) => {
    return (
        <div className=" d-flex justify-content-evenly row ">
        
        {noticia.map((not, index) => {
          console.log(not)
          return <CardNoticia noticia={not} key={index} className="col-12"></CardNoticia>
        })}
       
      </div>
    );
};

export default ListaNoticias;