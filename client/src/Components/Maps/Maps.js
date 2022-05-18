// import {GoogleMap} from '@react-google-maps/api'
import { Map, GoogleApiWrapper } from 'google-maps-react';
import React from 'react';
import mapboxgl from 'mapbox-gl';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import 'mapbox-gl/dist/mapbox-gl.css';



export class Maps extends React.Component {
  constructor(props){
    super(props);
    this.state={
      pickuplocation:props.pickuplocation,
      dropofflocation:props.dropofflocation,
      start:[-122.662323, 45.523751],
      end:[]
    }
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${this.state.pickuplocation}.json?limit=1&access_token=pk.eyJ1IjoiZm9vZGllMjM2IiwiYSI6ImNreTgzMTFkOTE2eWgydnMxMHJ1ZzVqZ3MifQ.KHB9VYX_nKPKaN5RkSnoeQ`,{ method: 'GET' })
    .then(resp=>resp.json())
    .then(respdata=>{
        respdata.features.map((place,index)=>{
          this.setState({start:place.center});
        })
    })
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${this.state.dropofflocation}.json?limit=1&access_token=pk.eyJ1IjoiZm9vZGllMjM2IiwiYSI6ImNreTgzMTFkOTE2eWgydnMxMHJ1ZzVqZ3MifQ.KHB9VYX_nKPKaN5RkSnoeQ`,{ method: 'GET' })
    .then(resp=>resp.json())
    .then(respdata=>{
        respdata.features.map((place,index)=>{
          this.setState({end:place.center});
        })
    })
    this.clickFunc=props.onclick;
    this.close=props.close;
    mapboxgl.accessToken = 'pk.eyJ1IjoibWl0YWxlZWtvbmRlIiwiYSI6ImNsMm45Ym42dzBvZ2ozYmt6MDd4ZTA5NmUifQ.J4YXTtkSlSwZfOwX0ztdyw';
    
    // Add the control to the map.
    
    this.marker = new mapboxgl.Marker();
    
}


componentDidMount(){
 
    this.map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: this.state.start,
        zoom: 13
    });
    function getRoute(start,end,map) {
      // make a directions request using cycling profile
      // an arbitrary start will always be the same
      // only the end or destination will change
      fetch(
        `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
        { method: 'GET' }
      ).then(resp=>resp.json())
      .then((jsonData)=>{
        const data = jsonData.routes[0];
      const route = data.geometry.coordinates;
      const geojson = {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: route
        }
      };
      // if the route already exists on the map, we'll reset it using setData
      if (map.getSource('route')) {
        map.getSource('route').setData(geojson);
      }
      // otherwise, we'll make a new request
      else {
        map.addLayer({
          id: 'route',
          type: 'line',
          source: {
            type: 'geojson',
            data: geojson
          },
          layout: {
            'line-join': 'round',
            'line-cap': 'round'
          },
          paint: {
            'line-color': '#222222',
            'line-width': 4,
            'line-opacity': 0.75
          }
        });
      }
      }).catch(error=>console.log(error))
      // add turn instructions here at the end
    }
    
    this.map.on('load', () => {
      // make an initial directions request that
      // starts and ends at the same location
      this.map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: this.state.start,
        zoom: 13
    });
      getRoute(this.state.start,this.state.end,this.map);
    
      // Add starting point to the map
      this.map.addLayer({
        id: 'point',
        type: 'circle',
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                properties: {},
                geometry: {
                  type: 'Point',
                  coordinates: this.start
                }
              }
            ]
          }
        },
        paint: {
          'circle-radius': 10,
          'circle-color': '#444444'
        }
      });
      // this is where the code from the next step will go
    });
    // get route
    
}
    render() {
      const mapStyles = {
        width: "100%",
        height: "100%",
      };
      return (
        // <GoogleMap>
        <div id='map' style={{
          position: "absolute",
          top: "0",
          bottom: "0",
          width: "100%"
        }}></div>
       
      );
    }
  }
  export default Maps;


// import React from 'react';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
// export class MapContainer extends React.Component {
//   render() {
//     return (
//       <Map google={this.props.google} zoom={14}>
 
//         <Marker onClick={this.onMarkerClick}
//                 name={'Current location'} />
 
//         <InfoWindow onClose={this.onInfoWindowClose}>
//             <div>
//               <h1>{this.state.selectedPlace.name}</h1>
//             </div>
//         </InfoWindow>
//       </Map>
//     );
//   }
// }
 
// export default GoogleApiWrapper({
//   apiKey: "AIzaSyB4KG0UWWbHnX4TTwprlmCUWMWj17crPdw"
// })(MapContainer)




// import React from 'react';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
// export class MapContainer extends React.Component {
//   render() {
//     return (
//       <Map google={this.props.google} zoom={14}>
 
//         <Marker onClick={this.onMarkerClick}
//                 name={'Current location'} />
 
//         <InfoWindow onClose={this.onInfoWindowClose}>
//             <div>
//               <h1>{this.state.selectedPlace.name}</h1>
//             </div>
//         </InfoWindow>
//       </Map>
//     );
//   }
// }
 
// export default GoogleApiWrapper({
//   apiKey: "AIzaSyB4KG0UWWbHnX4TTwprlmCUWMWj17crPdw"
// })(MapContainer)