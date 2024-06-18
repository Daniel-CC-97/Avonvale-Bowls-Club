import React from "react";

interface StaticTextProps {
    text: string
}

const StaticText: React.FC<StaticTextProps> = ({text}) => {
    
    // Replace newline characters with <br> tags
    const formattedText = text.split('\n').map((line, index) => (
        <React.Fragment key={index}>
            {line}
            {index < text.split('\n').length - 1 && <br />}
        </React.Fragment>
    ));

    return (
        <p className="text-primary-darker bg-slate-100 p-2 lg:p-4 rounded-lg">{formattedText}</p>
    )
}

export default StaticText;