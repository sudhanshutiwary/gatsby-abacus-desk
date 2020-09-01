import React from "react"
import { StaticQuery, graphql } from 'gatsby';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { data } from "jquery";
import Strategy from "./Strategy";

export const getRichtext = graphql`
{
    menu: allContentfulStrategyRichContent(filter: {title: {regex: ""}}) {
        nodes {
            id
          title
          content {
            json
          }
        }
      }
  }
`;

export default function Richtext() {

    return (
        <StaticQuery query={getRichtext}
            render={data => {
                var fisrtRichContent = data.menu.nodes[0]
                return (
                    <div key={fisrtRichContent.id}>
                        {fisrtRichContent.title}
                        {documentToReactComponents(fisrtRichContent.content.json)}

                    </div>
                );

            }} />
    );
}

// const Richtext = ({ data }) => {
//     const fisrtRichContent = data.allContentfulRichContent.nodes[0]
//     return (

//         <>
//             {fisrtRichContent.title}
//             {documentToReactComponents(fisrtRichContent.content.json)}
//         </>
//     );
// }

