import React, { FC } from 'react';
import Header from '../../components/header/header.lazy';
import { programmingMenu } from '../../menu-items';


interface ProgrammingProps {}

const Programming: FC<ProgrammingProps> = () => (
  <div data-testid="Programming">
    <Header items={programmingMenu}/>
    <h2>Programming Page is under construction. Please come back later.</h2>
  </div>
);

export default Programming;
