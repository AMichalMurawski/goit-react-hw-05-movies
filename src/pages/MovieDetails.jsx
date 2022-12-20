import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

const MovieDetails = () => {
  return (
    <main>
      <button>Go back</button>
      <section>
        <img src="" alt="" />
        <div>
          <h2>Title</h2>
          <p>User Score</p>
          <h3>Overview</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, id.
          </p>
          <h3>Genres</h3>
          <ul>
            <li>Action</li>
            <li>Drama</li>
          </ul>
        </div>
      </section>
      <section>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="chest">Chest</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </section>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
