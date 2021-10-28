import react from 'react';
import axios from 'axios';
import { MapContainer, TileLayer,  GeoJSON } from 'react-leaflet';
import TimeRange from 'react-timeline-range-slider'
import moment from 'moment';
import './App.css';
import dataUrl from './test2.geojson'

const startTime = moment("2016-01-01 00:00:00");
const endTime = moment("2017-12-31 23:59:59");

class App extends react.Component {
  state = {
      error: false,
      selectedInterval: [startTime, endTime],
      data: undefined,
  }

  async componentDidMount() {
    const {data} = await axios(dataUrl);
    this.setState({data});
    //react.useEffect(async () => { 
    //}, []);
  }

  errorHandler = ({ error }) => this.setState({ error })

  onChangeCallback = selectedInterval => this.setState({ selectedInterval })

  formatTick = ms => moment(ms).format("MMM 'YY");

  style = (feature) => {
      return {
        weight: 3,
        opacity: 1,
        color: 'red',
        dashArray: '3',
        fillOpacity: 0.0
      };
    }


  render() {
    const {data, selectedInterval} = this.state;

    return (
      <div className="ais-wrapper">
        <MapContainer id="mapid" center={[52.377956, 4.897070]} zoom={9} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <TileLayer
            url="https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png"
          />
          { data && <GeoJSON data={data} style={this.style} />}
        </MapContainer>

        <div className='time-range-section'>
          <div className='time-range-details'>
      <div className='from'><b>From</b> {moment(selectedInterval[0]).format("D MMMM 'YY HH:mm")}</div>
      <div className='to'><b>To</b> {moment(selectedInterval[1]).format("D MMMM 'YY HH:mm")}</div>
          </div>
          <TimeRange
            //sliderRailClassName="time-slider"
            containerClassName="time-container"
            timelineInterval={[startTime, endTime]}
            selectedInterval={selectedInterval}
            onUpdateCallback={this.errorHandler}
            onChangeCallback={this.onChangeCallback}
            formatTick={this.formatTick}
            ticksNumber={24}
          />
          </div>
      </div>
    );
  }
}

export default App;
