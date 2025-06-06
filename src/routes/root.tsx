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
              <a href={`/Test01`}>Test 01 (Basic RHF)</a>
            </li>
            <li>
              <a href={`/Test02`}>Test 02 (useRef Basics)</a>
            </li>
            <li>
              <a href={`/Test03`}>Test 03 (useCallback Basics)</a>
            </li>
            <li>
              <a href={`/Test04`}>Test 04 (MUI Sandbox)</a>
            </li>
            <li>
              <a href={`/Test05`}>Test 05 (MUI Grid Sandbox)</a>
            </li>
            <li>
              <a href={`/Test06`}>Test 06 (MUI DataGrid)</a>
            </li>
            <li>
              <a href={`/Test07`}>Test 07 (Synthetic Events)</a>
            </li>
            <li>
              <a href={`/Test08`}>Test 08 (MUI TabContext Component)</a>
            </li>
            <li>
              <a href={`/Test09`}>Test 09 (CSS Margin Collapse)</a>
            </li>
            <li>
              <a href={`/Test10`}>Test 10 (Background)</a>
            </li>
            <li>
              <a href={`/Test11`}>Test 11 (Block versus Inline)</a>
            </li>
            <li>
              <a href={`/Test12`}>Test 12 (MUI Theme)</a>
            </li>
            <li>
              <a href={`/Test13`}>Test 13 (MUI JSS-Based Styling)</a>
            </li>
            <li>
              <a href={`/Test14`}>Test 14 (MUI Tabs)</a>
            </li>
            <li>
              <a href={`/Test15`}>Test 15 (Promises, Classic Construct)</a>
            </li>
            <li>
              <a href={`/Test16`}>Test 16 (Promises, async / await Const.)</a>
            </li>
            <li>
              <a href={`/Test17`}>Test 17 (Destructuring with TS)</a>
            </li>
            <li>
              <a href={`/Test18`}>Test 18 (TypeScript Sandbox)</a>
            </li>
            <li>
              <a href={`/Test19`}>Test 19 (RHF's useFieldArray Hook)</a>
            </li>
            <li>
              <a href={`/Test20`}>Test 20 (array.map and render)</a>
            </li>
            <li>
              <a href={`/Test21`}>Test 21 (useEffect with console.log)</a>
            </li>
            <li>
              <a href={`/Test22`}>Test 22 (useMemo Intro)</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>    </>
  );
}