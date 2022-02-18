import './Footer.css'

export default function Footer(props){

    const nev = "Dénes Evelin";
    const link = <a href="https://www.w3schools.com/cssref/css3_pr_text-justify.asp">itt</a>;


    return(
        <footer className="Elso-footer">
            <p>Készítette: {nev} - elérhető {link}</p>
        </footer>

    );
}