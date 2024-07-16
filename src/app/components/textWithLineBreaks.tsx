
import parse from 'html-react-parser';

interface Props {
    text: string;
}

const TextWithLineBreaks: React.FC<Props> = ({ text }) => {
    const formattedText = text.replace(/\n/g, '<br />');
    
    return (
        <div className='text-primary-darker'>{parse(formattedText)}</div>
    );
};

export default TextWithLineBreaks;
