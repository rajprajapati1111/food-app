import React, { useState } from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Cards({ title,price,image,description }) {
  // Like state
  const [liked, setLiked] = useState(false);

  // Toggle handler
  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <Col sm={6} lg={4} xl={3} className="mb-4">
      <Card className="overflow-hidden">
        <div className="overflow-hidden">
          <Card.Img variant="top" style={{height:"300px"}} src={image} />
        </div>
        <Card.Body>
          <div className="d-flex align-items-center justify-content-between">
            <div
              className="wishlist"
              onClick={toggleLike}
              style={{
                cursor: "pointer",
                fontSize: "22px",
              }}
            >
              <i
                className={`bi ${liked ? "bi-heart-fill" : "bi-heart"}`}
                style={{ color: liked ? "red" : "gray" }}
              ></i>
            </div>
          </div>

          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>

          <div className="d-flex align-items-center justify-content-between">
            <div className="menu_price">
              <h5 className="mb-0">${price}</h5>
            </div>
            <div className="add_to_card">
              <Link to="/" className="btn px-4 rounded-5">
                <i className="bi bi-bag me-2"></i>
                Add To Cart
              </Link>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Cards;
