module.exports = {
    create: (req, res) => {
        const dbInstance = req.app.get('db')
        const {name, address, city, state, zip, image, mortgage, rent} = req.body;
        dbInstance.add_house([name, address, city, state, zip, image, mortgage, rent])
        .then((response) => {
        res.status(200).send(response)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).send(err)
        })

    },
    read: (req, res) => {
        const dbInstance = req.app.get('db')
        dbInstance.read_houses()
        .then((response) => {
        res.status(200).send(response)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).send(err)
        })
    },
    delete: (req, res) => {
        const dbInstance = req.app.get('db')
        const { id } = req.params
        dbInstance.delete_house([id])
        .then((response) => {
        res.status(200).send(response)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).send(err)
        })
    }
}