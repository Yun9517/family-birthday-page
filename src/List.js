import React from 'react';

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, birthday } = person;
        return (
          <article key={id} className='birthday-item'>
            <div>
              <h4 className='name'>{name}</h4>
              <p className='date'>{birthday}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
