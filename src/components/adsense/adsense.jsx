import React from "react";
import "./adsense.scss";

class Adsense extends React.Component {
  componentDidMount() {
    (adsbygoogle = window.adsbygoogle = []).push({});
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

Adsense.Mobile = () => {
  return (
    <ins
      style={{ display: "block" }}
      className="adsbygoogle adsense"
      data-ad-client="ca-pub-3948296506852082"
      data-ad-slot="3038914425"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export default Adsense;
