import logo from '../assets/logo.png'


export const Header = () => {
  return (
    <header className="  flex-none  sm:flex ">
    <div>
    <img className=" w-[300px] px-4 sm:px-0 sm:w-[250px]"  src={logo}  alt="logo " />
    </div>
     
   </header>
  )
}
