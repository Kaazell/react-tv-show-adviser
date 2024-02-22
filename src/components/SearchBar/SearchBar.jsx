import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";
export function SearchBar() {
  return (
    <>
      <SearchIcon size={27} className={s.icon} />
      <input
        type="text"
        placeholder="Search a TV Show you may like"
        className={s.input}
      />
    </>
  );
}
