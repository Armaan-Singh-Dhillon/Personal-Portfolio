import mongoose from "mongoose";
const colors = [
    { name: 'Blue', shades: ['#4285F4', '#3367D6', '#1A54D6', '#153E75', '#0D2C55'] },
    { name: 'Purple', shades: ['#AB47BC', '#9C27B0', '#7B1FA2', '#4A148C', '#311B92'] }
];

function getRandomColorShade() {
    const color = colors[Math.floor(Math.random() * colors.length)];
    const shades = color.shades;
    const randomShade = shades[Math.floor(Math.random() * shades.length)];
    return `rgba(${hexToRgb(randomShade)}, 0.5)`;
}

function hexToRgb(hex) {
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);
    return `${r}, ${g}, ${b}`;
}

const barSkillSchema = new mongoose.Schema({
    name: {
        type: String,
        
    },
    points:{
        type: String,
        
    },
    color: {
        type:String,

        default: getRandomColorShade()
    }
});


export default barSkillSchema