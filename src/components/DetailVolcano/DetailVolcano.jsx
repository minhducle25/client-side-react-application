import React from 'react';
import { Map, Marker } from 'pigeon-maps';

const DetailVolcano = ({ details }) => {
    if (!details) {
        return <p>No details available.</p>;
    }
    const latitude = parseFloat(details.latitude);
    const longitude = parseFloat(details.longitude);

    const isValidCoordinate = !isNaN(latitude) && !isNaN(longitude);

    const mapKey = `${details.id}-${latitude}-${longitude}`;

    return (
        <div className="flex flex-wrap md:flex-nowrap justify-center items-start">
            <div className="w-full md:w-1/2 p-4">
                <h1 className="text-3xl font-bold my-4">{details.name}</h1>
                <div className="text-lg text-gray-700">
                    <p><strong>Country:</strong> {details.country}</p>
                    <p><strong>Region:</strong> {details.region}</p>
                    <p><strong>Subregion:</strong> {details.subregion}</p>
                    <p><strong>Last Eruption:</strong> {details.last_eruption}</p>
                    <p><strong>Summit:</strong> {details.summit} m</p>
                    <p><strong>Elevation:</strong> {details.elevation} m</p>
                    <p><strong>Latitude:</strong> {latitude}</p>
                    <p><strong>Longitude:</strong> {longitude}</p>
                </div>
            </div>
            {isValidCoordinate ? (
                <div className="w-full md:w-1/2 p-4">
                    <Map
                        key={mapKey}
                        height={250}
                        width={"100%"}
                        defaultCenter={[latitude, longitude]}
                        defaultZoom={11}
                    >
                        <Marker width={50} anchor={[latitude, longitude]} />
                    </Map>
                </div>
            ) : (
                <p>Loading map...</p>
            )}
        </div>
    );
};

export default DetailVolcano;
