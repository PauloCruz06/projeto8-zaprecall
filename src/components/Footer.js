import "./assets/css/reset.css";
import "./assets/css/style.css";

export default function Footer(props){
    return (
        <div className="footer">
            {props.children}
        </div>
    );
}