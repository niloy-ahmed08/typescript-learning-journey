let authntication : string = 'niloy'

  authntication = 'jisan'

  let userstatus : 'active' | 'inactive' 



  userstatus = 'inactive'
  userstatus = 'active'


//   type alis diya literel type 


type orderstatus = 'pending' | 'processingh' | 'delivered' | 'canel'


let order : orderstatus = 'processingh'


type userrole = 'admin' | 'editor' | 'devoloper'

 function chekrole(role : userrole){
     
     console.log(role)
 }
   
 chekrole('admin')



//  type UserRole = "admin" | "editor" | "viewer";


//  function chekroles (roles : UserRole){

//     return ` your role is ${roles}`

//  }

//  console.log(chekroles('viewer'))



type students = "scince" | "huminutes" | "bussness";


function information (idrole : students){

    return `your defertment ${idrole}`

}

console.log(information('huminutes'))

type AllowedValues = 'avabalitystatus'  |  'in-stock'  | 'discounted'

function ProductDettels (staus : AllowedValues){

    return `your product ${staus} `

}

  console.log(ProductDettels('in-stock'))


  type ProductStatus = "available" | "unavailable";


   type productcards = {

    title :string ,
    id : number,
    status :ProductStatus

   }


   const productDetails : productcards = {
       title: "",
       id: 0,
       status: "available"
   }