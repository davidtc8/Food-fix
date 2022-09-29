const router = require("express").Router();
const Breakfast = require('../../models/breakfast');
const Soups = require('../../models/soups');
const Meal = require('../../models/meal');
const Sides = require('../../models/sides');
const Desserts = require('../../models/desserts');


router.post('/get-section', async (req, res) => {
    try {
        let tableName = req.body.id;
        let sectionInfo;

        console.log('dewdewdewedwdewdewdew', tableName, sectionInfo)

        tableName == 'breakfast' ? sectionInfo = await Breakfast.findAll()
            : tableName == 'soups' ? sectionInfo = await Soups.findAll()
                : tableName == 'meal' ? sectionInfo = await Meal.findAll()
                    : tableName == 'sides' ? sectionInfo = await Sides.findAll()
                        : sectionInfo = await Desserts.findAll()


        if (!sectionInfo) {
            res
                .status(400)
                .json({ message: "Could not fecth data" });
            return;
        }

        return res.json(sectionInfo);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


module.exports = router;