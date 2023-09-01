import React, { useState } from "react";
import { useMemo } from "react";
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  InfoWindow,
  Circle,
  CircleF,
} from "@react-google-maps/api";
import "../style/Contact.css";
import { AiFillHome } from "react-icons/ai";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import mapStyles from "./mapStyles";

const Contact = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBjORIbr8cOgOUlX1yOfS5IYSSh6AxTAcc",
  });

  /*const options = useMemo(
    () => ({
      mapId: "8f7dfd9c269381ed",
    }),
    []
  );*/

  const options = {
    styles: mapStyles,
  };

  const markers = [
    {
      id: 1,
      circle: 11,
      name: "Flicks Cinema Vozdovac",
      position: { lat: 44.7728, lng: 20.47511 },
      address: "Jove Ilica 154",
    },
    {
      id: 2,
      circle: 21,
      name: "Flicks Cinema Usce",
      position: { lat: 44.81448, lng: 20.43744 },
      address: "Bulevar Mihaila Pupina 4",
    },
  ];

  const [selected, setSelected] = useState(null);

  const defaultOptions = {
    strokeOpacity: 0.5,
    strokeWeight: 2,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
  };
  const circleOptions = {
    ...defaultOptions,
    zIndex: 3,
    fillOpacity: 0.05,
    strokeColor: "#8BC34A",
    fillColor: "#8BC34A",
  };

  if (!isLoaded) return <div>Loading...</div>;

  function Map() {
    const centar = useMemo(() => ({ lat: 44.7728, lng: 20.47511 }), []);

    return (
      <GoogleMap
        zoom={12}
        center={centar}
        mapContainerClassName="map-container"
        options={options}
      >
        {markers.map((marker) => (
          <MarkerF
            key={marker.id}
            position={marker.position}
            onClick={() => {
              setSelected(marker);
            }}
          >
            {/*<Circle center={centar} radius={15000} options={circleOptions}/>*/}
          </MarkerF>
        ))}

        {selected ? (
          <InfoWindow
            position={selected.position}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div style={{ color: "black", fontWeight: "bold" }}>
              <h5>{selected.name}</h5>
              <p
                style={{
                  color: "black",
                  fontWeight: 400,
                  fontSize: 15 + "px",
                  textAlign: "center",
                }}
              >
                {selected.address}
              </p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    );
  }

  return (
    <div>
      <h1>Get in touch with us</h1>
      <div className="container">
        <div className="d-flex justify-content-center">
          <div className="contact-wrapper row g-0">
            <div className="col-6 col-md-7 map-container">
              <div className="map-container">
                <Map />
              </div>
            </div>
            <div className="col-6 col-md-5">
              <div>
                <p>
                  Have a question or need assistance with our movie streaming
                  service? We're here to help! Please use any of the following
                  methods to get in touch with our support team.
                </p>
              </div>
              <div className="social-buttons">
                <div className="centered-label">
                  <AiFillHome style={{ fontSize: 21 + "px" }} />{" "}
                  <span style={{ paddingLeft: 13 + "px" }}>
                    Jove Ilića 154, Belgrade
                  </span>
                </div>
                <div className="centered-label">
                  <MdOutlineEmail style={{ fontSize: 21 + "px" }} />{" "}
                  <span style={{ paddingLeft: 13 + "px" }}>
                    flicks@cinema.rs
                  </span>
                </div>
                <div className="centered-label">
                  <FaTwitter style={{ fontSize: 21 + "px" }} />{" "}
                  <span
                    style={{
                      paddingLeft: 13 + "px",
                      letterSpacing: 0.5 + "px",
                    }}
                  >
                    flicksofficial
                  </span>
                </div>
                <div className="centered-label">
                  <FaInstagram style={{ fontSize: 21 + "px" }} />{" "}
                  <span
                    style={{
                      paddingLeft: 13 + "px",
                      letterSpacing: 0.5 + "px",
                    }}
                  >
                    flickscinema
                  </span>
                </div>
                <div className="centered-label">
                  <BsFillTelephoneFill style={{ fontSize: 21 + "px" }} />{" "}
                  <span style={{ paddingLeft: 13 + "px" }}>
                    +381 66 2231993
                  </span>
                </div>
              </div>
              <div className="working-hours">
                <h5 className="text-uppercase mb-2">Opening hours</h5>
                <table className="text-center text-white">
                  <tbody
                    className="font-weight-normal"
                    style={{ background: "transparent" }}
                  >
                    <tr>
                      <td>Monday:</td>
                      <td>CLOSED</td>
                    </tr>
                    <tr>
                      <td>Tue - Fri:</td>
                      <td>12pm - 11pm</td>
                    </tr>
                    <tr>
                      <td>Weekends:</td>
                      <td>12pm - 2am</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="contact-footer">
                <p>
                  For all questions check out FAQ section or email Flicks
                  Customer Support: flicks@cinema.rs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
