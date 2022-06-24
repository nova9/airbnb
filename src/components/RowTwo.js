import { useRef } from 'react';
import RightChevronSvg from './RightChevronSvg';
import FilterSvg from "./FilterSvg";

export default function RowTwo() {
    return (
        <div className="#border-b transition-height ease-out delay-300 h-20">
            <div className="max-w-7xl m-auto flex items-center">
                <div className=" relative overflow-hidden">
                    {/*<div className="#border-b absolute bg-gradient-to-r from-white h-full w-16 z-10"></div>*/}
                    <div className="#border-b absolute right-0 bg-gradient-to-l from-white h-full w-16 z-10"></div>

                    <div className="flex items-center h-20 text-xs font-semibold overflow-x-scroll no-scrollbar">
                        {carouselItems.map((item, index) => (
                            <div
                                key={index}
                                className={`flex items-center h-full mr-9 ${item.active ? 'border-b-2 border-gray-900' : ''}`}
                            >
                                <div className="flex flex-col items-center">
                                    <img
                                        className={`h-6 w-6 ${item.active ? '' : 'contrast-[0.3]'}`}
                                        src={item.img}
                                        alt="kk"
                                    />
                                    <div className={`whitespace-nowrap ${item.active ? '' : 'text-gray-500'}`}>{item.name}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="border border-gray-300 rounded-full flex items-center justify-center p-1.5">
                    <RightChevronSvg />
                </div>
                <div className="px-3 py-4 rounded-xl ml-4 border border-gray-300 flex items-center gap-2 text-gray-900">
                    <FilterSvg />
                    <span className="text-xs font-semibold">Filters</span>
                </div>
            </div>
        </div>
    )
}

const carouselItems = [
    {name: 'Islands', active: true, img: 'https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg'},
    {name: 'Beaches', active: false, img: 'https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg'},
    {name: 'Amazing pools', active: false, img: 'https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg'},
    {name: 'OMG!', active: false, img: 'https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg'},
    {name: 'Arctic', active: false, img: 'https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg'},
    {name: 'Tiny homes', active: false, img: 'https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg'},
    {name: 'Design', active: false, img: 'https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg'},
    {name: 'National parks', active: false, img: 'https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg'},
    {name: 'Cabins', active: false, img: 'https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg'},
    {name: 'Lakefront', active: false, img: 'https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg'},
    {name: 'Surfing', active: false, img: 'https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg'},
    {name: 'Amazing views', active: false, img: 'https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg'},
    {name: 'Caves', active: false, img: 'https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg'},
    {name: 'Camping', active: false, img: 'https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg'},
    {name: 'Shared homes', active: false, img: 'https://a0.muscache.com/pictures/52c8d856-33d0-445a-a040-a162374de100.jpg'},
    {name: 'Earth homes', active: false, img: 'https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg'},
    {name: 'Tropical', active: false, img: 'https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg'},
    {name: 'Bread & breakfasts', active: false, img: 'https://a0.muscache.com/pictures/5ed8f7c7-2e1f-43a8-9a39-4edfc81a3325.jpg'},
    {name: 'Luxe', active: false, img: 'https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg'},
    {name: 'Golfing', active: false, img: 'https://a0.muscache.com/pictures/6b639c8d-cf9b-41fb-91a0-91af9d7677cc.jpg'},
    {name: 'Countryside', active: false, img: 'https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg'},
    {name: 'Castles', active: false, img: 'https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg'},
    {name: 'Iconic cities', active: false, img: 'https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg'},
    {name: 'A-frames', active: false, img: 'https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg'},
    {name: 'Mansions', active: false, img: 'https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg'},
    {name: 'Historical homes', active: false, img: 'https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg'},
    {name: 'Beachfront', active: false, img: 'https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg'},
    {name: 'Farms', active: false, img: 'https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg'}
]