var _ = require('lodash'),
    moment = require('moment'),
    range = require('moment-range'),
    Path = require('path'),
    Utils = require( Path.join( __dirname, '../lib/utils' )),
    Dates = require( Path.join( __dirname, '../lib/dates' )),
    LiturgicalColors = require( Path.join( __dirname, '../data/liturgicalColors' )),
    Titles = require( Path.join( __dirname, '../data/titles' )),
    Types = require( Path.join( __dirname, '../data/types' )).types;

module.exports = {
  dates: function() {

    var dates = [
      {
        "key": "saintsCyrilMonkAndMethodiusBishop",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 1, day: 14 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE,
            "titles": [ Titles.PATRON_OF_EUROPE ]
          }
        }
      },
      {
        "key": "saintCatherineOfSienaVirginAndDoctorOfTheChurch",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 3, day: 29 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE,
            "titles": [
              Titles.PATRON_OF_EUROPE,
              Titles.DOCTOR_OF_THE_CHURCH
            ]
          }
        }
      },
      {
        "key": "saintNorbertBishop",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 6 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintBarnabasTheApostle",
        "type": Types[5],
        "moment": moment.utc({ year: arguments[0], month: 5, day: 11 }),
        "data": {}
      },
      {
        "key": "saintBenedictOfNursiaAbbot",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 11 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE,
            "titles": [ Titles.PATRON_OF_EUROPE ]
          }
        }
      },
      {
        "key": "saintMaryMagdalene",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 22 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintBirgittaReligious",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 6, day: 23 }),
        "data": {}
      },
      {
        "key": "saintTeresaBenedictaOfTheCrossEdithSteinVirginAndMartyr",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 7, day: 9 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.RED,
            "titles": [
              Titles.MARTYR,
              Titles.PATRON_OF_EUROPE
            ]
          }
        }
      },
      {
        "key": "saintFrancisOfAssisi",
        "type": Types[4],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 4 }),
        "data": {
          "meta": {
            "liturgicalColor": LiturgicalColors.WHITE
          }
        }
      },
      {
        "key": "saintJohnXXIIIPope",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 11 }),
        "data": { }
      },
      {
        "key": "saintJohnPaulIIPope",
        "type": Types[6],
        "moment": moment.utc({ year: arguments[0], month: 9, day: 22 }),
        "data": { }
      },
      {
        "key": "holyVirginMaryMotherOfChurch",
        "type": Types[5],
        "moment": Dates.pentecostSunday( arguments[0], arguments[5] ).add( 1, 'days'),
        "data": {}
      }
    ];

    // Get localized celebration names
    return _.map( dates, function( date ) {
      date.name = Utils.localize({
        key: 'national.' + date.key
      });
      return date;
    });
  }
};
