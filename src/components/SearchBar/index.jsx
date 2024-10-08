import searchIcon from "../../assets/search.png";

const SearchBar = () => {
  return (
    <label htmlFor="search" className="search-bar">
      <img src={searchIcon} alt="ícone de busca" />
      <input name="search" type="text" placeholder="Procure seu dinheiro" />
    </label>
  );
};

export default SearchBar;
