import { useEffect } from "react";
import "./style.scss";

const Display = () => {
  const arr = [
    {
      country: "Страна",
      group: "Группа 1",
    },
    {
      country: "Страна",
      group: "Группа 1",
    },
    {
      country: "Страна",
      group: "Группа 1",
    },
    {
      country: "Страна",
      group: "Группа 1",
    },
    {
      country: "Страна",
      group: "Группа 1",
    },
    {
      country: "Страна",
      group: "Группа 1",
    },
    {
      country: "Страна",
      group: "Группа 1",
    },
    {
      country: "Страна",
      group: "Группа 1",
    },
    {
      country: "Страна",
      group: "Группа 1",
    },
  ];
  const arr2 = [
    {
      country: "Страна",
      group: "Группа 1",
    },
    {
      country: "Страна",
      group: "Группа 1",
    },
    {
      country: "Страна",
      group: "Группа 1",
    },
    {
      country: "Страна",
      group: "Группа 1",
    },
    {
      country: "Страна",
      group: "Группа 1",
    },
    {
      country: "Страна",
      group: "Группа 1",
    },
    {
      country: "Страна",
      group: "Группа 1",
    },
    {
      country: "Страна",
      group: "Группа 1",
    },
    {
      country: "Страна",
      group: "Группа 1",
    },
  ];
  return (
    <div className="display container m-centr">
      <section className="display__list">
        <div className="display__group">
          <div className="group__title">
            <p className="fw400 fs40 lh41">Группа стран 1</p>
          </div>
          <ul className="group__list">
              {arr.map((el, i) => (
                <li className="fw400 fs36 lh44">
                    {el.country}
                </li>
              ))}
          </ul>
        </div>
        <div className="display__group">
          <div className="group__title">
            <p className="fw400 fs40 lh41">Группа стран 2</p>
          </div>
          <ul className="group__list">
              {arr2.map((el, i) => (
                <li className="fw400 fs36 lh44">
                    {el.country}
                </li>
              ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Display;
