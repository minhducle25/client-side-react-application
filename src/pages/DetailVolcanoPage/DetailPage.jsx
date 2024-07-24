import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchVolcanoDetail } from '../../components/DetailVolcano/module/action/detailActions';
import DetailVolcano from '../../components/DetailVolcano/DetailVolcano';
import VolcanoDensityChart from '../../components/Chart/VolcanoDensityChart';
import Header from '../../components/Header/Header';
import heroImage from '../../assets/hero.jpg';

const DetailPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { details, loading, error } = useSelector(state => state.volcanoDetail);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    useEffect(() => {
        dispatch(fetchVolcanoDetail(id));
    }, [dispatch, id]);

    return (
        <div className="min-h-screen h-full bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
            <Header />
            <div className="pt-16 flex flex-col items-center justify-center w-full px-4 lg:px-8">
                <div className="mt-12 text-center p-4 bg-white bg-opacity-70 rounded-lg shadow-lg w-full max-w-4xl">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Volcano Details</h1>
                    {loading && <p>Loading...</p>}
                    {error && <p>Error: {error}</p>}
                    {details && (
                        <>
                            <DetailVolcano details={details} />
                            {isAuthenticated && <VolcanoDensityChart volcanoId={id} />}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DetailPage;
