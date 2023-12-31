import { Reactish, ReactishEntity, Ref } from "../reactish";
import mapboxgl from "mapbox-gl";
import "./map.css"

interface MapProps {
    entity: ReactishEntity,
    ref: Ref<HTMLElement>
}

export const Map = (): MapProps => {

    const [mapRef] = Reactish.useRef<HTMLElement>();

    const createMarker =(map: mapboxgl.Map) => {
        // Create Marker
        const icon = document.createElement('div');
        icon.className = 'marker';

        // Set marker options.
        const marker = new mapboxgl.Marker({
            anchor: 'bottom',
            element: icon,
            rotation: -45
        }).setLngLat([13.3993858,52.5000377]).addTo(map);
    }

    const createMap = () => {
        // Mapbox API
        mapboxgl.accessToken = 'pk.eyJ1IjoiandrYXRlcmluYSIsImEiOiJjbDRndmpydG8wY3hxM2NuejE3Z2ZhMDNmIn0.lpF_u91PqkWR9pNP4snW4Q';
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/jwkaterina/cl4h8xgdf000d14lr304pftqe',
            center: [13.3993858,52.5000377],
            zoom: 3
        });
        return map;
    }

    setTimeout(() => {
        const map = createMap();
        createMarker(map);
    }, 0);

    return {
        entity: <div id="map" ref={mapRef}></div>,
        ref: mapRef
    }
};

export interface MapResult {
    element: HTMLElement,
    ref: Ref<HTMLElement>
}