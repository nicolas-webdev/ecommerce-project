import React, { useState } from "react";
import MenuItem from "../menu-item/menu-item.component";
import { Categories } from "../../lib/directory.data";
import "./directory.styles.scss";

const Directory = () => {
  const [sections, setSections] = useState(Categories);
  return (
    <div className="directory-menu">
      {sections.map(({ title, imageUrl, size, id }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
      ))}
    </div>
  );
};

export default Directory;
