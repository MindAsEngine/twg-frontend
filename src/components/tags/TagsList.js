import { Tag } from "./Tags";
import React, { useRef } from "react";
import useScrollOnDrag from "react-scroll-ondrag";

const TagsList = ({ runScroll }) => {
  const tags = [
    { tagsName: "droplet", tagsText: "Бесплатный вайфай" },
    { tagsName: "medal", tagsText: "Трёхразовое питание" },
    { tagsName: "music", tagsText: "тег1" },
    { tagsName: "droplet", tagsText: "Первая линия" },
    { tagsName: "droplet", tagsText: "Первая линия" },
  ];

  const ref = useRef();
  const { events } = useScrollOnDrag(ref);
  return (
    <div className="tags__wrapper container m-centr pd" {...events} ref={ref}>
      <div className="tags__list flex">
        {tags.map((el, i) => (
          <Tag tagsName={el.tagsName} tagsText={el.tagsText} />
        ))}
      </div>
    </div>
  );
};

export default TagsList;
