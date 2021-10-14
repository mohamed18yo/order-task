import "./App.css";
import Header from "./components/header/header";
import OrderPage from "./screen/orderSecreen/orderPage";
import Tap from "./components/tap/tap";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GStyle } from "./Global.style";
import { useDarkMode } from "./styles/useDarkMode";

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const ThemeMode = theme === "light" ? lightTheme : darkTheme;
  return (
    <DndProvider backend={HTML5Backend}>
      <ThemeProvider theme={ThemeMode}>
          <GStyle />
        <div className="App">
          <Header Theme={theme} Toggole={toggleTheme} />
          <Tap />
          <OrderPage />
        </div>
      </ThemeProvider>
    </DndProvider>
  );
}

export default App;
