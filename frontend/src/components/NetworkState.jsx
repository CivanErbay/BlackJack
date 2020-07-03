import React from "react";

export default function ({networkState}){

    return (
        <div>
            {networkState === "LOADING" && <h3>Loading...</h3>}

            {networkState === "ERROR" && <h3>Error</h3>}
        </div>
    )

}