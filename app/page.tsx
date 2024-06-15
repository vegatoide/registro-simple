import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
   <div id="register">
    <h2>Registrarse</h2>
        <form>
            <div>
                <label>Nombre: </label>
                <input type="text" name="name"/>
            </div>
            <div>
                <label>Apellido: </label>
                <input type="text" name="surname"/>
           </div>
            <div>
                <label>Email: </label>
                <input type="text" name="email"/>
            </div>
            <div>
                <label>Teléfono: </label>
                <input type="tel" id="phone" pattern="[0-9]{8]" name="phone"/>
            </div>
            <div>
                <label>Password: </label>
                <input type="password" name="password"/>
            </div>
            <div>
              <label>Confirmar password: </label>
              <input type="password" name="repeatpsw"/>
            </div>
        </form>
  </div>
  );
}
