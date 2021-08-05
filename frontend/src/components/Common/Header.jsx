import React from "react";

export default function Header() {
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
          <li>
            {" "}
            <input type="submit" value="Background" class="raise" />
          </li>
          <li>
            {" "}
            <input type="submit" value="Texture Background" class="raise" />
          </li>
          <li>
            <input type="submit" value="Office" class="raise" />
          </li>
          <li>
            <input type="submit" value="Meeting" class="raise" />
          </li>
          <li>
            <input type="submit" value="Casual" class="raise" />
          </li>
          <li>
            <input type="submit" value="Forest" class="raise" />
          </li>
          <li>
            <input type="submit" value="Book" class="raise" />
          </li>
          <li>
            <input type="submit" value="Ocean" class="raise" />
          </li>
          <li>
            <input type="submit" value="House" class="raise" />
          </li>
          <li>
            <input type="submit" value="Car" class="raise" />
          </li>
          <li>
            <input type="submit" value="Sunrise" class="raise" />
          </li>
          <li>
            <input type="submit" value="Coffee" class="raise" />
          </li>
          <li>
            <input type="submit" value="Space" class="raise" />
          </li>
          <li>
            <input type="submit" value="Flowers" class="raise" />
          </li>
          <li>
            <input type="submit" value="Galaxy" class="raise" />
          </li>
          <li>
            <input type="submit" value="Planets" class="raise" />
          </li>
          <li>
            <input type="submit" value="Tech" class="raise" />
          </li>
        </ul>
      </nav>
    </div>
  );
}
