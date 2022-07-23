import React from "react";
import "./adsense.scss";

class Adsense extends React.Component {
  componentDidMount() {
    (adsbygoogle = window.adsbygoogle = []).push({});
  }
  shouldComponentUpdate(nextProps) {
    return false;
  }
  render() {
    return (
      <ins
        style={{ display: "block" }}
        className="adsbygoogle adsense"
        data-ad-client={this.props.client}
        data-ad-format={this.props.format}
        data-ad-slot={this.props.slot}
        data-full-width-responsive={this.props.responsive}
        data-layout-key={this.props.layoutKey}
      ></ins>
    );
  }
}

export default Adsense;
