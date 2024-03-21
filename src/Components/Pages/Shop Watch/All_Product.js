import React from 'react'
import { Card } from 'react-bootstrap'
import { All_Data } from './All_Data'


function All_Product() {
    return (
        <div className='all_product container'>
            <div className='row p-8'>
                {All_Data.map((All_Data) => (
                    <div className="col-12 col-sm-6 col-md-4  ">
                        <Card className='text-center box' >
                            <Card.Body >
                                <Card.Title className='fw-normal'>{All_Data.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted fw-bold text-black">{All_Data.price}</Card.Subtitle>
                                <img className='card_img ' src='https://watch-shopping-demo.zohocommerce.com/product-images/700x700-01.jpg/2516776000000076700/400x400' />
                                <Card.Link href="#"></Card.Link>
                                <Card.Link href="#"></Card.Link>

                                <button type="button" className="Quick_View"
                                >Quick View
                                </button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default All_Product
