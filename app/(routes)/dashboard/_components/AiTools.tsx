import React from 'react'
import AiToolCard from './AiToolCard'

const AiToolsList = [
    {
        name: 'AI Career Q&A Chat',
        desc: 'Ask career questions',
        icon: '/chatbot.png',
        button: 'Ask Now',
        path: '/ai-tools/ai-chat'
    },
    {
        name: 'AI Resume Analyzer',
        desc: 'Improve your resume',
        icon: '/resume.png',
        button: 'Analyze Now',
        path: '/ai-resume-analyzer'
    },
    {
        name: 'Career Roadmap Generator',
        desc: 'Build your roadmap',
        icon: '/roadmap.png',
        button: 'Generate Now',
        path: '/career-roadmap-generator'
    },
    {
        name: 'Cover Letter Generator',
        desc: 'Write a cover letter',
        icon: '/cover.png',
        button: 'Create Now',
        path: '/cover-letter-generator'
    }
]

function AiTools() {

    return (
        <div className='mt-7 p-5 bg-white border rounded-xl'>
            <h2 className='font-bold text-lg'> Available AI Tools</h2>
            <p>Start Building and Shape your Career with this exclsuive AI Tools</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-4'>
                {AiToolsList.map((tool:any,index)=>(
                    <AiToolCard tool={tool} key={index} />
                ))}
            </div>
        </div>

    )
}

export default AiTools