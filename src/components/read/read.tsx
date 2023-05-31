import { Button, Col, Row } from "antd";
import { Component } from "react";
import Gallery from "react-photo-gallery";
import { BookData } from "../../interface/book";
import { bookCategories, bookData } from "../../mock/mock-data";
import "./read.scss";

interface ReadProps {}

interface ReadState {
  mode: string;
  books: BookData[];
}

class Read extends Component<ReadProps, ReadState> {
  private cats: string[];

  constructor(props: ReadProps) {
    super(props);
    this.cats = bookCategories.slice();
    this.cats.splice(0, 0, "All");
    this.state = {
      mode: "All",
      books: bookData,
    };

    this.filterBook = this.filterBook.bind(this);
  }

  filterBook(cat: string): void {
    this.setState({
      mode: cat,
      books:
        cat === "All"
          ? bookData
          : bookData.filter((book) => book.category === cat),
    });
  }

  render() {
    const srcSet = this.state.books.map((book) => ({
      src: book.img,
      width: 2,
      height: 3,
    }));

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
          {this.cats.map((cat) => (
            <Button
              type="link"
              key={cat}
              onClick={() => this.filterBook(cat)}
              className={cat === this.state.mode ? "active" : ""}
            >
              {cat}
            </Button>
          ))}
        </Row>
        <Row justify="center">
          <Col span={20} className="books">
            <Gallery
              photos={srcSet}
              direction="column"
              columns={4}
              margin={10}
            />
          </Col>
        </Row>
      </div>
    );
  }
}
export default Read;
