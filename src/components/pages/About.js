import React from 'react';
import './About.scss';
import './Pages.scss';
import standingSteak from '../../assets/images/steak-3.png';

export const About = () => {
  return (
    <article className="article">
      <img className="article__img" src={standingSteak} alt="standing steak" />

      <section className="article__content">
        <h2 className="article__content-title">About</h2>

        <div className="article__content-text">
          <h3>Holy Smokes?</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
            mollitia non, officia sed sequi veritatis voluptatibus. Ab assumenda
            consectetur distinctio dolore et eveniet ex expedita maiores soluta
            ullam? Accusantium aut deserunt est fuga magnam modi nam
            necessitatibus neque obcaecati, odit provident qui quis recusandae
            tempora.
          </p>
        </div>

        <div className="article__content-text">
          <h3>Philosophy</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A corporis
            error, exercitationem fuga id illum ipsam laboriosam laborum, magni
            modi nemo nulla odit perferendis quos unde! Cumque dolore doloremque
            hic in maiores nisi omnis sit?
          </p>
        </div>

        <div className="article__content-text">
          <h3>History </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
            deleniti deserunt repellendus. Adipisci cupiditate ex in laboriosam
            quae, quam quis quo reprehenderit sed voluptate. Debitis dolorem
            eligendi est minima nobis odio officia quo ullam vel vitae. Ea
            exercitationem fugiat laborum tenetur velit? Illo itaque iure nulla
            numquam recusandae rerum sed.
          </p>
        </div>
      </section>
    </article>
  );
};
