import React, { Component, Fragment } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <span style={{ backgroundColor: "red" }}>{text}</span>;
export default class Maps extends Component {
    render() {
        const { lat, lng } = this.props;
        console.log(lat, lng);
        return (
            <Fragment>
                {lat || lng ? (
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: ["AIzaSyAb5ivv0MFSCYnKOyrt2ol5y_kzLYE8D8U"] }}
                        defaultCenter={{ lat, lng }}
                        defaultZoom={11}
                    >
                        <AnyReactComponent lat={lat} lng={lng} text={"dxfg"} />
                    </GoogleMapReact>
                ) : null}
            </Fragment>
        );
    }
}
