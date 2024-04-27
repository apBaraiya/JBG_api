// locationModel.js
const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    navbtn: {
        map: {
            type: String,
            required: true
        },
        Nbtn: {
            type: String,
            required: true
        }
    },
    contactbtn: {
        isbtnTwo: {
            type: Boolean,
            required: true
        },
        FirstNumber: {
            type: Number,
            required: true
        },
        SecondNumber: {
            type: Number,
            required: function () {
                return this.contactbtn.isbtnTwo; // Required if isbtnTwo is true
            }
        },
        Cbtn: {
            type: String,
            required: true
        }
    }
});

const Location = mongoose.model('Location', locationSchema);
module.exports = Location;
