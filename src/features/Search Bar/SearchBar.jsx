const Search = ({ query, onChange }) => {
    return (
        <section className="search-bar">
            <form action="">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    value={query}
                    onChange={onChange}
                    autoFocus
                />
            </form>
        </section>
    )
}
export default Search