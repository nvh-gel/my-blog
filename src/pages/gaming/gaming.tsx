import { FC } from "react";
import Header from "../../components/header/header.lazy";
import { gamingMenu } from "../../configs/menu-items";

interface GamingProps {}

const Gaming: FC<GamingProps> = () => (
  <div data-testid="Gaming">
    <Header items={gamingMenu} />
    <h2 style={{paddingTop:'60px'}}>Gaming Page is under construction. Please come back later.</h2>
  </div>
);

export default Gaming;
