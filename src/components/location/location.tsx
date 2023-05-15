import React, { FC } from 'react';
import { LocationWrapper } from './location.styled';

interface LocationProps {}

const Location: FC<LocationProps> = () => (
 <LocationWrapper data-testid="Location">
    Location Component
 </LocationWrapper>
);

export default Location;
