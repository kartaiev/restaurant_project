import React, { useEffect, useState } from 'react';
import fb from '../../config/fbConfig';
import './Menu.scss';
import beefSteak from '../../assets/images/Beefsteak.png';

export const Menu = () => {
  const [menuDocs, setMenuDocs] = useState({
    menuDocs: []
  });

  useEffect(() => {
    fb.collection('menu')
      .get()
      .then(snapshot =>
        snapshot.docs.map(docsItem => {
          return setMenuDocs({
            menuDocs: [docsItem]
          });
        })
      );
  }, []);

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
          <ul className="menu-items">
            {menuDocs.menuDocs.map((menuDoc, index) => (
              <li key={index}>
                {menuDoc.data().dish} {menuDoc.data().price}
              </li>
            ))}
          </ul>
        </div>
        <br />
        <br />
      </section>
    </article>
  );
};
