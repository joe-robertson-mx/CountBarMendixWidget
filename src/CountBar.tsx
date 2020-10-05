import { Component, ReactNode, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";
import { hot } from "react-hot-loader/root";
import { CountBarContainerProps } from "../typings/CountBarProps";

import "./ui/CountBar.css";

class CountBar extends Component<CountBarContainerProps> {
    render(): ReactNode {
        return <HelloWorldSample sampleText={this.props.sampleText ? this.props.sampleText : "World"} />;
    }
}

export default hot(CountBar);
