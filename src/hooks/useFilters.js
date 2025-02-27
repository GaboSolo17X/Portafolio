import { useState, useEffect } from "react";

export const useFilters = (initialItems) => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(initialItems);

  // Función para agregar o quitar filtros
  const handleFilter = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      setSelectedFilters((prev) => prev.filter((cat) => cat !== selectedCategory));
    } else {
      setSelectedFilters((prev) => [...prev, selectedCategory]);
    }
  };

  // Efecto para filtrar los items cuando cambian los filtros
  useEffect(() => {
    if (selectedFilters.length > 0) {
      const tempItems = selectedFilters.map((category) => {
        return initialItems.filter((item) => item.category === category);
      });
      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems([...initialItems]);
    }
  }, [selectedFilters, initialItems]);

  return {
    selectedFilters,
    filteredItems,
    handleFilter,
  };
};