import './style.css'
import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import { addWidgets, createBasemaps, getListOfCountries } from './utils';

const splash = document.getElementById("splash")! as HTMLDialogElement;
const input = document.getElementById("input")! as HTMLInputElement;
const list = document.getElementById("list")! as HTMLOListElement;
const sidePanel = document.getElementById("side-panel")! as HTMLDivElement;
const counter = document.getElementById("count")! as HTMLSpanElement;

// close the welcome modal on click
splash.addEventListener('click', () => splash.close());

async function main() {
  // create the basemaps
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

  // add the widgets to the view
  addWidgets(view, basemaps)

  // create layers & add to map
  const graphicsLayer = new GraphicsLayer()
  const countriesLayer = new FeatureLayer({
    url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/ArcGIS/rest/services/World_Countries_(Generalized)/FeatureServer/0",
    visible: false,
  })
  map.addMany([countriesLayer, graphicsLayer])
  const layerView = await view.whenLayerView(graphicsLayer)

  // get list contries
  const [countries, countriesFeatures] = await getListOfCountries(countriesLayer)

  let guessedCountries: string[] = []

  // create the input handler
  input.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return

    // extract value
    let inputWord = input.value.toLowerCase()

    // try to find a country in the list that is similar to the input word
    let country = countries.find((c) => c.includes(inputWord))

    // if one is found and they havent guessed it already
    if (country && !guessedCountries.includes(country)) {
      // reset the input element
      input.value = ""

      guessedCountries.push(country)

      // create a new list item element and append to list element
      let item = document.createElement("li")
      item.innerText = country
      list.appendChild(item)

      // update counter
      counter.innerText = guessedCountries.length + "/251"

      // grab the country feature
      let feature = countriesFeatures.find((f) => f.attributes["COUNTRY"].toLowerCase() === country)!

      // add to the graphics layer to display
      graphicsLayer.add(feature)

      // go to the feature
      view.goTo(feature, {
        animate: true,
        duration: 2000,
        easing: "ease-in-out"
      })

      // highlight
      layerView.highlight(feature)

      if (guessedCountries.length === countries.length) {
        // you win
        sidePanel.innerHTML = "Wow! You guessed them all!"
      }
    }
  })
}

main()
splash.showModal()
