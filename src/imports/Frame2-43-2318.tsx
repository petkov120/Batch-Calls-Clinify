import svgPaths from "./svg-9hg1pzxsrl";
import imgManifestChakalov from "figma:asset/b902cbbf1fddaf3d64a294cfb87055c6c189f3a6.png";

function ManifestChakalov() {
  return (
    <div className="absolute left-[24px] rounded-[2.68435e+07px] size-[48px] translate-y-[-50%]" data-name="Manifest Chakalov" style={{ top: "calc(50% - 0.4px)" }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[2.68435e+07px]">
        <img alt="" className="absolute h-[149.8%] left-0 max-w-none top-[-24.9%] w-full" src={imgManifestChakalov} />
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="absolute left-[16px] size-[16px] top-1/2 translate-y-[-50%]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p10230300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#00a63e] h-[40px] left-[565.88px] rounded-[8px] translate-y-[-50%] w-[121.8px]" data-name="Button" style={{ top: "calc(50% - 0.4px)" }}>
      <Svg />
      <div className="absolute flex flex-col font-['Arial:Narrow',_sans-serif] h-[17.6px] justify-center leading-[0] not-italic text-[16px] text-center text-white top-1/2 translate-x-[-50%] translate-y-[-50%] w-[66.101px]" style={{ left: "calc(50% + 12.151px)" }}>
        <p className="leading-[24px]">Start Call</p>
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="absolute left-[16.79px] size-[16px] top-1/2 translate-y-[-50%]" data-name="SVG">
      <div className="absolute bottom-0 left-0 right-0 top-[-8.33%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
          <g id="SVG">
            <path d={svgPaths.p1760cd00} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute h-[41.6px] left-[699.68px] rounded-[8px] translate-y-[-50%] w-[124.33px]" data-name="Button" style={{ top: "calc(50% - 0.4px)" }}>
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Svg1 />
      <div className="absolute flex flex-col font-['Arial:Narrow',_sans-serif] h-[17.6px] justify-center leading-[0] not-italic text-[#155dfc] text-[16px] text-center top-1/2 translate-x-[-50%] translate-y-[-50%] w-[67.033px]" style={{ left: "calc(50% + 12.141px)" }}>
        <p className="leading-[24px]">Schedule</p>
      </div>
    </div>
  );
}

function ButtonSvg() {
  return (
    <div className="absolute left-[844px] size-[20px] top-[38px]" data-name="Button → SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Button â SVG">
          <path d={svgPaths.pdafb600} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="h-[96.8px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <ManifestChakalov />
      <div className="absolute flex flex-col font-['Arial:Bold',_sans-serif] h-[28px] justify-center leading-[0] left-[88px] not-italic text-[#101828] text-[18px] top-[38px] translate-y-[-50%] w-[158.373px]">
        <p className="leading-[28px]">Manifest Chakalov</p>
      </div>
      <div className="absolute flex flex-col font-['Arial:Narrow',_sans-serif] h-[20px] justify-center leading-[0] left-[88px] not-italic text-[#4a5565] text-[14px] translate-y-[-50%] w-[109.769px]" style={{ top: "calc(50% + 13.6px)" }}>
        <p className="leading-[20px]">+2348067390962</p>
      </div>
      <div className="absolute flex flex-col font-['Arial:Narrow',_sans-serif] h-[16px] justify-center leading-[0] left-[213.4px] not-italic text-[#6a7282] text-[14px] top-[61.6px] translate-y-[-50%] w-[93.194px]">
        <p className="leading-[20px]">• Ready to Call</p>
      </div>
      <Button />
      <Button1 />
      <ButtonSvg />
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative size-full">
      <HorizontalBorder />
    </div>
  );
}