import errorImage from './error.jpg';

export default function PokemonErrorView({ message }) {
  return (
    <div role="alert">
      <img src={errorImage} width="240" alt="error" />
      <p>{message}</p>
    </div>
  );
}
