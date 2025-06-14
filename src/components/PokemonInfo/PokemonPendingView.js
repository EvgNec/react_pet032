import {ImSpinner} from 'react-icons/im';
import pendingImage from './pending.jpeg'
import PokemonDataView from './PokemonDataView';

const styles = {

}

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
<div 
// style={styles.spiner}
>
    <ImSpinner size="32" className='icon-spin'/>
    Loading ...
</div>
<PokemonDataView pokemon={pokemon}/>
</div>
    );
  }