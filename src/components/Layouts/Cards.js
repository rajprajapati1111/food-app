import React, { useState } from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

<<<<<<< HEAD
function Cards({ title,price,image,description }) {
=======
function Cards({ image, title, paragraph, price }) {
>>>>>>> 8c99ca416ac5eb6f7617a7ba941ffd713b451083
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
<<<<<<< HEAD
          <Card.Img variant="top" style={{height:"300px"}} src={image} />
=======
          <Card.Img variant="top" src={image} />
>>>>>>> 8c99ca416ac5eb6f7617a7ba941ffd713b451083
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
<<<<<<< HEAD
          <Card.Text>{description}</Card.Text>
=======
          <Card.Text>{paragraph}</Card.Text>
>>>>>>> 8c99ca416ac5eb6f7617a7ba941ffd713b451083

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
