import React from "react";
import { TailSpin } from "react-loader-spinner";

const Loader = () => {



    return (
        <div className="loader">
            <TailSpin
                height="20"
                width="20"
                radius="0"
                color='#CCC'
                ariaLabel='five-dots-loading'
                wrapperStyle
                wrapperclassName
            />
        </div>
    );
}

export default Loader