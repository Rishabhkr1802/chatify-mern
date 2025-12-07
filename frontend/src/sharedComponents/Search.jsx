import { Search } from 'lucide-react';

function SearchComponent({ searchTerm, setSearchTerm }) {
  return (
    <label className="input rounded-2xl outline-none">
      <Search className="h-[1em]" />
      <input type="search" required placeholder="Search" className='rounded-xl' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
    </label>
  )
}

export default SearchComponent;
