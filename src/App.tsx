import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, RefinementList } from 'react-instantsearch-hooks-web';

const searchClient = algoliasearch(
    'latency',
    '6be0576ff61c053d5f9a3225e2a90f76'
  );
function App() {
  return (
    <InstantSearch searchClient={searchClient} indexName="instant_search">
      <RefinementList attribute="brand" />
    </InstantSearch>
  );
}
export default App;