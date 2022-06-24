import React, { FunctionComponent } from "react";
import Image from "next/image";

type ButtonProps = {
    handleClick: () => void
}

const Button = (props: ButtonProps) => {
    return (
        <div className="editButton visible active:bg-gray-300 rounded-full w-1/6 invert absolute right-0 top-0" onClick={props.handleClick}>
            <Image
                src={"/img/pencil.png"}
                alt={"edit.png"}
                width="15"
                height="15"
            />
        </div>
    )
}
export default Button;