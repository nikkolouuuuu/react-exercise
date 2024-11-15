import { Card } from "@/services/job";

interface Props {
  item: Card;
  selectedTags: string[];
  onSelectTag: (tag: string) => void;
}

const JobCard = ({ item, selectedTags, onSelectTag }: Props) => {
  const details: string[] = [];
  details.push(item.role, item.level, ...item.languages, ...item.tools);

  return (
    <div
      className={`grid w-full max-w-[1200px] bg-white gap-2 pt-[30px] px-6 pb-4 md:pt-4 rounded md:grid-cols-2 shadow-md ${
        item.featured && "border-l-4 border-l-[hsl(180,_29%,_50%)]"
      }`}
    >
      <div className="flex gap-3 relative">
        <div className="w-[50px] h-[50px] absolute top-[-55px] md:top-0 md:w-[75px] md:h-[75px] md:relative">
          <img alt="Card Image" src={item.logo} />
        </div>
        <div className="flex flex-col gap-1 justify-center">
          <div className="flex gap-3 items-center">
            <p className="font-semibold text-sm text-[hsl(180,_29%,_50%)]">
              {item.company}
            </p>
            <div className="flex gap-1">
              {item.new && (
                <div className="text-[10px] bg-[hsl(180,_29%,_50%)] text-white rounded-full px-1 pt-1">
                  NEW!
                </div>
              )}
              {item.featured && (
                <div className="text-[10px] bg-[hsl(180,_14%,_20%)] text-white rounded-full px-1 pt-1">
                  FEATURED
                </div>
              )}
            </div>
          </div>
          <p className="font-bold text-[hsl(180,_29%,_50%)]">{item.position}</p>
          <div className="flex gap-3 items-center text-[grey] text-xs">
            <span>{item.postedAt}</span>•<span>{item.contract}</span>•
            <span>{item.location}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center border-t md:border-t-0 border-t-gray-300 pt-4 md:pt-0 md:justify-end">
        <div className="flex gap-3 flex-wrap md:justify-end">
          {details.map((detail) => (
            <button
              key={detail}
              onClick={() => {
                if (!selectedTags.includes(detail)) onSelectTag(detail);
              }}
              className={`w-min hover:bg-[hsl(180,_29%,_50%)] hover:text-white font-medium rounded px-2 pt-2 pb-1 hover:cursor-pointer ${
                selectedTags.includes(detail)
                  ? "bg-[hsl(180,_29%,_50%)] text-white"
                  : "bg-[hsl(180,_31%,_95%)] text-[hsl(180,_29%,_50%)]"
              }`}
            >
              {detail}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobCard;
