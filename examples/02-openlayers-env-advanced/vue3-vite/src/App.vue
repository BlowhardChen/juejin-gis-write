<script setup lang="ts">
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import { defaults as defaultControls } from 'ol/control/defaults';
import { fromLonLat } from 'ol/proj';
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { createBaseLayers } from '../../shared/baseLayers';
import type { BaseLayerProvider } from '../../shared/baseLayers';

const mapRef = ref<HTMLDivElement | null>(null);
const currentProvider = ref<BaseLayerProvider>('osm');
const currentLayerName = ref('OpenStreetMap');

let map: Map | null = null;

function getTiandituToken() {
  return import.meta.env.VITE_TDT_TOKEN || '';
}

function replaceBaseLayer(provider: BaseLayerProvider) {
  if (!map) return;

  const oldBaseLayers = map
    .getLayers()
    .getArray()
    .filter((layer) => layer.get('role') === 'base');

  oldBaseLayers.forEach((layer) => map?.removeLayer(layer));

  const group = createBaseLayers(provider, {
    tiandituToken: getTiandituToken(),
  });

  group.layers.forEach((layer) => {
    layer.set('role', 'base');
    map?.addLayer(layer);
  });

  currentLayerName.value = group.name;
}

function handleProviderChange(provider: BaseLayerProvider) {
  currentProvider.value = provider;
  replaceBaseLayer(provider);
}

onMounted(() => {
  if (!mapRef.value) return;

  const group = createBaseLayers(currentProvider.value, {
    tiandituToken: getTiandituToken(),
  });

  group.layers.forEach((layer) => layer.set('role', 'base'));
  currentLayerName.value = group.name;

  map = new Map({
    target: mapRef.value,
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
});

onBeforeUnmount(() => {
  map?.setTarget(undefined);
  map = null;
});
</script>

<template>
  <main class="page">
    <aside class="panel">
      <p class="eyebrow">Vue3 + Vite</p>
      <h1>OpenLayers 底图切换</h1>
      <p class="desc">当前底图：{{ currentLayerName }}</p>

      <div class="buttonGroup">
        <button :class="{ active: currentProvider === 'osm' }" @click="handleProviderChange('osm')">OSM</button>
        <button
          :class="{ active: currentProvider === 'tianditu-vector' }"
          @click="handleProviderChange('tianditu-vector')"
        >
          天地图矢量
        </button>
        <button :class="{ active: currentProvider === 'amap-vector' }" @click="handleProviderChange('amap-vector')">
          高德矢量
        </button>
      </div>
    </aside>

    <section ref="mapRef" class="map"></section>
  </main>
</template>
