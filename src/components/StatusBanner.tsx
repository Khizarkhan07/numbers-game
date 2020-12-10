import { PageHeader } from 'antd';

import React from 'react';
type StatusProps = {
    status: string
}
const StatusBanner: React.FC<StatusProps> = ({status}) => {
    return (
        <PageHeader
            title="Result"
            subTitle= {status}
        />
    );
}

export default StatusBanner;