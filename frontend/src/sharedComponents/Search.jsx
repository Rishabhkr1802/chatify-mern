import { Search } from 'lucide-react';

function SearchComponent() {
  return (
    <label className="input rounded-2xl outline-none">
      <Search className="h-[1em]" />
      <input type="search" required placeholder="Search" className='rounded-xl' />
    </label>
  )
}

export default SearchComponent;
