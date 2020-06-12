import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';
import { fetchISSLocation } from '../actions';

class ISSLocation extends Component {
  componentDidMount() {
    const { getCurrentISSLocation } = this.props;

    getCurrentISSLocation();
  }

  render() {
    const { isFetching, latitude, longitude } = this.props;
    const isLocationPresent = latitude && longitude;

    return (
      <div>
        <div className="map">
          <Map
                center={[0, 0]}
                defaultWidth={700}
                height={450}
                minZoom={1}
                maxZoom={8}
                zoom={1}
              >
                {!isFetching && isLocationPresent && <Marker anchor={[latitude, longitude]} />}
              </Map>
        </div>
        {isFetching && 'Loading...'}
        {!isFetching && isLocationPresent && `Current ISS location: latitude = ${latitude}, longitude = ${longitude}`}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.issLocation.isFetching,
  latitude: state.issLocation.latitude,
  longitude: state.issLocation.longitude,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrentISSLocation: () => dispatch(fetchISSLocation()),
});

ISSLocation.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  getCurrentISSLocation: PropTypes.func.isRequired,
  latitude: PropTypes.number,
  longitude: PropTypes.number,
}

ISSLocation.defaultProps = {
  latitude: null,
  longitude: null,
}

export default connect(mapStateToProps, mapDispatchToProps)(ISSLocation);
