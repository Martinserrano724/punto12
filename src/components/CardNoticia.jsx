import React from 'react';
import { Card } from "react-bootstrap";

const CardNoticia = ({ noticia }) => {
    return (
        <Card className="card-text col-md-4 col-lg-3 m-3 border border-black">
      <Card.Img
        variant="top"
        src={
          noticia.image_url
            ? noticia.image_url
            : "https://cdn-icons-png.flaticon.com/256/85/85488.png"
        }
      />
      <Card.Body>
        <Card.Title>{noticia.title}</Card.Title>
        <Card.Text>{noticia.description}</Card.Text>
      </Card.Body>
    </Card>
    );
};

export default CardNoticia;