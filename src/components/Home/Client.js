import React from 'react';
import Clients from './Clients';
import Title from '../Globals/Title';
import { StaticQuery, graphql } from 'gatsby';


const getClient = graphql`{
  clients:allContentfulClients{
    edges{
      node{
        id
        title
        image{
          fluid{
            src
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
}`;

export default function Client() {
  return (
    <StaticQuery query={getClient}
      render={data => {
        return (
          <section className="client">
            <div className="container">
              <div className="row">
                <div className="col-md-12 mx-auto text-center">
                  <div className="Strategy">
                    <Title title="Clients"></Title>
                    <p>Over the period of 17 years, we’ve worked with many remarkable brands from all over
                            <br /> the world and helped them with their IT infrastructure and marketing. Here are some of them:</p>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="client-iamges">
                    <ul>
                      {data.clients.edges.map(({ node: clients }) => {
                        return <Clients key={clients.id} clients={clients} />;


                      })}
                    </ul>
                  </div>
                </div>
                <div className="col-md-12">
                  <div class="client-btn">
                    <a href="https://abacusdesk.com/offices/">More Client <i class="fa fa-chevron-right"> </i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      }} />

  );
}