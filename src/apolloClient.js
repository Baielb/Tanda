import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.uno.kg/graphql/?operationName=Barcode&query=query%20Barcode%20%7B%0A%20%20barcode(id%3A%20365)%20%7B%0A%20%20%20%20id%0A%20%20%20%20barcodeValue%0A%20%20%20%20title%0A%20%20%20%20description%0A%20%20%20%20deleted%0A%20%20%20%20sellingPrice%0A%20%20%20%20slug%0A%20%20%20%20archived%0A%20%20%20%20createdAt%0A%20%20%20%20mute%0A%20%20%20%20discountedPrice%0A%20%20%20%20cost%0A%20%20%20%20tags%0A%20%20%20%20characteristic%0A%20%20%20%20category%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20slug%0A%20%20%20%20%20%20icon%0A%20%20%20%20%20%20icon1%0A%20%20%20%20%20%20isActive%0A%20%20%20%20%20%20prioritization%0A%20%20%20%20%20%20inTrend%0A%20%20%20%20%20%20lft%0A%20%20%20%20%20%20rght%0A%20%20%20%20%20%20treeId%0A%20%20%20%20%20%20level%0A%20%20%20%20%20%20parent%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20slug%0A%20%20%20%20%20%20%20%20icon%0A%20%20%20%20%20%20%20%20icon1%0A%20%20%20%20%20%20%20%20isActive%0A%20%20%20%20%20%20%20%20prioritization%0A%20%20%20%20%20%20%20%20inTrend%0A%20%20%20%20%20%20%20%20lft%0A%20%20%20%20%20%20%20%20rght%0A%20%20%20%20%20%20%20%20treeId%0A%20%20%20%20%20%20%20%20level%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20images%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20url%0A%20%20%20%20%7D%0A%20%20%20%20sizes%20%7B%0A%20%20%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A&variables=null',
  }),
  cache: new InMemoryCache(),
});

export default client;
