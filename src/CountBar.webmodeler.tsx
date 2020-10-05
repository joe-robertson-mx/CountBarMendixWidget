import { Component, ReactNode, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";
import { CountBarPreviewProps } from "../typings/CountBarProps";

declare function require(name: string): string;

export class preview extends Component<CountBarPreviewProps> {
    render(): ReactNode {
        return <HelloWorldSample sampleText={this.props.sampleText} />;
    }
}

export function getPreviewCss(): string {
    return require("./ui/CountBar.css");
}
