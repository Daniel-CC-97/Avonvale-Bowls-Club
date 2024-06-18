import { getLongDate } from "@/utils";

interface FixtureProps {
    fixture: {
        fields: {
            dateAndTime: string; // Assuming dateAndTime is a string in ISO format like "2024-06-21T13:00+01:00"
            teams: [string, string]; // Assuming teams is an array of two strings
            gameType: string;
            venue: string;
        };
    };
}

const Fixture : React.FC<FixtureProps> = ({fixture}) => {

    const dateStr = fixture.fields.dateAndTime;
    const date = new Date(dateStr);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const simpleTime = `${hours}:${minutes}`;
    const longDate = getLongDate(dateStr);
    
    return (
        <div className="flex flex-col-reverse lg:flex-row bg-slate-200 text-primary-darker rounded-lg p-1 lg:p-2">
            <div className="flex w-full lg:w-2/5 justify-between items-center">
                <h6 className="w-1/3 text-right ">{fixture.fields.teams[0]}</h6>
                <span className="bg-primary-lighter text-secondary-vibrant font-extrabold text-lg rounded p-2">{simpleTime}</span>
                <h6 className="w-1/3">{fixture.fields.teams[1]}</h6>
            </div>
            <p className="text-sm block lg:hidden text-center">{longDate}</p>
            <div className="w-full lg:w-3/5 text-center lg:text-right flex justify-center items-center gap-2 lg:block">
                <h6 className="font-bold">{fixture.fields.gameType}</h6>
                <p className="text-sm">{fixture.fields.venue}</p>
                <p className="text-sm hidden lg:block">{longDate}</p>
            </div>
      </div>
    )
}

export default Fixture;