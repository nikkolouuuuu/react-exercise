import { useEffect } from "react";

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
          {items.length > 0 &&
            items.map((item) => (
              <div
                key={item}
                className="flex overflow-hidden items-center w-min bg-[hsl(180,_31%,_95%)] text-[hsl(180,_29%,_50%)] rounded"
              >
                <p className="px-2">{item}</p>
                <button
                  onClick={() => {
                    onRemoveTag(item);
                  }}
                  className="w-[34px] h-[34px] flex bg-[hsl(180,_29%,_50%)] hover:bg-[hsl(180,_14%,_20%)] hover:cursor-pointer"
                >
                  <img
                    className="m-auto"
                    src="/images/icon-remove.svg"
                    alt="remove"
                  />
                </button>
              </div>
            ))}
        </div>
        <button
          onClick={() => onRemoveAllTags()}
          className="text-[hsl(180,_29%,_50%)] hover:underline"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Filter;
