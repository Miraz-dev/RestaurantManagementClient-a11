// import React from 'react';

import { Helmet } from "react-helmet";

const Blog = () => {
    return (
        <div className='min-h-screen leading-8 p-1 lg:p-0'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>FP || Blog</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            <h1 className="text-center font-bold text-xl md:text-2xl lg:text-4xl my-14">Foodopedia Blogs</h1>

            <div className="mb-14">
                <h1 className="text-xl lg:text-2xl font-bold">Topic: What is One way data binding?</h1>
                <p className="text-gray-400 my-4 text-justify">In React, one-way data binding refers to the flow of data in a single direction, from a parent component to a child component. It means that data is passed down from a parent component to a child component through props, and the child component cannot directly modify the data it receives. Changes to the data in the parent component will be reflected in the child component, but changes in the child component will not affect the parent component&apos;s data directly.
                    <br />
                    <br />
                    This one-way data flow is a fundamental principle in React and helps maintain a clear and predictable data flow in the application. It makes it easier to understand how data changes over time and ensures that the source of truth for the data is always at the topmost parent component in the component hierarchy. If a child component needs to make changes to the data, it can do so by invoking callback functions passed down from the parent component through props. This way, the child component can signal to the parent component that it needs to update the data.
                </p>
            </div>

            <div>
                <h1 className="text-xl lg:text-2xl font-bold">Topic: What is NPM in node.js?</h1>
                <p className="text-gray-400 my-4 text-justify">NPM stands for Node Package Manager, and it is the default package manager for Node.js. NPM allows developers to easily manage and install packages (libraries and tools) for Node.js applications. It simplifies the process of installing, updating, and managing the dependencies that are used in Node.js projects.
                    <br />
                    <br />
                    With NPM, you can:
                    <br />
                    <br />
                    - <span className="font-semibold text-gray-600">Install Packages:</span> NPM allows you to install packages from the official NPM registry or from other sources. You can install packages locally for a specific project or globally to be accessible system-wide.
                    <br />
                        For example, to install a package locally, you can use the following command: <span className="bg-black text-gray-300 p-2 rounded">npm install package-name</span>
                    <br />
                    <br />
                    {/* Second */}
                    - <span className="font-semibold text-gray-600">Manage Dependencies:</span> NPM helps manage dependencies specified in a package.json file. This file lists all the project dependencies, including their version numbers. NPM can install all the dependencies listed in package.json using a simple command: <span className="bg-black text-gray-300 p-2 rounded">npm install</span>
                    <br />
                    <br />
                    - <span className="font-semibold text-gray-600">Version Management: </span> NPM allows you to specify version ranges for packages in the package.json file. You can define which versions of a package your project is compatible with, and NPM will handle installing the appropriate version based on the specified range.
                    <br />
                    <br />
                    - <span className="font-semibold text-gray-600">Scripts:  </span> NPM allows you to define custom scripts in the package.json file. These scripts can be run using the npm run command. It is a convenient way to automate common tasks related to your project.
                    <br />
                    <br />
                    NPM is an essential tool for Node.js developers as it streamlines the process of managing project dependencies, making it easier to work with external libraries and tools in Node.js applications.
                    
                </p>
            </div>


            <div className="my-14">
                <h1 className="text-xl lg:text-2xl font-bold">Topic: Difference between Mongodb database vs mySQL database.</h1>
                <p className="text-gray-400 my-4 text-justify">
                    MongoDB and MySQL are both popular database management systems, but they differ significantly in their data models, query languages, and use cases. Here are the main differences between MongoDB and MySQL:
                </p>


                <p className="text-gray-600 my-4 text-justify">
                    <span className="font-semibold underline">1. Data Model</span>


                    <br />
                    <span className="font-medium mt-2">- MongoDB : </span>
                    <span className="text-gray-400 my-4 text-justify">
                        MongoDB is a NoSQL, document-oriented database. It stores data in JSON-like BSON (Binary JSON) format. Data in MongoDB is organized into collections, which are equivalent to RDBMS tables. Each collection contains documents, which are similar to rows in a relational database. MongoDB is schema-less, meaning each document in a collection can have a different structure. This flexibility is suitable for handling unstructured or semi-structured data.
                    </span>
                    <br />

                    <span className="font-medium mt-2">- MySQL : </span>
                    <span className="text-gray-400 my-4 text-justify">
                        MySQL is a relational database management system (RDBMS). It uses a tabular schema where data is organized into tables with predefined schemas.Tables consist of rows and columns, where each column has a specific data type, and each row represents a record.MySQL enforces a strict schema, meaning the structure of tables and the data types of columns must be defined before inserting data.
                    </span>


                </p>




                <p className="text-gray-600 my-4 text-justify">
                    <span className="font-semibold underline">2. Query Language:</span>


                    <br />
                    <span className="font-medium mt-2">- MongoDB : </span>
                    <span className="text-gray-400 my-4 text-justify">
                        MongoDB uses a query language based on JSON-like syntax. Queries are expressed as JSON documents.MongoDB supports rich queries, including nested documents, array queries, and geospatial queries.It also provides aggregation framework for complex data transformations and analysis.
                    </span>
                    <br />

                    <span className="font-medium mt-2">- MySQL : </span>
                    <span className="text-gray-400 my-4 text-justify">
                        MySQL uses SQL (Structured Query Language) for querying data. SQL is a powerful and standardized language used in most relational databases. SQL supports operations like SELECT, INSERT, UPDATE, DELETE, JOIN, and various aggregate functions for data manipulation and retrieval.
                    </span>
                </p>




                <p className="text-gray-600 my-4 text-justify">
                    <span className="font-semibold underline">3. Scalability:</span>


                    <br />
                    <span className="font-medium mt-2">- MongoDB : </span>
                    <span className="text-gray-400 my-4 text-justify">
                        MongoDB is designed to be horizontally scalable, making it well-suited for handling large volumes of data and high traffic loads. It can distribute data across multiple servers, allowing seamless scaling by adding more servers to the MongoDB cluster.
                    </span>
                    <br />

                    <span className="font-medium mt-2">- MySQL : </span>
                    <span className="text-gray-400 my-4 text-justify">
                        MySQL traditionally relies on vertical scaling, where you upgrade the hardware (CPU, RAM, etc.) of a single server to handle increased loads.However, MySQL also supports some level of horizontal scaling through techniques like sharding and replication.
                    </span>
                </p>




                <p className="text-gray-600 my-4 text-justify">
                    <span className="font-semibold underline">4. Use Cases:</span>


                    <br />
                    <span className="font-medium mt-2">- MongoDB : </span>
                    <span className="text-gray-400 my-4 text-justify">
                    MongoDB is a good choice for applications with rapidly changing schemas, unstructured or semi-structured data, and requirements for horizontal scalability.It is often used in real-time analytics, content management systems, and applications dealing with large amounts of data.
                    </span>
                    <br />

                    <span className="font-medium mt-2">- MySQL : </span>
                    <span className="text-gray-400 my-4 text-justify">
                    MySQL is a great choice for applications with structured data and complex queries, where ACID compliance (Atomicity, Consistency, Isolation, Durability) is crucial.It is widely used in traditional web applications, e-commerce platforms, and applications requiring transactions and relational data integrity.
                    </span>
                </p>


                <p className="text-gray-400 my-4 text-justify">
                    In summary, choose MongoDB if you need a flexible schema, handle unstructured or semi-structured data, and require horizontal scalability. Choose MySQL if you need a rigid schema, complex SQL queries, and ACID compliance for transactions. The choice between MongoDB and MySQL depends on the specific requirements of your project and the nature of the data you are dealing with.
                </p>
            </div>
        </div>
    );
};

export default Blog;