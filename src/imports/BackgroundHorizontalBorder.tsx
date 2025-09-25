import svgPaths from "./svg-vwbxgm8wp";
import imgSarahJohnson from "figma:asset/b06683183ddfd7f2a2ff36f628030fb3624270a7.png";

function SarahJohnson() {
  return (
    <div className="absolute left-[24px] rounded-[2.68435e+07px] size-[48px] translate-y-[-50%]" data-name="Sarah Johnson" style={{ top: "calc(50% - 0.4px)" }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[2.68435e+07px]">
        <img alt="" className="absolute h-[125%] left-0 max-w-none top-[-12.5%] w-full" src={imgSarahJohnson} />
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="absolute left-[16.8px] size-[16px] top-1/2 translate-y-[-50%]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M4 12L12 4M4 4L12 12" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute h-[41.6px] left-[580.26px] rounded-[8px] translate-y-[-50%] w-[107.41px]" data-name="Button" style={{ top: "calc(50% - 0.4px)" }}>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Svg />
      <div className="absolute flex flex-col font-['Arial:Narrow',_sans-serif] h-[17.6px] justify-center leading-[0] not-italic text-[#364153] text-[16px] text-center top-1/2 translate-x-[-50%] translate-y-[-50%] w-[50.163px]" style={{ left: "calc(50% + 12.176px)" }}>
        <p className="leading-[24px]">Cancel</p>
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
    <div className="absolute h-[96.8px] left-0 right-0 top-[0.8px]" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <SarahJohnson />
      <div className="absolute flex flex-col font-['Arial:Bold',_sans-serif] h-[28px] justify-center leading-[0] left-[88px] not-italic text-[#101828] text-[18px] top-[38px] translate-y-[-50%] w-[130.341px]">
        <p className="leading-[28px]">Sarah Johnson</p>
      </div>
      <div className="absolute flex flex-col font-['Arial:Narrow',_sans-serif] h-[20px] justify-center leading-[0] left-[88px] not-italic text-[#4a5565] text-[14px] translate-y-[-50%] w-[115.979px]" style={{ top: "calc(50% + 13.6px)" }}>
        <p className="leading-[20px]">+1 (555) 123-4567</p>
      </div>
      <div className="absolute flex flex-col font-['Arial:Narrow',_sans-serif] h-[16px] justify-center leading-[0] left-[219.6px] not-italic text-[#6a7282] text-[14px] top-[61.6px] translate-y-[-50%] w-[110.08px]">
        <p className="leading-[20px]">• Select Call Type</p>
      </div>
      <Button />
      <Button1 />
      <ButtonSvg />
    </div>
  );
}

function Svg2() {
  return (
    <div className="absolute left-[6px] size-[20px] top-[6px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p3161fe80} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-gray-100 left-[12.8px] rounded-[8px] size-[32px] top-1/2 translate-y-[-50%]" data-name="Background">
      <Svg2 />
    </div>
  );
}

function Svg3() {
  return (
    <div className="absolute left-[391.2px] size-[16px] top-1/2 translate-y-[-50%]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p43eff00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-white h-[57.6px] left-[24px] rounded-[8px] top-[64px] w-[420px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Background />
      <div className="absolute flex flex-col font-['Arial:Bold',_sans-serif] h-[24px] justify-center leading-[0] left-[56.8px] not-italic text-[#101828] text-[16px] top-[27.8px] translate-y-[-50%] w-[150.597px]">
        <p className="leading-[24px]">Post Discharge Call</p>
      </div>
      <Svg3 />
    </div>
  );
}

function Svg4() {
  return (
    <div className="absolute left-[6px] size-[20px] top-[6px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p1af85dc0} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-gray-100 left-[12.8px] rounded-[8px] size-[32px] top-1/2 translate-y-[-50%]" data-name="Background">
      <Svg4 />
    </div>
  );
}

function Svg5() {
  return (
    <div className="absolute left-[391.2px] size-[16px] top-1/2 translate-y-[-50%]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p43eff00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-white h-[57.6px] left-[452px] rounded-[8px] top-[64px] w-[420px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Background1 />
      <div className="absolute flex flex-col font-['Arial:Bold',_sans-serif] h-[24px] justify-center leading-[0] left-[56.8px] not-italic text-[#101828] text-[16px] top-[27.8px] translate-y-[-50%] w-[81.225px]">
        <p className="leading-[24px]">Drug Refill</p>
      </div>
      <Svg5 />
    </div>
  );
}

function Svg6() {
  return (
    <div className="absolute left-[6px] size-[20px] top-[6px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p3161fe80} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Background2() {
  return (
    <div className="absolute bg-gray-100 left-[12.8px] rounded-[8px] size-[32px] top-1/2 translate-y-[-50%]" data-name="Background">
      <Svg6 />
    </div>
  );
}

function Svg7() {
  return (
    <div className="absolute left-[391.2px] size-[16px] top-1/2 translate-y-[-50%]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p43eff00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-white h-[57.6px] left-[24px] rounded-[8px] top-[129.6px] w-[420px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Background2 />
      <div className="absolute flex flex-col font-['Arial:Bold',_sans-serif] h-[24px] justify-center leading-[0] left-[56.8px] not-italic text-[#101828] text-[16px] top-[27.8px] translate-y-[-50%] w-[67.864px]">
        <p className="leading-[24px]">Form Fill</p>
      </div>
      <Svg7 />
    </div>
  );
}

function Svg8() {
  return (
    <div className="absolute left-[6px] size-[20px] top-[6px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.pf50a400} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Background3() {
  return (
    <div className="absolute bg-gray-100 left-[12.8px] rounded-[8px] size-[32px] top-1/2 translate-y-[-50%]" data-name="Background">
      <Svg8 />
    </div>
  );
}

function Svg9() {
  return (
    <div className="absolute left-[391.2px] size-[16px] top-1/2 translate-y-[-50%]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p43eff00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-white h-[57.6px] left-[452px] rounded-[8px] top-[129.6px] w-[420px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Background3 />
      <div className="absolute flex flex-col font-['Arial:Bold',_sans-serif] h-[24px] justify-center leading-[0] left-[56.8px] not-italic text-[#101828] text-[16px] top-[27.8px] translate-y-[-50%] w-[93.704px]">
        <p className="leading-[24px]">Regular Call</p>
      </div>
      <Svg9 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bottom-0 left-0 overflow-auto right-0 top-[97.6px]" data-name="Container">
      <div className="absolute flex flex-col font-['Arial:Bold',_sans-serif] h-[24px] justify-center leading-[0] left-[24px] not-italic text-[#101828] text-[16px] top-[36px] translate-y-[-50%] w-[121.928px]">
        <p className="leading-[24px]">Select Call Type</p>
      </div>
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
    </div>
  );
}

export default function BackgroundHorizontalBorder() {
  return (
    <div className="bg-white relative size-full" data-name="Background+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[0.8px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <HorizontalBorder />
      <Container />
    </div>
  );
}