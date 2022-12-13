import * as React from 'react';
import { Link } from 'gatsby';
import { background, content } from '../scss/404.module.scss';

function NotFoundPage() {
  return (
    <main>
      <div className={background} />
      <div className={content}>
        <h1>Page not found</h1>
        <p>
          Sorry 😔, we couldn’t find what you were looking for.
          <br />
          <br />
          <Link to="/">Go home</Link>
        </p>
      </div>
    </main>
  );
}

export default NotFoundPage;

export function Head() {
  return <title>Not found</title>;
}
