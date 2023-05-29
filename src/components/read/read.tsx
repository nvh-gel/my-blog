import { Button, Col, Image, Row } from "antd";
import { Component } from "react";
import { bookCategories, bookData } from "../../mock/mock-data";
import "./read.scss";

interface ReadProps {}

interface ReadState {}

class Read extends Component<ReadProps, ReadState> {
  render() {
    const cats = bookCategories.slice();
    cats.splice(0, 0, "All");
    return (
      <div data-testid="Read">
        <Row justify="center" id="future">
          <Col span={24}>
            <div className="headline">
              <p>Future Reads</p>
            </div>
          </Col>
        </Row>
        <Row justify="center">
          <div className="triangle" />
        </Row>
        <Row justify="center" className="filter">
          {cats.map((cat) => (
            <Button type="link" key={cat}>
              {cat}
            </Button>
          ))}
        </Row>
        <Row justify="center">
          <Col span={20}>
            <Row justify="space-evenly" style={{marginBottom:20}}>
              {bookData.map((book) => (
                <Col span={5} key={book.id}>
                  <div className="book">
                    <Image src={book.img} preview={false}/>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Read;
