type SearchProps = {
    loadUser: (username: string) => Promise<void>;
}

import {useState, KeyboardEvent} from "react";
import {BsSearch} from "react-icons/bs";
import classes from "./Search.module.css";

export const Search = ({ loadUser }: SearchProps) => {
    const [username, setUsername] = useState("");

    const hadnleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Enter") {
            loadUser(username);
        }
    }
    return (
        <div className={classes.search}>
            <h2>Busque por um usuário:</h2>
            <p>Conheça seus melhores repositórios</p>
            <div className={classes.search_container}>
                <input
                    type="text"
                    placeholder="Digite o nome do usuário"
                    onChange={(e) => setUsername(e.target.value)}
                    onKeyDown={(e) => hadnleKeyDown}
                />
                <button onClick={() => loadUser(username)}>
                    <BsSearch/>
                </button>
            </div>
        </div>
    );
};
