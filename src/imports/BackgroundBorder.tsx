import svgPaths from "./svg-7e96ytpdai";
import imgSarahJohnson from "figma:asset/b06683183ddfd7f2a2ff36f628030fb3624270a7.png";
import imgMichaelChen from "figma:asset/368669b4c80d5c24c113ffd9a2fd813e7ed82bfc.png";

function Container() {
  return (
    <div className="absolute h-[16.8px] left-[40.8px] overflow-clip right-[16.8px] top-[11.6px]" data-name="Container">
      <div className="absolute flex flex-col font-['Arial:Narrow',_sans-serif] h-[16px] justify-center leading-[0] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.5)] top-[8px] translate-y-[-50%] w-[138.047px]">
        <p className="leading-[normal]">Search Conversations</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-white h-[40px] left-[24px] right-[76px] rounded-[8px] top-[24px]" data-name="Input">
      <div className="overflow-clip relative size-full">
        <Container />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Svg() {
  return (
    <div className="absolute left-[36px] size-[20px] translate-y-[-50%]" data-name="SVG" style={{ top: "calc(50% - 0.4px)" }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p99f0820} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Svg1() {
  return (
    <div className="absolute left-1/2 size-[20px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p2dd2d200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#155dfc] left-[319.2px] rounded-[2.68435e+07px] size-[40px] top-[24px]" data-name="Button">
      <Svg1 />
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="absolute h-[88.8px] left-0 right-[0.8px] top-[0.8px]" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <Input />
      <Svg />
      <Button />
    </div>
  );
}

function ButtonSvg() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Button → SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Button â SVG">
          <path d="M4 12L12 4M4 4L12 12" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[26px] top-[11px] w-[331.2px]">
      <div className="flex flex-col font-['Arial:Narrow',_sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[14px] w-[91.391px]">
        <p className="leading-[20px]">Select Contact</p>
      </div>
      <ButtonSvg />
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="absolute h-[68px] left-0 right-px top-[89.81px]" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute flex flex-col font-['Arial:Bold',_sans-serif] justify-center leading-[0] left-[26px] not-italic text-[#101828] text-[18px] text-nowrap top-[43.79px] translate-y-[-50%]">
        <p className="leading-[28px] whitespace-pre">Choose Contacts For batch call</p>
      </div>
      <Frame1 />
    </div>
  );
}

function SarahJohnson() {
  return (
    <div className="absolute left-[16px] rounded-[2.68435e+07px] size-[48px] top-[16px]" data-name="Sarah Johnson">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[2.68435e+07px]">
        <img alt="" className="absolute h-[125%] left-0 max-w-none top-[-12.5%] w-full" src={imgSarahJohnson} />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[24px] left-[76px] overflow-clip translate-y-[-50%] w-[115.59px]" data-name="Container" style={{ top: "calc(50% - 26.395px)" }}>
      <div className="absolute flex flex-col font-['Arial:Bold',_sans-serif] h-[17.6px] justify-center leading-[0] left-0 not-italic text-[#101828] text-[16px] top-[12px] translate-y-[-50%] w-[115.969px]">
        <p className="leading-[24px]">Sarah Johnson</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[20px] left-[76px] overflow-clip right-[16px] top-[44px]" data-name="Container">
      <div className="absolute flex flex-col font-['Arial:Narrow',_sans-serif] h-[16px] justify-center leading-[0] left-0 not-italic text-[#4a5565] text-[14px] top-[9.6px] translate-y-[-50%] w-[115.979px]">
        <p className="leading-[20px]">+1 (555) 123-4567</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-blue-100 h-[19.99px] left-[76px] rounded-[4px] translate-y-[-50%] w-[35.35px]" data-name="Background" style={{ top: "calc(50% + 27.6px)" }}>
      <div className="absolute flex flex-col font-['Arial:Narrow',_sans-serif] h-[13.6px] justify-center leading-[0] left-[8px] not-italic text-[#193cb8] text-[12px] translate-y-[-50%] w-[19.55px]" style={{ top: "calc(50% - 0.395px)" }}>
        <p className="leading-[16px]">VIP</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-blue-100 h-[19.99px] left-[115.35px] rounded-[4px] translate-y-[-50%] w-[98.72px]" data-name="Background" style={{ top: "calc(50% + 27.6px)" }}>
      <div className="absolute flex flex-col font-['Arial:Narrow',_sans-serif] h-[13.6px] justify-center leading-[0] left-[8px] not-italic text-[#193cb8] text-[12px] translate-y-[-50%] w-[82.93px]" style={{ top: "calc(50% - 0.395px)" }}>
        <p className="leading-[16px]">Regular Patient</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute h-[108.79px] left-0 right-[16px] top-[174.4px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <SarahJohnson />
      <Container1 />
      <div className="absolute flex flex-col font-['Arial:Narrow',_sans-serif] h-[13.6px] justify-center leading-[0] left-[288.61px] not-italic text-[#6a7282] text-[12px] top-[27.6px] translate-y-[-50%] w-[63.785px]">
        <p className="leading-[16px]">2 hours ago</p>
      </div>
      <Container2 />
      <Background />
      <Background1 />
    </div>
  );
}

function MichaelChen() {
  return (
    <div className="absolute left-[16px] rounded-[2.68435e+07px] size-[48px] top-[16px]" data-name="Michael Chen">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[2.68435e+07px]">
        <img alt="" className="absolute h-[150%] left-0 max-w-none top-[-25%] w-full" src={imgMichaelChen} />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[24px] left-[76px] overflow-clip translate-y-[-50%] w-[103.14px]" data-name="Container" style={{ top: "calc(50% - 26.395px)" }}>
      <div className="absolute flex flex-col font-['Arial:Bold',_sans-serif] h-[17.6px] justify-center leading-[0] left-0 not-italic text-[#101828] text-[16px] top-[12px] translate-y-[-50%] w-[103.5px]">
        <p className="leading-[24px]">Michael Chen</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[20px] left-[76px] overflow-clip right-[16px] top-[44px]" data-name="Container">
      <div className="absolute flex flex-col font-['Arial:Narrow',_sans-serif] h-[16px] justify-center leading-[0] left-0 not-italic text-[#4a5565] text-[14px] top-[9.6px] translate-y-[-50%] w-[115.979px]">
        <p className="leading-[20px]">+1 (555) 234-5678</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="absolute bg-blue-100 h-[19.99px] left-[76px] rounded-[4px] translate-y-[-50%] w-[80.7px]" data-name="Background" style={{ top: "calc(50% + 27.6px)" }}>
      <div className="absolute flex flex-col font-['Arial:Narrow',_sans-serif] h-[13.6px] justify-center leading-[0] left-[8px] not-italic text-[#193cb8] text-[12px] translate-y-[-50%] w-[64.9px]" style={{ top: "calc(50% - 0.405px)" }}>
        <p className="leading-[16px]">New Patient</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute h-[108.79px] left-0 right-[16px] top-[283.19px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <MichaelChen />
      <Container3 />
      <div className="absolute flex flex-col font-['Arial:Narrow',_sans-serif] h-[13.6px] justify-center leading-[0] left-[299.29px] not-italic text-[#6a7282] text-[12px] top-[27.59px] translate-y-[-50%] w-[53.072px]">
        <p className="leading-[16px]">1 day ago</p>
      </div>
      <Container4 />
      <Background2 />
    </div>
  );
}

function EmmaRodriguez() {
  return (
    <div className="absolute left-[16px] rounded-[2.68435e+07px] size-[48px] top-[16px]" data-name="Emma Rodriguez">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[2.68435e+07px]">
        <img alt="" className="absolute h-[125%] left-0 max-w-none top-[-12.5%] w-full" src={imgSarahJohnson} />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[24px] left-[76px] overflow-clip translate-y-[-50%] w-[130.69px]" data-name="Container" style={{ top: "calc(50% - 26.395px)" }}>
      <div className="absolute flex flex-col font-['Arial:Bold',_sans-serif] h-[17.6px] justify-center leading-[0] left-0 not-italic text-[#101828] text-[16px] top-[12px] translate-y-[-50%] w-[130.991px]">
        <p className="leading-[24px]">Emma Rodriguez</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[20px] left-[76px] overflow-clip right-[16px] top-[44px]" data-name="Container">
      <div className="absolute flex flex-col font-['Arial:Narrow',_sans-serif] h-[16px] justify-center leading-[0] left-0 not-italic text-[#4a5565] text-[14px] top-[9.6px] translate-y-[-50%] w-[115.979px]">
        <p className="leading-[20px]">+1 (555) 345-6789</p>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="absolute bg-blue-100 h-[19.99px] left-[76px] rounded-[4px] translate-y-[-50%] w-[108.72px]" data-name="Background" style={{ top: "calc(50% + 27.6px)" }}>
      <div className="absolute flex flex-col font-['Arial:Narrow',_sans-serif] h-[13.6px] justify-center leading-[0] left-[8px] not-italic text-[#193cb8] text-[12px] translate-y-[-50%] w-[92.93px]" style={{ top: "calc(50% - 0.395px)" }}>
        <p className="leading-[16px]">Returning Patient</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute h-[108.79px] left-0 right-[16px] top-[391.97px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <EmmaRodriguez />
      <Container5 />
      <div className="absolute flex flex-col font-['Arial:Narrow',_sans-serif] h-[13.6px] justify-center leading-[0] left-[317.31px] not-italic text-[#6a7282] text-[12px] top-[27.6px] translate-y-[-50%] w-[34.995px]">
        <p className="leading-[16px]">Online</p>
      </div>
      <Container6 />
      <Background3 />
    </div>
  );
}

function Background4() {
  return (
    <div className="absolute bg-blue-100 h-[19.99px] left-[76px] rounded-[4px] translate-y-[-50%] w-[35.35px]" data-name="Background" style={{ top: "calc(50% + 27.6px)" }}>
      <div className="absolute flex flex-col font-['Arial:Narrow',_sans-serif] h-[13.6px] justify-center leading-[0] left-[8px] not-italic text-[#193cb8] text-[12px] translate-y-[-50%] w-[19.55px]" style={{ top: "calc(50% - 0.395px)" }}>
        <p className="leading-[16px]">VIP</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute h-[108.79px] left-0 right-[16px] top-[500.76px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Background4 />
    </div>
  );
}

function Background5() {
  return (
    <div className="absolute bg-blue-100 h-[19.99px] left-[76px] rounded-[4px] translate-y-[-50%] w-[98.72px]" data-name="Background" style={{ top: "calc(50% + 27.6px)" }}>
      <div className="absolute flex flex-col font-['Arial:Narrow',_sans-serif] h-[13.6px] justify-center leading-[0] left-[8px] not-italic text-[#193cb8] text-[12px] translate-y-[-50%] w-[82.93px]" style={{ top: "calc(50% - 0.395px)" }}>
        <p className="leading-[16px]">Regular Patient</p>
      </div>
    </div>
  );
}

function Background6() {
  return (
    <div className="absolute bg-blue-100 h-[19.99px] left-[178.73px] rounded-[4px] translate-y-[-50%] w-[52.03px]" data-name="Background" style={{ top: "calc(50% + 27.6px)" }}>
      <div className="absolute flex flex-col font-['Arial:Narrow',_sans-serif] h-[13.6px] justify-center leading-[0] left-[8px] not-italic text-[#193cb8] text-[12px] translate-y-[-50%] w-[36.22px]" style={{ top: "calc(50% - 0.395px)" }}>
        <p className="leading-[16px]">Urgent</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute h-[108.79px] left-0 right-[16px] top-[609.55px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Background5 />
      <Background6 />
    </div>
  );
}

export default function BackgroundBorder() {
  return (
    <div className="bg-white relative size-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border-[0.8px_0.8px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <HorizontalBorder />
      <HorizontalBorder1 />
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
    </div>
  );
}