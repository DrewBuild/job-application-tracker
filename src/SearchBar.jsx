function SearchBar({search,setSearch}){

return(

<input
className="search-bar"
placeholder="Search companies..."
value={search}
onChange={e=>setSearch(e.target.value)}
/>

);

}

export default SearchBar;