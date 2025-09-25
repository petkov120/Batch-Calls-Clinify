import svgPaths from "./svg-xdyz1vfh33";

function Svg() {
  return (
    <div className="absolute left-[16px] size-[16px] top-1/2 translate-y-[-50%]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p2141ee80} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute h-[36px] left-[0.8px] right-[0.8px] top-[4.8px]" data-name="Button">
      <Svg />
      <div className="absolute flex flex-col font-['Arial:Narrow',_sans-serif] h-[16px] justify-center leading-[0] left-[40px] not-italic text-[#364153] text-[14px] translate-y-[-50%] w-[98.392px]" style={{ top: "calc(50% - 0.4px)" }}>
        <p className="leading-[20px]">contact from list</p>
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="absolute left-[16px] size-[16px] top-1/2 translate-y-[-50%]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p3b0e2580} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute h-[36px] left-[0.8px] right-[0.8px] top-[40.8px]" data-name="Button">
      <Svg1 />
      <div className="absolute flex flex-col font-['Arial:Narrow',_sans-serif] h-[16px] justify-center leading-[0] left-[40px] not-italic text-[#364153] text-[14px] translate-y-[-50%] w-[85.171px]" style={{ top: "calc(50% - 0.4px)" }}>
        <p className="leading-[20px]">Add manually</p>
      </div>
    </div>
  );
}

export default function BackgroundBorderShadow() {
  return (
    <div className="bg-white relative rounded-[8px] size-full" data-name="Background+Border+Shadow">
      <div className="overflow-clip relative size-full">
        <Button />
        <Button1 />
      </div>
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}