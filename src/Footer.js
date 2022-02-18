import './Footer.css'

export default function Footer(props){

    const nev = "Dénes Evelin";
    const link = <a href="https://github.com/denesevelin/denesevelin_react-elso.git">itt</a>;


    return(
        <footer className="Elso-footer">
            <p>Készítette: {nev} - elérhető {link}</p>
        </footer>

    );
}