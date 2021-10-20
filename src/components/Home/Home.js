import React from "react";
import { Carousel } from "react-bootstrap";

const Home = () => {
    return (
            <Carousel className="carousel">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/dus99ir1n/image/upload/v1634512239/GlanGlow/ff_ccxtdi.png"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/dus99ir1n/image/upload/v1634510541/GlanGlow/yy_ds2ld4.png"
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/dus99ir1n/image/upload/v1634511523/GlanGlow/uu_rxza07.png"
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
    )
}

export default Home