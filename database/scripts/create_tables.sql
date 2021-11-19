CREATE TABLE IF NOT EXISTS post(
    Post_id int,
    Title varchar(80),
    Goal text,
    Full text,
    PRIMARY KEY (Id)
)

CREATE TABLE IF NOT EXISTS skill(
    Skil_id int,
    Skill_Name varchar(80),
    PRIMARY KEY (Id)
)

CREATE TABLE IF NOT EXISTS post_skill_assoc(
    Post_id int,
    Skill_id int,
    FOREIGN KEY Post_id references post(Post_id),
    FOREIGN KEY Skil_id references skill(Skill_id)
)