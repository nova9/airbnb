export default function DestinationCard({width}) {
    return (
        <div className="w-[300px]">
            <div className="h-[300px] w-[300px]">
                <img
                    className="h-[300px] object-cover rounded-2xl"
                    src="https://a0.muscache.com/im/pictures/373443ec-b377-4181-b753-3a2f3508c2b3.jpg?im_w=720"
                    alt=""/>
            </div>
            <div>
                <div className="flex justify-between items-center mt-3">
                    <div className="font-semibold">MV, Maldives</div>
                    <div className="text-sm font-light">New ★</div>
                </div>
                <div className="text-gray-500">3,400 kilometres away</div>
                <div className="text-gray-500">1-6 Jul</div>
                <div className="flex gap-1">
                    <div className="font-semibold">$950 SGD</div>
                    <div className="font-light">night</div>
                </div>
            </div>
        </div>
    )
}