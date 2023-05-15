import React, { FC } from 'react';
import { ServiceWrapper } from './service.styled';

interface ServiceProps {}

const Service: FC<ServiceProps> = () => (
 <ServiceWrapper data-testid="Service">
    Service Component
 </ServiceWrapper>
);

export default Service;
