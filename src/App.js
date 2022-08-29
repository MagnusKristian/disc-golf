//import InsertAside from "./aside";
//import { aside } from "./aside";
import { header } from "./header";
import { main } from "./main";
import { footer } from "./footer";
import InsertHeader from "./header";
import "./style.css"
import { aside } from "./aside";


// const asideJSX = InsertAside();
const headerJSX = InsertHeader();


function App() {
  return(
    <>
      <header id="header">
        {headerJSX}
      </header>

      <main id="main">
        {main}
      </main>

      <aside id="aside">
        {/* {asideJSX} */}
        {aside}
      </aside>

      <footer id="footer">
        {footer}
      </footer>

    </>
  );
}

export default App;
