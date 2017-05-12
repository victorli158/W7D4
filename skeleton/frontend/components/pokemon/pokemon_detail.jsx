import React from 'react';
import Router from 'react-router-dom';
import { Link } from 'react-router-dom';


class PokemonDetail extends React.Component {


  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestPoke(this.props.match.params.id);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.id !== this.props.match.params.id) {
      this.props.requestPoke(newProps.match.params.id);
    }
  }

  render() {
    const { id, name, attack, defense, image_url, moves, poke_type, items } = this.props.poke;
    const itemList = items.map(item => <li key={item.id}>
                                        <Link to={`/pokemon/${id}/items/${item.id}`}> <img src={item.image_url}
                                          height="30"
                                          width="30"/>
                                        </Link>
                                        </li>);
    return (
      <div>
        <img src={image_url}></img>
        <ul>
          <li>{name}</li>
          <li>Type: {poke_type}</li>
          <li>Attack: {attack}</li>
          <li>Defense: {defense}</li>
          <li>Moves: {moves}</li>
          <li>
            <ul>
            {itemList}
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default PokemonDetail;
