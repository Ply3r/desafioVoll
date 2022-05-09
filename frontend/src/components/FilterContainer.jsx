const FilterContainer = ({ search, setSearch, order, setOrder }) => {
  return (
    <div className="filter-container">
      <input
        className="search-input"
        placeholder="Buscar produto..."
        value={ search }
        onChange={ ({ target: { value } }) => setSearch(value) }
      />
      <div>
        <label className="order-label">
          Ordenar por:
          <select
            className="order-select"
            value={ order } 
            onChange={ ({ target: { value } }) => setOrder(value)}
          >
            <option value="name - ASC">Nome (A-Z)</option>
            <option value="name - DESC">Nome (Z-A)</option>
            <option value="price - ASC">Menor Preço</option>
            <option value="price - DESC">Maior Preço</option>
          </select>    
        </label>
      </div>
    </div>
  )
};

export default FilterContainer;