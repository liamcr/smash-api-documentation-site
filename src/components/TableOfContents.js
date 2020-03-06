import React from "react";
import { endpointDocs } from "../custom/endpointDocs";
import { otherTypes } from "../custom/otherTypes";
import { Link } from "@material-ui/core";

export function TableOfContents() {
  return (
    <div className="table-of-contents">
      <div className="docs-header">Table Of Contents</div>
      <ul>
        <li>Endpoints</li>
        <ul>
          {endpointDocs.map((endpoint, index) => (
            <li key={index}>
              <Link href={`/docs#${endpoint.id}`}>{endpoint.endpointName}</Link>
            </li>
          ))}
        </ul>
        <li>
          <Link href={`/docs#types-header`}>Types</Link>
        </li>
        <ul>
          {otherTypes.map((type, index) => (
            <li key={index}>
              <Link href={`/docs#${type.id}`}>{type.name}</Link>
            </li>
          ))}
        </ul>
      </ul>
    </div>
  );
}
