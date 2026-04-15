import Link from 'next/link';
import { background, content } from '../src/scss/404.module.scss';

export default function NotFound() {
  return (
    <main>
      <div className={background} />
      <div className={content}>
        <h1>Page not found</h1>
        <p>
          Sorry 😔, we couldn't find what you were looking for.
          <br />
          <br />
          <Link href="/">Go home</Link>
        </p>
      </div>
    </main>
  );
}
