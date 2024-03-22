import React from 'react';

const About = () => {
    return (
        <main className = 'About'>
            <h2>About</h2>
            <p style = {{ marginTop: '1rem' }}>
                The act or process of imparting or acquiring general knowledge, developing the powers of reasoning and judgment, and generally of preparing oneself or others intellectually for mature life. the act or process of imparting or acquiring particular knowledge or skills, as for a profession.
                Education is an important tool which is very useful in everybody's life. Education is what differentiates us from other living beings on earth. It makes man the smartest creature on earth. It empowers humans and gets them ready to face challenges of life efficiently.
            </p>
            <blockquote className='quote'>
                <i class="fa fa-quote-left" aria-hidden="true"></i>
                    Education is the most powerful weapon which can use to <br></br>change the world.
                <i class="fa fa-quote-right" aria-hidden="true"></i>
            </blockquote>
        </main>
    )
}

export default About;