import { Link } from 'react-router';
import ImgHolder from '../../../../../../../components/ImgHolder'
import { categories } from '../../../../../../../config/constants'


const categoriesWithImages = [
  'actividadFisica',
  'alimentacion',
  "asesoriaDelHogar",
  'construccion',
  "controlDePlagas",
  'cuidadoresDeAdultosMayores',
  'cuidadoresDeNinos',
  'educacion',
  'electricista',
  'gasfiter',
  'instalacionDeSistemasDeSeguridad',
  'jardineria',
  'limpiezaYAseo',
  'mascotas',
  'reparacionDeElectrodomesticos',
];


const CategoryCard = () => 
  {
  const filteredCategories = categories.filter(category => categoriesWithImages.includes(category.value));
  return (
    <section className='flex gap-2 w-40 '>
      {filteredCategories.map((category, index) => (
        <div className='flex-shrink-0 border border-gray-300 rounded-lg' key={index}>
            <section className='w-full h-36 flex flex-col items-center rounded-t-lg text-black
            bg-gradient-to-b from-gray-300/20 via-zinc-300 to-zinc-300
            '> 
              <ImgHolder customClass='mt-6 h-16 object-contain' imgPath={`img/servicesImgs/${category.value}.png`} />
              <p className='w-40 mt-1 px-3 text-center text-sm break-all capitalize'>{category.label}</p>
            </section>
            <div className="flex justify-center my-1">
              <a href={`/servicio/${category.value}`} className='bg-buttons text-white rounded p-2 group transition-all duration-150
              hover:bg-orange-400 '>
                <svg className='w-6 h-6 stroke-black stroke-2
                  group-hover:stroke-white
                  ' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12h12m-6-6v12" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
        </div>
      ))}
      <div className='flex-shrink-0 border border-gray-300 rounded-lg'>
        <section className='w-full h-36 flex flex-col items-center rounded-t-lg text-black
        bg-gradient-to-b from-gray-300/20 via-zinc-300 to-zinc-300
        '> 
          <ImgHolder customClass='mt-8 h-16 object-contain' imgPath={`img/servicesImgs/mas.png`} />
          <p className='w-40 mt-1 px-3 text-center text-sm break-all capitalize'>Más</p>
        </section>
        <div className="flex justify-center my-1">
          <a href={`/categorias`} className='bg-buttons text-white rounded p-2 group transition-all duration-150
          hover:bg-orange-400 '>
            <svg className='w-6 h-6 stroke-black stroke-2
              group-hover:stroke-white
              ' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12h12m-6-6v12" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default CategoryCard