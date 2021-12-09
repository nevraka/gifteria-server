require('../db');
const mongoose = require('mongoose');
const CategoryModel = require('../models/Category.model');

CategoryModel.insertMany([
  {
    name: 'Valentine Day',
    image:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/valentines-day-box-1610570655.jpg?crop=1.00xw:0.752xh;0,0.248xh&resize=980:*',
    description: 'Good choise for special day',
  },
  {
    name: 'Birthday',
    image:
      'https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.etsystatic.com%2F12521507%2Fr%2Fil%2F76b7a3%2F3191396948%2Fil_570xN.3191396948_h9qw.jpg&imgrefurl=https%3A%2F%2Fwww.etsy.com%2Fde%2Flisting%2F742075533%2Ffriendship-gift-box-best-friend-birthday&tbnid=rbAlOCwXIfKEbM&vet=12ahUKEwi-m7D3ytT0AhV0kf0HHVmAA7MQMygfegUIARCdBA..i&docid=CigRAysPc_5C2M&w=570&h=570&itg=1&q=birthday%20gift%20box&ved=2ahUKEwi-m7D3ytT0AhV0kf0HHVmAA7MQMygfegUIARCdBA',
    description: 'Happy Birthday',
  },
  {
    name: 'New Year',
    image:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fconfettigiftcompany.com%2Fproducts%2Fhappy-new-year-gift-box&psig=AOvVaw0kNpTQCQp1rfkKwWT9WUHy&ust=1639066108731000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIC_xpzL1PQCFQAAAAAdAAAAABAG',
    description: 'Happy new year',
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
