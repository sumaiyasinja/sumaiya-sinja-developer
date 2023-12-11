import React from 'react';

const Skills = () => {
    return (
        <div className='container mx-auto'>
            <h1>Technologies</h1>
            {/* <p>something</p> */}
            {/* icons */}
            <div className='my-9 mx-auto'>
                <h2>Languages</h2>
                <ul className='list-disc grid justify-around items-center grid-cols-4 '>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>ReactJs</li>
                    <li>Tailwind CSS</li>
                    <li>Bootstrap</li>
                    <li>Mongodb</li>
                    <li>Nodejs</li>
                    <li>Expressjs</li>
                </ul>
            </div>
            <h2>Additional technologies and skills</h2>
            <ul className='list-disc grid mx-auto justify-around items-center grid-cols-4 '>
                <li>Git</li>
                <li>problem solving</li>
                <li>Teamwork</li>
                <li>B2 english</li>
                <li>Engagement</li>
                <li>Quick learning</li>
            </ul>
        </div>
    );
};

export default Skills;