import { MarqueeTechnologies } from "./MarqueeTechnologies";
import { BlurFade } from "./ui/blur-fade";

function Technologies() {
  return (
    <BlurFade delay={0.03} inView>
      <div className="py-4">
        <h1 className="text-3xl">Technologies</h1>
        <MarqueeTechnologies />
      </div>
    </BlurFade>
  );
}
export default Technologies;
