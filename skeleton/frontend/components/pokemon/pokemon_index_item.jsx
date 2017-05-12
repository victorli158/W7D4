import React from 'react';
import merge from 'lodash/merge';
import { Link } from 'react-router-dom';

class PokemonIndexItem extends React.Component {
  constructor(props) {
    super(props);

  }

render() {
  const { image, pokemon } = this.props;
  const { id, name } = pokemon;
  return (
    <li key={id}>
      <Link to={`/pokemon/${id}`}>
        <img src={image} height="30" width="30"></img>
        {name}
      </Link>
    </li>
    );
  }
}

export default PokemonIndexItem;
