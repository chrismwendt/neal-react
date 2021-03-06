import React from "react";
import { Container, Row, Col } from "../helpers/bootstrap";
import classNames from "classnames";

export class Hero extends React.Component {

  static propTypes = {
    backgroundImage: React.PropTypes.string,
  };

  render() {
    const _style = {};
    const { backgroundImage, ...otherProps } = this.props;
    if (backgroundImage) {
      _style.backgroundImage = `url(${backgroundImage})`;
    }
    const _className = classNames("neal-hero jumbotron jumbotron-fluid", this.props.className);
    return (
      <div {... otherProps} className={_className} style={_style}>
        <Container>
          { this.props.children }
        </Container>
      </div>
    );
  }
}
