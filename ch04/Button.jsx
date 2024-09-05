import React from "react";

function Button(progs){
    return(
        <button>
            <b>
                {progs.children()}
            </b>

        </button>
    )
}

export  default Button;