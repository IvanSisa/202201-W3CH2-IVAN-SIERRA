import { Header } from "../components/header.js";



export const main = function(){
   
    new Header('').render('#header');
   
    
}
document.addEventListener('DOMContentLoaded',main);