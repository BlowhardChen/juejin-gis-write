import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import XYZ from 'ol/source/XYZ';

export type BaseLayerProvider = 'osm' | 'tianditu-vector' | 'tianditu-image' | 'amap-vector' | 'amap-image';

export interface BaseLayerOptions {
  tiandituToken?: string;
}

export interface BaseLayerGroup {
  name: string;
  layers: TileLayer<OSM | XYZ>[];
}

const TIANDITU_SUBDOMAINS = ['0', '1', '2', '3', '4', '5', '6', '7'];

function createTiandituUrls(layerType: 'vec_w' | 'cva_w' | 'img_w' | 'cia_w', token: string) {
  return TIANDITU_SUBDOMAINS.map(
    (subdomain) =>
      `https://t${subdomain}.tianditu.gov.cn/DataServer?T=${layerType}&x={x}&y={y}&l={z}&tk=${token}`,
  );
}

function createTileLayer(source: OSM | XYZ, zIndex: number) {
  return new TileLayer({
    source,
    zIndex,
  });
}

export function createBaseLayers(provider: BaseLayerProvider, options: BaseLayerOptions = {}): BaseLayerGroup {
  if (provider === 'osm') {
    return {
      name: 'OpenStreetMap',
      layers: [createTileLayer(new OSM({ crossOrigin: 'anonymous' }), 0)],
    };
  }

  if (provider === 'tianditu-vector' || provider === 'tianditu-image') {
    if (!options.tiandituToken) {
      throw new Error('使用天地图底图需要传入 tiandituToken，建议通过 VITE_TDT_TOKEN 配置。');
    }

    const isImage = provider === 'tianditu-image';
    const baseType = isImage ? 'img_w' : 'vec_w';
    const labelType = isImage ? 'cia_w' : 'cva_w';

    return {
      name: isImage ? '天地图影像' : '天地图矢量',
      layers: [
        createTileLayer(
          new XYZ({
            urls: createTiandituUrls(baseType, options.tiandituToken),
            crossOrigin: 'anonymous',
            maxZoom: 18,
          }),
          0,
        ),
        createTileLayer(
          new XYZ({
            urls: createTiandituUrls(labelType, options.tiandituToken),
            crossOrigin: 'anonymous',
            maxZoom: 18,
          }),
          1,
        ),
      ],
    };
  }

  const amapStyle = provider === 'amap-image' ? '6' : '7';

  return {
    name: provider === 'amap-image' ? '高德影像' : '高德矢量',
    layers: [
      createTileLayer(
        new XYZ({
          url: `https://webrd04.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=${amapStyle}&x={x}&y={y}&z={z}`,
          crossOrigin: 'anonymous',
          maxZoom: 18,
        }),
        0,
      ),
    ],
  };
}
