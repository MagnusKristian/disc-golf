import InsertAside from "./aside";
import { aside } from "./aside";
import InsertHeader from "./header";
import "./style.css"


const asideJSX = InsertAside();
const headerJSX = InsertHeader();


function App() {
  return(
    <>
      <header id="header">
        {headerJSX}
      </header>
      <main id="main">

      </main>
      <aside id="aside">
        {asideJSX}
        {aside}
      </aside>
      <footer id="footer">

      </footer>
    </>
  );
}

export default App;
