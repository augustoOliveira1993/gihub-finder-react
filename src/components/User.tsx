import { UserProps} from "../types/User";
import {MdLocationPin} from "react-icons/all";
import {Link} from "react-router-dom";

export const User = ({ login, avatar_url, location, followers, following}: UserProps) => {
    return (
        <div>
            <img src={avatar_url} alt={login}/>
            <h2>{login}</h2>
            {location && <p>
                <MdLocationPin/>
                <span>{location}</span>
            </p>}
            <div>
                <div>
                    <p>Seguidores:</p>
                    <p>{followers}</p>
                </div>
                <div>
                    <p>Seguindo:</p>
                    <p>{following}</p>
                </div>

            </div>
            <Link to={`/repos/${login}`}>Ver melhores projetos</Link>
        </div>
    );
};
