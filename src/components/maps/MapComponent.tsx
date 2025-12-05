'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Define claim type for the map
export type MapClaim = {
  id: number;
  title: string;
  address: string;
  lat: number;
  lng: number;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: string;
  insured?: string;
  value?: number;
};

interface MapComponentProps {
  claims?: MapClaim[];
  onClaimSelect?: (claim: MapClaim) => void;
  showRoute?: boolean;
  height?: string;
}

// Kenya center coordinates
const KENYA_CENTER: [number, number] = [-1.2921, 36.8219]; // Nairobi
const KENYA_BOUNDS: [[number, number], [number, number]] = [
  [-4.7, 33.9], // Southwest
  [4.6, 41.9],  // Northeast
];

function MapComponentInner({ claims = [], onClaimSelect, showRoute = false, height = '400px' }: MapComponentProps) {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [L, setL] = useState<typeof import('leaflet') | null>(null);
  const [MapContainer, setMapContainer] = useState<any>(null);
  const [TileLayer, setTileLayer] = useState<any>(null);
  const [Marker, setMarker] = useState<any>(null);
  const [Popup, setPopup] = useState<any>(null);

  useEffect(() => {
    // Dynamically import Leaflet and react-leaflet
    const loadLeaflet = async () => {
      const leaflet = await import('leaflet');
      const reactLeaflet = await import('react-leaflet');
      
      // Fix default icon issue
      delete (leaflet.Icon.Default.prototype as any)._getIconUrl;
      leaflet.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      });

      setL(leaflet);
      setMapContainer(() => reactLeaflet.MapContainer);
      setTileLayer(() => reactLeaflet.TileLayer);
      setMarker(() => reactLeaflet.Marker);
      setPopup(() => reactLeaflet.Popup);
      setMapLoaded(true);
    };

    loadLeaflet();
  }, []);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return '#dc2626';
      case 'high': return '#ea580c';
      case 'medium': return '#2563eb';
      default: return '#6b7280';
    }
  };

  const createCustomIcon = (priority: string) => {
    if (!L) return undefined;
    const color = getPriorityColor(priority);
    return L.divIcon({
      className: 'custom-marker',
      html: `<div style="background-color: ${color}; width: 24px; height: 24px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.3);"></div>`,
      iconSize: [24, 24],
      iconAnchor: [12, 12],
    });
  };

  if (!mapLoaded || !MapContainer || !TileLayer || !Marker || !Popup) {
    return (
      <div 
        style={{ height }} 
        className="bg-gray-100 rounded-lg flex items-center justify-center"
      >
        <div className="text-gray-500">Loading map...</div>
      </div>
    );
  }

  return (
    <div style={{ height }} className="rounded-lg overflow-hidden border border-gray-200">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.css"
      />
      <MapContainer
        center={KENYA_CENTER}
        zoom={7}
        style={{ height: '100%', width: '100%' }}
        maxBounds={KENYA_BOUNDS}
        minZoom={6}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {claims.map((claim) => (
          <Marker
            key={claim.id}
            position={[claim.lat, claim.lng]}
            icon={createCustomIcon(claim.priority)}
            eventHandlers={{
              click: () => onClaimSelect?.(claim),
            }}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-bold text-gray-800">{claim.title}</h3>
                <p className="text-sm text-gray-600">{claim.address}</p>
                {claim.insured && <p className="text-sm text-gray-600">Insured: {claim.insured}</p>}
                {claim.value && <p className="text-sm font-semibold">KES {claim.value.toLocaleString()}</p>}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

// Export as dynamic component to avoid SSR issues
export default dynamic(() => Promise.resolve(MapComponentInner), { ssr: false });

