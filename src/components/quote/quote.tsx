import { Col, Row, Space } from "antd";
import { Component } from "react";
import "./quote.scss";

interface QuoteProps {}

interface QuoteState {
  quote: string;
  author: string;
}

class Quote extends Component<QuoteProps, QuoteState> {
  constructor(props: QuoteProps) {
    super(props);
    this.state = {
      quote: "Note that this journey is uniquely yours, no one elses. So the path has to be your own.",
      author: "Jon Kabat-Zinn",
    };

    this.loadQuote = this.loadQuote.bind(this);
  }

  loadQuote() {}

  render() {
    this.loadQuote();
    return (
      <div data-testid="Quote">
        <Space id="quote" className="quote" direction="vertical">
          <Row justify="center" className="quote-text">
            <Col span={24}>
              <h1>
                <i>
                  &ldquo;{this.state.quote}&rdquo;
                </i>
              </h1>
            </Col>
          </Row>
          <Row justify="center">
            <Col span={12}>
              <h3>&mdash; {this.state.author}</h3>
            </Col>
          </Row>
        </Space>
      </div>
    );
  }
}
export default Quote;
