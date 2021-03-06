const db = require('../db');

const SQL_DROP_USER_TABLE = `DROP TABLE IF EXISTS users;`;
const SQL_CREATE_USER_TABLE = `  
    CREATE TABLE users (
        sid int PRIMARY KEY AUTO_INCREMENT,
        nickname varchar(255),
        profile_image_url varchar(255),
        password varchar(255)
    );`;

const SQL_DROP_ISSUE_TABLE = `DROP TABLE IF EXISTS issues;`;
const SQL_CREATE_ISSUE_TABLE = `
    CREATE TABLE issues (
        id int PRIMARY KEY AUTO_INCREMENT,
        user_sid int,
        issue_content varchar(255),
        issue_name varchar(255),
        created_at timestamp,
        milestone_id int,
        issue_status boolean
    );`;

const SQL_DROP_ISSUE_ASSIGNEE_TABLE = `DROP TABLE IF EXISTS issue_assignees;`;
const SQL_CREATE_ISSUE_ASSIGNEE_TABLE = `
    CREATE TABLE issue_assignees (
        id int PRIMARY KEY AUTO_INCREMENT,
        assignee_id int,
        issue_id int
    );`;

const SQL_DROP_MILESTONE_TABLE = `DROP TABLE IF EXISTS milestones`;
const SQL_CREATE_MILESTONE_TABLE = `
    CREATE TABLE milestones (
        id int PRIMARY KEY AUTO_INCREMENT,
        milestone_name varchar(255),
        milestone_description varchar(255),
        end_date datetime,
        status TINYINT,
        created_at datetime
    );`;

const SQL_DROP_LABEL_TABLE = `DROP TABLE IF EXISTS labels`;
const SQL_CREATE_LABEL_TABLE = `
    CREATE TABLE labels (
        id int PRIMARY KEY AUTO_INCREMENT, 
        label_name varchar(255),
        color varchar(255),
        label_description varchar(255)
    );`;

const SQL_DROP_ISSUE_LABEL_TABLE = `DROP TABLE IF EXISTS issue_labels`;
const SQL_CREATE_ISSUE_LABEL_TABLE = `
    CREATE TABLE issue_labels (
        id int PRIMARY KEY AUTO_INCREMENT,
        label_id int,
        issue_id int
    );`;

const SQL_DROP_COMMENT_TABLE = `DROP TABLE IF EXISTS comments`;
const SQL_CREATE_COMMNET_TABLE = `
    CREATE TABLE comments (
        id int PRIMARY KEY AUTO_INCREMENT,
        writer_id int,
        issue_id int,
        description varchar(255),
        created_at datetime
    );`;

const SQL_DROP_EMOJI_TABLE = `DROP TABLE IF EXISTS emojis`;
const SQL_CREATE_EMOJI_TABLE = `
    CREATE TABLE emojis (
        id int PRIMARY KEY AUTO_INCREMENT,
        unicode varchar(255)
    );`;

const SQL_DROP_COMMENT_EMOJI_TABLE = `DROP TABLE IF EXISTS comment_emojis`;
const SQL_CREATE_COMMNET_EMOJI_TABLE = `
    CREATE TABLE comment_emojis (
        id int PRIMARY KEY AUTO_INCREMENT,
        commnet_id int,
        user_id int,
        emoji_id int
    );`;

const createUserTable = async () => {
  try {
    const connection = await db.pool.getConnection(async conn => conn);

    connection
      .query(SQL_DROP_USER_TABLE)
      .then(() => connection.query(SQL_CREATE_USER_TABLE))
      .then(() =>
        connection.query(
          `INSERT INTO users values (1, 'zlrlo', 'https://avatars3.githubusercontent.com/u/68647194?v=4', 'password'),(2, 'msmk530', 'https://avatars1.githubusercontent.com/u/49441876?v=4', 'password');`,
        ),
      )
      .then(() => connection.release());
  } catch (err) {
    throw new Error(err);
  }
};

const createEmojiTable = async () => {
  try {
    const connection = await db.pool.getConnection(async conn => conn);

    connection
      .query(SQL_DROP_EMOJI_TABLE)
      .then(() => connection.query(SQL_CREATE_EMOJI_TABLE))
      .then(() => connection.release());
  } catch (err) {
    throw new Error(err);
  }
};

const createLabelTable = async () => {
  try {
    const connection = await db.pool.getConnection(async conn => conn);

    connection
      .query(SQL_DROP_LABEL_TABLE)
      .then(() => connection.query(SQL_CREATE_LABEL_TABLE))
      .then(() =>
        connection.query(
          `INSERT INTO labels values(1, "bug", "#aaaaaa","This is bug"),( 2,"Web", "#11aa22","Web is Full stack"),(3, "iOS", "#aa33bb","iOS is App");`,
        ),
      )
      .then(() => connection.release());
  } catch (err) {
    throw new Error(err);
  }
};

const createMilestoneTable = async () => {
  try {
    const connection = await db.pool.getConnection(async conn => conn);

    connection
      .query(SQL_DROP_MILESTONE_TABLE)
      .then(() => connection.query(SQL_CREATE_MILESTONE_TABLE))
      .then(() =>
        connection.query(
          `INSERT INTO milestones values(1, "backend milestone", "backend 마일스톤입니다.","2020-11-15", 0, "2020-11-12");`,
        ),
      )
      .then(() => connection.release());
  } catch (err) {
    throw new Error(err);
  }
};

const createCommentTable = async () => {
  try {
    const connection = await db.pool.getConnection(async conn => conn);

    connection
      .query(SQL_DROP_COMMENT_TABLE)
      .then(() => connection.query(SQL_CREATE_COMMNET_TABLE))
      .then(() =>
        connection.query(
          `INSERT INTO comments values ( 1,1, 2,'수고하셨습니다 ~','2020-11-12');`,
        ),
      )
      .then(() => connection.release());
  } catch (err) {
    throw new Error(err);
  }
};

const createCommentEmojiTable = async () => {
  try {
    const connection = await db.pool.getConnection(async conn => conn);

    connection
      .query(SQL_DROP_COMMENT_EMOJI_TABLE)
      .then(() => connection.query(SQL_CREATE_COMMNET_EMOJI_TABLE))
      .then(() => connection.release());
  } catch (err) {
    throw new Error(err);
  }
};

const createIssueLabelTable = async () => {
  try {
    const connection = await db.pool.getConnection(async conn => conn);

    connection
      .query(SQL_DROP_ISSUE_LABEL_TABLE)
      .then(() => connection.query(SQL_CREATE_ISSUE_LABEL_TABLE))
      .then(() =>
        connection.query(
          `INSERT INTO issue_labels values(1, 1, 1),(2,1,2),(3,2,1),(4,3,1),(5,3,2);`,
        ),
      )
      .then(() => connection.release());
  } catch (err) {
    throw new Error(err);
  }
};

const createIssueTable = async () => {
  try {
    const connection = await db.pool.getConnection(async conn => conn);

    connection
      .query(SQL_DROP_ISSUE_TABLE)
      .then(() => connection.query(SQL_CREATE_ISSUE_TABLE))
      .then(() =>
        connection.query(
          `INSERT INTO issues values(1, 1, "오어스 구현했습니다.", "로그인구현","2020-11-12",1,0),(2,2, "팝업창 했습니다. ", "완성된 팝업창","2020-11-12",1,1);`,
        ),
      )
      .then(() => connection.release());
  } catch (err) {
    throw new Error(err);
  }
};

const createIssueAssigneeTable = async () => {
  try {
    const connection = await db.pool.getConnection(async conn => conn);

    connection
      .query(SQL_DROP_ISSUE_ASSIGNEE_TABLE)
      .then(() => connection.query(SQL_CREATE_ISSUE_ASSIGNEE_TABLE))
      .then(() =>
        connection.query(
          `INSERT INTO issue_assignees values ( 1,1,1),(2,1,2);`,
        ),
      )
      .then(() => connection.release());
  } catch (err) {
    throw new Error(err);
  }
};

const createTableRelation = async () => {
  try {
    const connection = await db.pool.getConnection(async conn => conn);

    connection
      .query(
        `
        ALTER TABLE issues ADD FOREIGN KEY (user_sid) REFERENCES users (sid); ​
        ALTER TABLE issues ADD FOREIGN KEY (milestone_id) REFERENCES milestones (id);​
        ALTER TABLE issue_assignees ADD FOREIGN KEY (assignee_id) REFERENCES users (sid);
        ALTER TABLE issue_assignees ADD FOREIGN KEY (issue_id) REFERENCES issues (id);
        ALTER TABLE issue_comments ADD FOREIGN KEY (issue_id) REFERENCES issues (id);
        ALTER TABLE issue_comments ADD FOREIGN KEY (comment_id) REFERENCES comments (id);
        ALTER TABLE issue_labels ADD FOREIGN KEY (label_name) REFERENCES labels (id);
        ALTER TABLE issue_labels ADD FOREIGN KEY (issue_id) REFERENCES issues (id);
        ALTER TABLE comments ADD FOREIGN KEY (writer_id) REFERENCES users (sid);
        ALTER TABLE comment_emojis ADD FOREIGN KEY (commnet_id) REFERENCES comments (id);
        ALTER TABLE comment_emojis ADD FOREIGN KEY (user_id) REFERENCES users (sid);
        ALTER TABLE comment_emojis ADD FOREIGN KEY (emoji_id) REFERENCES emojis (id);
      `,
      )
      .then(() => connection.release());
  } catch (err) {
    throw new Error(err);
  }
};

const initializeTables = async () => {
  await makeTables();
  //   makeRelation();
};

const makeTables = () => {
  createUserTable();
  createEmojiTable();
  createLabelTable();
  createIssueTable();
  createMilestoneTable();
  createCommentTable();
  createCommentEmojiTable();
  createIssueLabelTable();

  createIssueAssigneeTable();
};

const makeRelation = () => {
  createTableRelation();
};

// initializeTables();
