import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Methodology from "./pages/methodology";
import Services from "./pages/services";
import Insights from "./pages/insights";
import Contacts from "./pages/contacts";
import StrategicPlanning from "./pages/strategic-planning";
import QuickFixes from "./pages/quick-fixes";

const pages = {
    home: { component: Home, title: "Home" },
    about: { component: About, title: "About Us" },
    methodology: { component: Methodology, title: "Methodology" },
    services: { component: Services, title: "Services" },
    insights: { component: Insights, title: "Insights" },
    contacts: { component: Contacts, title: "Contact Us" },
    "strategic-planning": { component: StrategicPlanning, title: "Strategic Planning" },
    "quick-fixes": { component: QuickFixes, title: "Why Quick Fixes Often Fail" }
};

function App() {
    const [hash, setHash] = useState(window.location.hash);
    const [pageName = "home", section] = hash.replace(/^#\/?/, "").split("/");
    const page = pages[pageName || "home"];
    const Page = page?.component;

    useEffect(() => {
        const handleNavigation = () => setHash(window.location.hash);
        window.addEventListener("hashchange", handleNavigation);
        return () => window.removeEventListener("hashchange", handleNavigation);
    }, []);

    useEffect(() => {
        document.title = `${page?.title || "Page Not Found"} | The Strategy Bridge Group`;
        const target = section ? document.getElementById(section) : null;
        if (target) {
            target.scrollIntoView();
        } else {
            window.scrollTo(0, 0);
        }
    }, [hash, section, page]);

    return (
        <div className="site-app">
            <Header currentPage={pageName || "home"} />
            {Page ? <Page /> : (
                <main className="not-found content">
                    <h2>Page Not Found</h2>
                    <a href="#/home">Return Home</a>
                </main>
            )}
            <Footer currentPage={pageName || "home"} />
        </div>
    );
}

export default App;
