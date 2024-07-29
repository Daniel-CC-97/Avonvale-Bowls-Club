import parse from 'html-react-parser';

interface Props {
    text: string;
}

const TextWithHeadings: React.FC<Props> = ({ text }) => {
    // Convert markdown-style headings to HTML headings
    const formattedText = text
        .replace(/^# (.*)$/gm, '<h1 className="text-2xl font-bold">$1</h1>')   // Replace # with <h1>
        .replace(/^## (.*)$/gm, '<h2 className="text-xl font-bold">$1</h2>') // Replace ## with <h2>
        .replace(/^### (.*)$/gm, '<h3 className="text-lg font-bold">$1</h3>') // Replace ### with <h3>
        .replace(/^#### (.*)$/gm, '<h4 className="text-lg font-bold">$1</h4>') // Replace #### with <h4>
        .replace(/^##### (.*)$/gm, '<h5 className="text-lg font-bold">$1</h5>') // Replace ##### with <h5>
        .replace(/^###### (.*)$/gm, '<h6 className="text-lg font-bold">$1</h6>') // Replace ###### with <h6>
        .replace(/\n/g, '<br />'); // Replace newlines with <br />

    return (
        <div className='text-primary-darker'>{parse(formattedText)}</div>
    );
};

export default TextWithHeadings;

