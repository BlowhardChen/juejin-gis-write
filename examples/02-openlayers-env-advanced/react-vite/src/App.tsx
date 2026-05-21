import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import { defaults as defaultControls } from 'ol/control/defaults';
import { fromLonLat } from 'ol/proj';
import { useEffect, useRef, useState } from 'react';
import { createBaseLayers } from '../../shared/baseLayers';
import type { BaseLayerProvider } from '../../shared/baseLayers';

function getTiandituToken() {
  return import.meta.env.VITE_TDT_TOKEN || '';
}

export default function App() {
  const mapElementRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<Map | null>(null);
  const [provider, setProvider] = useState<BaseLayerProvider>('osm');
  const [layerName, setLayerName] = useState('OpenStreetMap');

  useEffect(() => {
    if (!mapElementRef.current) return;

    const group = createBaseLayers('osm', {
      tiandituToken: getTiandituToken(),
    });

    group.layers.forEach((layer) => layer.set('role', 'base'));
    setLayerName(group.name);

    mapRef.current = new Map({
      target: mapElementRef.current,
      layers: group.layers,
      controls: defaultControls({
        attribution: false,
        zoom: true,
        rotate: false,
      }),
      view: new View({
        center: fromLonLat([116.397428, 39.90923]),
        zoom: 11,
        maxZoom: 18,
      }),
    });

    return () => {
      mapRef.current?.setTarget(undefined);
      mapRef.current = null;
    };
  }, []);

  function replaceBaseLayer(nextProvider: BaseLayerProvider) {
    const map = mapRef.current;
    if (!map) return;

    const oldBaseLayers = map
      .getLayers()
      .getArray()
      .filter((layer) => layer.get('role') === 'base');

    oldBaseLayers.forEach((layer) => map.removeLayer(layer));

    const group = createBaseLayers(nextProvider, {
      tiandituToken: getTiandituToken(),
    });

    group.layers.forEach((layer) => {
      layer.set('role', 'base');
      map.addLayer(layer);
    });

    setProvider(nextProvider);
    setLayerName(group.name);
  }

  return (
    <main className="page">
      <aside className="panel">
        <p className="eyebrow">React + Vite</p>
        <h1>OpenLayers 底图切换</h1>
        <p className="desc">当前底图：{layerName}</p>

        <div className="buttonGroup">
          <button className={provider === 'osm' ? 'active' : ''} onClick={() => replaceBaseLayer('osm')}>
            OSM
          </button>
          <button
            className={provider === 'tianditu-vector' ? 'active' : ''}
            onClick={() => replaceBaseLayer('tianditu-vector')}
          >
            天地图矢量
          </button>
          <button
            className={provider === 'amap-vector' ? 'active' : ''}
            onClick={() => replaceBaseLayer('amap-vector')}
          >
            高德矢量
          </button>
        </div>
      </aside>

      <section ref={mapElementRef} className="map" />
    </main>
  );
}
