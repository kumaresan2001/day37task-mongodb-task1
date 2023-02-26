/*
  1.Find the information about all the products
   db.product.find({})
   .projection({})
   .sort({_id:-1})
   .limit(100)

 ===================================================================================================================

  2.Find the product price which are between 400 to 800
   db.product.find({$and:[{"product_price":{$gte:400}},{"product_price":{$lte:800}}]}).sort({id:-1})

============================================================================================================================
3. Find the product price which are not between 400 to 600
   db.product.find({$or:[{"product_price":{$gte:600}},{"product_price":{$lte:400}}]}).sort({id:-1})

 ======================================================================================================================
   4.List the four product which are grater than 500 in price
  db.product.find({$or:[{"product_price":{$gt:500}}]}).sort({id:-1}).limit(4)

================================================================================================================================================
  5.  Find the product name and product material of each products
    db.product.find({},{product_name:1,product_material:1})
   .projection({})
   .sort({_id:-1})
   .limit(100)

 =============================================================================================================================
6. Find the product with a row id of 10
  db.product.find({"id":"10"},{"product_name":1,_id:0})
======================================================================================================
7.  Find only the product name and product material.
db.products.find({},{_id:0, product_price:0, product_color:0, id:0});
==============================================================================================================
 8. Find all products which contain the value of soft in product material
  db.product.find({"product_material":{$in:["Soft"]}},{"product_name":1,"product_material":1,_id:0})

============================================================================================================
9.Find products which contain product color indigo  and product price 492.00
db.product.find({$or:[{"product_color":"indigo"},{"product_price":492.00}]},{"product_name":1,"product_material":1,"product_price":1,"product_color":1,_id:0})

=======================================================================================================
10.Delete the products which product price value are same

db.product.deleteMany({"product_price":"%"})
db.product.find({},
{"product_name":1,"product_material":1,"product_color":1,"product_price":1})
*/
