import Box from "./Box";
import React from "react";
import { render } from "@testing-library/react";

const defaultBoxProps={
    id="1",
    width=5,
    height=5,
    remove=()=>null,
    backgroundColor="red"
}


describe("renders without crashing",function(){
    it("renders with[out crashing", function () {
        render(<Box id={defaultBoxProps.id} />);
      });

})

