require('../db');
const mongoose = require('mongoose');
const ProductModel = require('../models/Product.model');
const CategoryModel = require('../models/Category.model');

const save = async () => {
  await ProductModel.remove({});
  await CategoryModel.remove({});
  const valentine = new CategoryModel({
    name: 'Valentine Day',
    image:
      'https://stylecaster.com/wp-content/uploads/2021/01/valentines-day-baked-goods.jpg',
    description: 'Good choise for special lovely day',
  });

  const birthday = new CategoryModel({
    name: 'Birthday',
    image:
      'https://i.etsystatic.com/12521507/r/il/76b7a3/3191396948/il_1588xN.3191396948_h9qw.jpg',
    description: 'Perfect gift collection for your lovely friends ',
  });

  const newYear = new CategoryModel({
    name: 'New Year',
    image:
      'https://cdn.shopify.com/s/files/1/0853/6762/products/happy_new_year_1024x1024.jpg?v=1544828754',
    description: 'Bring new year to stylish super cool gift boxes',
  });

  await valentine.save();
  await birthday.save();
  await newYear.save();

  ProductModel.insertMany([
    {
      name: 'For My Love Box',
      price: 30,
      image:
        'https://i.etsystatic.com/26731924/r/il/bb8007/2786146248/il_794xN.2786146248_j56i.jpg',
      description: 'Lovingly designed Valentine Day box.',
      category: valentine._id,
    },
    {
      name: 'Mystery Box',
      price: 25,
      image:
        'https://i.etsystatic.com/17628241/r/il/d1adc3/3152014028/il_794xN.3152014028_qexj.jpg',
      description:
        '12 premium spa, bath, wellness and beauty products in a lovingly packaged gift box.',
      category: valentine._id,
    },
    {
      name: 'Feel Good Box',
      price: 25,
      image:
        'https://i.etsystatic.com/31848415/r/il/9a2a71/3329152772/il_794xN.3329152772_r0au.jpg',
      description: 'The perfect gift set for Valentine Day.',
      category: valentine._id,
    },
    {
      name: 'Gingerbread Box',
      price: 20,
      image:
        'https://i.etsystatic.com/15305828/r/il/7dfea2/1392756850/il_794xN.1392756850_io7m.jpg',
      description:
        'A lovely surprise for your loved one on Valentine day you would like to express your love in the most fun and cute way!',
      category: valentine._id,
    },
    {
      name: 'Friendship Gift Box',
      price: 50,
      image:
        'https://i.etsystatic.com/12521507/r/il/76b7a3/3191396948/il_794xN.3191396948_h9qw.jpg',
      description:
        'Personalize the portraits, names and quote for the perfect one-of-a-kind gift! ',
      category: newYear._id,
    },
    {
      name: 'Friendship Gift Box',
      price: 50,
      image:
        'https://i.etsystatic.com/12521507/r/il/76b7a3/3191396948/il_794xN.3191396948_h9qw.jpg',
      description:
        'Personalize the portraits, names and quote for the perfect one-of-a-kind gift! ',
      category: birthday._id,
    },
    {
      name: 'Happiness Gift Box',
      price: 40,
      image:
        'https://i.etsystatic.com/15288793/r/il/acd962/3572190873/il_794xN.3572190873_82tz.jpg',
      description:
        'It is the perfect way to tell her you are thinking about her and filled with fun products she can use all year long! ',
      category: birthday._id,
    },
    {
      name: 'Scorpio Gift Box',
      price: 40,
      image:
        'https://i.etsystatic.com/12683008/r/il/a4c348/3147208010/il_794xN.3147208010_ep3w.jpg',
      description: 'Astrology never lies!',
      category: birthday._id,
    },
    {
      name: 'Aura Gift Box',
      price: 45,
      image:
        'https://i.etsystatic.com/29044046/r/il/06a7fc/3301575716/il_794xN.3301575716_lo2u.jpg',
      description: 'A beautiful and lovingly designed packaging',
      category: newYear._id,
    },
    {
      name: 'Merry Christmas Present',
      price: 45,
      image:
        'https://i.etsystatic.com/12683008/r/il/fc96be/3482635271/il_794xN.3482635271_fd9d.jpg',
      description: 'Lovely box for cold christmas days',
      category: newYear._id,
    },
    {
      name: 'Happy New Year Gift Box',
      price: 55,
      image:
        'https://cdn.shopify.com/s/files/1/0853/6762/products/happy_new_year_1024x1024.jpg?v=1544828754',
      description:
        'Start the New Year right with the gift of celebration and good fortune!',
      category: newYear._id,
    },
    {
      name: 'Moscow Mule',
      price: 55,
      image:
        'https://i.pinimg.com/564x/20/c2/70/20c2702d15e93602ca28ad14edacf8c9.jpg',
      description:
        'Vodka, spicy ginger beer, and lime juice, garnished with a slice or wedge of lime.Coctail is calling you',
      category: newYear._id,
    },
    {
      name: 'Mini Raspberry chocolate bar',
      price: 4,
      image:
        'https://cdn.shopify.com/s/files/1/0558/2845/products/MastMiniRaspberryChocolate1.png?v=1604687584',
      description:
        'Sweetened with real raspberries, this old school pairing gets a fresh makeover with extra raspberries, dark chocolate, and less added sugar.',
      category: valentine._id,
    },
    {
      name: 'Gold Coctail Shaker',
      price: 25,
      image:
        'https://cdn.shopify.com/s/files/1/0558/2845/products/8U7A6044Cropped.jpg?v=1605723912',
      description:
        'Sweetened with real raspberries, this old school pairing gets a fresh makeover with extra raspberries, dark chocolate, and less added sugar.',
      category: birthday._id,
    },
    {
      name: 'Craft Series Small Spatula',
      price: 25,
      image:
        'https://cdn.shopify.com/s/files/1/0558/2845/products/RS7233_170309_LC_MILLS-35088-lprCropped.jpg?v=1631896906',
      description:
        'The Craft Series Small Spatula is ideal for scraping bowls, scrambling eggs and folding delicate egg whites with its strong yet compact blade.',
      category: newYear._id,
    },
    {
      name: 'White Pepper Mill',
      price: 30,
      image:
        'https://cdn.shopify.com/s/files/1/0558/2845/products/RS11256_MillsCropped.jpg?v=1623102377',
      description:
        'Combining classic form and modern technology with our iconic colors, the ceramic grinder is strong enough to crack peppercorns and corrosion-resistant for grinding salt. ',
      category: newYear._id,
    },
    {
      name: 'White Stovetop Expresso Maker',
      price: 35,
      image:
        'https://cdn.shopify.com/s/files/1/0558/2845/products/gr355_lifestyle_4.jpg?v=1565116039',
      description:
        'It’s perfect for anyone who loves the taste of a strong shot or double shot of espresso. ',
      category: birthday._id,
    },
    {
      name: 'Ivory Tycoon Playing Cards',
      price: 25,
      image:
        'https://cdn.shopify.com/s/files/1/0558/2845/products/white_theory_11_magic_playing_cards_on_build_a_boxfox.jpg?v=1487186536',
      description:
        'Play to win with the most beautiful deck of cards you will ever gift.',
      category: birthday._id,
    },
    {
      name: 'Large Gold Hot Cocoa Crunch Popcorn',
      price: 10,
      image:
        'https://cdn.shopify.com/s/files/1/0558/2845/products/IMG_8271.jpg?v=1636220879',
      description:
        'The perfect holiday snack: crunchy popcorn with all the flavors of hot cocoa.',
      category: newYear._id,
    },
    {
      name: 'Donuts & Coffee Chocolate Bar',
      price: 10,
      image:
        'https://cdn.shopify.com/s/files/1/0558/2845/products/Compartes_Donuts_and_Coffee.jpg?v=1490147824',
      description:
        'The gourmet Donuts & Coffee chocolate bar features pieces from LAs best donut shops and grounds from LAs best coffee shops, all broken up and mixed into the most creamy milk chocolate ever.',
      category: newYear._id,
    },
    {
      name: 'Gold Coctail Jigger',
      price: 12,
      image:
        'https://cdn.shopify.com/s/files/1/0558/2845/products/8U7A4888Cropped_47785118-00d5-4328-890f-af1f7497f818.jpg?v=1637615007',
      description:
        'Dress up their bar cart with this chic gold cocktail jigger.',
      category: birthday._id,
    },
    {
      name: 'Large Jar Candle',
      price: 23,
      image:
        'https://cdn.shopify.com/s/files/1/0558/2845/products/7236-2_1200x_1877268d-d1df-49ec-8739-d785579b0a4b.jpg?v=1631656917',
      description:
        'Our classic embossed glass jar design gets an update with discerning Japanese inspiration.',
      category: valentine._id,
    },
    {
      name: 'Hibiscus Tea',
      price: 11,
      image:
        'https://cdn.shopify.com/s/files/1/0558/2845/products/Rozy-10ct-Bag.jpg?v=1636600477',
      description:
        'Hibiscus and rose blended with cinnamon and Assam black tea. Brews a beautiful magenta cup with a hint of holiday spice.',
      category: valentine._id,
    },
    {
      name: 'Face Serum',
      price: 55,
      image:
        'https://cdn.shopify.com/s/files/1/0558/2845/products/Herbivore_Bakuchiol_Serum_Ecomm.jpg?v=1609887580',
      description:
        'Derived from the Ayurvedic Babchi plant, Bakuchiol Serum is a 100% natural treatment to help smooth the appearance of fine lines and wrinkles while sealing in hydration.',
      category: birthday._id,
    },
    {
      name: 'Lavender Ceramic Mug',
      price: 10,
      image:
        'https://cdn.shopify.com/s/files/1/0558/2845/products/8U7A0472Cropped_2.jpg?v=1615315469',
      description: 'Keep your favorite beverage warm in this ceramic mug! ',
      category: valentine._id,
    },
    {
      name: 'Mixed Florals Essential Card Box',
      price: 30,
      image:
        'https://cdn.shopify.com/s/files/1/0558/2845/products/ScreenShot2021-10-28at12.49.17PM.png?v=1635450658',
      description:
        'Fresh floral notecards for every occasion—a birthday, a thank you or just because. The vibrant blooms are printed on premium paper, accented with stamped gold foil and neatly organized in a pretty box.',
      category: birthday._id,
    },
    {
      name: 'To Asia With Love',
      price: 35,
      image:
        'https://cdn.shopify.com/s/files/1/0558/2845/products/ScreenShot2021-10-23at11.35.58AM.png?v=1635014266',
      description:
        'For bestselling cookbook author Hetty McKinnon, Asian cooking is personal. McKinnon grew up in a home filled with the aromas, sights, and sounds of her Chinese mother’s cooking.',
      category: valentine._id,
    },
    {
      name: 'Black Citrus Press',
      price: 13,
      image:
        'https://cdn.shopify.com/s/files/1/0558/2845/products/9278_main_720x_e04efbc7-5e97-472a-ac7f-de088cbc058b.jpg?v=1623784132',
      description:
        'The matte finish of this Black Citrus Press by Viski evokes sturdy industrialism while looking refined and sleek on a home bar cart or countertop.',
      category: birthday._id,
    },
    {
      name: 'Ruby Red Diffuser',
      price: 20,
      image:
        'https://cdn.shopify.com/s/files/1/0558/2845/products/Grapefruit_-_candlestock.com_1800x1800_67f5d0a1-bf0d-46de-9f99-baa1eaf2e6b4.jpg?v=1590004343',
      description:
        'Add a wonderful aroma into your home with paddywaxs grapefruit petite reed diffuser.',
      category: birthday._id,
    },
    {
      name: 'Glacier Rock Soapstone Cubes',
      price: 20,
      image:
        'https://cdn.shopify.com/s/files/1/0558/2845/products/2349_main.jpg?v=1595528373',
      description:
        'Aour neat drinks directly over these state-of-the-art Glacier Rock® soapstone cubes from Viski to keep libations ice cold and uncut.',
      category: birthday._id,
    },
  ])
    .then(() => {
      console.log('Data inserted');
      mongoose.connection.close();
    })
    .catch((err) => {
      console.log('Error ', err);
      mongoose.connection.close();
    });
};

save();
