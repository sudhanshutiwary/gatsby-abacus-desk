import React from "react"
import { Link } from "gatsby"
const SearchResults = ({ results }) => (
    <div>
        {results.length ? (
            <>
                <h2>{results.length} tartan(s) matched your query</h2>
                <ul>
                    {results.map(result => (
                        <li key={result.slug}>
                            <Link to={result.url}>{result.title}</Link>
                        </li>
                    ))}
                </ul>
            </>
        ) : (
                <p>Sorry, no matches found.</p>
            )}
    </div>
)
export default SearchResults