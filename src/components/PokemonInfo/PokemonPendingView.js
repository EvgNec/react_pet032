import {ImSpinner} from 'react-icons/im';
import pendingImage from './pending.jpeg'
import PokemonDataView from './PokemonDataView';

const styles = {
    spinner: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 10,
      fontSize: 24,
    },
  };

export default function PokemonPendingView({ name }) {
const  pokemon = {
    name: name,
    sprites:{
        other: {
            'official-artwork': {
                front_default: pendingImage,
            },
        },
    },
    stats: [],
}

    return (
<div role="alert">
<div style={styles.spinner}>
    <ImSpinner size="32" className='icon-spin'/>
    Loading ...
</div>
<PokemonDataView pokemon={pokemon}/>
</div>
    );
  }