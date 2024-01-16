import "./SearchBar.css"

const SearchBar = () =>{
    return(
        <div id ='container'>
            <input type="text" placeholder="Estoy buscando..."/>
            <img id='icon' src={'icons/search.svg'}  />
        </div>
    )
}

export default SearchBar;