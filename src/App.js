import InsertAside from "./aside";
import InsertHeader from "./header";
import "./style.css"

const imageOne = "";

const asideJSX = InsertAside();
const headerJSX = InsertHeader();
function App() {
  return(
    <>
      <header id="header">
        {headerJSX}
      </header>
      <main>

      </main>
      <aside id="aside">
        {asideJSX}
      </aside>
      <footer>

      </footer>
    </>
  );
}

export default App;
