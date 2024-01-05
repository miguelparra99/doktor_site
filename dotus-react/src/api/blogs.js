// images
import blogImg1 from "../images/blog/img-1.jpg";
import blogImg2 from "../images/blog/img-2.jpg";
import blogImg3 from "../images/blog/img-3.jpg";

import blogSingleImg1 from "../images/blog-details/img-1.jpg";
import blogSingleImg2 from "../images/blog-details/img-2.jpg";
import blogSingleImg3 from "../images/blog-details/img-3.jpg";



const blogs = [
    {
        id: '1',
        title: 'How Do Your Emotions Affect Your Physical Health?',
        slug:'How-Do-Your-Emotions-Affect-Your-Physical-Health',
        thumb:'Medicine',
        screens: blogImg1,
        description: 'Printing and typeseting industry has been the industry standard.',
        author: 'Loura Sweety',
        create_at: '25 Sep 2023',
        blogSingleImg:blogSingleImg1, 
        comment:'35',
        blClass:'format-standard-image',
        animation:'1200',
    },
    {
        id: '2',
        title: 'Using Flow Cytometry in Protein Engineering Detection',
        slug:'Using-Flow-Cytometry-in-Protein-Engineering-Detection',
        thumb:'Surgery',
        screens: blogImg2,
        description: 'Printing and typeseting industry has been the industry standard.',
        author: 'David Luis',
        create_at: '23 Sep 2023',
        blogSingleImg:blogSingleImg2, 
        comment:'80',
        blClass:'format-standard-image',
        animation:'1400',
    },
    {
        id: '3',
        title: 'What Mutations of SARS-CoV-2 are Causing Concern?',
        slug:'What-Mutations-of-SARS-CoV-2-are-Causing-Concern',
        thumb:'Doctor’s',
        screens: blogImg3,
        description: 'Printing and typeseting industry has been the industry standard.',
        author: 'Jenefer Willy',
        create_at: '21 Sep 2023',
        blogSingleImg:blogSingleImg3,
        comment:'95',
        blClass:'format-video',
        animation:'1600',
    }
];
export default blogs;