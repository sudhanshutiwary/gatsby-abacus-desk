import React from 'react';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"



export default function Richtexts({ text }) {
    return <>
        {text.title}
    </>;
}