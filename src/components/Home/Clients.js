import React from 'react';
import Img from 'gatsby-image';
import Title from '../Globals/Title';


export default function Clients(client){
    return(
        <section className="client">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mx-auto text-center">
                        <div className="Strategy">
                            <Title title="Clients"></Title>
                            <p>Over the period of 17 years, we’ve worked with many remarkable brands from all over
                            <br /> the world and helped them with their IT infrastructure and marketing. Here are some of them:</p>
                            {/* <Img fluid={client.images.fluid} /> */}
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        

    );
}