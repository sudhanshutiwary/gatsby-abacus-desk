import React from 'react';
import Clients from './Clients';
// import Title from '../Globals/Title';
import { StaticQuery, graphql } from 'gatsby';


const getClient = graphql`{
    clients:allContentfulClients{
      edges{
        node{
          id
          title
          image{
            fluid(maxHeight: 420){
              src
              ...GatsbyContentfulFluid_tracedSVG  
            }
          }
        }
      }
    }
  }`;

export default function Client(){
    return(
        <StaticQuery query={getClient} 
          render={data => {
            return(
            <section className="client">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mx-auto text-center">
                        <div className="client-iamges">
                           {data.clients.edges.map(({ node:client }) => {
                                return <Clients key={client.id} client={client} />;
                    
                                
                           })}
                        </div>
                    </div>
                </div>
            </div>
        </section>);
        }} />
        
    );
}