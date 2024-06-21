import React from "react";

interface StaticTextProps {
    text: string;
    linkText: string;
    linkUrl: string;
}

const StaticTextWithLink: React.FC<StaticTextProps> = ({ text, linkText, linkUrl }) => {
    // Split text into lines and replace newline characters with <br> tags
    const lines = text.split('\n').map((line, index) => (
        <React.Fragment key={index}>
            {line}
            {index < text.split('\n').length - 1 && <br />} {/* Add <br> tag unless it's the last line */}
        </React.Fragment>
    ));

    // Find where to insert the link
    const indexToInsertLink = lines.findIndex(line => line.includes(linkText));

    // Insert the link into the appropriate line
    if (indexToInsertLink !== -1) {
        lines.splice(indexToInsertLink, 1, (
            <a key={indexToInsertLink} href={linkUrl} className="text-primary-darker font-bold">
                {linkText}
            </a>
        ));
    }

    return (
        <p className="text-primary-darker bg-slate-100 p-2 lg:p-4 rounded-lg">
            {lines}
        </p>
    );
};

export default StaticTextWithLink;
