import React from 'react';
import { TabTitle } from '../../utility/GenarelFunction';
import './Blog.css'
const Blog = () => {
    TabTitle("Gemvast . Blog")
    return (
        <div className='blog-page max-w-screen-xl mx-auto'>
            <div>
                <h1 className='text-5xl font-bold '>Difference between SQL and NoSQL</h1>
                <p className='text-2xl text-justify'>From analysts and engineers to IT decision makers, many are familiar with Relational Database Management Systems (RDBMS) and the Structured Query Language (SQL) used to interact with them. While these terms refer to a decades-old paradigm which remains a wide standard, today the sheer variety and depth of database systems can be dizzying. What’s more, rising volumes of unstructured data, availability of storage and processing power, and evolving analytic requirements have generated interest in fundamentally different technologies.

                    Collectively known as NoSQL, these popular alternatives to traditional RDBMSs show promise for a variety of modern use cases.

                    To make informed decisions about which to use, practitioners should be aware of the differences between SQL, NoSQL, individual Database Management Systems (DBMS) and languages, as well as the situations each is best-suited for, and how the landscape is changing.</p>
            </div>

            <div>
                <h1 className='text-5xl font-bold '> What is JWT, and how does it work?</h1>
                <p className='text-2xl text-justify'>
                    JSON Web Token is an open industry standard used to share information between two entities, usually a client (like your app’s frontend) and a server (your app’s backend).

                    They contain JSON objects which have the information that needs to be shared. Each JWT is also signed using cryptography (hashing) to ensure that the JSON contents (also known as JWT claims) cannot be altered by the client or a malicious party.
                </p>
            </div>
            <div>
                <h1 className='text-5xl font-bold '> What is the difference between javascript and NodeJS?</h1>
                <p className='text-2xl text-justify'>
                JavaScript is a programming language, which runs in web browsers. Whereas Node.js is an interpreter or running environment for JavaScript, which holds a lot of requiring libraries and all. JavaScript is basically one standard defining programming language; it can run any browser with a default browser running environment. It is a very strong language normally used for a web application on any verification or any specific business logic. We need to append in the screen without page refreshing. JavaScript also helps to use Ajax at any time, which helps us call any server-side script for given dynamic data based on the requirement. It also helps with generating dynamic HTML tables based on business requirement. JQuery is one of the popular libraries to make comfortable use of JavaScript by avoiding to write a lot of code.
                </p>
               

            </div>
            <div>
                <h1 className='text-5xl font-bold '>How does NodeJS handle multiple requests at the same time?
                </h1>
                <p className='text-2xl text-justify'>Node JS is one of the most popular runtime environments, to build backend servers. Despite of its single-threaded nature, Node JS performs quite well because of its asynchronous and non-blocking behavior. It is regularly used to build backend servers that interact with websites, mobile applications, and more. Let’s take a look at the topic-

                    How single threaded Node JS handles concurrency when multiple I/O operations are happening?

                    It means that, how does Node JS handle multiple client requests, even when it uses a single thread? Using a single thread would mean, that it would handle the request and response of a single client at a time. So, how does Node JS work when multiple clients are firing requests?

                    Node JS uses the concept of asynchronous and non-blocking behavior. But first, let’s understand the terms: single-threaded and concurrency.</p>

            </div>

        </div>
    );
};

export default Blog;