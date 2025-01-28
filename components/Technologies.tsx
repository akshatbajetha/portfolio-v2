import { MarqueeTechnologies } from "./MarqueeTechnologies";
import { BlurFade } from "./ui/blur-fade";

function Technologies() {
  return (
    <BlurFade delay={0.03} inView>
      <div className="py-4">
        <h1 className="text-3xl relative inline-block group">
          Technologies
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 "></span>
        </h1>
        <MarqueeTechnologies />
      </div>
    </BlurFade>
  );
}
export default Technologies;
