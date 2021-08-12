import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTags } from "../../reducks/tags/selectors";
import { fetchTags } from "../../reducks/tags/operations";

export default function Header() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const tags = getTags(selector);

  useEffect(() => {
    dispatch(fetchTags());
  }, []);

  return (
    <div>
      <header>
        <div class="header">
          <p>Zoomglam</p>
          <input type="button" value="Favourites" class="favourites" />
        </div>
      </header>
      <nav class="navigation">
        <ul>
          {tags["results"] &&
            tags["results"].map((tag) => (
              <li key={tag.id}>
                <a href="/search">
                  <input type="submit" value={tag.name} class="raise" />
                </a>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
}
