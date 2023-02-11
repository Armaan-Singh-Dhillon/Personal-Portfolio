import Skills from './models/item';

export default async function getItems(req ,res) {


    try {
        
        const skills = await Skills.find();
       
    }
     catch (error) {
        
    }
}