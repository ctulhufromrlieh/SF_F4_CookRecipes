import * as React from "react";

import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

class SchemeAPI extends React.Component {
    render(){
        const url = "http://127.0.0.1:8000/openapi?format=openapi-json";        
        return (
            <>
                <h2>
                    Scheme API
                </h2>
                <SwaggerUI url={url} />
            </>
        );
    }
}

export default SchemeAPI;