import React, { Component } from "react";
import {
  View,
  Layer,
  PointText,
  Circle,
  Ellipse,
  Tool,
} from "react-paper-bindings";

class PaperContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mounted: false,
    };
    this._box = null;
  }

  componentDidMount() {
    this.setState({ mounted: true });
  }

  render() {
    const { mounted } = this.state;
    const box = this._box && this._box.getBoundingClientRect();

    const viewProps = {
      width: (box && box.width) || 1000,
      height: (box && box.height) || 1000,
    };

    return (
      <div className="App" ref={(ref) => (this._box = ref)}>
        {mounted && (
          <View {...viewProps}>
            <Layer>
              <PointText
                point={[200, 200]}
                content={"Click Me"}
                fillColor={"#000000"}
                fontSize={18}
              />
              <Ellipse
                center={[100, 100]}
                size={[70, 25]}
                strokeWidth={2.5}
                strokeColor={"#61DAFB"}
              />
              <Circle center={[80, 50]} radius={30} strokeColor={"black"} />
              <Tool active={true} name={"circle"} />
              <PointText
                content={"Paper.js"}
                fillColor={"red"}
                fontFamily={"Courier New"}
                fontSize={30}
                fontWeight={"bold"}
                justification={"center"}
                point={[150, 180]}
              />
            </Layer>
          </View>
        )}
      </div>
    );
  }
}

export default PaperContainer;
