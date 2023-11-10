import "./Services.css";
import Image1 from "../../assets/image/web-design.png"
import Image2 from "../../assets/image/app-development.png"
import Image3 from "../../assets/image/graphic-designer.png"

const data = [
    {
        id: 1,
        image: Image1,
        title: "UI/UX Design",
        description:
        "Elevate user experiences with intuitive interfaces and visually stunning designs",
    },
    {
        id: 2,
        image: Image2,
        title: "Android Development",
        description:
        "Transform your ideas into powerful, user-friendly Android apps.",
    },
    {
        id: 3,
        image: Image3,
        title: "Illustration",  
        description:
        "Add a touch of creativity and storytelling to your brand with custom illustrations.",
    },
];

const Services = () => {
    return (
        <section className="services container section" id="services">
            <h2 className="section__title">Services</h2>

            <div className="services__container grid">
                {data.map(({id, image, title, description}) => {
                    return (
                        <div className="services__card" key={id}>
                            <img src={image} width="100px" alt="" className="services__img" />

                            <h3 className="services__title">{title}</h3>
                            <p className="services__description">{description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Services;