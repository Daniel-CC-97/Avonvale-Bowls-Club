import { getLongDate } from "@/utils";

interface ResultProps {
}

const Result : React.FC<ResultProps> = ({result}) => {

    const dateStr = result.fields.dateAndTime;
    const longDate = getLongDate(dateStr);
    
    return (
        <div className="flex flex-col-reverse lg:flex-row bg-slate-200 text-primary-darker rounded-lg p-1 lg:p-2">
            <div className="flex w-full lg:w-2/5 justify-between items-center">
                <h6 className="w-1/3 text-right ">{result.fields.teams[0]}</h6>
                <span className="bg-primary-lighter text-secondary-vibrant font-extrabold text-lg rounded p-2">{result.fields.result}</span>
                <h6 className="w-1/3">{result.fields.teams[1]}</h6>
            </div>
            <p className="text-sm block lg:hidden text-center">{longDate}</p>
            <div className="w-full lg:w-3/5 text-center lg:text-right flex justify-center items-center gap-2 lg:block">
                <h6 className="font-bold">{result.fields.gameType}</h6>
                <p className="text-sm">{result.fields.venue}</p>
                <p className="text-sm hidden lg:block">{longDate}</p>
            </div>
      </div>
    )
}

export default Result;