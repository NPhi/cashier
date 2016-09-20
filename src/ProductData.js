// NOTE : the ID is the name of product.
// In the business context, the name is unique for every product. It is suitable to use name of product as index
// It helps improve optimization.

/**
 *
 *FIX : need to change the structure data. 
 * Remove the string id,
 *
*/

export const products = {
      10 : {
        id : 10,
        name: 'áo len 1',
        price: 15
      },  
      11 : {
        id : 11,
        name: 'áo len 2',
        price: 89
      },     
      32 : {
        id : 32,
        name: 'áo len 3',
        price: 25
      },      
      14 : {
        id : 14,
        name: 'quý hoá to',
        price: 15
      },
      223 : {
        id : 223,
        name: 'quần quạt',
        price: 20
      },
      320 : {
        id : 320,
        name: 'loè loẹt',
        price: 25
      },
      20 : {
        id : 20,
        name: 'loè láo',
        price: 20
      },
      12 : {
        id : 12,
        name: 'quyền cứu ướt',
        price: 23
      },
      30 : {
        id : 30,
        name: 'nút hoàng',
        price: 25
      },
};

export const init = () => {
  localStorage.clear();
  localStorage.setItem('products',JSON.stringify(products));
};

export const getAllProducts = () => {
  try{
    // simulate retrieving data from a database
    var serializedProducts = localStorage.getItem('products');
    if(serializedProducts === null){
      return undefined;
    }
    return JSON.parse(serializedProducts);
    // simulate success callback
  }catch(err){
    console.log("There is an error with loading products from local storage.");
    console.log(err.message);
    return undefined;
  }
}


