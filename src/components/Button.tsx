import React from "react";


type buttonProps = {
    icon?: string ;
    text?: string ;
    color?: string ;
    disabled?: boolean;
    callback?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Button: React.FC<buttonProps> = ({icon, text, color ,disabled ,callback,}) => {
    const styles = {
        background: color,
        width: '25%',
    }
    return (
        <button
            disabled={disabled}
            style={styles}
            onClick={callback}
            className="btn btn-light btn-outline mb-1 mt-1"
        >
            {icon && <i className={icon + " mr-1"}/>}
            {text && <span>{text}</span>}
        </button>
    );
};
