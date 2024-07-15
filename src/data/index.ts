

export const Conecta = [
    {
        title: "Conecta con la naturaleza, conéctate con la Comunidad",
        des: "Bienvenido a nuestra plataforma dedicada a la biodiversidad terrestre de Chile. Te invitamos a un emocionante viaje de exploración, aprendizaje y conservación de la naturaleza.",
        des2: "Nuestra aplicación te permite descubrir la asombrosa biodiversidad que te rodea. Captura fotos de las especies que encuentres en tus rutas por parques, humedales y ecosistemas. Cada avistamiento cuenta para la ciencia y la conservación. También aprende sobre las especies locales con nuestras guías de identificación y pon a prueba tus conocimientos con cuestionarios interactivos. Únete a una comunidad apasionada por la naturaleza, comparte tus experiencias y contribuye a proyectos de investigación."
    }
];

export const RutasData = [
    {
        title: "Crea y recorre rutas",
        description: "Podrás realizar rutas que ya han sido creadas por otros usuarios o dar rienda suelta a tu espíritu explorador y diseñar tus propios recorridos únicos. En Ávida, priorizamos la seguridad y autenticidad de tus aventuras. Cada camino que se comparte en la aplicación pasa por un riguroso proceso de verificación y aprobación antes de estar disponible para ti. Esto garantiza que cada ruta que elijas esté cuidadosamente revisada y aprobada, proporcionándote la tranquilidad de un viaje seguro y auténtico en medio de la biodiversidad de Chile.",
    }
];


import { user1, user2, user3, fauna1, fauna2, fauna3} from "../assets";

export interface CommunityMember {
    name: string;
    location: string;
    testimonial: string;
    image: string;
    fauna: string;
}

export const ComunidadData: CommunityMember[] = [
    {
        name: "María L.",
        location: "Parque Bustamante",
        testimonial: "¡Qué increíble experiencia! Capturé una foto de un cururo en el parque cerca de mi casa y la subí a la aplicación. Me emocionó ver cuántas personas se unieron para identificarlo. ¡Estamos contribuyendo juntos a la conservación de la fauna en Chile!",
        image: user1,
        fauna: fauna1
    },
    {
        name: "Juan C.",
        location: "Quinta Normal",
        testimonial: "Nunca antes había notado la diversidad de plantas en mi región. Usando la aplicación, capturé una foto de una ortiga chilena y la compartí. Fue emocionante aprender más sobre la flora chilena y saber que mi contribución cuenta para su conservación.",
        image: user2,
        fauna: fauna2
    },
    {
        name: "Carlos R.",
        location: "Templo Bahai",
        testimonial: "Soy un amante de las aves y esta aplicación es un tesoro. Fotografié un cachudito en el templo Bahai y rápidamente lo identificamos. Ahora, puedo aprender sobre las aves de Chile mientras contribuyo a la investigación científica. ¡Muy agradecido por esta oportunidad!",
        image: user3,
        fauna: fauna3
    }
];
