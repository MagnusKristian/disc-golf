//import InsertAside from "./aside";
//import { aside } from "./aside";
import { header } from "./header";
import { main } from "./main";
import { footer } from "./footer";
import InsertHeader from "./header";
import "./style.css"
import { aside } from "./aside";
import { Article } from './components/Article'


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

      <Article title="My Article" content="This is my article" color="#252525" />

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
