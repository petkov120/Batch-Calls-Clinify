import imgJaneDoe from "figma:asset/27b6021051a9d676c470c436610c5b47339b4c06.png";
import imgPatient from "figma:asset/bb02dff037b5669b2346ebf6232194e230a3e783.png";
import imgManifestChakalov from "figma:asset/b902cbbf1fddaf3d64a294cfb87055c6c189f3a6.png";

function JaneDoe() {
  return (
    <div className="relative rounded-[2.68435e+07px] shrink-0 size-[48px]" data-name="Jane Doe">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[2.68435e+07px]">
        <img alt="" className="absolute h-full left-[-24.9%] max-w-none top-0 w-[149.8%]" src={imgJaneDoe} />
      </div>
    </div>
  );
}

function Patient() {
  return (
    <div className="relative rounded-[2.68435e+07px] shrink-0 size-[48px]" data-name="Patient">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[2.68435e+07px]">
        <img alt="" className="absolute h-[105.82%] left-0 max-w-none top-[-2.91%] w-full" src={imgPatient} />
      </div>
    </div>
  );
}

function ManifestChakalov() {
  return (
    <div className="relative rounded-[2.68435e+07px] shrink-0 size-[48px]" data-name="Manifest Chakalov">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[2.68435e+07px]">
        <img alt="" className="absolute h-[149.8%] left-0 max-w-none top-[-24.9%] w-full" src={imgManifestChakalov} />
      </div>
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative size-full">
      <JaneDoe />
      <Patient />
      <ManifestChakalov />
    </div>
  );
}