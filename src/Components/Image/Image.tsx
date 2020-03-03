import React from 'react';
import { IPokemonPicture } from '../../../models/models';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import './Image.css';

interface IimageProps {
    pictures: IPokemonPicture;
    mainPicture?: string;
}

const Image: React.FC <IimageProps> = ({ pictures, mainPicture }) => {
    if (mainPicture) {
        return (<img src={mainPicture} alt='' />);
    } else {
        const ImageContainer = () => {
            let result: React.ReactElement[] = [];
            Object.entries(pictures).forEach((entry: any, index: number) => {
            let value = entry[1];
            if (value !== null) {
                result.push(<img className='image' key={index} src={value} alt='' />);
            }
            });
            return (result);
        }
        const responsive = {
            desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            },
            tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            },
            mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            },
        };

        return (
                <Carousel
                showDots={true}
                responsive={responsive}
                infinite={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                >
                 {ImageContainer()}
        </Carousel>
    );
    }
}
export default Image;