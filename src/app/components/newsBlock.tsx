import { useState, useEffect, useRef } from "react";
import { getLongDate } from "@/utils";

interface NewsProps {
  newsTitle: string;
  newsContent: { content: { value: string }[] }[];
  updatedAtDate: string;
}

const NewsBlock: React.FC<NewsProps> = ({
  newsTitle,
  newsContent,
  updatedAtDate,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [needsButton, setNeedsButton] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const longDate = getLongDate(updatedAtDate);

  useEffect(() => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight;
      const containerHeight = contentRef.current.clientHeight;

      setNeedsButton(contentHeight > containerHeight);
    }
  }, [newsContent]);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex flex-col justify-between lg:justify-start w-full bg-slate-200 text-primary-darker rounded-lg p-1 lg:p-2">
      <div className="flex justify-between">
        <h2 className="font-bold text-lg">{newsTitle}</h2>
        <span className="text-secondary text-sm font-normal content-center">
          {longDate}
        </span>
      </div>
      <div
        ref={contentRef}
        className={`relative overflow-hidden transition-max-height duration-500 ease-in-out ${
          isExpanded ? "max-h-[3000px]" : "max-h-32"
        }`}
      >
        {newsContent.map((contentArr, index) => (
          <div key={index}>
            <p>{contentArr.content[0].value}</p>
            <br />
          </div>
        ))}
        {!isExpanded && needsButton && (
          <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-slate-200 to-transparent" />
        )}
      </div>
      {needsButton && (
        <button
          className="mt-2 self-middle lg:self-end bg-primary-lighter text-secondary-vibrant font-bold py-1 px-3 rounded"
          onClick={toggleExpanded}
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
};

export default NewsBlock;
