import Image from "next/image"

const Card = () => {
  return (
    <div className="bg-white flex gap-3 px-6 py-4 rounded">
        <Image src="/images/photosnap.svg" alt="Card icon" width={75} height={75}></Image>
        <div className="flex flex-col justify-center">
            <div className="flex gap-3 items-center">
                <p className="font-semibold text-sm">Photosnap</p>
                <div className="flex gap-1">
                    <div className="text-[10px] bg-[hsl(180,_29%,_50%)] text-white rounded-full px-1 pt-1">NEW!</div>
                    <div className="text-[10px] bg-[hsl(180,_14%,_20%)] text-white rounded-full px-1 pt-1">FEATURED</div>
                </div>
            </div>
            <p className="font-bold">Senior Frontend Developer</p>
            <div className="flex gap-3 items-center text-[grey]">
                <span className="text-xs">1d ago</span>•
                <span className="text-xs">Full Time</span>•
                <span className="text-xs">USA only</span>
            </div>
        </div>
    </div>
  )
}

export default Card