import './style.css'
import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Color from "@arcgis/core/Color";
import SimpleFillSymbol from "@arcgis/core/symbols/SimpleFillSymbol";
import Basemap from "@arcgis/core/Basemap";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import Expand from "@arcgis/core/widgets/Expand";

const input = document.getElementById("input")! as HTMLInputElement;
const list = document.getElementById("list")! as HTMLOListElement;
const sidePanel = document.getElementById("side-panel")! as HTMLDivElement;
const counter = document.getElementById("count")! as HTMLSpanElement;

function createBasemaps(): __esri.Basemap[] {
  let blankBasemap = new Basemap({
    portalItem: {
      id: "3495cd95e14b45f3abb48fa21a69460b"
    }
  })
  blankBasemap.watch("loaded", (loaded) => {
    if (loaded) {
      blankBasemap.referenceLayers.removeAt(0)
    }
  })
  let fullBasemap = new Basemap({
    portalItem: {
      id: "f35ef07c9ed24020aadd65c8a65d3754"
    }
  })
  let darkBasemap = new Basemap({
    portalItem: {
      id: "c0dc85829e4b4b22aefb077de483e025"
    }
  })
  return [blankBasemap, fullBasemap, darkBasemap]
}

async function main() {
  const basemaps = createBasemaps()

  // init map & view
  const map = new Map({
    basemap: basemaps[0]
  });
  const view = new MapView({
    container: "map",
    map,
    center: [-95.13, 37.67],
    zoom: 4,
  });

  // add widgets
  let basemapGallery = new BasemapGallery({
    container: document.createElement("div"),
    view: view,
    source: basemaps
  });
  let layerListExpand = new Expand({
    expandIcon: "layers",
    view: view,
    content: basemapGallery
  });
  view.ui.add(layerListExpand, "top-left");

  // create layers & add to map
  const graphicsLayer = new GraphicsLayer()
  const countriesLayer = new FeatureLayer({
    url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/ArcGIS/rest/services/World_Countries_(Generalized)/FeatureServer/0",
    visible: false,
  })
  map.addMany([countriesLayer, graphicsLayer])
  const layerView = await view.whenLayerView(graphicsLayer)

  // gather features and country names
  let countriesQuery = countriesLayer.createQuery();
  countriesQuery.where = "1=1"
  let countriesFeatures = await countriesLayer.queryFeatures(countriesQuery)
  let symbol = new SimpleFillSymbol({
    color: new Color("#1fd14f")
  })
  countriesFeatures.features.forEach((f) => f.symbol = symbol)
  let countries = countriesFeatures.features.map((f) => {
    return f.attributes["COUNTRY"].toLowerCase()
  })
  console.log(countries)

  // wait for key input
  let guessedWords: string[] = []
  input.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return
    let word = input.value.toLowerCase()

    if (countries.includes(word) && !guessedWords.includes(word)) {
      input.value = ""
      guessedWords.push(word)
      let item = document.createElement("li")
      item.innerText = word
      list.appendChild(item)
      counter.innerText = guessedWords.length + "/251"
      let f = countriesFeatures.features.find((f) => f.attributes["COUNTRY"].toLowerCase() === word)!
      graphicsLayer.add(f)
      view.goTo(f, {
        animate: true,
        duration: 2000,
        easing: "ease-in-out"
      })
      layerView.highlight(f)
      if (guessedWords.length === countries.length) {
        // you win
        sidePanel.innerHTML = "You Win!"
      }
    }
  })
}

main()
