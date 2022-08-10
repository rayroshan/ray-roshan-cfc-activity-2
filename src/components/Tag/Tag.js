import React from "react";
import classes from "./Tag.module.scss";

const Tag = (props) => {
  const { tags, selected, setSelected } = props;

  const renderTags = () => {
    return tags?.map((tag, index) => (
      <li
        key={index}
        onClick={() => setSelected(tag)}
        className={selected === tag ? [classes.tag__item, classes.tag__item__active].join(' ') : classes.tag__item}
      >
        {tag}
      </li>
    ));
  };

  return <ul className={classes.tag}>{renderTags()}</ul>;
};

export default Tag;
