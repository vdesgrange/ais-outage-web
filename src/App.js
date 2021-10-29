import react from 'react';
import axios from 'axios';
import { debounce } from 'lodash';
import { MapContainer, TileLayer,  GeoJSON } from 'react-leaflet';
import TimeRange from 'react-timeline-range-slider'
import moment from 'moment';
import './App.css';
import { FILES_INDEX } from './ais_indexing';
// import dataUrl from './2016-11.geojson';

const startTime = moment("2016-02-01 00:00:00");
const endTime = moment("2017-08-31 23:59:59");

class App extends react.Component {
  state = {
      error: false,
      selectedInterval: [startTime, endTime],
      temporarySelectedInterval: [startTime, endTime],
      data: [],
  }

  async componentDidMount() {
    // const {data} = await axios(dataUrl);
    // this.setState({data});
  }

  componentDidUpdate(prevProps, prevState) {
    const { selectedInterval } = this.state;
    if (prevState.selectedInterval !== this.state.selectedInterval) {
      const startMoment = moment(selectedInterval[0]);
      const endMoment = moment(selectedInterval[1]);

      const files_to_load = this.fileSearch(startMoment, endMoment);
      this.fileLoader(files_to_load);
    }
  }

  dataSorter = (data) => {

  }

  fileLoader = async (files_to_load) => {
    console.log(files_to_load);
    const data = await Promise.all(
      files_to_load
        .filter(x => x)
        .map(jsonURL => axios.get(`/data/${jsonURL}`).then(res => res.data))
    );
    this.setState({data})
  }

  fileSearch = (startMoment, endMoment) => {
      const startYear = startMoment.year();
      const endYear =  endMoment.year();
      const startMonth = startMoment.month() + 1;
      const endMonth = endMoment.month() + 1;
      let filepath = "";
      let files_to_load = [];

      for (let y=startYear; y <= endYear; y++) {
        let init_m = (y === startYear) ? startMonth : 1;
        let end_m = (y === endYear) ? endMonth : 12;

        for (let m=init_m; m <= end_m; m++) {
          filepath = FILES_INDEX[y.toString()][m.toString()];
          files_to_load.push(filepath);
        }
      }

      return files_to_load;
  };

  errorHandler = ({ error }) => this.setState({ error })

  onChangeCallback = temporarySelectedInterval => {
    this.setState({ temporarySelectedInterval });
    this.debouncedSelectedInterval(temporarySelectedInterval);
  }

  debouncedSelectedInterval = debounce(selectedInterval => {
    this.setState({selectedInterval});
  }, 500)

  formatTick = ms => moment(ms).format("MMM 'YY");

  getFeatureStyle = (feature) => {
    const type = feature.properties.type;
    const color = (['#00A19D', '#FFB344', '#E05D5D'])[type];
    const dashArray = ([undefined, undefined, 5])[type];
    const style = {
      weight: 3,
      opacity: 1,
      color,
      dashArray
    };

    return style;
  }

  render() {
    const {data, selectedInterval, temporarySelectedInterval} = this.state;

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
      { data && data.length && data.map(d => <GeoJSON data={d} style={this.getFeatureStyle} />)}
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
            selectedInterval={temporarySelectedInterval}
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
