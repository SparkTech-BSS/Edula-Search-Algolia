import {
    GoogleMapsLoader,
    GeoSearch,
    Control,
    Marker,
  } from 'react-instantsearch-dom-maps';

  
  <div style={{ height: 500 }}>
    <GoogleMapsLoader apiKey="GOOGLE_MAPS_API_KEY">
      {google => (
        <GeoSearch google={google}>
          {({ hits }) => (
            <div>
              <Control />
              {hits.map(hit => (
                <Marker key={hit.objectID} hit={hit} />
              ))}
            </div>
          )}
        </GeoSearch>
      )}
    </GoogleMapsLoader>
  </div>
  