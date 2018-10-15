import React, { Component } from "react";
import GridItem from "./GridItem";
import { STORAGE_URL } from "../Constants";
import "./Grid.css";

export default class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawing: null,
    };
  }

  componentDidMount() {
    fetch(STORAGE_URL)
      .then(response => response.json())
      .then(jsonResponse => this.setState({ drawing: jsonResponse.drawing }));
  }

  render() {
    if (!this.state.drawing) {
      return <div>"Loading..."</div>;
    }
    // Given a 2d array, render it
    const gridItems = [];
    for (let rowIndex = 0; rowIndex < this.state.drawing.length; rowIndex++) {
      gridItems[rowIndex] = [];
      for (let columnIndex = 0; columnIndex < this.state.drawing[rowIndex].length; columnIndex++) {
        gridItems[rowIndex].push(
          <GridItem color={this.state.drawing[rowIndex][columnIndex]} rowIndex={rowIndex} columnIndex={columnIndex} />,
        );
      }
    }

    return (
      <div>
        {gridItems.map(rowItem => {
          return <div className="GridRow">{rowItem}</div>;
        })}
      </div>
    );
  }
}
