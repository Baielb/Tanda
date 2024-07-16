import { useQuery } from '@apollo/client';
import { GET_BARCODE } from '../BarcodeQuery';
import Container from './Container/Container';

const BarcodeComponent = () => {
  const { loading, error, data } = useQuery(GET_BARCODE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { barcode } = data;

  return (
    <Container>
      <h1>{barcode.title}</h1>
      <p>{barcode.description}</p>
      <p>Price: {barcode.sellingPrice}</p>
      {barcode.images.map((image) => (
        <img key={image.id} src={image.url} alt={barcode.title} />
      ))}
      <div>
        <h3>Sizes</h3>
        {barcode.sizes.edges.map(({ node }) => (
          <p key={node.id}>{node.name}: {node.value}</p>
        ))}
      </div>
    </Container>
  );
};

export default BarcodeComponent;
