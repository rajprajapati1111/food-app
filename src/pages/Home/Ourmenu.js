import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../components/Layouts/Header";
import Footer from "../../components/Layouts/Footer";
import Cards from "../../components/Layouts/Cards";
import Image1 from "../../assets/menu/burger-11.jpg";
import Image2 from "../../assets/menu/burger-12.jpg";
import Image3 from "../../assets/menu/burger-13.jpg";
import Image4 from "../../assets/menu/burger-14.jpg";
import Image5 from "../../assets/menu/burger-15.jpg";
import Image6 from "../../assets/menu/burger-16.jpg";
import Image7 from "../../assets/menu/burger-17.jpg";
import Image8 from "../../assets/menu/burger-18.jpg";
import { Container, Row } from "react-bootstrap";

export default function Menu() {
 const menuItems = [
  {
    id: 1,
    title: "Cheese Burger",
    price: "5.99",
    img: Image1, 
  },
  {
    id: 2,
    title: "Veggie Pizza",
    price: "7.99",
    img: Image2,
  },
  {
    id: 3,
    title: "French Fries",
    price: "2.99",
    img: Image3,
  },
  {
    id: 4,
    title: "Grilled Sandwich",
    price: "4.49",
    img: Image4,
  },
  {
    id: 5,
    title: "Pasta Alfredo",
    price: "6.49",
    img: Image5,
  },
  {
    id: 6,
    title: "Chocolate Shake",
    price: "3.99",
    img: Image6,
  },
    {
    id: 7,
    title: "Smokey House",
    price: "3.99",
    img: Image7,
  },
    {
    id: 8,
    title: "Classic Burger",
    price: "4.99",
    img: Image8,
  },
];

  return (
    <>
      <Header/>
      <div
        className="d-flex flex-column align-items-center justify-content-center text-center text-white"
        style={{
          minHeight: "50vh",
          background: `
            linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
            url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092') 
            no-repeat center center/cover`,}}>
        <h1 className="fw-bold display-4">🍴 Our Menu</h1>
        <p className="lead">Delicious food made with love</p>
      </div>

      <section className="menu_section">
      <Container>
      
        <Row>
          {menuItems.map((cardData, index) => (
            <Cards
              key={index}
              image={cardData.img}
              title={cardData.title}
              price={cardData.price}
            />
          ))}
        </Row>

      </Container>
    </section>
      <Footer/>
    </>
  );
}
