import Basemap from "@arcgis/core/Basemap";
import Color from "@arcgis/core/Color";
import SimpleFillSymbol from "@arcgis/core/symbols/SimpleFillSymbol";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import Expand from "@arcgis/core/widgets/Expand";
import GithubLogo from "/github-mark.svg"

export function createBasemaps(): Basemap[] {
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

function createGithubWidget(): HTMLDivElement {
  let githubWidget = document.createElement("div")
  githubWidget.id = "githubWidget"
  githubWidget.title = "GitHub Link"

  let githubLogo = document.createElement("img")
  githubLogo.src = GithubLogo
  githubLogo.id = "githubLogo"
  githubWidget.appendChild(githubLogo)

  githubWidget.addEventListener("click", () => {
    window.open("https://github.com/skyler-favors/map-name-game", "_blank")
  })

  return githubWidget
}

export function addWidgets(view: __esri.MapView, basemaps: Basemap[]) {
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

  let githubWidget = createGithubWidget()
  view.ui.add(githubWidget, "top-left")
}

export async function getListOfCountries(countriesLayer: __esri.FeatureLayer): Promise<[string[], __esri.Graphic[]]> {
  // query all features from the layer
  let countriesQuery = countriesLayer.createQuery();
  countriesQuery.where = "1=1"
  // we just want an array of graphics
  let countriesFeatures: __esri.Graphic[] = (await countriesLayer.queryFeatures(countriesQuery)).features

  // create a symbol and assign it to all the graphics
  let symbol = new SimpleFillSymbol({
    color: new Color("#1fd14f")
  })
  countriesFeatures.forEach((f) => {
    f.symbol = symbol
    f.popupTemplate = {
      title: f.attributes["COUNTRY"].toLowerCase()
    } as __esri.PopupTemplate
  })

  // convert all country strings to lowercase
  let countries: string[] = countriesFeatures.map((f) => {
    return f.attributes["COUNTRY"].toLowerCase()
  })

  console.log(countries)
  return [countries, countriesFeatures]
}
