import React from "react";
import { endpointDocs } from "../custom/endpointDocs";
import { EndpointDocumentation } from "./EndpointDocumentation";

export function Endpoints() {
  return (
    <div className="endpoints-container">
      {endpointDocs.map((endpoint, index) => (
        <EndpointDocumentation key={index} endpoint={endpoint} />
      ))}
    </div>
  );
}
