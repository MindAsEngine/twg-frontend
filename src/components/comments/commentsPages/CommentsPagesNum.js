import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import CommentItem from "../CommentItem/CommentItem";

// const CommentsPagesNum = () => {

//     return(
//         <div className="pages__amount flex justif-ss-end">

//         </div>
//     )
// }

// export default CommentsPagesNum;

const items = [
  {
    userName: "Игорь В.",
    userAvatar: null,
    userRating: 4,
    userComment:
      "Очень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — островное государство на Ближнем Востоке[5] (хотя вне географических критериев может считаться частью Европы[6]), в восточной части Средиземного моря...",
  },
  {
    userName: "Игорь В.",
    userAvatar: null,
    userRating: 4,
    userComment:
      "Очень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — островное государство на Ближнем Востоке[5] (хотя вне географических критериев может считаться частью Европы[6]), в восточной части Средиземного моря...",
  },
  {
    userName: "Игорь В.",
    userAvatar: null,
    userRating: 4,
    userComment:
      "Очень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — островное государство на Ближнем Востоке[5] (хотя вне географических критериев может считаться частью Европы[6]), в восточной части Средиземного моря...",
  },
  {
    userName: "Игорь В.",
    userAvatar: null,
    userRating: 4,
    userComment:
      "Очень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — островное государство на Ближнем Востоке[5] (хотя вне географических критериев может считаться частью Европы[6]), в восточной части Средиземного моря...",
  },
  {
    userName: "Игорь В.",
    userAvatar: null,
    userRating: 4,
    userComment:
      "Очень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — островное государство на Ближнем Востоке[5] (хотя вне географических критериев может считаться частью Европы[6]), в восточной части Средиземного моря...",
  },
  {
    userName: "Игорь В.",
    userAvatar: null,
    userRating: 4,
    userComment:
      "Очень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — островное государство на Ближнем Востоке[5] (хотя вне географических критериев может считаться частью Европы[6]), в восточной части Средиземного моря...",
  },
  {
    userName: "Игорь В.",
    userAvatar: null,
    userRating: 4,
    userComment:
      "Очень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — островное государство на Ближнем Востоке[5] (хотя вне географических критериев может считаться частью Европы[6]), в восточной части Средиземного моря...",
  },
  {
    userName: "Игорь В.",
    userAvatar: null,
    userRating: 4,
    userComment:
      "Очень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — островное государство на Ближнем Востоке[5] (хотя вне географических критериев может считаться частью Европы[6]), в восточной части Средиземного моря...",
  },
  {
    userName: "Игорь В.",
    userAvatar: null,
    userRating: 4,
    userComment:
      "Очень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — островное государство на Ближнем Востоке[5] (хотя вне географических критериев может считаться частью Европы[6]), в восточной части Средиземного моря...",
  },
  {
    userName: "Игорь В.",
    userAvatar: null,
    userRating: 4,
    userComment:
      "Очень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — островное государство на Ближнем Востоке[5] (хотя вне географических критериев может считаться частью Европы[6]), в восточной части Средиземного моря...",
  },
  {
    userName: "Игорь В.",
    userAvatar: null,
    userRating: 4,
    userComment:
      "Очень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — островное государство на Ближнем Востоке[5] (хотя вне географических критериев может считаться частью Европы[6]), в восточной части Средиземного моря...",
  },
  {
    userName: "Игорь В.",
    userAvatar: null,
    userRating: 4,
    userComment:
      "Очень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — островное государство на Ближнем Востоке[5] (хотя вне географических критериев может считаться частью Европы[6]), в восточной части Средиземного моря...",
  },
  {
    userName: "Игорь В.",
    userAvatar: null,
    userRating: 4,
    userComment:
      "Очень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — островное государство на Ближнем Востоке[5] (хотя вне географических критериев может считаться частью Европы[6]), в восточной части Средиземного моря...",
  },
  {
    userName: "Игорь В.",
    userAvatar: null,
    userRating: 4,
    userComment:
      "Очень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — островное государство на Ближнем Востоке[5] (хотя вне географических критериев может считаться частью Европы[6]), в восточной части Средиземного моря...",
  },
  {
    userName: "Игорь В.",
    userAvatar: null,
    userRating: 4,
    userComment:
      "Очень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — островное государство на Ближнем Востоке[5] (хотя вне географических критериев может считаться частью Европы[6]), в восточной части Средиземного моря...",
  },
  {
    userName: "Игорь В.",
    userAvatar: null,
    userRating: 4,
    userComment:
      "Очень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — островное государство на Ближнем Востоке[5] (хотя вне географических критериев может считаться частью Европы[6]), в восточной части Средиземного моря...",
  },
  {
    userName: "Игорь В.",
    userAvatar: null,
    userRating: 4,
    userComment:
      "Очень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — островное государство на Ближнем Востоке[5] (хотя вне географических критериев может считаться частью Европы[6]), в восточной части Средиземного моря...",
  },
  {
    userName: "Игорь В.",
    userAvatar: null,
    userRating: 4,
    userComment:
      "Очень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — островное государство на Ближнем Востоке[5] (хотя вне географических критериев может считаться частью Европы[6]), в восточной части Средиземного моря...",
  },
  {
    userName: "Игорь В.",
    userAvatar: null,
    userRating: 4,
    userComment:
      "Очень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — островное государство на Ближнем Востоке[5] (хотя вне географических критериев может считаться частью Европы[6]), в восточной части Средиземного моря...",
  },
  {
    userName: "Игорь В.",
    userAvatar: null,
    userRating: 4,
    userComment:
      "Очень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — оОчень понравилось. Респу́блика Кипр (греч. Κυπριακή Δημοκρατία [kipriaˈki ðimokraˈti.a], тур. Kıbrıs Cumhuriyeti [ˈkɯbɾɯs ˈd͡ʒumhuɾijeti]) — островное государство на Ближнем Востоке[5] (хотя вне географических критериев может считаться частью Европы[6]), в восточной части Средиземного моря...",
  },
];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <CommentItem
            userAvatar={item.userAvatar}
            userName={item.userName}
            userRating={item.userRating}
            userComment={item.userComment}
          />
        ))}
    </>
  );
}

function PaginatedItems({ itemsPerPage, comments }) {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = comments;
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return comments > 0 ? (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        className="pagination__ul flex justif-ss-end"
        breakLabel="..."
        nextLabel={null}
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={pageCount}
        previousLabel={null}
        renderOnZeroPageCount={null}
      />
    </>
  ) : (
    <div className="no-comments flex justif-ss-cent">
      <p className="fw400 fs32 lh22">На этот тур отзывов еще нет</p>
    </div>
  );
}

export default PaginatedItems;
