import { Col, Row } from "antd";
import GoogleMapReact from "google-map-react";
import { FC } from "react";
import "./location.scss";

interface LocationProps {}

const Location: FC<LocationProps> = () => {
  const image = "https://source.unsplash.com/random/1920x800/?city,blur";
  const location = {
    address: "Tan Binh, Ho Chi Minh City, Vietnam",
    lat: 10.7750679,
    lng: 106.6429372,
  };
  const zoomLevel = 15;
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY || "";

  function renderMarkers(map: any, maps: any) {
    let marker = new maps.Marker({
      position: { lat: location.lat, lng: location.lng },
      map: map,
      title: location.address,
    });
    return marker;
  }

  return (
    <div
      id="location"
      className="cover location"
      style={{ backgroundImage: `url(${image})` }}
    >
      <h2>Visit Us</h2>
      <h3>Where we operate</h3>
      <Row className="google-map" justify="center">
        <Col sm={20}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: apiKey }}
            defaultCenter={location}
            defaultZoom={zoomLevel}
            onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
            yesIWantToUseGoogleMapApiInternals
          />
        </Col>
      </Row>
    </div>
  );
};

export default Location;
