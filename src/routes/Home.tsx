import { UserProps} from "../types/User";
import {Search} from "../components/Search";
import {User} from "../components/User";
import { useState} from "react";
import {Error} from "../components/Error";
export const Home = () => {
    const [user, setUser] = useState<UserProps | null>(null);
    const [error, setError] = useState(false);

    const loadUser = async (username: string) => {
        if(username === "" || username === null) return;
        await fetch(`https://api.github.com/users/${username}`)
            .then((response) => {
                if(response.status === 404) {
                    setError(true)
                    setUser(null)
                    return;
                }
                return response.json()
            })
            .then((data) => {
                const { avatar_url, login, location, followers, following } = data;
                const userData: UserProps = {
                    avatar_url,
                    login,
                    location,
                    followers,
                    following,
                }
                setUser(userData)
            })
            .catch(() => {
                setError(true)

            })

    }
    return (
        <div>
            <Search loadUser={loadUser} />
            {user && <User {...user} />}
            {error && <Error />}
        </div>

    );
};
