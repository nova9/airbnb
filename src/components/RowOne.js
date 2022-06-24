import LogoSvg from "./LogoSvg";
import SearchSvg from "./SearchSvg";
import WorldSvg from "./WorldSvg";
import HamburgerSvg from "./HamburgerSvg";
import ProfileSvg from "./ProfileSvg";
import { useState, useRef } from "react";
import { Transition } from 'react-transition-group';

export default function RowOne({pickerClicked, setPickerClicked, whereClicked, setWhereClicked}) {
    const [whenClicked, setWhenClicked] = useState(false)
    const [whoClicked, setWhoClicked] = useState(false)
    const [searchClicked, setSearchClicked] = useState(false)
    const picker = useRef(null)
    return (
        <div className={`border-b transition-height ease-out delay-150 ${pickerClicked ? 'h-40' : 'h-20'}`}>
            <div className="max-w-7xl m-auto">
                <div className="flex items-center justify-between h-20 text-sm">
                    <div className=""><LogoSvg /></div>
                    <Transition in={pickerClicked} timeout={150} nodeRef={picker}>
                        {state => (
                            <div className="flex flex-col items-center translate-x-12 -translate-y-3">
                                <div className={`flex gap-3 text-base items-center transition-all ease-out delay-150 -translate-y-10 ${pickerClicked ? 'translate-y-10' : 'scale-0'}`}>
                                    <div className="underline decoration-2 underline-offset-8">Stays</div>
                                    <div className="hover:underline hover:decoration-2 hover:underline-offset-8 hover:text-gray-500">Experiences</div>
                                    <div className="hover:underline hover:decoration-2 hover:underline-offset-8 hover:text-gray-500">Online experiences</div>
                                </div>
                                <div
                                    ref={picker}
                                    className={`transition-all ease-out delay-150 border text-gray-900 rounded-full flex items-center justify-between hover:cursor-pointer ${pickerClicked ? 'translate-y-[70px] w-[900px] h-[65px] bg-gray-100' : 'w-[350px] h-12 shadow hover:shadow-md'}`}
                                >

                                    {/* Where */}
                                    {state === 'entering' || state === 'exited'
                                        ?
                                        <span
                                            className="font-semibold ml-6"
                                            onClick={() => {setPickerClicked(prev => !prev); setWhereClicked(prev => !prev)}}
                                        >
                                            Anywhere
                                        </span>
                                        : null
                                    }
                                    {state === 'entered' || state === 'exiting'
                                        ?
                                        <div className={`relative h-full rounded-full flex grow items-center ${whereClicked ? 'shadow-xl bg-white' : 'hover:bg-gray-100'}`}>
                                            <div className="flex flex-col mr-16 pl-6">
                                                <div className="font-semibold text-xs">Where</div>
                                                <div className="text-sm">Search destination</div>
                                            </div>

                                            {whereClicked
                                                ?
                                                <div className="z-50 p-8 absolute w-max top-[75px] bg-white shadow-md rounded-3xl border">
                                                    <div className="font-semibold mb-8">Search by region</div>
                                                    {where.map(row => (
                                                        <div className="flex gap-4 justify-between mb-8">
                                                            {row.map(place => (
                                                                <div className="shrink-0">
                                                                    <button className="" aria-pressed="true" type="button">
                                                                        <img
                                                                            className={`w-32 h-32 rounded-xl ${place.active ? 'border-2 border-gray-900' : 'border border-gray-300'}`}
                                                                            alt=""
                                                                            src={place.img}
                                                                        />
                                                                    </button>
                                                                    <div className={place.active ? 'font-medium' : ''}>{place.name}</div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    ))}
                                                </div>
                                                :
                                                null
                                            }
                                        </div>
                                        : null
                                    }

                                    {/* When */}
                                    {state === 'entering' || state === 'exited'
                                        ?
                                        <span
                                            className="font-semibold"
                                            onClick={() => {setPickerClicked(prev => !prev); setWhenClicked(prev => !prev)}}
                                        >
                                            Any week
                                        </span>
                                        : null
                                    }
                                    {state === 'entered' || state === 'exiting'
                                        ?
                                        <>
                                            <div className="hover:bg-gray-100 bg-gray-100 h-full grow rounded-full flex items-center">
                                                <div className={`flex flex-col mr-12 pl-6 ${whereClicked ? '' : 'border-l'}`}>
                                                    <div className="font-semibold text-xs">Check in</div>
                                                    <div className="text-sm">Add dates</div>
                                                </div>
                                            </div>
                                            <div className="hover:bg-gray-100 h-full grow rounded-full flex items-center">
                                                <div className="flex flex-col mr-12 border-l pl-6">
                                                    <div className="font-semibold text-xs">Check out</div>
                                                    <div className="text-sm">Add dates</div>
                                                </div>
                                            </div>
                                        </>
                                        : null
                                    }

                                    {/* Who */}
                                    {state === 'entering' || state === 'exited'
                                        ?
                                        <>
                                            <span
                                                className="text-gray-500"
                                                onClick={() => {setPickerClicked(prev => !prev); setWhenClicked(prev => !prev)}}
                                            >
                                                Add guests
                                            </span>
                                            <div
                                                className="mr-2 h-8 w-8 rounded-full bg-[#ff385c] text-white flex items-center justify-center"
                                                onClick={() => {setPickerClicked(prev => !prev); setSearchClicked(prev => !prev)}}
                                            >
                                                <SearchSvg height={10} />
                                            </div>
                                        </>
                                        : null
                                    }
                                    {state === 'entered' || state === 'exiting'
                                        ?
                                        <div className="hover:bg-gray-100 h-full rounded-full flex items-center">
                                            <div className="flex flex-col mr-16 pl-6 border-l">
                                                <div className="font-semibold text-xs">Who</div>
                                                <div className="font-normal text-sm text-gray-500">Add guests</div>
                                            </div>
                                            <div className="mr-2 h-12 w-12 rounded-full bg-[#ff385c] text-white flex items-center justify-center">
                                                <SearchSvg height={15} />
                                            </div>
                                        </div>
                                        : null
                                    }
                                </div>
                            </div>
                        )}
                    </Transition>
                    <div className="flex items-center gap-">
                        <div className="font-semibold h-full rounded-full px-3 py-2.5 hover:bg-gray-100">
                            Become a host
                        </div>
                        <div className="rounded-full h-full flex items-center p-3 hover:bg-gray-100">
                            <WorldSvg />
                        </div>
                        <div className="ml-1 flex items-center text-gray-500 border rounded-full py-1 pr-1 pl-3 gap-2 hover:shadow">
                            <HamburgerSvg />
                            <ProfileSvg />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const where = [
    [
        {name: "I'm flexible", img: 'https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg', active: true},
        {name: 'Europe', img: 'https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg', active: false},
        {name: 'Malaysia', img: 'https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg', active: false},
    ],
    [
        {name: 'Australia', img: 'https://a0.muscache.com/im/pictures/42a1fb0f-214c-41ec-b9d7-135fbbdb8316.jpg', active: false},
        {name: 'United Kindom', img: 'https://a0.muscache.com/im/pictures/dbb2b5ef-2efe-4099-81ac-c7b957f384ed.jpg', active: false},
        {name: 'East Asia', img: 'https://a0.muscache.com/im/pictures/9cd04810-cc2e-4542-a6a8-55786182a368.jpg', active: false},
    ],
]