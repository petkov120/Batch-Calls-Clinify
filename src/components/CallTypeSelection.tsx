import { useState } from "react";
import svgPaths from "../imports/svg-xszgg3n2gw";
import imgSarahJohnson from "figma:asset/b06683183ddfd7f2a2ff36f628030fb3624270a7.png";

interface CallTypeSelectionProps {
  selectedContacts: string[];
  onCallTypeSelect: (callType: string) => void;
  onCancel: () => void;
  onSchedule: () => void;
}

function SarahJohnson() {
  return (
    <div className="absolute left-[24px] rounded-[2.68435e+07px] size-[48px] translate-y-[-50%]" data-name="Sarah Johnson" style={{ top: "calc(50% - 0.4px)" }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[2.68435e+07px]">
        <img alt="" className="absolute h-[125%] left-0 max-w-none top-[-12.5%] w-full" src={imgSarahJohnson} />
      </div>
    </div>
  );
}

function CancelButton({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="absolute h-[41.6px] left-[580.26px] rounded-[8px] translate-y-[-50%] w-[107.41px] border border-[#d1d5dc] hover:bg-gray-50 transition-colors" 
      data-name="Button" 
      style={{ top: "calc(50% - 0.4px)" }}
    >
      <div className="absolute left-[16.8px] size-[16px] top-1/2 translate-y-[-50%]" data-name="SVG">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="SVG">
            <path d="M4 12L12 4M4 4L12 12" id="Vector" stroke="#364153" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </g>
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Arial:Narrow',_sans-serif] h-[17.6px] justify-center leading-[0] not-italic text-[#364153] text-[16px] text-center top-1/2 translate-x-[-50%] translate-y-[-50%] w-[50.163px]" style={{ left: "calc(50% + 12.176px)" }}>
        <p className="leading-[24px]">Cancel</p>
      </div>
    </button>
  );
}

function ScheduleButton({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="absolute h-[41.6px] left-[699.68px] rounded-[8px] translate-y-[-50%] w-[124.33px] border border-[#bedbff] hover:bg-blue-50 transition-colors" 
      data-name="Button" 
      style={{ top: "calc(50% - 0.4px)" }}
    >
      <div className="absolute left-[16.79px] size-[16px] top-1/2 translate-y-[-50%]" data-name="SVG">
        <div className="absolute bottom-0 left-0 right-0 top-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
            <g id="SVG">
              <path d={svgPaths.p1760cd00} id="Vector" stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute flex flex-col font-['Arial:Narrow',_sans-serif] h-[17.6px] justify-center leading-[0] not-italic text-[#155dfc] text-[16px] text-center top-1/2 translate-x-[-50%] translate-y-[-50%] w-[67.033px]" style={{ left: "calc(50% + 12.141px)" }}>
        <p className="leading-[24px]">Schedule</p>
      </div>
    </button>
  );
}

function ButtonSvg() {
  return (
    <div className="absolute left-[844px] size-[20px] top-[38px]" data-name="Button → SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Button â SVG">
          <path d={svgPaths.pdafb600} id="Vector" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function CallTypeButton({ 
  title, 
  icon, 
  onClick, 
  left, 
  top 
}: { 
  title: string; 
  icon: string; 
  onClick: () => void;
  left: string;
  top: string;
}) {
  return (
    <button 
      onClick={onClick}
      className="absolute bg-white h-[57.6px] rounded-[8px] w-[420px] border border-gray-200 hover:bg-gray-50 transition-colors" 
      style={{ left, top }}
      data-name="Button"
    >
      <div className="absolute bg-gray-100 left-[12.8px] rounded-[8px] size-[32px] top-1/2 translate-y-[-50%]" data-name="Background">
        <div className="absolute left-[6px] size-[20px] top-[6px]" data-name="SVG">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g id="SVG">
              <path d={icon} id="Vector" stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute flex flex-col font-['Arial:Bold',_sans-serif] h-[24px] justify-center leading-[0] left-[56.8px] not-italic text-[#101828] text-[16px] top-[27.8px] translate-y-[-50%]">
        <p className="leading-[24px]">{title}</p>
      </div>
      <div className="absolute left-[391.2px] size-[16px] top-1/2 translate-y-[-50%]" data-name="SVG">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="SVG">
            <path d={svgPaths.p43eff00} id="Vector" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </g>
        </svg>
      </div>
    </button>
  );
}

export default function CallTypeSelection({ selectedContacts, onCallTypeSelect, onCancel, onSchedule }: CallTypeSelectionProps) {
  const callTypes = [
    { title: "Post Discharge Call", icon: svgPaths.p3161fe80, left: "24px", top: "64px" },
    { title: "Drug Refill", icon: svgPaths.p1af85dc0, left: "452px", top: "64px" },
    { title: "Form Fill", icon: svgPaths.p3161fe80, left: "24px", top: "129.6px" },
    { title: "Regular Call", icon: svgPaths.pf50a400, left: "452px", top: "129.6px" }
  ];

  return (
    <div className="relative size-full">
      {/* Header */}
      <div className="absolute h-[96.8px] left-0 right-0 top-0" data-name="HorizontalBorder">
        <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-gray-200 border-solid inset-0 pointer-events-none" />
        <SarahJohnson />
        <div className="absolute flex flex-col font-['Arial:Bold',_sans-serif] h-[28px] justify-center leading-[0] left-[88px] not-italic text-[#101828] text-[18px] top-[38px] translate-y-[-50%] w-[130.341px]">
          <p className="leading-[28px]">{selectedContacts.length} Contacts Selected</p>
        </div>
        <div className="absolute flex flex-col font-['Arial:Narrow',_sans-serif] h-[20px] justify-center leading-[0] left-[88px] not-italic text-[#4a5565] text-[14px] translate-y-[-50%] w-[115.979px]" style={{ top: "calc(50% + 13.6px)" }}>
          <p className="leading-[20px]">Select call type for batch</p>
        </div>
        <div className="absolute flex flex-col font-['Arial:Narrow',_sans-serif] h-[16px] justify-center leading-[0] left-[219.6px] not-italic text-[#6a7282] text-[14px] top-[61.6px] translate-y-[-50%] w-[110.08px]">
          <p className="leading-[20px]">• Select Call Type</p>
        </div>
        <CancelButton onClick={onCancel} />
        <ScheduleButton onClick={onSchedule} />
        <ButtonSvg />
      </div>
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 overflow-auto right-0 top-[96.8px]" data-name="Container">
        <div className="absolute flex flex-col font-['Arial:Bold',_sans-serif] h-[24px] justify-center leading-[0] left-[24px] not-italic text-[#101828] text-[16px] top-[36px] translate-y-[-50%] w-[121.928px]">
          <p className="leading-[24px]">Select Call Type</p>
        </div>
        
        {callTypes.map((callType, index) => (
          <CallTypeButton
            key={callType.title}
            title={callType.title}
            icon={callType.icon}
            onClick={() => onCallTypeSelect(callType.title)}
            left={callType.left}
            top={callType.top}
          />
        ))}
      </div>
    </div>
  );
}