import React from 'react'

type Props = {}

const OtherPosts: React.FC = (props: Props) => 
{
    const stars = Array.from({ length: 5 }, (_, index) => (
        <span key={index} className={index < 4 ? 'text-orange-600' : 'text-orange-600 font-semibold'}>
            { index < 4 ? '★' : '☆'}
        </span>
      ));


  return (
    <section className="mt-10">
    <h1 className="uppercase text-left sm:pl-72">otras publicaciones destacadas</h1>
    <section className="pt-4 sm:max-w-3xl mx-auto sm:flex sm:gap-1 sm:flex-nowrap  ">
      <section className="mt-2 sm:mt-0 sm:w-1/3 flex gap-1">
        <figure className="w-1/3 rounded-md">
          <img src="/img/ubicacion.png" alt="" className="h-full w-full rounded-md object-cover"/>
        </figure>
        <section className="w-2/3">
          <section className="ml-2 text-left sm:ml-0 sm:text-center">
            {stars}
          </section>
          <h2 className="ml-2 text-left font-bold sm:ml-0 sm:font-bold sm:text-center">Reseña</h2>                   
          <p className="ml-2 text-left sm:ml-0 h-14 break-words text-sm overflow-hidden text-ellipsis">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt repellendus temporibus alias laborum. Aspernatur harum repellat, excepturi numquam quia deserunt blanditiis voluptate vel voluptatibus? Quia recusandae ducimus repellat reprehenderit magni!</p>
        </section>
      </section>

      <section className="mt-2 sm:mt-0 sm:w-1/3 flex gap-1">
        <figure className="w-1/3 rounded-md">
          <img src="/img/ubicacion.png" alt="" className="h-full w-full rounded-md object-cover"/>
        </figure>
        <section className="w-2/3">
          <section className="ml-2 text-left sm:ml-0 sm:text-center">
            {stars}
          </section>
          <h2 className="ml-2 text-left font-bold sm:ml-0 sm:font-bold sm:text-center">Reseña</h2>                   
          <p className="ml-2 text-left sm:ml-0 h-14 break-words text-sm overflow-hidden text-ellipsis">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt repellendus temporibus alias laborum. Aspernatur harum repellat, excepturi numquam quia deserunt blanditiis voluptate vel voluptatibus? Quia recusandae ducimus repellat reprehenderit magni!</p>
        </section>
      </section>

      <section className="mt-2 sm:mt-0 sm:w-1/3 flex gap-1">
        <figure className="w-1/3 rounded-md">
          <img src="/img/ubicacion.png" alt="" className="h-full w-full rounded-md object-cover"/>
        </figure>
        <section className="w-2/3">
          <section className="ml-2 text-left sm:ml-0 sm:text-center">
            {stars}
          </section>
          <h2 className="ml-2 text-left font-bold sm:ml-0 sm:font-bold sm:text-center">Reseña</h2>                   
          <p className="ml-2 text-left sm:ml-0 h-14 break-words text-sm overflow-hidden text-ellipsis">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt repellendus temporibus alias laborum. Aspernatur harum repellat, excepturi numquam quia deserunt blanditiis voluptate vel voluptatibus? Quia recusandae ducimus repellat reprehenderit magni!</p>

        </section>
      </section>
    </section>
  </section>
  )
}

export default OtherPosts