import { Col, Image, Menu, Row } from "antd";
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
    <div className="header">
      <Row justify="center">
        <Col span={5}>
          <Link className="logo" href={process.env.PUBLIC_URL}>
            <Image
              src={`${process.env.PUBLIC_URL}/img/logo.png`}
              preview={false}
            />
            <span>den</span>
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
