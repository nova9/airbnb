import RowOne from './components/RowOne';
import RowTwo from './components/RowTwo';
import DestinationCard from './components/DestinationCard';
import { useRef, useEffect, useState } from 'react';
import Temp from "./components/Temp";

function App() {
    const spaceElement = useRef(null)
    const rootElement = useRef(null)
    const [spaceIsVisible, setSpaceIsVisible] = useState(true)

    const [pickerClicked, setPickerClicked] = useState(false)
    const [whereClicked, setWhereClicked] = useState(false)
    const [whenClicked, setWhenClicked] = useState(false)
    const [whoClicked, setWhoClicked] = useState(false)
    const [searchClicked, setSearchClicked] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setSpaceIsVisible(true)
            } else {
                setSpaceIsVisible(false)
            }
        }, { rootMargin: '-80px 0px 0px 0px' });
        observer.observe(spaceElement.current);
    })

    return (
        <div className="relative">
            <div ref={rootElement} className="fixed z-10 top-0 bg-white w-full">
                <RowOne
                    pickerClicked={pickerClicked}
                    setPickerClicked={setPickerClicked}
                    whereClicked={whereClicked}
                    setWhereClicked={setWhereClicked}
                />
            </div>
            <div className="h-20"></div>
            <div ref={spaceElement} className="h-4">{/* Empty */}</div>
            <div className={`sticky top-20 bg-white ${spaceIsVisible ? '' : 'shadow'}`}>
                <RowTwo />
            </div>
            <div className="fixed bottom-0 h-10 bg-white w-full border-t flex items-center">
                <div className="max-w-7xl w-full mx-auto">
                    <div className="text-sm text-gray-500">© 2022 Airbnb, Inc. · Privacy·Terms · Sitemap</div>
                </div>
            </div>
            <div className="mt-6" onClick={() => {setWhereClicked(false); setPickerClicked(false)}}>
                <div className="flex justify-between gap-4 max-w-7xl mx-auto">
                    <DestinationCard />
                    <DestinationCard />
                    <DestinationCard />
                    <DestinationCard />
                </div>
                <div className="flex justify-between gap-4 max-w-7xl mx-auto mt-6">
                    <DestinationCard />
                    <DestinationCard />
                    <DestinationCard />
                    <DestinationCard />
                </div>
                <div className="flex justify-between gap-4 max-w-7xl mx-auto mt-6">
                    <DestinationCard />
                    <DestinationCard />
                    <DestinationCard />
                    <DestinationCard />
                </div>
                <div className="flex justify-between gap-4 max-w-7xl mx-auto mt-6">
                    <DestinationCard />
                    <DestinationCard />
                    <DestinationCard />
                    <DestinationCard />
                </div>
                <div className="flex justify-between gap-4 max-w-7xl mx-auto mt-6">
                    <DestinationCard />
                    <DestinationCard />
                    <DestinationCard />
                    <DestinationCard />
                </div>
                <div className="flex justify-between gap-4 max-w-7xl mx-auto mt-6">
                    <DestinationCard />
                    <DestinationCard />
                    <DestinationCard />
                    <DestinationCard />
                </div>
                <div className="flex justify-between gap-4 max-w-7xl mx-auto mt-6">
                    <DestinationCard />
                    <DestinationCard />
                    <DestinationCard />
                    <DestinationCard />
                </div>
            </div>
        </div>
    );
}

export default App;
