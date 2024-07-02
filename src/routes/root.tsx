import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>Sandbox 31</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <a href={`/test1`}>Test 1 (Basic RHF)</a>
            </li>
            <li>
              <a href={`/test2`}>Test 2 (useRef Basics)</a>
            </li>
            <li>
              <a href={`/test3`}>Test 3 (useCallback Basics)</a>
            </li>
            <li>
              <a href={`/test4`}>Test 4 (MUI Sandbox)</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>    </>
  );
}