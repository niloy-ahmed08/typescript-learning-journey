type student = {

    id : number,
    name : string[],

}

type Education = {

   subject : string,
   semister : number ,

}

type Result = {
    gpa : number,
    passed : number[],
}


type FullEducational = Education & student & Result;


     const educationalDettels : FullEducational = {

name : ['niloy','sultan','mitu','mihir','rafsan','safin', 'mahin'],
subject:'Scince',
semister: 1,
id : 1,
gpa:4.5,
passed: [4.5,5,3.5,2,1.54]


     }



     type japan = {
        educational : string,
        human : string[],
        money:string[],
     }


     type zermany = {
        ai : string[],
        humanyear : number[],
        bussness : string 
     }

     type china = {

        tecnology : string[],
        money : string[],
        electricCar : string,

     }


     const IndrustialCountry : japan & zermany & china = {
        educational: 'Technology',
        human: ['Engineer','doctor','teacher'],
        ai: ['AI','roboticsai'],
        humanyear: [2026],
        bussness: 'Manufacturing',
        tecnology: ['Robotics','humanAi'],
        money: ['Currency','chaina'],
        electricCar: 'Available'
     };


     type frontend = {
        frontendskills : string[],
     }

     
     type Backend = {
        Backendskills : string[],
     }


     
     type experience = {
        Experienceskills : number[],
     }

     type SoftwareDeveloper = frontend & Backend & experience;


         const FullstackSoftwareDeveloper : SoftwareDeveloper = {

            frontendskills: ['HTML', 'CSS', 'TypeScript'],
            Backendskills: ['Node.js', 'TypeScript'],
            Experienceskills: [2026,2022,]

         }



    type PersonalInfo = {

   name : string[],
   age : number[],


    }


    type TechnicalSkills = {

        frontend : string[],
        Backend :string[]
    }

    type Career = {

        salary : number[],
        experience : number [],
    }


    type DevoloperProfile = PersonalInfo & TechnicalSkills & Career ;


      const FullstackDevoloper : DevoloperProfile = {

         name: ['Niloy'],
         age: [24],
         frontend : ['React','NExtjs','typescript'],
         Backend : ['nodejs','mongoBd','api-authntication'],
         salary:[45000,55000,70000],
         experience : [3,5,6,7,]

      }

