import { getLongDate } from "@/utils";

interface ResultProps {
    result: {
        fields: {
            dateAndTime: string; // Assuming dateAndTime is a string in ISO format like "2024-06-21T13:00+01:00"
            teams: [string, string]; // Assuming teams is an array of two strings
            gameType: string;
            venue: string;
            result: string;
            competition: string;
        };
    };
}

const Result : React.FC<ResultProps> = ({result}) => {

    const dateStr = result.fields.dateAndTime;
    const longDate = getLongDate(dateStr);
    
    return (
        <div className="flex flex-col-reverse lg:flex-row gap-1 lg:gap-0 bg-slate-200 text-primary-darker rounded-lg p-1 lg:p-2">
            <div className="flex w-full lg:w-2/5 justify-center gap-2 lg:gap-4 items-center">
                <h6 className="w-1/3 text-right text-xl">{result.fields.teams[0]}</h6>
                <span className="bg-primary text-secondary-vibrant font-extrabold text-2xl rounded p-2">{result.fields.result}</span>
                <h6 className="w-1/3 lg:whitespace-nowrap text-xl">{result.fields.teams[1]}</h6>
            </div>
            <p className="text-sm block lg:hidden text-center">{longDate}</p>
            <p className="text-sm block font-bold lg:hidden text-center"><span className="font-normal mr-2">{result.fields.gameType} Rinks</span>{result.fields.venue}</p>
            <div className="w-full lg:w-3/5 text-center lg:text-right flex justify-center items-center gap-2 lg:block">
                <h6 className="font-bold">{result.fields.competition} <span className="font-normal hidden lg:inline ml-2">{result.fields.gameType} Rinks</span></h6>
                <p className="text-sm hidden lg:block">{result.fields.venue}</p>
                <p className="text-sm hidden lg:block">{longDate}</p>
            </div>
      </div>
    )
}

export default Result;