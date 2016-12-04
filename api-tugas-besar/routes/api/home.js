var express = require('express');
var router = express.Router();
var  ctrlhome  =  require('../../controller/api/home')

/* GET home page. */
router.get('/', ctrlhome.index);

router.get('/hot/:pages',ctrlhome.hot);

router.get('/latest/:pages',ctrlhome.latest);

router.get('/manga_directory/:pages',ctrlhome.manga_directory);

router.get('/chapter/:title',ctrlhome.chapter);

router.get('/chapter_pages/:title/:pages',ctrlhome.chapter_pages);

router.get('/get_manga_src/:title/:pages/:number',ctrlhome.get_manga_src);

module.exports = router;
