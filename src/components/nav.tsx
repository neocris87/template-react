import { Link } from "@tanstack/react-router";

export default function Nav() {
    return (
        <div className="navbar ">
            <div className="navbar-start">
                <button className="btn btn-ghost">Curso Udemy</button>
            </div>

            <div className="navbar-end">
                <Link to="/" className="btn btn-ghost">Home</Link>
                <Link to="/pokemon" className="btn btn-ghost">Pokemons</Link>
            </div>
        </div>
    )
}