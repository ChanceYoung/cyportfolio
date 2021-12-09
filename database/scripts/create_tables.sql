CREATE TABLE IF NOT EXISTS post(
    id int,
    Title varchar(80),
    Goal text,
    Full_body text,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS skill(
    id int,
    Skill_Name varchar(80),
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS post_skill_assoc(
    Post_id int,
    Skill_id int,
    FOREIGN KEY (Post_id) references post(id),
    FOREIGN KEY (Skill_id) references skill(id)
);


/*Skills*/
INSERT INTO skill values(1, 'Node'),(2, 'Docker'),(3, 'Javascript'), (4, 'React');

/*Posts*/
INSERT INTO post values(1, 'Using Socket.io into a React Application', '

#### The Goal:

I wanted to create a chat application using the library socket.io.  
This was to prove that I could implement one of my favorite libraries in Javascript, as well as work with real-time servers and clients.', 
'#### The Server:

In order to get started accomplishing my goal of a real time chat application, I began researching a technology I had heard about called Socket.io. Socket.io is a wrapper for WebSocket protocols, which provide a way for a client application to connect to and maintain a channel of communication with a server, with both the client and the server having the ability to emit and receive events, allowing for constant updates between the two.

First, we need to set up a server using Nodejs and Socket.io. There is a lot of debate about whether or not you need to also include Express, and I chose to try without including Express first. In order to start, we create a folder and run npm init.

    /project/folder> npm init

Now that we have initialized npm, we need to run the npm install socket.io  command in order to get the server side package. After that is done, we can start writing the server side code in order to accept connections and some other events.

![](https://lh5.googleusercontent.com/tsQXxA4jpdkipjKxqgyOv-b3dwI71jPr1tzoAxr76yPTcDcztdTggWPhhv5-HpLPGr67eRI_P6GPe52fKOw0ZHvBU0FeYynQFAbcKIzNekeWuzikPIECntG82LNnCZmfYNqKpOfV)

  

*Note- I will be using the ES6 modules. This allows the use of import and export statements in javascript. It can be done by adding *“type”:”module”* to the package.json*

  

This is great! Now we have a server that will print our socket id when a client connects to us. “Where is the Client?” You might ask....

 
#### The Client:

I will use a familiar framework for our client, which will be React. In order to start, we will run Create-React-App, and I will import a few packages to make our project look a little nicer. A list of these will be found at the end of the article, with links to resources used.

![](https://lh6.googleusercontent.com/H7212OcX2N4sD1qLM1IqSlmVqVlDa1acCgHmHvh2bU-mm4qyvaVbJ-qmitsA-uNHFhayIh38serBHtTKgQ-wKo0gkRV597HrhSwy3eY_g78TjsFiYAbkodpwopQRbcdxWJVFyoHa)

There we go! A simple Client for our chat application. In order to make it connect, we need to install the socket.io-client package, using npm install socket.io-client. After we do this, we can set up the socket connection, then pass that connection to a main component:

![](https://lh3.googleusercontent.com/at-aXr3R3xoiffvc44pk_zkEllkx1kVkIujmMpl3NdR1Xx_TjXKcopvEfIR3xIdm0iCzuebj4LegfJK7_dp2EXDpaKfEHCd2Hymx0AgA6lp_3W6-G-6SsWT4d3qH6a3VQScPPgwB)

So now we will get a connection, and we can pass that socket connection down into our Main component. We can use another useEffect in this Main component to subscribe to our different server events:

![](https://lh4.googleusercontent.com/InCA7-_IKhtUDsIu5uLbEHww9wv_zR4-hOJgbalQtRElufqv66vzcOVfSA81M7xBBWTIp0LrlXB5Ab7C5vrVOXydZqu6YY3ieDEGNKWLSsO6vXanjhMmCwPGKZT9M2ado-o3NQAE)

This results in us being able to have two clients, send and receive messages on the same socket connection.

![](https://lh6.googleusercontent.com/yR_Yb-noX7NcGrHXE3jPF7f4LgbHnCaRz6wEJEb9sRnLN3hjBqHjz3O0E2J8lp4GVaos0KUDjJuOhYeGDWa9slyo3ZMdH2oJgRUgu-eILKT4E3AcGbNm-JhV970PkgB6ZG6y2w97)  
#### Links:

 - Socket.IO docs:
   [https://socket.io/docs/v4/](https://socket.io/docs/v4/)
   
 - Create-React-App:   
   [https://create-react-app.dev/docs/getting-started](https://create-react-app.dev/docs/getting-started)

   
  - Sass: [https://sass-lang.com/install](https://sass-lang.com/install)
   
  - Bootstrap:
   [https://getbootstrap.com/docs/5.0/getting-started/introduction/](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
   
  - BootSwatch: [https://bootswatch.com/](https://bootswatch.com/)')
/*Post-Skill associations*/
INSERT INTO post_skill_assoc values(1,1),(1,2),(1,3),(1,4);