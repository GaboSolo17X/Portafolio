import { PortfolioRoutes } from "../../router/portfolioRoutes"
import dots from '../../images/threeDots.svg'
import { useContext } from "react"
import { TitleContext} from "../../context/TitleProvider"



export const Content = () => {
  const{selectedTitle}=useContext(TitleContext)
    //flex content-center w-screen p-3
  return (
    <main className="flex flex-auto flex-col items-center p-2 overflow-auto ">
        
        <div className="w-[300px] h-full border-4 border-secondary rounded-2xl  
                        md:w-[1500px] 
                        dark:border-primary" >
            <header className="flex flex-row justify-between border-b-4 h-20 p-5">
              <div> </div>
              
              <div className="flex w-[500px] h-10 p-1.5 border-4 rounded-lg font-body text-2xl">https://www.<span className="flex flex-col justify-center font-title text-5xl">{selectedTitle}</span>.com</div>
              <img src={dots} alt="3 Dots" className="w-35"/>
            </header>
            <section className="p-6 h-[calc(100%-80px)] font-body text-2xl text-secondary dark:text-primary overflow-y-auto">
             <PortfolioRoutes/>
            </section>
        </div>
    </main>
  )
}
