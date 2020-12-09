import { PageHeader } from 'antd';

import React from 'react';
type StatusProps = {
    status: string
}
const StatusBanner: React.FC<StatusProps> = ({status}) => {
    return (
        <PageHeader
            title="Result"
            subTitle= {`YOU ` + status}
        />
    );
}

export default StatusBanner;