import React, { useState } from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import './map.css';
import Cardui from './Cardui'


export default function Showmap() {

    const PositonsArr = [[31.955075, 34.814135], [31.767873, 35.232961], [32.778038, 34.990662]]
    const storeObjects = [{
        storePosition: [31.955075, 34.814135],
        description: "Tel aviv store",
        address: "liknero  2 ",
        Imgurl: "https://previews.123rf.com/images/hypnocreative/hypnocreative1807/hypnocreative180700338/104475821-tel-aviv-israel-june-10-2018-building-exteriors-and-streets-in-neve-tzedek-district-of-tel-aviv-isra.jpg"
    },
    {
        storePosition: [31.767873, 35.232961],
        description: "jerusalem  Store",
        address: "Toylore 42  ",
        Imgurl: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Jaffa_road_Jerusalem_2012.jpg"

    },
    {
        storePosition: [32.778038, 34.990662],
        description: "Haifa store",
        address: "Distore 2 ",
        Imgurl: "https://www.israel21c.org/wp-content/uploads/2017/08/shutterstock_turkishmarket-1168x657.jpg"

    },
    {
        storePosition: [29.550360, 34.952278],
        description: "Eilat store",
        address: "Distore 2 ",
        Imgurl: "https://www.elal.com/magazine/wp-content/uploads/2018/06/Eilat-Shopping-2.jpg"

    },
    {
        storePosition: [31.252974, 34.791462],
        description: "Be'er Sheva store",
        address: "Distore 2 ",
        Imgurl: "https://www.etzmaleh.co.il/Media/Uploads/%D7%91%D7%90%D7%A8_%D7%A9%D7%91%D7%A2_%D7%97%D7%93%D7%A9.jpg"

    }]

    const [activeStore, setActiveStore] = useState(null)
    return (
        <div class="leaflet-container">
            <Map center={PositonsArr[1]} zoom={7}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                {storeObjects.map(store =>
                    <Marker key={store}
                        position={store.storePosition}
                        onclick={() => {
                            setActiveStore(store)
                        }}
                    />)}

                {activeStore && <Popup className="pop" position={activeStore.storePosition} onClose={() => {
                    setActiveStore(null)
                }}>
                    <Cardui
                        description={activeStore.description}
                        address={activeStore.address}
                        Imgurl={activeStore.Imgurl} />
                </Popup>}
            </Map>
        </div>
    )
}