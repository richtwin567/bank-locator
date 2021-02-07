import React, { Component } from "react";
import "./chip.css";

interface ChipProps {
	class?: string;
	text: string;
}

interface ChipState {}

export class Chip extends Component<ChipProps, ChipState> {
	render() {
		return (
			<div
				className={`chip${
					this.props.class ? " " + this.props.class : ""
				}`}
			>
				<p>{this.props.text}</p>
			</div>
		);
	}
}

export default Chip;
