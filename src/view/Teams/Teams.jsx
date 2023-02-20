import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { GridComponent } from "../../components";
import { useCurrentTheme } from "../../context/ThemeContext";

const Teams = () => {
  const currentTheme = useCurrentTheme();

  return (
    <main className="flexCenter flexDirectionColumn height100Per">
      <section
        className={`${
          currentTheme === "dark" ? "ag-theme-alpine-dark" : "ag-theme-alpine"
        }`}
        style={{ minWidth: 810, minHeight: 600 }}
      >
        <GridComponent />
      </section>
    </main>
  );
};

export default Teams;
