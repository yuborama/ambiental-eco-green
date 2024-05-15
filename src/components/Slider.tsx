import { EmblaCarousel } from "./Carrousel";

export const Sliders = () => {
  return (
    <section className="w-full">
      <EmblaCarousel
        slides={[
          {
            id: 3,
            render() {
              return (
                <div className="w-full relative">
                  <section className="bg-black opacity-60 h-full w-full absolute  flex flex-col items-center justify-center">
                    <p className=" text-white text-4xl">
                      ¿Listos para Reciclar y Transformar nuestro Mundo?
                    </p>
                    <p className="text-white font-normal text-lg text-center">
                      Explora cómo el reciclaje puede transformar nuestro
                      entorno. Descubre consejos prácticos, soluciones
                      innovadoras <br />y datos impactantes que te inspirarán a
                      ser parte activa de este movimiento.
                    </p>
                  </section>

                  <img
                    src="slider/3.jpg"
                    className="w-full object-cover object-center"
                  />
                </div>
              );
            },
          },
          {
            id: 1,
            render() {
              return (
                <div className="w-full">
                  <img
                    src="slider/1.jpg"
                    className="w-full object-cover object-center"
                  />
                </div>
              );
            },
          },
          {
            id: 2,
            render() {
              return (
                <div className="w-full">
                  <img
                    src="slider/2.jpg"
                    className="w-full object-cover object-center"
                  />
                </div>
              );
            },
          },
        ]}
      />
    </section>
  );
};
