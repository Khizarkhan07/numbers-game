import React from 'react';
type props = {
    value: number
}
const Slice: React.FC<props> = ({value})  => {
    return (
        <div className="text">{value}</div>
    );
}

export default Slice;