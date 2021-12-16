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
INSERT INTO post values(1, 'Using Socket.io into a React Application', 
'#### The Goal:
I wanted to create a chat application using the library socket.io.  
This was to prove that I could implement one of my favorite libraries in Javascript, as well as work with real-time servers and clients.', 
'#### The Server:
In order to get started accomplishing my goal of a real time chat application, I began researching a technology I had heard about called Socket.io. Socket.io is a wrapper for WebSocket protocols, which provide a way for a client application to connect to and maintain a channel of communication with a server, with both the client and the server having the ability to emit and receive events, allowing for constant updates between the two.
First, we need to set up a server using Nodejs and Socket.io. There is a lot of debate about whether or not you need to also include Express, and I chose to try without including Express first. In order to start, we create a folder and run npm init. /project/folder> npm init
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
  - BootSwatch: [https://bootswatch.com/](https://bootswatch.com/)'),(2, ' Testing Javascript using Mocha and Chai','### The Goal
I have a couple of functions that I want to test in Javascript. In order to do this, I prefer to use a couple different libraries. These libraries are Mocha and Chai. These two libraries work really well together, and will provide us with a good way to unit test some javascript functionality.',
'### Installation
First things first, we will install these libraries:
![](https://lh5.googleusercontent.com/Ieue_4pVQGNbbxuitzUwHxxUmpjHgwa0teg5MsqmpMCJILM-py1rUThWEPTUoRdA1z5PXUGJh5FYTM6Yy3aT4szLluavBRBUbEz6Icqe1KGzf0wxMO_KDXL_cOeX_nV956EkvJtv)
Now that we have done that, I have set up two files. The ones we want to test, and a test folder with a sum.test.js file, which will be the first test that we do. Ultimately, I want to use a Behavior/Test Driven Development approach to creating an ROT-13 encoder and decoder. This is going to start with testing a sum function, just to ensure our testing framework is working correctly. So, we will set our type to ‘module’ in package.json and head to our sum.test.js file.
![](https://lh5.googleusercontent.com/k1fsGl1HxIMtmu9NJ6gWWD-LU_gxBh5MBGyrQ4HIS_ARTDA46Q1gkkIpT7CtXM8fs5jx34RzLnVIaEmIZjC0GetVHRLqJlvg9G1v28Tw3u-6dh6Km2e3nbkp8lHTWSqUC5iuTvGO)
We have to import two pieces so we can perform these tests.
![](https://lh3.googleusercontent.com/-GoEa09bgb4AkDbqdf4lRs0CVhVkOJhtJOjSggiQQUmXOuv7YauYU0we_oY_MlG-Uw78AFqJEII6vJcNUMgvGEf5MLpuWMtBGtMBGnDkCz0G62aaZn3HabN9QsEblTeb9RG3AYD5)
These imports allow us to test the sum function by describing it in the following way:
![](https://lh4.googleusercontent.com/-lMeu2QDVhAmz80qw6VSQUzeDttgkyenPaqG3PsnMGTyXp1Nqxj8aTOm1NKheCNBWXqV6Gcq6jixl4Q1Kj8Rs12dcWVQKCohxIqVduIhBQ3NZayx1ZiBOi_-dHoIw4Vgqew52Pqs)
Now, we are expecting this test to fail, because the sum of 5 and 5 should not equal 9. In order to run our test, we just need to make sure we are in the test directory and run npm test.
When we run it we see this:
![](https://lh3.googleusercontent.com/Ca7oe9NlRrVLjIzgmvVEnVsykoaCQ2vT07Ngc_LrHgf2lbgX9rD-wAV7YppnWvhiBp9VkACn_PjLvvDZ3qM3A_69Zher8zcz9IC8j9O1rau0YiiXKUS1j-X89lLNyQMoQ87XGsIa)
This is exactly what we expect. Let''s make it pass, then we can write our encoder and decoder:
![](https://lh4.googleusercontent.com/XMUAganhzKPfh5adcVRABx3porecwmUpq_udn-E-h2abu5ZDtB5chz_qa16lIi-dmDGiqxxcouJRySw71OelHOO9TfsuTcdiOOSnSL6Iokevegtdtl_IjjUifHMFyEOhxhUhtVMz)
Now we know that we have set up our test properly, we can start writing a test for a ROT13 encoder. First, we will make the file and import it into our test file.
![](https://lh6.googleusercontent.com/7FgI8ZWpcs5b2FUPhrOUYuF1aq9yd_h2nRrWMsZngSS2JO060YIOssKSgtTP8U0dmJ6LAPHpgLbldNadZ8I0oX6cQvzNuos33AbWPlfSFGShNs71qd9FCahnLIOVB3sDo7DiktdM)
![](https://lh3.googleusercontent.com/oBF_V2wLqLvL2DqbibUwTtQ_J741wC7n9m4dPfP3OZG1zAmQ9aXj3R8ng89oF_xj8NBYpsYMl20Qr81QGG8TxaRhZIM00eQoWJ_fvqGyAPedIMdiPxdU_2lVjuDuHuEygqfHQ-Dp)
Now that we have access to this empty function, we can write a failing test :
![](https://lh5.googleusercontent.com/taxmqe19lU3l89Fz4fYZbbf8p4lKGSrLJSyYmt7EcVDzHRZRcNpRq6PuwSYicATgG6iQU3tD8Ruh7kplYLkv9MxGxpgVl0RXUdGuhgkkuknO2fcr3iVv_Nm_CkKUBgqd1TPNWWHv)
![](https://lh5.googleusercontent.com/FP8bvAis_J8CNUX4yVLPs1UO6R-LwdIbSfbzBOAa_03ahRB4kvWtdnOst1TDHC_ELux6NpJ23oDW3xQhtr0XCi0EBNaG6haSDvAfLQLPos6Uu3DcQaUxRRDWem2u9pWNkIweiaw0)
Alright, now that we have a failing test for that, we can write the encoder so that it passes our test.
![](https://lh6.googleusercontent.com/D9NBlURCwVYaabdOob0J5DyMl3n9wkiQKQznUsOoDPVsTPjFXsFuZNndUNUkKm94sGxTiLrKTgJxTcU4FGxxQTLEuR4u3dHDc77EYYY3Pu6nnR1fQ_PWNMsOTSw5v1-ag8f2rEzf)
I think this will pass, so when we run npm test:
![](https://lh3.googleusercontent.com/6BqTXHr0viTTQFnbyFlJ6bZqOSxEPGf8XUatNU4br2gJR3YNt93cpxseRWcOG9w-nAXNZdk4e-C06bc4Tw9ARf5NPGMwF5gAkMOM1FAfmG7PPIhf19HzBfE8HqPb9rPcCfnpy13g)
Now I realize that we cannot map over a string in this fashion. We need to use the spread operator to get the characters into an array, and after a few more tweaks, we are getting closer to an answer that we want:
![](https://lh5.googleusercontent.com/kuVmvibVw9GYX8jpr_74EkaE3y-815gmauJKDsb3PglT983uuEb34fK-GLa_lm70mAUVeA_0dsqzd5o6GuOj1y-tBuxY80EggaYxI66-GVdZdX1fTG--4P6Wvl1nV5_t2KZopkj5)
We can continue this process until eventually we write a function that passes our test:
![](https://lh3.googleusercontent.com/wEXgLQR0RLPFgJDwHrmIfuausHDfvNwT-yxZGbUHtpALXVTT3U9vSr8rNcaPZnxagSH3SKohmwJIbv_8gg-_4AQfTU6LE15g-22tnyIfRavTXXYRYgWF_7wmuuokhvFa-8R46mI9)'
  ),
  (
    3,'Docker Compose for Pern Stack Development ','### The Goal:
The goal for this artifact was to create a docker compose file that spins up a PERN stack application. This means that the compose file will set up the following services:
- A Postgres Database
- An Express API
- A React Front End
- A Node server
Ideally, this development environment will allow us to spin up the application and reflect the changes made to the application as they are made. ','### Introduction:
 In order to achieve my Goal, I needed to first understand what Docker Compose allows me to do. A typical Dockerized application requires that you build an "image" which is a snapshot of layers that make up a piece of the application. When that image is built, you can then run it using various options that define any ports that need to be exposed, volumes that need to be mapped, or environment variables. This can be cumbersome especially when you have a lot of options that need to be set. In favor of running something like this:
 `docker run -p 80:80 -it -d nginx`
 which runs the image nginx, mapping port 80 on your machine to the containers port 80, in interactive mode, meaning there is a shell attached to our container so that we can see logs and interact with it, and the -d flag which tells docker to destroy the container when we stop it. Thankfully, there is an easier way for us to declare the state in which our application starts. This is done via a Docker Compose file.  I want to analyze the following docker compose file I wrote for my portfolio application project. 
<p align="center">
<img src="https://images2.imgbox.com/c0/0b/WkRfgW8u_o.png" alt="image host" width=350/>
</p>

### The Breakdown 
In looking at this, we can see that there is a lot going on. first, we can note that we must declare a "services" block. Docker compose will look at this block and use it to spin up our applications. Next we see the keyword "web". This will be the name of our container. The container_name keyword would allow us to remap the name of the container to something different if we want. 

The build keyword allows us to specify a file path to a dockerfile. A dockerfile is a way we can declare how an image is to be built. This will become important later when we talk about the differences between setting up this development environment as opposed to a production environment. Next, we can start to declare options. This is where the magic of the Create-React-App framework can be leveraged in the "volumes" section of our docker file. Mapping a volume will take a file on our machine and connect it to our container. This allows us to map the src and public folders so that when we make a change to any files in these two folders, we will change that on the running container as well. 

### The API 
The only other piece that will allow us to spin up a container and have it update a Node API.  You can see in the compose file we map our /api folder to the /app/api folder that will exist on the container. This corresponds to our structure for the application like so: 
<p align="center">
<img src="https://images2.imgbox.com/a8/8e/eOY6ewyz_o.png" alt="image host"/>
</p>

You''ll notice the expanded web folder shows us the two volumes we discussed earlier. This is what I mean when I say we "map" these local files to the container. In mapping the api folder to the one on the container, we can also get that functionality, with one line in the dockerfile:

<img src="https://images2.imgbox.com/50/ae/nctq27NN_o.png" alt="image host"/>

by running `npm install -g nodemon` we give our container the ability to run the `nodemon` command, which will watch our index.js file for our api, and if that file changes, it will restart our api with saved changes for us. 

### Putting it together
By using this docker compose file, we can now spin up a stack that is our app. this can be done by using one simple command: 
docker compose up --build -d -f dev.docker-compose.yml 

This command will build our images defined in our file, and then spin up the stack we have specified in the dev.docker-compose.yml file.'
 )
/*Post-Skill associations*/
INSERT INTO post_skill_assoc values(1,1),(1,2),(1,3),(1,4);
