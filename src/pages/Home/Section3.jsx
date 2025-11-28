import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Image1 from "../../assets/menu/burger-11.jpg";
// import Image2 from "../../assets/menu/burger-12.jpg";
// import Image3 from "../../assets/menu/burger-13.jpg";
// import Image4 from "../../assets/menu/burger-14.jpg";
// import Image5 from "../../assets/menu/burger-15.jpg";
// import Image6 from "../../assets/menu/burger-16.jpg";
// import Image7 from "../../assets/menu/burger-17.jpg";
// import Image8 from "../../assets/menu/burger-18.jpg";
import Cards from "../../components/Layouts/Cards";
import { Link } from "react-router-dom";
import axios from "axios";


function Section3() {
  console.log("🔥 Section3 inside Home rendered");

  
  const [products, setProducts] = useState([]);

  const fetchproducts = async () => {
    try {
      const response = await axios.get("http://localhost:8000/products");
      console.log(response.data.products);

      setProducts(response.data.products)
      
    } catch (error) {
      console.log("ERROR:", error);
    }
  };


  useEffect(() => {
    console.log("useEffect RUNNING!");
    fetchproducts()
  }, [])

  return (
    <section className="menu_section">
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} className="text-center mb-5">
            <h2>OUR CRAZY BURGERS</h2>
            <p className="para">
              Aliquam a augue suscipit, luctus neque purus ipsum neque undo
              dolor primis libero tempus, blandit a cursus varius magna
            </p>
          </Col>
        </Row>
        <Row>

          {products.map((item) => (
            <Cards
              key={item.id}
              image={item.image}
              title={item.name}
              description={item.description}
              price={item.price}
            />
          ))}

        </Row>

        <Row className="pt-5">
          <Col sm={6} lg={5}>
            <div className="ads_box ads_img1 mb-5 mb-md-0">
              <h4 className="mb-0">GET YOUR FREE</h4>
              <h5>CHEESE FRIES</h5>
              <Link to="/" className="btn btn_red px-4 rounded-0">
                Learn More
              </Link>
            </div>
          </Col>
          <Col sm={6} lg={7}>
            <div className="ads_box ads_img2">
              <h4 className="mb-0">GET YOUR FREE</h4>
              <h5>CHEESE FRIES</h5>
              <Link to="/" className="btn btn_red px-4 rounded-0">
                Learn More
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section3;
