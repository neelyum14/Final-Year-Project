// import {GoogleMap} from '@react-google-maps/api'
import { Map, GoogleApiWrapper } from 'google-maps-react';
import React from 'react';
import '../Maps/Maps.css';

export class Maps extends React.Component {
    render() {
      const mapStyles = {
        width: "100%",
        height: "100%",
      };
      return (
        // <GoogleMap>
        <Map
          google={this.props.google}
          zoom={15}
          style={mapStyles}
          initialCenter={{ lat: 9.761927, lng: 79.95244 }}
        />
        // </GoogleMap> 
       
      );
    }
  }
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyB4KG0UWWbHnX4TTwprlmCUWMWj17crPdw'
  })(Maps);


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