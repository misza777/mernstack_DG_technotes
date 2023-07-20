import { Link } from "react-router-dom";

const Public: React.FC = () => {
  const content: JSX.Element = (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap">Misza N. Repairs!</span>
        </h1>
      </header>
      <main className="public__main">
        <p>
          Located in Beautiful Downtown Warsaw City.
          <br />
          <strong> Misza N. Repairs </strong> provides a trained staff ready to
          meet your tech repair needs.
          <br /> We can dismantle every car!
        </p>
        <address className="public__addr">
          Misha N. Repairs
          <br />
          666 Mulholland Drive
          <br />
          Warsaw City, MZ 00-001
          <br />
          <a href="tel:+48">(666) 666-669</a>
        </address>
        <br />
        <p>Owner: Misza Novakishvili</p>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );
  return content;
};
export default Public;
