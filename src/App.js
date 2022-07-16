import "./App.css";

import { useEffect, useState } from "react";
import MovieRow from "./components/MovieRow";
import TheMovie from "./TheMovieDB";
import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header";

export default () => {
    const [moveList, setModieList] = useState([]);
    const [featuredData, setFeaturedData] = useState(null);
    const [blackHeader, setBlackHeader] = useState(false);

    useEffect(() => {
        const loadAll = async () => {
            let list = await TheMovie.getHomeList();
            setModieList(list);
            //get featured
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
                Feito por Fabio Silva<br/>
                Direitos de imagens para Netflix<br/>
                Dados da API Themoviedb.org
            </footer>
        </div>
    );
};