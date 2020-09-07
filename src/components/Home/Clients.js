import React from 'react';
import Img from 'gatsby-image';
// import Title from '../Globals/Title';


export default function Clients({ clients }) {
    return (
        <li>
            <Img fluid={clients.image.fluid} className="w" />
        </li>
    );
}