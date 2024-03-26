import { handleDragStart } from "../../app/function";
import { ReactComponent as Droplet } from "../../img/tags/droplet.svg";
import { ReactComponent as Medal } from "../../img/tags/medal.svg";
import { ReactComponent as Music } from "../../img/tags/music.svg";
import { ReactComponent as Wifi } from "../../img/tags/wifi.svg";

import "./tags.scss";

//Тут пишем все значения tags
const tagIcons = {
  droplet: Droplet,
  medal: Medal,
  music: Music,
  wifi: Wifi,
};

export const TagsAsideMap = ({ tagsName, tagsColor, tagsText }) => {
  const TagIcon = tagIcons[tagsName];

  return (
    <div className={tagsColor + " flex align-cent tags_aside f-cWh fw400 fs16 lh22"}>
      {TagIcon && <TagIcon onDragStart={handleDragStart} />}
      <p>{tagsText}</p>
    </div>
  );
};
