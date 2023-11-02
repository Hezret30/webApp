import db from '../../database/db.js'

async function update_balance_(id, amount) {
    return await db.query(
        `
        UPDATE users
        SET balance = balance - $2
        WHERE id = $1
        RETURNING balance
        `,
        [id, amount],
    )
}

export default update_balance_
