let devoloper : string = 'niloy';

const plyer : number = 2

const learning : boolean = true

let devoloper = 'niloy'

let username = 'niloy'

const userage = 23 ;

const isfrontenddevoloper = true


 interface profetion {
    name : string;
    age : number;
    isstudent : boolean;
 }

   const profetion: profetion = {
      name : 'niloy ',
      age : 24,
      isstudent : false,
   }


   interface product {
    studentname : string,
    professionage : number,
    boolens : boolean,
   }

   function functionname({studentname,professionage,boolens}:product) {

    return(

    

    )
    
   }


   interface product {
    fullname : string
    price : number,
    category :string
   }



   function productcard({fullname,price,category}:product) {
    return({



    })
   }


   interface product {

    id : number ,
    title : string,
    instock : boolean,
    discaunt? : number ,

    category: {
        id : number,
        name : string

    };

   }


const productcards : product[] = [
{
    id: 4,
    studentname: "",
    professionage: 0,
    boolens: false,
    fullname: "",
    price: 0,
    category: "",
    title: "",
    instock: false
}
 
];



interface player {
    id : number
    batch : number
    selected: boolean
    name : string
    others :{
        names :string
        team : number
    }
}


const playerdettels : player [] = [

    {
        id:32,
        batch: 42,
        selected: false,
        name: "niloy",
        others: {
            names: "jisan",
            team: 12
        }
    }
]


type result = 'A+'  | 'pass'  | 'fail'
interface playerr {
    id : number,
    name : string,
    status : 'active' | 'inactive' | 'pending',
    teams : number
    result :result
}


const players : playerr [] = [
    {
        id: 9,
        name: "niloy ahmed",
        status: "active",
        teams: 0,
        result: "pass"
    },
      {
        id: 10,
        name: "sultan ahmed",
        status: "active",
        teams: 0,
        result: "A+"
    },

      {
        id: 11,
        name: "mitu ahmed",
        status: "pending",
        teams: 23,
        result: "A+"
    }
];