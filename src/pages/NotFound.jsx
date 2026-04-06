import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className="section">
      <div className="container">
        <div className="not-found-card">
          <span className="eyebrow">Page not found</span>
          <h1>The page you were looking for is not available.</h1>
          <p>Use the link below to return to the farm homepage and continue exploring the site.</p>
          <Link className="button button-primary" to="/">
            Return Home
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
