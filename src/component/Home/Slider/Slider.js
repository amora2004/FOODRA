import React from 'react'
import './Slider.css'
import Carousel from 'react-bootstrap/Carousel'
// import ExampleCarouselImage from 'components/ExampleCarouselImage'
import photo_01 from '../../../assets/team 1.png'
import photo_02 from '../../../assets/team 2.png'
import photo_03 from '../../../assets/team 3.png'
import { Container } from 'react-bootstrap'
const Slider = () => {
    return (
        <Carousel className='slider'>
            <Carousel.Item className='slid'>
                <img src={photo_01} />
                <div className='info'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, neque consequuntur corrupti debitis ratione eaque ducimus. Voluptatem deleniti nam harum perferendis et reiciendis incidunt delectus modi. Excepturi eos beatae nobis.</p>
                    <span >Frontend devloper</span>
                </div>
            </Carousel.Item>
            <Carousel.Item className='slid'>
                <img src={photo_02} />
                <div className='info'>                                        <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, neque consequuntur corrupti debitis ratione eaque ducimus. Voluptatem deleniti nam harum perferendis et reiciendis incidunt delectus modi. Excepturi eos beatae nobis.</p>
                    <span >backend devloper</span>
                </div>
            </Carousel.Item>
            <Carousel.Item className='slid'>
                <img src={photo_03} />
                <div className='info'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, neque consequuntur corrupti debitis ratione eaque ducimus. Voluptatem deleniti nam harum perferendis et reiciendis incidunt delectus modi. Excepturi eos beatae nobis.
                    </p>
                    <span > ui/ux designer</span>
                </div>
            </Carousel.Item>

        </Carousel >
    )
}

export default Slider
