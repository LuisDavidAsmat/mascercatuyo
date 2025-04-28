interface SeachFormProps 
{

}

const SearchForm = () => 
{
  return (
    <form className="dark:text-white">   
      <label htmlFor="default-search" className="text-gray-900 sr-only  ">Search</label>
      <div className="relative space-x-1">
        <div className="absolute inset-y-0 flex items-center ps-3">
          <button className='cursor-pointer'>
            <svg className="mt-0 w-4 h-4 text-black stroke-2 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>L
            </svg>
          </button>
        </div>
        <input type="search" id="default-search" 
        className="w-64 p-2 ps-8 text-sm text-gray-900 border bg-white border-gray-300 rounded-3xl shadow-lg
        focus:ring-neutral-400 focus:ring-1 outline-none 
        dark:bg-neutral-600 dark:border-none dark:placeholder:text-neutral-300 dark:text-white
        "
        placeholder="Busca servicios..." 
        required />
      </div>
    </form>
  )
}

export default SearchForm