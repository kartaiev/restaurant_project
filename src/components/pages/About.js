import React from 'react';
import './Pages.scss';
import './About.scss';
import standingSteak from '../../assets/images/pages/about.jpg';
import { Article, Image, Subtitile, Title } from '../../elements';

export const About = () => {
  return (
    <Article>
      <Image src={standingSteak} alt="standing steak" />

      <section className="article__content">
        <Title>About</Title>

        <div className="article__content-text">
          <Subtitile>Holy Smokes?</Subtitile>
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
          <Subtitile>Philosophy</Subtitile>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A corporis
            error, exercitationem fuga id illum ipsam laboriosam laborum, magni
            modi nemo nulla odit perferendis quos unde! Cumque dolore doloremque
            hic in maiores nisi omnis sit?
          </p>
        </div>

        <div className="article__content-text">
          <Subtitile>History </Subtitile>
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
    </Article>
  );
};
