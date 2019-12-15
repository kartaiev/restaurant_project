import React from 'react';
import './Menu.scss';
import beefSteak from '../../assets/images/Beefsteak.png';

export const Menu = () => {
  return (
    <article className="menu">
      <div className="menu__img-wrap">
        <img className="menu__img" src={beefSteak} alt="beef steak with fork" />
        */}
      </div>
      <section className="menu__content">
        <h2 className="menu__content-title">Menu</h2>

        <div className="menu__content-text">
          <h3>Appetizers & Salads</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
            mollitia non, officia sed sequi veritatis voluptatibus. Ab assumenda
            consectetur distinctio dolore et eveniet ex expedita maiores soluta
            ullam? Accusantium aut deserunt est fuga magnam modi nam
            necessitatibus neque obcaecati, odit provident qui quis recusandae
            tempora.
          </p>
        </div>
        <br />
        <br />
      </section>
    </article>
  );
};
