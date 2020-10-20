import React from 'react';
import mapMarkerImg from '../assets/map-marker.svg';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi'
import { Map, TileLayer } from 'react-leaflet';
import '../styles/pages/orphanagesMap.css';
import 'leaflet/dist/leaflet.css';

function OrphanagesMap(){
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="mapMarkerImg"/>
                    <h2>Escolha um Orfanato no Mapa</h2>
                    <p>Muitas Crianças Estão Esperando Sua Visita</p>
                </header>
                <footer>
                    <strong>Nova Iguaçu</strong>
                    <span>Rio de Janeiro</span>
                </footer>
            </aside>

            <Map 
                center={[-22.7396401,-43.4741091]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
                <TileLayer 
                    url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>

        </div>
    );
}

export default OrphanagesMap;