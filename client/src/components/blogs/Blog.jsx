import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Blog = ({ title, content, category }) => {
    return (
        <div className='container-col border w-350 h-500 shadow radius-md mg-left-lg pad-lg'>
            <h1 className=''>{title}</h1>
            <div className='underline-full'></div>
            <h3 className='mg-bot-lg'>Category: {category}</h3>
            <ReactMarkdown
                children={content}
                components={{
                    code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '');
                        return !inline && match ? (
                            <SyntaxHighlighter
                                children={String(children).replace(/\n$/, '')}
                                style={coldarkDark}
                                language={match[1]}
                                PreTag='div'
                                {...props}
                            />
                        ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        );
                    },
                }}
            ></ReactMarkdown>
        </div>
    );
};

export default Blog;
