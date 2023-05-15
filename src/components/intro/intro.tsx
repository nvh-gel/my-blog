import React, { FC } from 'react';
import { IntroWrapper } from './intro.styled';

interface IntroProps {}

const Intro: FC<IntroProps> = () => (
 <IntroWrapper data-testid="Intro">
    Intro Component
 </IntroWrapper>
);

export default Intro;
