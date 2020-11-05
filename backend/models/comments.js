const db = require('../db');

exports.update = async ({ commentId, commentDescription }) => {
    try {
      const connection = await db.pool.getConnection(async conn => conn);
      let sql =
        'Update comments SET description = ? WHERE id = ?';
      const [{ updatedCommentId }] = await connection.query(sql, [commentDescription, commentId]);
      connection.release();
      return updatedCommentId;
    } catch (err) {
      throw new Error(err);
    }
  };

exports.create = async ({ issueId, writerId, description }) => {
  try {
    const connection = await db.pool.getConnection(async conn => conn);
    let sql = 'INSERT INTO comments (writer_id, description, issue_id) VALUES (?, ?, ?)';
    const [{ generatedCommentId }] = await connection.query(sql, [writerId, description, issueId]);
    connection.release();
    
    return { generatedCommentId };

  } catch (err) {
    throw new Error(err);
  }
};
