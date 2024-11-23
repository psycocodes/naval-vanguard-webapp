// "use client"
// import { Map as LeafletMap } from 'leaflet';
// import React, { useEffect, useState } from 'react';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import 'leaflet.awesome-markers/dist/leaflet.awesome-markers.css';
// import 'leaflet.awesome-markers/dist/leaflet.awesome-markers.js';
// import 'font-awesome/css/font-awesome.min.css';

// export default function MapComponent() {
//   const [map, setMap] = useState(null);
//   const [gridLines, setGridLines] = useState([]);
//   const [labelMarkers, setLabelMarkers] = useState([]);
//   const [currentContacts] = useState(new Map());
//   const [markers] = useState(new Map());
//   const [currentZones] = useState(new Map());
//   const [zonePolylines] = useState(new Map());

//   // Initialize map when component mounts
//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       const mapInstance = L.map('main-map', {
//         fullscreenControl: {
//           pseudoFullscreen: true,
//           attributionControl: false
//         },
//       }).setView([17.6868, 83.2185], 12);

//       const openStreetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       });

//       const openSeaMap = L.tileLayer('https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png', {
//         attribution: '&copy; <a href="http://www.openseamap.org">OpenSeaMap</a> contributors'
//       });

//       const darkTileLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
//         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
//         maxZoom: 19,
//         subdomains: 'abcd'
//       });

//       openStreetMap.addTo(mapInstance);
//       openSeaMap.addTo(mapInstance);
//       darkTileLayer.addTo(mapInstance);

//       setMap(mapInstance);

//       // Cleanup function
//       return () => {
//         mapInstance.remove();
//       };
//     }
//   }, []);

//   // Draw grid when map is available
//   useEffect(() => {
//     if (map) {
//       const drawGrid = () => {
//         // Clear existing grid lines and labels
//         gridLines.forEach(line => map.removeLayer(line));
//         labelMarkers.forEach(marker => map.removeLayer(marker));
//         const newGridLines = [];
//         const newLabelMarkers = [];

//         // Get current bounds and zoom level
//         let bounds = map.getBounds();
//         let zoom = map.getZoom();
//         let gridSpacing = zoom > 10 ? 0.25 : zoom > 5 ? 0.5 : 1;

//         // Define start and end lat/lng for grid
//         let startLat = Math.floor(bounds.getSouth() / gridSpacing) * gridSpacing;
//         let endLat = Math.ceil(bounds.getNorth() / gridSpacing) * gridSpacing;
//         let startLng = Math.floor(bounds.getWest() / gridSpacing) * gridSpacing;
//         let endLng = Math.ceil(bounds.getEast() / gridSpacing) * gridSpacing;

//         // Draw latitude lines
//         for (let lat = startLat; lat <= endLat; lat += gridSpacing) {
//           const polyline = L.polyline([[lat, startLng], [lat, endLng]], {
//             color: 'cyan',
//             weight: 2,
//             opacity: 0.1,
//             dashArray: '4, 4'
//           }).addTo(map);
//           newGridLines.push(polyline);

//           const labelMarker = L.marker([lat + gridSpacing * 0.05, startLng + gridSpacing + 0.05], {
//             icon: L.divIcon({
//               className: 'grid-label',
//               html: `${lat.toFixed(2)}°`,
//               iconSize: [40, 20],
//               iconAnchor: [20, 0]
//             })
//           }).addTo(map);
//           newLabelMarkers.push(labelMarker);
//         }

//         // Draw longitude lines
//         for (let lng = startLng; lng <= endLng; lng += gridSpacing) {
//           const polyline = L.polyline([[startLat, lng], [endLat, lng]], {
//             color: 'cyan',
//             weight: 2,
//             opacity: 0.1,
//             dashArray: '4, 4'
//           }).addTo(map);
//           newGridLines.push(polyline);

//           const labelMarker = L.marker([startLat + gridSpacing, lng + gridSpacing * 0.05], {
//             icon: L.divIcon({
//               className: 'grid-label',
//               html: `${lng.toFixed(2)}°`,
//               iconSize: [40, 20],
//               iconAnchor: [0, 20]
//             })
//           }).addTo(map);
//           newLabelMarkers.push(labelMarker);
//         }

//         setGridLines(newGridLines);
//         setLabelMarkers(newLabelMarkers);
//       };

//       drawGrid();
//       map.on('moveend zoomend', drawGrid);

//       return () => {
//         map.off('moveend zoomend', drawGrid);
//       };
//     }
//   }, [map]);

//   return (
//     <div className="w-full h-screen">
//       <div id="main-map" className="w-full h-full" />
//       <div id="statusdiv" className="absolute bottom-4 left-4 text-white bg-gray-800 p-2 rounded" />
//     </div>
//   );
// }

import React from 'react'

const Map = () => {
  return (
    <div>Map</div>
  )
}

export default Map
