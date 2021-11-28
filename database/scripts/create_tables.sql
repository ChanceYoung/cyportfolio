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
INSERT INTO skill values(1, 'Node');

/*Posts*/
INSERT INTO post values(1, 'Chat Application With Socket.io', '
#### The Goal:
I wanted to create a chat application using the library socket.io.  
This was to prove that I could implement one of my favorite libraries in Javascript, as well as work with real-time servers and clients.
![running chat application](https://thumbs2.imgbox.com/bb/75/ared6e4m_t.png)', 'This would be the full body with valid **Markdown** in it');

/*Post-Skill associations*/
INSERT INTO post_skill_assoc values(1,1);