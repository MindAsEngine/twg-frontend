import { Tag } from "./Tags";
import React, { useRef } from "react";
import useScrollOnDrag from "react-scroll-ondrag";
import { TagsAsideMap } from "./TagsAsideMap";

const TagsList = ({ runScroll, tagsAside, tagsColor}) => {
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
        {tags.map((el, i) =>
          tagsAside ? (
            <TagsAsideMap tagsName={el.tagsName} tagsText={el.tagsText} tagsColor={tagsColor}/>
          ) : (
            <Tag tagsName={el.tagsName} tagsText={el.tagsText} />
          )
        )}
      </div>
    </div>
  );
};

export default TagsList;
