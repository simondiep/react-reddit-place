import React from "react";
import ColorPicker from "rc-color-picker";
import { STORAGE_URL } from "../Constants";
import "./GridItem.css";
import "rc-color-picker/assets/index.css";

const GridItem = props => (
  <ColorPicker
    className="ColorPicker"
    color={props.color ? props.color : "white"}
    onClose={onColorPickerClose.bind(null, props.rowIndex, props.columnIndex)}
    placement="topLeft"
    enableAlpha={false}
  >
    <div className="GridItem" />
  </ColorPicker>
);

function onColorPickerClose(rowIndex, columnIndex, { color }) {
  fetch(STORAGE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({ rowIndex, columnIndex, color }),
  });
}

export default GridItem;
