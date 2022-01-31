import '../index.css'
const SearchBar = ({ categories, category, word, handleInput, handleSelect }) => {
  return (
    <div className='search__bar'>
      <div className='search__word'>
        <label htmlFor='search'>
          {' '}
          <i className='bi bi-search'></i>
        </label>
        <input id='search' type='text' value={word} onChange={handleInput} placeholder='Search by title' />
      </div>
      <div className='search__category'>
        <select onChange={handleSelect} value={category}>
          <option value=''>--CATEGORY--</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default SearchBar
