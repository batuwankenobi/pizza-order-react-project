import { useHistory } from "react-router-dom";

export default function Header() {
    const history = useHistory(); // useHistory is used in React Router v5 and earlier

    const handleRedirected = () => {
        history.push("/order"); // history.push is used in v5 for navigation
    }

    return (
        <header>
            <section className="header-container">
                <div className="banner-container">
                    <h2>Fırsatı Kaçırma</h2>
                    <h1>KOD ACIKTIRIR</h1>
                    <h1>PIZZA, DOYURUR</h1>
                </div>
                <button onClick={handleRedirected} className="btn">ACIKTIM</button>
            </section>
        </header>
    );
}
