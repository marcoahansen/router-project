import { Link, useLocation } from "react-router";
import { Navbar } from "../../components/Navbar/Navbar";

export const Home = () => {
  const location = useLocation();
  const formValues = location.state || {};
  console.log(formValues, "<-- valores recebidos por location");

  return (
    <>
      <h1>Home</h1>
      <p>Nome: {formValues ? formValues.name : ""}</p>
      <p>Mensagem: {formValues ? formValues.message : ""}</p>
      <div>
        <Link to="produto/roteador-cisco">
          Ir para a páginda do produto Roteador
        </Link>
      </div>
      <div>
        <Navbar />
      </div>
    </>
  );
};
