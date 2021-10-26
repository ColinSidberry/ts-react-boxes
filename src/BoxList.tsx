import React, { useState } from "react";
import Box, {BoxProps} from "./Box";
import NewBoxForm from "./NewBoxForm";
import { NewBoxInterface } from "./NewBoxForm";

/** Manage list of boxes
 *
 * State:
 * - boxes: [ { id, width, height, backgroundColor }, ... ]
 */


function BoxList():JSX.Element {
  //COMMENT: update BoxProps => to be BoxInterface
  const [boxes, setBoxes] = useState<BoxProps[]>([])

  /** add box with given { id, width, height, backgroundColor } */
  function add(newBox:NewBoxInterface):void {
    setBoxes(boxes => [...boxes, newBox]);
  }

  /** remove box matching that id. */
  function remove(id: string): void {
    setBoxes(boxes => boxes.filter(box => box.id !== id));
  }

  return (
    <div>
      <NewBoxForm createBox={add} />
      {boxes.map(({ id, width, height, backgroundColor }) => (
        <Box
          key={id}
          id={id}
          width={width}
          height={height}
          remove={remove}
          backgroundColor={backgroundColor}
        />
      ))}
    </div>
  );
}

export default BoxList;
