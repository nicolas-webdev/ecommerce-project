import React, { useState } from "react";
import MenuItem from "../menu-item/menu-item.component";
import { Categories } from "../../lib/directory.data";
import "./directory.styles.scss";

const Directory = () => {
  const [sections, setSections] = useState(Categories);
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default Directory;
