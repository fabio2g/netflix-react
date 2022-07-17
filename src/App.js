import "./App.css";

import { useEffect, useState } from "react";
import TheMovie from "./TheMovieDB";
import MovieRow from "./components/MovieRow";
import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header";

function App() {
    const [moveList, setModieList] = useState([]);
    const [featuredData, setFeaturedData] = useState(null);
    const [blackHeader, setBlackHeader] = useState(false);

    useEffect(() => {
        const loadAll = async () => {
            let list = await TheMovie.getHomeList();
            setModieList(list);

            let originals = list.filter((i) => i.slug === "originals");
            let randomChosen = Math.floor(
                Math.random() * (originals[0].items.results.length - 1)
            );
            let chosen = originals[0].items.results[randomChosen];
            let chosenInfo = await TheMovie.getMovieInfo(chosen.id, "tv");
            setFeaturedData(chosenInfo);
            console.log(chosenInfo);
        };
        loadAll();
    }, []);

    useEffect(() => {
        const scrollListener = () => {
            if (window.scrollY > 10) {
                setBlackHeader(true);
            } else {
                setBlackHeader(false);
            }
        };
        window.addEventListener("scroll", scrollListener);
        return () => {
            window.removeEventListener("scroll", scrollListener);
        };
    }, []);

    return (
        <div className="page">
            <Header black={blackHeader} />
            {featuredData && <FeaturedMovie item={featuredData} />}
            <section className="lists">
                {moveList.map((item, key) => (
                    <MovieRow key={key} title={item.title} items={item.items} />
                ))}
            </section>
            <footer>
                <div className="social--media">
                    <span>Redes Sociais</span>
                    <a href="https://github.com/fabiodev88">
                        <i class="fa-brands fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/fabiosilva88/">
                        <i class="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="https://www.instagram.com/_fabiosv/">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                </div>
                <div>
                    Developer: Fabio Silva | Direitos de Imagem: Netflix | API:
                    Themoviedb.org
                </div>
            </footer>
            {moveList.length <= 0 && (
                <div className="loading">
                    <img
                        src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif"
                        alt="carregando"
                    />
                </div>
            )}
        </div>
    );
}

export default App;
