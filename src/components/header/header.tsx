import React, { FC } from 'react';
import { HeaderWrapper } from './header.styled';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
 <HeaderWrapper data-testid="Header">
    Header Component
 </HeaderWrapper>
);

export default Header;
