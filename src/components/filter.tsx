import Image from "next/image";

interface Props {
  items: string[];
  onRemoveAllTags: () => void;
  onRemoveTag: (tag: string) => void;
}

const Filter = ({ items, onRemoveTag, onRemoveAllTags }: Props) => {
  return (
    <div className="flex justify-center mt-[-37px]">
      <div className="flex gap-2 justify-between w-full max-w-[1200px] min-h-[74px] bg-white px-5 md:px-8 py-5 rounded shadow-md">
        <div className="flex gap-3 flex-wrap">
          {items.map((item) => {
            const tagButtonClasses =
              "w-[34px] h-[34px] flex bg-[hsl(180,_29%,_50%)] hover:bg-[hsl(180,_14%,_20%)] hover:cursor-pointer";
            const tagContainerClasses =
              "flex overflow-hidden items-center w-min bg-[hsl(180,_31%,_95%)] text-[hsl(180,_29%,_50%)] rounded";

            return (
              <div key={item} className={tagContainerClasses}>
                <p className="px-2">{item}</p>
                <button
                  onClick={() => onRemoveTag(item)}
                  className={tagButtonClasses}
                  aria-label={`Remove tag ${item}`}
                >
                  <Image
                    src="/images/icon-remove.svg"
                    alt={`Remove ${item}`}
                    width={16}
                    height={16}
                    className="m-auto"
                  />
                </button>
              </div>
            );
          })}
        </div>
        <button
          onClick={onRemoveAllTags}
          className="text-[hsl(180,_29%,_50%)] hover:underline"
          aria-label="Clear all tags"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Filter;
