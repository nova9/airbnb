import SearchSvg from "./SearchSvg";

export default function Temp() {
    return (
        <div className="flex justify-center">
            <div className="flex items-center rounded-full border h-16 w-[900px] font-semibold text-xs">
                <div className="hover:bg-gray-100 h-full grow rounded-full flex items-center pl-8">
                    <div className="flex flex-col">
                        <div>Where</div>
                        <div className="font-normal text-sm text-gray-500">Search destination</div>
                    </div>
                </div>
                <hr width="1" size="500" className="inline-block" />
                <div className="hover:bg-gray-100 h-full grow rounded-full flex items-center">
                    <div className="flex flex-col mr-24 border-l pl-6">
                        <div>When</div>
                        <div className="text-sm">Week in</div>
                    </div>
                </div>
                <div className="hover:bg-gray-100 h-full rounded-full flex items-center">
                    <div className="flex items-center">
                        <div className="flex flex-col mr-24 pl-6 border-l">
                            <div>Who</div>
                            <div className="font-normal text-sm text-gray-500">Add guests</div>
                        </div>
                        <div className="mx-2 h-12 w-12 rounded-full bg-[#ff385c] text-white flex items-center justify-center">
                            <SearchSvg height={15} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}