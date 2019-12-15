import React from 'react';
import './About.scss';
import standingSteak from '../../assets/images/steak-1.jpg';
// import border from '../../assets/images/border.png';

export const About = () => {
  return (
    <article className="about">
      <div className="about__img-wrap">
        <img className="about__img" src={standingSteak} alt="standing steak" />
        {/*<img className="border__img" src={border} alt="border" />*/}
      </div>
      <section className="about__content">
        <h2 className="about__content-title">About</h2>
        <p className="about__content-text">
          Overlooking Botany Bay on the Grand Parade of Brighton Le Sands sits a
          cosy Greek restaurant. For over five years, Meet The Greek has been
          serving up classic Greek dishes, like souvlaki, seafood and housemade
          dips, as well as delicious variations on the classics.
          <br />
          <br />
          Overlooking Botany Bay on the Grand Parade of Brighton Le Sands sits a
          cosy Greek restaurant. For over five years, Meet The Greek has been
          serving up classic Greek dishes, like souvlaki, seafood and housemade
          dips, as well as delicious variations on the classics.
          <br />
          <br />
          Overlooking Botany Bay on the Grand Parade of Brighton Le Sands sits a
          cosy Greek restaurant. For over five years, Meet The Greek has been
          serving up classic Greek dishes, like souvlaki, seafood and housemade
          dips, as well as delicious variations on the classics.
          <br />
          <br />
          Overlooking Botany Bay on the Grand Parade of Brighton Le Sands sits a
          cosy Greek restaurant. For over five years, Meet The Greek has been
          serving up classic Greek dishes, like souvlaki, seafood and housemade
          dips, as well as delicious variations on the classics.
          <br />
          <br />
          Overlooking Botany Bay on the Grand Parade of Brighton Le Sands sits a
          cosy Greek restaurant. For over five years, Meet The Greek has been
          serving up classic Greek dishes, like souvlaki, seafood and housemade
          dips, as well as delicious variations on the classics.
        </p>
      </section>
    </article>
  );
};
