// images
import blogImg1 from "../images/sucursales/Comega-Gye1.png";
import blogImg2 from "../images/sucursales/Comega-Gye2.png";
import blogImg3 from "../images/sucursales/Comega-Balzar.png";
import imgPoint from "../images/sucursales/alfiler.png"

import blogSingleImg1 from "../images/blog-details/img-1.jpg";
import blogSingleImg2 from "../images/blog-details/img-2.jpg";
import blogSingleImg3 from "../images/blog-details/img-3.jpg";



const locations = [
    {
        id: '1',
        title: 'Comega Guayaquil',
        slug:'Comega+Centro+Medico/@-2.1838896,-79.8876695,17z/data=!3m1!4b1!4m6!3m5!1s0x902d6d68ea5f0109:0x89785eed63581361!8m2!3d-2.1838896!4d-79.8850946!16s%2Fg%2F11j92f3vhb?entry=ttu',
        thumb:'Guayaquil',
        screens: blogImg1,
        description: 'Direccion: Francisco de marco y 7º Callejón (Frente al Centro Cívico)',
        point: imgPoint,
        atentionHours: 'Atención 24/7',
        blogSingleImg:blogSingleImg1, 
        phone:' 0996743564',
        blClass:'format-standard-image',
        animation:'1200',
    },
    {
        id: '2',
        title: 'Local Médico 2',
        slug:'',
        thumb:'Guayaquil',
        screens: blogImg2,
        description: 'Direccion: Av. Francisco de Orellana y Calle Valencia',
        point: imgPoint,
        atentionHours: 'Lunes - Viernes / 8am-5pm',
        blogSingleImg:blogSingleImg2, 
        phone:' 0996743564',
        blClass:'format-standard-image',
        animation:'1400',
    },
    {
        id: '3',
        title: 'Comega Balzar - Sucursal',
        slug:'Comega+Balzar/@-1.1863211,-79.7577429,17z/data=!3m1!4b1!4m6!3m5!1s0x902b616d8c771d85:0xb5c6fdc94276763f!8m2!3d-1.1863211!4d-79.755168!16s%2Fg%2F11v5dn78xj?entr',
        thumb:'Balzar',
        screens: blogImg3,
        description: 'Direccion: Crnl Flavio Alfaro Delgado y 7º Cj. NE Sur',
        point: imgPoint,
        atentionHours: 'Atención 24/7',
        blogSingleImg:blogSingleImg3,
        phone:' 0996743564',
        blClass:'format-video',
        animation:'1600',
    }
];
export default locations;