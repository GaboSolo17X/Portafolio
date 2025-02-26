import { Content } from "../components/UI/Content";
import { MobileNav } from "../components/UI/MobileNav";
import { SideBar } from "../components/UI/SideBar";
import { LanguageProvider } from "../context/LanguageProvider";
import { TitleProvider } from "../context/TitleProvider";
import { ThemeProvider } from "../context/ThemeProvider";

export const PortfolioApp = () => {
  return (
    <div
      className={`flex flex-col lg:flex-row h-screen bg-primary  
                   dark:bg-secondary dark:text-primary transition-colors duration-1000`}
      id="back"
    >
      <ThemeProvider>
        <LanguageProvider>
          <TitleProvider>
            <SideBar />
            <Content />
            {/* <MobileNav /> */}
          </TitleProvider>
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
};
