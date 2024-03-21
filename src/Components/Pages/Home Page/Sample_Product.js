
import React from "react";
import { Data } from "./Data";
import { Card, } from "react-bootstrap";
import "./Home.css";
import { useNavigate } from 'react-router-dom';
// import Modal_Popup from "./Modal_Popup";

function Sample_Product() {

    const navigate = useNavigate()

    return (
        <div className="product_Arrvl ">
            <div className="row">
                {Data.map((data) => (
                    <div className="col-12 col-sm-6 col-md-4 All_Product">
                        <Card className="text-center  " >
                            <Card.Body className="">
                                <Card.Title>{data?.Name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{data.Price}</Card.Subtitle>
                                <img
                                    className="card_img size"
                                    src="https://watch-shopping-demo.zohocommerce.com/product-images/700x700-01.jpg/2516776000000076700/400x400"
                                    alt={data.Name}
                                />

                                {/* <Card.Link href="#"></Card.Link> */}

                                <button type="button" className="Quick_View"
                                    onClick={() => navigate('/' + data.id)} >Quick View
                                </button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>

        </div>

    );
}

export default Sample_Product;