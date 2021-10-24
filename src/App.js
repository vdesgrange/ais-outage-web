import react from 'react';
import axios from 'axios';
import { MapContainer, TileLayer,  GeoJSON } from 'react-leaflet';
import './App.css';
import dataUrl from './test2.geojson'
 
function App() {
  const [data, setData] = react.useState();
  react.useEffect(async () => { 
    const res = await axios(dataUrl);
    setData(res.data);
  }, []);
  const style = (feature) => {
      return {
        weight: 3,
        opacity: 1,
        color: 'red',
        dashArray: '3',
        fillOpacity: 0.0
      };
    }
  console.log(data);

  return (
      <MapContainer id="mapid" center={[29.885237, 122.16163]} zoom={8} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <TileLayer
          url="https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png"
        />
        { data && <GeoJSON data={data} style={style} />}
      </MapContainer>
  );
}

export default App;
