import { Link } from 'react-router'
import ThemeSelect from '../../../../components/ThemeSelect'


type RequestHeaderProps = {
  title: string;
  message?: string;
};

const RequestHeader = ({ title, message=''  }: RequestHeaderProps) => {
  return (
    <header className='pt-4 space-y-2 sm:px-52'>
      <section className='flex justify-between items-center'>  
        <Link
          to="/"
          className=""
        >
          <svg className='mt-1 h-7 w-7 fill-current text-white stroke-black stroke-2' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m15 6-6 6 6 6" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </Link>    
        <section className='text-center space-y-2'>
          <h1 className='font-bold text-xl sm:text-md'>{title}</h1> 
          <p className='px-10 text-lg text-center font-medium sm:px-0 sm:text-sm sm:tracking-wide font-semibold'>{message}</p>

        </section>    

        <div className="">
          <ThemeSelect />
        </div>
        
      </section>
          
    </header>
  )
}

export default RequestHeader