import { Col, Menu, Row } from "antd";
import { MenuItemType } from "antd/es/menu/hooks/useItems";
import Link from "antd/es/typography/Link";
import { MenuInfo } from "rc-menu/lib/interface";
import { FC } from "react";
import "./header.scss";

export interface HeaderProps {
  items: MenuItemType[];
}

const Header: FC<HeaderProps> = ({ items }) => {
  function handleScrollTo(item: MenuInfo): void {
    const element = document.getElementById(item.key);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="header" id="top">
      <Row justify="center">
        <Col span={5}>
          <Link className="logo" href={process.env.PUBLIC_URL}>
            <span>E</span>den
          </Link>
        </Col>
        <Col span={14}>
          <Menu
            mode="horizontal"
            items={items}
            className="navbar"
            onClick={(item) => handleScrollTo(item)}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Header;
