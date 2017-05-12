export const fetchAllPokemon = () => (
  $.ajax({
    url: 'api/pokemon'
  })
);

export const fetchPoke = id => (
  $.ajax({
    url: `api/pokemon/${id}`
  })
);
