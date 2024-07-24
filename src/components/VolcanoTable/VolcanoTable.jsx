import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVolcanoes, fetchCountries } from './module/action/volcanoActions';
import { AgGridReact } from 'ag-grid-react';
import { useNavigate } from 'react-router-dom';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const VolcanoTable = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { volcanoes, countries, isLoading, error } = useSelector(state => state.volcanoData);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedRadius, setSelectedRadius] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const countriesData = await fetchCountries();
                dispatch({ type: 'FETCH_COUNTRIES_SUCCESS', payload: countriesData });
                if (countriesData.length > 0) {
                    setSelectedCountry(countriesData[4]);
                }
            } catch (error) {
                console.error('Error fetching countries:', error);
            }
        };

        fetchData();
    }, [dispatch]);

    useEffect(() => {
        if (selectedCountry) {
            dispatch(fetchVolcanoes(selectedCountry, selectedRadius));
        }
    }, [dispatch, selectedCountry, selectedRadius]);

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
    };

    const handleRadiusChange = (event) => {
        setSelectedRadius(event.target.value);
    };

    const onRowClicked = (event) => {
        navigate(`/volcanoes/${event.data.id}`);
    };

    const columnDefs = [
        { headerName: "ID", field: "id" },
        { headerName: "Name", field: "name" },
        { headerName: "Country", field: "country" },
        { headerName: "Region", field: "region" }
    ];

    return (
        <div className="mt-10 ag-theme-alpine w-full" style={{ minHeight: '400px', maxHeight: '80vh' }}>
            <div className="flex justify-center space-x-4 mb-4">
                <select className="border rounded p-2" value={selectedCountry} onChange={handleCountryChange}>
                    {countries.map(country => (
                        <option key={country} value={country}>{country}</option>
                    ))}
                </select>
                <select className="border rounded p-2" value={selectedRadius} onChange={handleRadiusChange}>
                    <option value="">Select Radius</option>
                    <option value="5km">5 km</option>
                    <option value="10km">10 km</option>
                    <option value="30km">30 km</option>
                    <option value="100km">100 km</option>
                </select>
            </div>
            <AgGridReact
                className="w-full h-full"
                rowData={volcanoes}
                columnDefs={columnDefs}
                onRowClicked={onRowClicked}
                pagination={true}
                paginationPageSize={10}
                domLayout='autoHeight'
            />
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
        </div>
    );
};

export default VolcanoTable;