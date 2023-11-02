import update_balance_ from './repository.js'

async function update_balance(req, res) {
    const id = req.params.id
    const amount = req.params.amount

    try {
        const { rows } = await update_balance_(id, amount)
        return res.status(200).send(rows[0])
    } catch (error) {
        return res.status(400).send('Not enough money -_-')
    }
}

export default update_balance
