import React from 'reat';
import { Children } from 'react';

const Carousel = ({children}) => (
    <section class="carousel">
    <div class="carousel__container">
        {children}
    </div>
    </section>
);

export default Carousel;
