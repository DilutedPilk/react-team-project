import { useState } from "react";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [items, , setItems] = useState([]);

  function handleSearch(searchText){
    
  }

  return(
    <div>
        <SearchBar onSearch={handleSearch} />
    </div>
  )
}
