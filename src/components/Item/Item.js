import React, { useState } from "react";
import classes from "./Item.module.scss";
import moment from "moment";

const Item = (props) => {
  const { title, recallId, date_published } = props;
  const [open, setOpen] = useState(false);

  return (
    <div className={classes.item} onClick={() => setOpen(!open)}>
      <div className={classes.item__title}>{title}</div>
      {open ? (
        <div className={classes.item__details}>
          <div className={classes.item__details__item}>
            <div>Recall ID</div>
            <div>{recallId}</div>
          </div>
          <div className={classes.item__details__item}>
            <div>Published</div>
            <div>{moment(date_published, "X").format("lll")}</div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Item;
