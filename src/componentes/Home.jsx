
import logo from '../assets/coder.png'
export const Home = () => {
  return (
   <section className=" container mx-auto my-40 text-center cursor-pointer">
    <p className="text-3xl text-stone-100 text-opacity-40 italic  pt-5 hover:text-pink-500 " >Hola , Soy!</p>
  <span className="text-7xl text-stone-100 font-mono hover:text-pink-800">Cristian Aguirre</span>
    <p className="text-3xl text-stone-100 text-opacity-40 italic pb-5  hover:text-pink-500" >Desarrollador FrontEnd</p>
    <p className="text-2xl text-stone-100 text-opacity-40 italic pb-5  hover:text-pink-500 " >Técnico superior en programación y diseñador multimedia,</p>
    <p className="text-2xl text-stone-100 text-opacity-40 italic pb-5  hover:text-pink-500 "> me considero una persona dispuesta a aprender constantemente,</p>
    <p className="text-2xl text-stone-100 text-opacity-40 italic pb-5  hover:text-pink-500 ">apasionado por la programación .</p> 
    <img className=" w-[300px] px-4 sm:px-0 sm:w-[400px] mx-auto my-10"  src={logo}  alt="logo " />
   </section>
  )
}
