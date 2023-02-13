const Response = require('../../../configuration/config.response'),
    mongoose = require('mongoose'),
    Category = mongoose.model('category'),
    Car = mongoose.model('car');


const categoryCreate = async (req, res, next) => {
    try {
        let createCateory = await new Category(req.body).save()
        return Response.sendResponse(res, {
            msg: '200',
            data: {
                category: createCateory
            },
            lang: req.params.lang
        });

    } catch (err) {
        return next({ msg: 200 });
    }
}
const updateCategory = async (req, res, next) => {
    try {
        let categoryId = req.params.id;
        let updateCateory = await Category.findOneAndUpdate({ _id: categoryId }, req.body);
        return Response.sendResponse(res, {
            msg: '201',
            data: {
                category: updateCateory
            },
            lang: req.params.lang
        });

    } catch (err) {
        return next({ msg: 201 });
    }
}
const deleteCategory = async (req, res, next) => {
    try {
        let categoryId = req.params.id;
        let deleteCateory = await Category.deleteOne({ _id: categoryId });
        return Response.sendResponse(res, {
            msg: '202',
            data: {
                category: deleteCateory
            },
            lang: req.params.lang
        });

    } catch (err) {
        return next({ msg: 202 });
    }
}
const getCategory = async (req, res, next) => {
    try {
        let categoryId = req.params.id;
        let getCateory = await Category.findOne({ _id: categoryId });
        return Response.sendResponse(res, {
            msg: '203',
            data: {
                category: getCateory
            },
            lang: req.params.lang
        });

    } catch (err) {
        return next({ msg: 203 });
    }
}
const listCategory = async (req, res, next) => {
    try {
        const limit = req.query.limit,
            skip = req.query.skip;
        let getCateory = await Category.find(limit).limit().skip(skip).sort({ createdAt: -1 });
        return Response.sendResponse(res, {
            msg: '204',
            data: {
                category: getCateory
            },
            lang: req.params.lang
        });

    } catch (err) {
        return next({ msg: 204 });
    }
}
//******************************************Car Module************************************************* */
const carCreate = async (req, res, next) => {
    try {
        let createCateory = await new Car(req.body).save()
        return Response.sendResponse(res, {
            msg: '205',
            data: {
                car: createCateory
            },
            lang: req.params.lang
        });

    } catch (err) {
        return next({ msg: 205 });
    }
}
const updateCar = async (req, res, next) => {
    try {
        let carId = req.params.id;
        let updateCar = await Car.findOneAndUpdate({ _id: carId }, req.body);
        return Response.sendResponse(res, {
            msg: '206',
            data: {
                car: updateCar
            },
            lang: req.params.lang
        });

    } catch (err) {
        return next({ msg: 206 });
    }
}
const deleteCar = async (req, res, next) => {
    try {
        let carId = req.params.id;
        let deleteCateory = await Car.deleteOne({ _id: carId });
        return Response.sendResponse(res, {
            msg: '207',
            data: {
                car: deleteCateory
            },
            lang: req.params.lang
        });

    } catch (err) {
        return next({ msg: 207 });
    }
}
const getCar = async (req, res, next) => {
    try {
        let carId = req.params.id;
        let getCateory = await Car.findOne({ _id: carId });
        return Response.sendResponse(res, {
            msg: '208',
            data: {
                car: getCateory
            },
            lang: req.params.lang
        });

    } catch (err) {
        return next({ msg: 208 });
    }
}
const listCar = async (req, res, next) => {
    try {
        const limit = req.query.limit,
            skip = req.query.skip;
        let getCateory = await Car.find(limit).limit().skip(skip).sort({ createdAt: -1 });
        return Response.sendResponse(res, {
            msg: '209',
            data: {
                car: getCateory
            },
            lang: req.params.lang
        });

    } catch (err) {
        return next({ msg: 209 });
    }
}
module.exports = {
    categoryCreate,
    updateCategory,
    deleteCategory,
    getCategory,
    listCategory,
    carCreate,
    updateCar,
    deleteCar,
    getCar,
    listCar,
};