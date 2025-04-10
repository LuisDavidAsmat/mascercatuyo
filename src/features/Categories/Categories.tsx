import { categories } from "../../config/constants";
import './Categories.css';

const Categories = () => 
{
  return (
    <main className="flex flex-col justify-center items-center inverse-gradient-background">
        <header className="p-2 mt-8">
            <h1 className="text-2xl uppercase font-bold">Categorías</h1>
        </header>
        <ul className="mt-6 mx-48 h-96 flex flex-wrap justify-center gap-8">
        {categories.map((category, index) => (
        
            <li key={index}>
                <a href={`/servicio/${category.value}`} 
                className={`py-2 px-4 rounded-full bg-stone-200 border border-white border-2 text-black`}
                >
                    {category.label}
                </a>
            </li>
        ))}
        </ul>
    </main>
  )
}

export default Categories