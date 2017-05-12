import { connect } from 'react-redux';
import { selectPokemonItem } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  item: selectPokemonItem(state, ownProps.match.params.itemId)
});
