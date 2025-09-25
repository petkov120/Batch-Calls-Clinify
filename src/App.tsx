import { useState } from "react";
import imgJaneDoe from "figma:asset/27b6021051a9d676c470c436610c5b47339b4c06.png";
import imgPatient from "figma:asset/bb02dff037b5669b2346ebf6232194e230a3e783.png";
import imgManifestChakalov from "figma:asset/b902cbbf1fddaf3d64a294cfb87055c6c189f3a6.png";
import imgSarahJohnson from "figma:asset/b06683183ddfd7f2a2ff36f628030fb3624270a7.png";
import figmaSvgPaths from "./imports/svg-9hg1pzxsrl";
import EnhancedFrame3 from "./components/EnhancedFrame3";

// Mock SVG paths data - in a real app these would be imported from your icon library
const svgPaths = {
  p1a1dc120: "M2.992 16.342C3.13904 16.7129 3.17178 17.1193 3.086 17.509L2.021 20.799C1.98668 20.9658 1.99556 21.1387 2.04678 21.3011C2.09799 21.4636 2.18986 21.6103 2.31367 21.7273C2.43747 21.8443 2.58911 21.9277 2.7542 21.9697C2.91929 22.0116 3.09236 22.0107 3.257 21.967L6.67 20.969C7.03772 20.8961 7.41853 20.9279 7.769 21.061C9.90439 22.0582 12.3234 22.2692 14.5992 21.6567C16.8749 21.0442 18.8613 19.6477 20.2077 17.7134C21.5541 15.7791 22.1741 13.4314 21.9583 11.0845C21.7425 8.73769 20.7047 6.54247 19.0281 4.88619C17.3514 3.22992 15.1437 2.21904 12.7944 2.0319C10.4451 1.84475 8.10513 2.49338 6.18744 3.86334C4.26975 5.23329 2.89753 7.23654 2.31289 9.51964C1.72826 11.8027 1.96877 14.219 2.992 16.342Z",
  p38fdee00: "M8 10.5V9.5C8 8.96957 7.78929 8.46086 7.41421 8.08579C7.03914 7.71071 6.53043 7.5 6 7.5H3C2.46957 7.5 1.96086 7.71071 1.58579 8.08579C1.21071 8.46086 1 8.96957 1 9.5V10.5",
  p2fd9e500: "M8 1.564C8.42888 1.67518 8.8087 1.92563 9.07984 2.27603C9.35098 2.62643 9.4981 3.05694 9.4981 3.5C9.4981 3.94306 9.35098 4.37357 9.07984 4.72397C8.8087 5.07437 8.42888 5.32481 8 5.436",
  p3b81ea80: "M11 10.5V9.5C10.9997 9.05686 10.8522 8.62639 10.5807 8.27616C10.3092 7.92593 9.92906 7.67578 9.5 7.565",
  p13058e80: "M4.5 5.5C5.60457 5.5 6.5 4.60457 6.5 3.5C6.5 2.39543 5.60457 1.5 4.5 1.5C3.39543 1.5 2.5 2.39543 2.5 3.5C2.5 4.60457 3.39543 5.5 4.5 5.5Z",
  p2f8e7e80: "M14.6667 4.66667L8.67267 8.48467C8.46926 8.60281 8.23822 8.66504 8.003 8.66504C7.76778 8.66504 7.53674 8.60281 7.33333 8.48467L1.33333 4.66667",
  p17070980: "M13.3333 2.66667H2.66667C1.93029 2.66667 1.33333 3.26362 1.33333 4V12C1.33333 12.7364 1.93029 13.3333 2.66667 13.3333H13.3333C14.0697 13.3333 14.6667 12.7364 14.6667 12V4C14.6667 3.26362 14.0697 2.66667 13.3333 2.66667Z",
  p3dcf1000: "M14.6667 11.3333C14.6667 11.687 14.5262 12.0261 14.2761 12.2761C14.0261 12.5262 13.687 12.6667 13.3333 12.6667H4.552C4.19841 12.6667 3.85932 12.8073 3.60933 13.0573L2.14133 14.5253C2.07514 14.5915 1.9908 14.6366 1.89899 14.6548C1.80718 14.6731 1.71202 14.6637 1.62554 14.6279C1.53906 14.5921 1.46513 14.5314 1.41312 14.4536C1.36111 14.3758 1.33335 14.2843 1.33333 14.1907V3.33333C1.33333 2.97971 1.47381 2.64057 1.72386 2.39052C1.97391 2.14048 2.31304 2 2.66667 2H13.3333C13.687 2 14.0261 2.14048 14.2761 2.39052C14.5262 2.64057 14.6667 2.97971 14.6667 3.33333V11.3333Z",
  p26187580: "M9.22133 11.0453C9.35902 11.1086 9.51413 11.123 9.66113 11.0863C9.80812 11.0496 9.93822 10.9639 10.03 10.8433L10.2667 10.5333C10.3909 10.3677 10.5519 10.2333 10.737 10.1408C10.9222 10.0482 11.1263 10 11.3333 10H13.3333C13.687 10 14.0261 10.1405 14.2761 10.3905C14.5262 10.6406 14.6667 10.9797 14.6667 11.3333V13.3333C14.6667 13.687 14.5262 14.0261 14.2761 14.2761C14.0261 14.5262 13.687 14.6667 13.3333 14.6667C10.1507 14.6667 7.09849 13.4024 4.84805 11.1519C2.59762 8.90151 1.33333 5.84926 1.33333 2.66667C1.33333 2.31304 1.47381 1.97391 1.72386 1.72386C1.97391 1.47381 2.31304 1.33333 2.66667 1.33333H4.66667C5.02029 1.33333 5.35943 1.47381 5.60948 1.72386C5.85952 1.97391 6 2.31304 6 2.66667V4.66667C6 4.87366 5.95181 5.07781 5.85924 5.26295C5.76667 5.44809 5.63226 5.60914 5.46667 5.73333L5.15467 5.96733C5.03228 6.06078 4.94601 6.19372 4.91053 6.34357C4.87504 6.49341 4.89252 6.65092 4.96 6.78933C5.87112 8.63991 7.36962 10.1365 9.22133 11.0453Z",
  p3a151200: "M10 14V8.66667C10 8.48986 9.92976 8.32029 9.80474 8.19526C9.67971 8.07024 9.51014 8 9.33333 8H6.66667C6.48986 8 6.32029 8.07024 6.19526 8.19526C6.07024 8.32029 6 8.48986 6 8.66667V14",
  p1811de30: "M2 6.66667C1.99995 6.47271 2.04222 6.28108 2.12386 6.10514C2.20549 5.92921 2.32453 5.7732 2.47267 5.648L7.13933 1.64867C7.37999 1.44527 7.6849 1.33368 8 1.33368C8.3151 1.33368 8.62001 1.44527 8.86067 1.64867L13.5273 5.648C13.6755 5.7732 13.7945 5.92921 13.8761 6.10514C13.9578 6.28108 14 6.47271 14 6.66667V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V6.66667Z",
  p16403b00: "M8 3.33333V3.34M8 8V8.00667M8 12.6667V12.6733M8 4C7.82319 4 7.65362 3.92976 7.5286 3.80474C7.40357 3.67971 7.33333 3.51014 7.33333 3.33333C7.33333 3.15652 7.40357 2.98695 7.5286 2.86193C7.65362 2.7369 7.82319 2.66667 8 2.66667C8.17681 2.66667 8.34638 2.7369 8.4714 2.86193C8.59643 2.98695 8.66667 3.15652 8.66667 3.33333C8.66667 3.51014 8.59643 3.67971 8.4714 3.80474C8.34638 3.92976 8.17681 4 8 4ZM8 8.66667C7.82319 8.66667 7.65362 8.59643 7.5286 8.4714C7.40357 8.34638 7.33333 8.17681 7.33333 8C7.33333 7.82319 7.40357 7.65362 7.5286 7.5286C7.65362 7.40357 7.82319 7.33333 8 7.33333C8.17681 7.33333 8.34638 7.40357 8.4714 7.5286C8.59643 7.65362 8.66667 7.82319 8.66667 8C8.66667 8.17681 8.59643 8.34638 8.4714 8.4714C8.34638 8.59643 8.17681 8.66667 8 8.66667ZM8 13.3333C7.82319 13.3333 7.65362 13.2631 7.5286 13.1381C7.40357 13.013 7.33333 12.8435 7.33333 12.6667C7.33333 12.4899 7.40357 12.3203 7.5286 12.1953C7.65362 12.0702 7.82319 12 8 12C8.17681 12 8.34638 12.0702 8.4714 12.1953C8.59643 12.3203 8.66667 12.4899 8.66667 12.6667C8.66667 12.8435 8.59643 13.013 8.4714 13.1381C8.34638 13.2631 8.17681 13.3333 8 13.3333Z",
  p99f0820: "M17.5 17.5L12.5 12.5M14.1667 8.33333C14.1667 9.09938 14.0158 9.85792 13.7226 10.5657C13.4295 11.2734 12.9998 11.9164 12.4581 12.4581C11.9164 12.9998 11.2734 13.4295 10.5657 13.7226C9.85792 14.0158 9.09938 14.1667 8.33333 14.1667C7.56729 14.1667 6.80875 14.0158 6.10101 13.7226C5.39328 13.4295 4.75022 12.9998 4.20854 12.4581C3.66687 11.9164 3.23719 11.2734 2.94404 10.5657C2.65088 9.85792 2.5 9.09938 2.5 8.33333C2.5 6.78624 3.11458 5.30251 4.20854 4.20854C5.30251 3.11458 6.78624 2.5 8.33333 2.5C9.88043 2.5 11.3642 3.11458 12.4581 4.20854C13.5521 5.30251 14.1667 6.78624 14.1667 8.33333Z",
  p2dd2d200: "M10 3.33333V16.6667M16.6667 10H3.33333",
  p2141ee80: "M6 3.33333H4.66667C4.31304 3.33333 3.97391 3.47381 3.72386 3.72386C3.47381 3.97391 3.33333 4.31304 3.33333 4.66667V12.6667C3.33333 13.0203 3.47381 13.3594 3.72386 13.6095C3.97391 13.8595 4.31304 14 4.66667 14H11.3333C11.687 14 12.0261 13.8595 12.2761 13.6095C12.5262 13.3594 12.6667 13.0203 12.6667 12.6667V4.66667C12.6667 4.31304 12.5262 3.97391 12.2761 3.72386C12.0261 3.47381 11.687 3.33333 11.3333 3.33333H10M6 3.33333C6 3.68696 6.14048 4.02609 6.39052 4.27614C6.64057 4.52619 6.97971 4.66667 7.33333 4.66667H8.66667C9.02029 4.66667 9.35943 4.52619 9.60948 4.27614C9.85952 4.02609 10 3.68696 10 3.33333M6 3.33333C6 2.97971 6.14048 2.64057 6.39052 2.39052C6.64057 2.14048 6.97971 2 7.33333 2H8.66667C9.02029 2 9.35943 2.14048 9.60948 2.39052C9.85952 2.64057 10 2.97971 10 3.33333",
  p3b0e2580: "M8 2.66667V13.3333M13.3333 8H2.66667",
  p1760cd00: "M5.33333 6.66667V4C5.33333 3.29276 5.61428 2.61448 6.11438 2.11438C6.61448 1.61428 7.29276 1.33333 8 1.33333C8.70724 1.33333 9.38552 1.61428 9.88562 2.11438C10.3857 2.61448 10.6667 3.29276 10.6667 4V6.66667M8 12C8 12.3536 7.85952 12.6928 7.60948 12.9428C7.35943 13.1929 7.02029 13.3333 6.66667 13.3333C6.31304 13.3333 5.97391 13.1929 5.72386 12.9428C5.47381 12.6928 5.33333 12.3536 5.33333 12C5.33333 11.6464 5.47381 11.3072 5.72386 11.0572C5.97391 10.8071 6.31304 10.6667 6.66667 10.6667C7.02029 10.6667 7.35943 10.8071 7.60948 11.0572C7.85952 11.3072 8 11.6464 8 12ZM12 12C12 12.3536 11.8595 12.6928 11.6095 12.9428C11.3594 13.1929 11.0203 13.3333 10.6667 13.3333C10.313 13.3333 9.97391 13.1929 9.72386 12.9428C9.47381 12.6928 9.33333 12.3536 9.33333 12C9.33333 11.6464 9.47381 11.3072 9.72386 11.0572C9.97391 10.8071 10.313 10.6667 10.6667 10.6667C11.0203 10.6667 11.3594 10.8071 11.6095 11.0572C11.8595 11.3072 12 11.6464 12 12Z",
  p10230300: "M2 3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H5.52C5.65986 2.00011 5.79615 2.0442 5.90957 2.12603C6.02299 2.20787 6.1078 2.3233 6.152 2.456L7.15067 5.45133C7.20127 5.60356 7.19528 5.76893 7.13381 5.9171C7.07234 6.06527 6.9595 6.1863 6.816 6.258L4.55067 7.28667C5.27852 8.81951 6.51316 10.0541 8.046 10.782L9.07467 9.85C9.14636 9.7065 9.2674 9.59366 9.41557 9.53219C9.56374 9.47072 9.72911 9.46473 9.88133 9.51533L12.8767 10.514C13.0095 10.5582 13.125 10.6431 13.2068 10.7567C13.2887 10.8703 13.3327 11.0067 13.3327 11.1467V12.6667C13.3327 13.0203 13.1922 13.3594 12.9421 13.6095C12.6921 13.8595 12.353 14 11.9993 14H11.3327C6.47733 14 2 9.52267 2 4V3.33333Z",
  p1d483080: "M8 13.3333C8 11.9188 8.5619 10.5623 9.5621 9.5621C10.5623 8.5619 11.9188 8 13.3333 8H22.08C22.6394 8.00042 23.1846 8.17679 23.6383 8.50413C24.092 8.83148 24.4312 9.29322 24.608 9.824L28.6027 21.8053C28.8051 22.4142 28.7811 23.0757 28.5352 23.6684C28.2894 24.2611 27.838 24.7452 27.264 25.032L18.2027 29.1467C21.1141 35.278 26.0526 40.2166 32.184 43.128L36.2987 39.4C36.5855 38.826 37.0696 38.3746 37.6623 38.1288C38.255 37.8829 38.9164 37.8589 39.5253 38.0613L51.5067 42.056C52.0379 42.2329 52.4999 42.5726 52.8273 43.0268C53.1547 43.481 53.3308 44.0268 53.3307 44.5867V50.6667C53.3307 52.0812 52.7688 53.4377 51.7686 54.4379C50.7684 55.4381 49.4118 56 47.9973 56H45.3307C25.9093 56 8 38.0907 8 16V13.3333Z",
  pdafb600: "M10 4.16667V4.175M10 10V10.0083M10 15.8333V15.8417M10 5C9.77899 5 9.56703 4.9122 9.41074 4.75592C9.25446 4.59964 9.16667 4.38768 9.16667 4.16667C9.16667 3.94565 9.25446 3.73369 9.41074 3.57741C9.56703 3.42113 9.77899 3.33333 10 3.33333C10.221 3.33333 10.433 3.42113 10.5893 3.57741C10.7455 3.73369 10.8333 3.94565 10.8333 4.16667C10.8333 4.38768 10.7455 4.59964 10.5893 4.75592C10.433 4.9122 10.221 5 10 5ZM10 10.8333C9.77899 10.8333 9.56703 10.7455 9.41074 10.5893C9.25446 10.433 9.16667 10.221 9.16667 10C9.16667 9.77899 9.25446 9.56702 9.41074 9.41074C9.56703 9.25446 9.77899 9.16667 10 9.16667C10.221 9.16667 10.433 9.25446 10.5893 9.41074C10.7455 9.56702 10.8333 9.77899 10.8333 10C10.8333 10.221 10.7455 10.433 10.5893 10.5893C10.433 10.7455 10.221 10.8333 10 10.8333ZM10 16.6667C9.77899 16.6667 9.56703 16.5789 9.41074 16.4226C9.25446 16.2663 9.16667 16.0543 9.16667 15.8333C9.16667 15.6123 9.25446 15.4004 9.41074 15.2441C9.56703 15.0878 9.77899 15 10 15C10.221 15 10.433 15.0878 10.5893 15.2441C10.7455 15.4004 10.8333 15.6123 10.8333 15.8333C10.8333 16.0543 10.7455 16.2663 10.5893 16.4226C10.433 16.5789 10.221 16.6667 10 16.6667Z"
};

// Mock secondary SVG paths for dropdown functionality
const newSvgPaths = {
  p2141ee80: "M6 3.33333H4.66667C4.31304 3.33333 3.97391 3.47381 3.72386 3.72386C3.47381 3.97391 3.33333 4.31304 3.33333 4.66667V12.6667C3.33333 13.0203 3.47381 13.3594 3.72386 13.6095C3.97391 13.8595 4.31304 14 4.66667 14H11.3333C11.687 14 12.0261 13.8595 12.2761 13.6095C12.5262 13.3594 12.6667 13.0203 12.6667 12.6667V4.66667C12.6667 4.31304 12.5262 3.97391 12.2761 3.72386C12.0261 3.47381 11.687 3.33333 11.3333 3.33333H10M6 3.33333C6 3.68696 6.14048 4.02609 6.39052 4.27614C6.64057 4.52619 6.97971 4.66667 7.33333 4.66667H8.66667C9.02029 4.66667 9.35943 4.52619 9.60948 4.27614C9.85952 4.02609 10 3.68696 10 3.33333M6 3.33333C6 2.97971 6.14048 2.64057 6.39052 2.39052C6.64057 2.14048 6.97971 2 7.33333 2H8.66667C9.02029 2 9.35943 2.14048 9.60948 2.39052C9.85952 2.64057 10 2.97971 10 3.33333",
  p3b0e2580: "M8 2.66667V13.3333M13.3333 8H2.66667"
};

// Mock batch SVG paths
const batchSvgPaths = {
  p2dd2d200: "M10 3.33333V16.6667M16.6667 10H3.33333",
  p99f0820: "M17.5 17.5L12.5 12.5M14.1667 8.33333C14.1667 9.09938 14.0158 9.85792 13.7226 10.5657C13.4295 11.2734 12.9998 11.9164 12.4581 12.4581C11.9164 12.9998 11.2734 13.4295 10.5657 13.7226C9.85792 14.0158 9.09938 14.1667 8.33333 14.1667C7.56729 14.1667 6.80875 14.0158 6.10101 13.7226C5.39328 13.4295 4.75022 12.9998 4.20854 12.4581C3.66687 11.9164 3.23719 11.2734 2.94404 10.5657C2.65088 9.85792 2.5 9.09938 2.5 8.33333C2.5 6.78624 3.11458 5.30251 4.20854 4.20854C5.30251 3.11458 6.78624 2.5 8.33333 2.5C9.88043 2.5 11.3642 3.11458 12.4581 4.20854C13.5521 5.30251 14.1667 6.78624 14.1667 8.33333Z"
};

// Figma imported avatar images
const avatarImages = {
  janeDoe: imgJaneDoe,
  patient: imgPatient,
  manifestChakalov: imgManifestChakalov,
  sarahJohnson: imgSarahJohnson, // Using actual Sarah Johnson image
  michaelChen: imgPatient // Using Patient image for Michael Chen
};

export default function App() {
  const [selectedContact, setSelectedContact] = useState("Manifest Chakalov");
  const [showDropdown, setShowDropdown] = useState(false);
  const [showActionsMenu, setShowActionsMenu] = useState(false);
  const [batchCallsMode, setBatchCallsMode] = useState(false);
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [activeCalls, setActiveCalls] = useState([]);
  const [batchCallActive, setBatchCallActive] = useState(false);
  const [showCallTypeSelection, setShowCallTypeSelection] = useState(false);
  const [selectedCallType, setSelectedCallType] = useState(null);

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#eff6ff] to-[#eef2ff] h-[144.79px] border-b border-gray-200">
        <div className="max-w-full px-4 sm:px-6 py-4 sm:py-6 h-full">
          <div className="flex items-center justify-between h-full">
            
            {/* Left Section - Icon and Title */}
            <div className="flex items-center space-x-3 sm:space-x-6 min-w-0 flex-1">
              <div className="bg-blue-100 rounded-[12px] size-[40px] sm:size-[48px] flex items-center justify-center flex-shrink-0">
                <svg className="size-[20px] sm:size-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p1a1dc120} stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
              
              <div className="flex flex-col space-y-1 min-w-0 flex-1">
                <h1 className="text-[20px] sm:text-[24px] lg:text-[30px] text-[#101828] tracking-[-0.75px] leading-[24px] sm:leading-[36px] m-0 truncate">Member Engagement</h1>
                <p className="text-[12px] sm:text-[14px] lg:text-[16px] text-[#4a5565] leading-[16px] sm:leading-[24px] m-0 hidden sm:block">Communicate with patients across multiple channels</p>
                
                {/* Status indicators */}
                <div className="flex items-center space-x-3 sm:space-x-6 pt-1 sm:pt-2">
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <div className="bg-[#00c950] rounded-full size-[6px] sm:size-[8px]" />
                    <span className="text-[10px] sm:text-[12px] text-[#6a7282] leading-[14px] sm:leading-[16px]">Connected</span>
                  </div>
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <svg className="size-[10px] sm:size-[12px]" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                      <path d={svgPaths.p38fdee00} stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p2fd9e500} stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p3b81ea80} stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p13058e80} stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[10px] sm:text-[12px] text-[#6a7282] leading-[14px] sm:leading-[16px] hidden sm:inline">Active Conversations</span>
                    <span className="text-[10px] text-[#6a7282] leading-[14px] sm:hidden">Active</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Section - Channel Indicators and Dashboard */}
            <div className="flex items-center space-x-4 lg:space-x-8">
              {/* Channel indicators - Hidden on small screens */}
              <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
                <div className="flex items-center space-x-2">
                  <svg className="size-[16px]" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <path d={svgPaths.p2f8e7e80} stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    <path d={svgPaths.p17070980} stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                  <span className="text-[14px] text-[#4a5565] leading-[20px] hidden lg:inline">Email</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <svg className="size-[16px]" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <path d={svgPaths.p3dcf1000} stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                  <span className="text-[14px] text-[#4a5565] leading-[20px] hidden lg:inline">SMS</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <svg className="size-[16px]" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <path d={svgPaths.p26187580} stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                  <span className="text-[14px] text-[#4a5565] leading-[20px] hidden lg:inline">Calls</span>
                </div>
              </div>
              
              {/* Dashboard Button */}
              <button className="bg-black h-[40px] px-4 rounded-[4px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] flex items-center space-x-2">
                <svg className="size-[16px]" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <path d={svgPaths.p3a151200} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d={svgPaths.p1811de30} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </svg>
                <span className="text-[16px] text-white leading-[24px] hidden sm:inline">Dashboard</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="h-[50.4px] px-4 sm:px-6 border-b border-gray-200 overflow-x-auto">
        <div className="flex items-center h-full space-x-4 sm:space-x-8 min-w-max">
          {["Chat", "Templates", "Broadcast", "Program Enrollment", "AI Script Builder"].map((tab) => (
            <button
              key={tab}
              className={`relative h-[49.6px] px-1 whitespace-nowrap ${
                tab === "Chat" 
                  ? "border-[#155dfc] border-b-[1.6px] text-[#155dfc]" 
                  : "text-[#6a7282] hover:text-[#4a5565]"
              } text-[14px] sm:text-[16px] transition-colors duration-200`}
            >
              <p className="leading-[24px]">{tab}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Left Sidebar - Messages */}
        <div className="bg-blue-50 w-[256px] lg:w-[256px] md:w-[200px] sm:w-[180px] border-r border-gray-200 flex-shrink-0">
          <div className="h-full p-6 sm:p-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-[18px] text-[#101828] leading-[28px] m-0">Messages</h2>
              <svg className="size-[16px]" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path d={svgPaths.p16403b00} stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </svg>
            </div>
            
            {/* Message Categories */}
            <div className="space-y-4">
              <div className="h-[51.2px] rounded-[8px] text-[#364153] flex items-center justify-between px-4">
                <span className="text-[16px] leading-[24px]">Email</span>
                <span className="text-[#6a7282] text-[14px] leading-[20px]">8</span>
              </div>
              
              <div className="h-[51.2px] rounded-[8px] text-[#364153] flex items-center justify-between px-4">
                <span className="text-[16px] leading-[24px]">SMS</span>
                <span className="text-[#6a7282] text-[14px] leading-[20px]">3</span>
              </div>
              
              {/* Active Calls */}
              <div className="bg-white h-[51.2px] rounded-[8px] border border-gray-200 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] flex items-center justify-between px-4">
                <span className="text-[#101828] text-[16px] leading-[24px]">Calls</span>
                <span className="text-[#101828] text-[14px] leading-[20px]">0</span>
              </div>
              
              <div className="h-[51.2px] rounded-[8px] text-[#364153] flex items-center justify-between px-4">
                <span className="text-[16px] leading-[24px]">Notifications</span>
                <span className="text-[#6a7282] text-[14px] leading-[20px]">0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section - Call List or Batch Selection */}
        <div className="bg-white w-[384px] lg:w-[384px] md:w-[320px] sm:w-[280px] border-r border-gray-200 flex-shrink-0 flex flex-col">
          
          {batchCallsMode ? (
            /* Batch Calls Header */
            <div className="h-[88.8px] border-b border-gray-200 relative">
              {/* Search Input */}
              <div className="absolute bg-white h-[40px] left-[24px] right-[76px] rounded-[8px] top-[24px] border border-[#d1d5dc]">
                <div className="absolute h-[16.8px] left-[40.8px] right-[16.8px] top-[11.6px]">
                  <div className="absolute flex flex-col h-[16px] justify-center left-0 text-[14px] text-[rgba(0,0,0,0.5)] top-[8px] translate-y-[-50%] w-[138.047px]">
                    <p>Search Conversations</p>
                  </div>
                </div>
              </div>
              
              {/* Search Icon */}
              <div className="absolute left-[36px] size-[20px] translate-y-[-50%]" style={{ top: "calc(50% - 0.4px)" }}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <path d={batchSvgPaths.p99f0820} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </svg>
              </div>
              
              {/* Add Button */}
              <div className="absolute bg-[#155dfc] left-[319.2px] rounded-full size-[40px] top-[24px]">
                <div className="absolute left-1/2 size-[20px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path d={batchSvgPaths.p2dd2d200} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </svg>
                </div>
              </div>
            </div>
          ) : (
            /* Regular Search Section */
            <div className="h-[88.8px] border-b border-gray-200 relative">
              
              {/* Search Input */}
              <div className="absolute bg-white h-[40px] left-[24px] right-[76px] rounded-[8px] top-[24px] border border-[#d1d5dc]">
                <div className="absolute h-[16.8px] left-[40.8px] right-[16.8px] top-[11.6px]">
                  <div className="absolute flex flex-col h-[16px] justify-center left-0 text-[14px] text-[rgba(0,0,0,0.5)] top-[8px] translate-y-[-50%] w-[138.047px]">
                    <p>Search Conversations</p>
                  </div>
                </div>
              </div>
              
              {/* Search Icon */}
              <div className="absolute left-[36px] size-[20px] translate-y-[-50%]" style={{ top: "calc(50% - 0.4px)" }}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p99f0820} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </svg>
              </div>
              
              {/* Add Button with Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="absolute bg-[#155dfc] left-[319.2px] rounded-full size-[40px] top-[24px]"
                >
                  <div className="absolute left-1/2 size-[20px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path d={svgPaths.p2dd2d200} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </svg>
                  </div>
                </button>
                
                {/* Dropdown */}
                {showDropdown && (
                  <div className="absolute bg-white right-[24px] rounded-[8px] top-[74px] w-[192px] h-[113.6px] z-10">
                    <div className="overflow-clip relative size-full">
                      {/* Contact from list */}
                      <div 
                        onClick={() => setShowDropdown(false)}
                        className="absolute h-[36px] left-[0.8px] right-[0.8px] top-[4.8px] cursor-pointer hover:bg-gray-50"
                      >
                        <div className="absolute left-[16px] size-[16px] top-1/2 translate-y-[-50%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                            <path d={newSvgPaths.p2141ee80} stroke="#364153" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          </svg>
                        </div>
                        <div className="absolute flex flex-col h-[16px] justify-center left-[40px] text-[#364153] text-[14px] translate-y-[-50%] w-[85.171px]" style={{ top: "calc(50% - 0.4px)" }}>
                          <p className="leading-[20px] whitespace-nowrap">Contact from list</p>
                        </div>
                      </div>
                      
                      {/* Add manually */}
                      <div 
                        onClick={() => setShowDropdown(false)}
                        className="absolute h-[36px] left-[0.8px] right-[0.8px] top-[40.8px] cursor-pointer hover:bg-gray-50"
                      >
                        <div className="absolute left-[16px] size-[16px] top-1/2 translate-y-[-50%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                            <path d={newSvgPaths.p3b0e2580} stroke="#364153" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          </svg>
                        </div>
                        <div className="absolute flex flex-col h-[16px] justify-center left-[40px] text-[#364153] text-[14px] translate-y-[-50%] w-[85.171px]" style={{ top: "calc(50% - 0.4px)" }}>
                          <p className="leading-[20px]">Add manually</p>
                        </div>
                      </div>
                      
                      {/* Batch calls */}
                      <div 
                        onClick={() => {
                          setShowDropdown(false);
                          setBatchCallsMode(true);
                          setSelectedContacts([]);
                        }}
                        className="absolute h-[36px] left-[0.8px] right-[0.8px] top-[76.8px] cursor-pointer hover:bg-gray-50"
                      >
                        <div className="absolute left-[16px] size-[16px] top-1/2 translate-y-[-50%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                            <path d={svgPaths.p26187580} stroke="#364153" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          </svg>
                        </div>
                        <div className="absolute flex flex-col h-[16px] justify-center left-[40px] text-[#364153] text-[14px] translate-y-[-50%] w-[85.171px]" style={{ top: "calc(50% - 0.4px)" }}>
                          <p className="leading-[20px]">Batch calls</p>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
                  </div>
                )}
              </div>
            </div>
          )}
          
          {/* Section Header */}
          {batchCallsMode ? (
            <div className="h-[68px] border-b border-gray-200 relative">
              <div className="absolute flex flex-col justify-center left-[26px] text-[#101828] text-[18px] top-[43.79px] translate-y-[-50%] font-bold">
                <p className="leading-[28px]">Choose Contacts For batch call</p>
              </div>
              <div className="absolute flex items-center justify-between left-[26px] top-[11px] w-[331.2px]">
                <div className="flex flex-col justify-center text-[#6a7282] text-[14px] w-[91.391px]">
                  <p className="leading-[20px]">Select Contact</p>
                </div>
                <button 
                  onClick={() => setBatchCallsMode(false)}
                  className="size-[16px] hover:bg-gray-100 rounded"
                >
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <path d="M4 12L12 4M4 4L12 12" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </button>
              </div>
            </div>
          ) : (
            <div className="h-[84.8px] border-b border-gray-200 relative">
              <div className="absolute flex flex-col h-[16px] justify-center left-[24px] text-[#6a7282] text-[14px] top-[28.8px] translate-y-[-50%] w-[15.942px]">
                <p className="leading-[20px]">All</p>
              </div>
              <div className="absolute flex flex-col h-[28px] justify-center left-[24px] text-[#101828] text-[18px] top-[54px] translate-y-[-50%] w-[43.351px] font-bold">
                <p className="leading-[28px]">Calls</p>
              </div>
            </div>
          )}
          
          {/* Contact List or Batch Selection */}
          <div className="flex-1 overflow-auto">
            {batchCallsMode ? (
              <div className="space-y-0">
                {/* Sarah Johnson */}
                <div className={`w-full min-h-[108.79px] border-b border-gray-100 p-4 hover:bg-gray-50 ${
                    selectedContacts.includes('Sarah Johnson') ? 'bg-blue-50' : ''
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    {/* Checkbox */}
                    <div className="flex-shrink-0 pt-1">
                      <input
                        type="checkbox"
                        checked={selectedContacts.includes('Sarah Johnson')}
                        onChange={() => {
                          const isSelected = selectedContacts.includes('Sarah Johnson');
                          if (isSelected) {
                            setSelectedContacts(selectedContacts.filter(c => c !== 'Sarah Johnson'));
                          } else {
                            setSelectedContacts([...selectedContacts, 'Sarah Johnson']);
                          }
                        }}
                        className="size-[20px] rounded-[4px] border-2 border-gray-300 bg-white checked:bg-[#155dfc] checked:border-[#155dfc] focus:ring-2 focus:ring-[#155dfc] focus:ring-offset-1 cursor-pointer"
                      />
                    </div>
                    
                    {/* Avatar */}
                    <div className="flex-shrink-0 rounded-full size-[48px] overflow-hidden">
                      <img alt="Sarah Johnson" className="h-[125%] w-full object-cover -mt-[12.5%]" src={avatarImages.sarahJohnson} />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-1">
                        <h3 className="text-[16px] font-bold text-[#101828] leading-[24px] truncate pr-2">
                          Sarah Johnson
                        </h3>
                        <span className="text-[12px] text-[#6a7282] leading-[16px] whitespace-nowrap flex-shrink-0">
                          2 hours ago
                        </span>
                      </div>
                      
                      <p className="text-[14px] text-[#4a5565] leading-[20px] mb-2 truncate">
                        +1 (555) 123-4567
                      </p>
                      
                      <div className="flex flex-wrap gap-1">
                        <span className="bg-blue-100 text-[#193cb8] text-[12px] leading-[16px] px-2 py-[3px] rounded-[4px] whitespace-nowrap">
                          VIP
                        </span>
                        <span className="bg-blue-100 text-[#193cb8] text-[12px] leading-[16px] px-2 py-[3px] rounded-[4px] whitespace-nowrap">
                          Regular Patient
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Michael Chen */}
                <div className={`w-full min-h-[108.79px] border-b border-gray-100 p-4 hover:bg-gray-50 ${
                    selectedContacts.includes('Michael Chen') ? 'bg-blue-50' : ''
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    {/* Checkbox */}
                    <div className="flex-shrink-0 pt-1">
                      <input
                        type="checkbox"
                        checked={selectedContacts.includes('Michael Chen')}
                        onChange={() => {
                          const isSelected = selectedContacts.includes('Michael Chen');
                          if (isSelected) {
                            setSelectedContacts(selectedContacts.filter(c => c !== 'Michael Chen'));
                          } else {
                            setSelectedContacts([...selectedContacts, 'Michael Chen']);
                          }
                        }}
                        className="size-[20px] rounded-[4px] border-2 border-gray-300 bg-white checked:bg-[#155dfc] checked:border-[#155dfc] focus:ring-2 focus:ring-[#155dfc] focus:ring-offset-1 cursor-pointer"
                      />
                    </div>
                    
                    {/* Avatar */}
                    <div className="flex-shrink-0 rounded-full size-[48px] overflow-hidden">
                      <img alt="Michael Chen" className="h-[150%] w-full object-cover -mt-[25%]" src={avatarImages.michaelChen} />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-1">
                        <h3 className="text-[16px] font-bold text-[#101828] leading-[24px] truncate pr-2">
                          Michael Chen
                        </h3>
                        <span className="text-[12px] text-[#6a7282] leading-[16px] whitespace-nowrap flex-shrink-0">
                          1 day ago
                        </span>
                      </div>
                      
                      <p className="text-[14px] text-[#4a5565] leading-[20px] mb-2 truncate">
                        +1 (555) 234-5678
                      </p>
                      
                      <div className="flex flex-wrap gap-1">
                        <span className="bg-blue-100 text-[#193cb8] text-[12px] leading-[16px] px-2 py-[3px] rounded-[4px] whitespace-nowrap">
                          New Patient
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Emma Rodriguez */}
                <div className={`w-full min-h-[108.79px] border-b border-gray-100 p-4 hover:bg-gray-50 ${
                    selectedContacts.includes('Emma Rodriguez') ? 'bg-blue-50' : ''
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    {/* Checkbox */}
                    <div className="flex-shrink-0 pt-1">
                      <input
                        type="checkbox"
                        checked={selectedContacts.includes('Emma Rodriguez')}
                        onChange={() => {
                          const isSelected = selectedContacts.includes('Emma Rodriguez');
                          if (isSelected) {
                            setSelectedContacts(selectedContacts.filter(c => c !== 'Emma Rodriguez'));
                          } else {
                            setSelectedContacts([...selectedContacts, 'Emma Rodriguez']);
                          }
                        }}
                        className="size-[20px] rounded-[4px] border-2 border-gray-300 bg-white checked:bg-[#155dfc] checked:border-[#155dfc] focus:ring-2 focus:ring-[#155dfc] focus:ring-offset-1 cursor-pointer"
                      />
                    </div>
                    
                    {/* Avatar */}
                    <div className="flex-shrink-0 rounded-full size-[48px] overflow-hidden">
                      <img alt="Emma Rodriguez" className="h-[125%] w-full object-cover -mt-[12.5%]" src={avatarImages.sarahJohnson} />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-1">
                        <h3 className="text-[16px] font-bold text-[#101828] leading-[24px] truncate pr-2">
                          Emma Rodriguez
                        </h3>
                        <span className="text-[12px] text-[#6a7282] leading-[16px] whitespace-nowrap flex-shrink-0">
                          Online
                        </span>
                      </div>
                      
                      <p className="text-[14px] text-[#4a5565] leading-[20px] mb-2 truncate">
                        +1 (555) 345-6789
                      </p>
                      
                      <div className="flex flex-wrap gap-1">
                        <span className="bg-blue-100 text-[#193cb8] text-[12px] leading-[16px] px-2 py-[3px] rounded-[4px] whitespace-nowrap">
                          Returning Patient
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-0">
                {/* Jane Doe */}
                <button className="w-full h-[108.79px] border-[0px_0px_0.8px] border-gray-100 relative hover:bg-gray-50">
                  <div className="absolute left-[16px] rounded-full size-[48px] top-[16px] overflow-hidden">
                    <img alt="Jane Doe" className="absolute h-full left-[-24.9%] max-w-none top-0 w-[149.8%] object-cover" src={avatarImages.janeDoe} />
                  </div>
                  <div className="absolute h-[24px] left-[76px] translate-y-[-50%] w-[71.15px]" style={{ top: "calc(50% - 26.395px)" }}>
                    <div className="absolute flex flex-col h-[17.6px] justify-center left-0 text-[#101828] text-[16px] top-[12px] translate-y-[-50%] w-[71.46px] font-bold">
                      <p className="leading-[24px]">Jane Doe</p>
                    </div>
                  </div>
                   <div className="absolute flex flex-col h-[13.6px] justify-center left-[301.29px] text-[#6a7282] text-[12px] top-[27.59px] translate-y-[-50%] w-[51.065px]">
                    <p className="leading-[16px]">11:30 AM</p>
                  </div>
                  <div className="absolute h-[20px] left-[76px] right-[16px] top-[44px]">
                    <div className="absolute flex flex-col h-[16px] justify-center left-0 text-[#4a5565] text-[14px] top-[9.6px] translate-y-[-50%] w-[148.145px]">
                      <p className="leading-[20px]">Click to view call history</p>
                    </div>
                  </div>
                  <div className="absolute bg-gray-100 h-[19.99px] left-[76px] rounded-[4px] translate-y-[-50%] w-[36.03px]" style={{ top: "calc(50% + 27.6px)" }}>
                    <div className="absolute flex flex-col h-[13.6px] justify-center left-[8px] text-[#1e2939] text-[12px] translate-y-[-50%] w-[20.22px]" style={{ top: "calc(50% - 0.395px)" }}>
                      <p className="leading-[16px]">123</p>
                    </div>
                  </div>
                </button>
                
                {/* Patient */}
                <button className="w-full h-[108.79px] border-[0px_0px_0.8px] border-gray-100 relative hover:bg-gray-50">
                  <div className="absolute left-[16px] rounded-full size-[48px] top-[16px] overflow-hidden">
                    <img alt="Patient" className="absolute h-[105.82%] left-0 max-w-none top-[-2.91%] w-full object-cover" src={avatarImages.patient} />
                  </div>
                  <div className="absolute h-[24px] left-[76px] translate-y-[-50%] w-[53.35px]" style={{ top: "calc(50% - 26.395px)" }}>
                    <div className="absolute flex flex-col h-[17.6px] justify-center left-0 text-[#101828] text-[16px] top-[12px] translate-y-[-50%] w-[53.714px] font-bold">
                      <p className="leading-[24px]">Patient</p>
                    </div>
                  </div>
                  <div className="absolute flex flex-col h-[13.6px] justify-center left-[301.29px] text-[#6a7282] text-[12px] top-[27.59px] translate-y-[-50%] w-[51.065px]">
                    <p className="leading-[16px]">03:14 AM</p>
                  </div>
                  <div className="absolute h-[20px] left-[76px] right-[16px] top-[44px]">
                    <div className="absolute flex flex-col h-[16px] justify-center left-0 text-[#4a5565] text-[14px] top-[9.6px] translate-y-[-50%] w-[148.145px]">
                      <p className="leading-[20px]">Click to view call history</p>
                    </div>
                  </div>
                  <div className="absolute bg-gray-100 h-[19.99px] left-[76px] rounded-[4px] translate-y-[-50%] w-[96.43px]" style={{ top: "calc(50% + 27.6px)" }}>
                    <div className="absolute flex flex-col h-[13.6px] justify-center left-[8px] text-[#1e2939] text-[12px] translate-y-[-50%] w-[80.63px]" style={{ top: "calc(50% - 0.405px)" }}>
                      <p className="leading-[16px]">+17142069957</p>
                    </div>
                  </div>
                </button>
                
                {/* Manifest Chakalov - Selected */}
                <button 
                  onClick={() => setSelectedContact("Manifest Chakalov")}
                  className="w-full h-[108.79px] bg-blue-50 border-[#155dfc] border-[0px_0px_0.8px_4px] relative"
                >
                  <div className="absolute left-[20px] rounded-full size-[48px] top-[16px] overflow-hidden">
                    <img alt="Manifest Chakalov" className="absolute h-[149.8%] left-0 max-w-none top-[-24.9%] w-full object-cover" src={avatarImages.manifestChakalov} />
                  </div>
                  <div className="absolute h-[24px] left-[80px] translate-y-[-50%] w-[140.49px]" style={{ top: "calc(50% - 26.395px)" }}>
                    <div className="absolute flex flex-col h-[17.6px] justify-center left-0 text-[#101828] text-[16px] top-[12px] translate-y-[-50%] w-[140.799px] font-bold">
                      <p className="leading-[24px]">Manifest Chakalov</p>
                    </div>
                  </div>
                  <div className="absolute flex flex-col h-[13.6px] justify-center left-[300.63px] text-[#6a7282] text-[12px] top-[27.6px] translate-y-[-50%] w-[51.737px]">
                    <p className="leading-[16px]">02:00 PM</p>
                  </div>
                  <div className="absolute h-[20px] left-[80px] right-[16px] top-[44px]">
                    <div className="absolute flex flex-col h-[16px] justify-center left-0 text-[#4a5565] text-[14px] top-[9.6px] translate-y-[-50%] w-[148.145px]">
                      <p className="leading-[20px]">Click to view call history</p>
                    </div>
                  </div>
                  <div className="absolute bg-gray-100 h-[19.99px] left-[80px] rounded-[4px] translate-y-[-50%] w-[109.78px]" style={{ top: "calc(50% + 27.6px)" }}>
                    <div className="absolute flex flex-col h-[13.6px] justify-center left-[8px] text-[#1e2939] text-[12px] translate-y-[-50%] w-[93.97px]" style={{ top: "calc(50% - 0.395px)" }}>
                      <p className="leading-[16px]">+2348067390962</p>
                    </div>
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right Section - Contact Details, Call Type Selection, or Batch Group */}
        <div className="bg-white flex-1 min-w-0 flex flex-col">
          
          {batchCallsMode && selectedContacts.length > 0 && !batchCallActive ? (
            /* Call Type Selection Interface */
            <EnhancedFrame3 
              selectedContacts={selectedContacts}
              onCallTypeSelect={(callType) => {
                setSelectedCallType(callType);
                setBatchCallActive(true);
                const newActiveCalls = [...activeCalls];
                selectedContacts.forEach(contact => {
                  if (!newActiveCalls.includes(contact)) {
                    newActiveCalls.push(contact);
                  }
                });
                setActiveCalls(newActiveCalls);
              }}
              onCancel={() => {
                setBatchCallsMode(false);
                setSelectedContacts([]);
              }}
              onSchedule={() => {
                // Handle scheduling logic here
                alert('Schedule functionality would be implemented here');
              }}
            />
          ) : batchCallsMode && selectedContacts.length > 0 && batchCallActive ? (
            /* Batch Group Header - Active Calls */
            <div className="h-[96.8px] border-b border-gray-200 relative">
              {/* Group Avatar Display */}
              <div className="absolute left-[24px] top-[24px] flex items-center space-x-[-12px]">
                {selectedContacts.slice(0, 3).map((contact, index) => (
                  <div key={contact} className="relative size-[48px] rounded-full border-2 border-white overflow-hidden" style={{ zIndex: 3 - index }}>
                    <img 
                      alt={contact} 
                      className="w-full h-full object-cover" 
                      src={contact === 'Sarah Johnson' ? avatarImages.sarahJohnson : 
                           contact === 'Michael Chen' ? avatarImages.michaelChen : 
                           avatarImages.sarahJohnson} 
                    />
                  </div>
                ))}
                {selectedContacts.length > 3 && (
                  <div className="relative size-[48px] rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-[14px] text-gray-600 font-bold">
                    +{selectedContacts.length - 3}
                  </div>
                )}
              </div>
              
              <div className="absolute flex flex-col h-[28px] justify-center left-[170px] text-[#101828] text-[18px] top-[30px] translate-y-[-50%] font-bold">
                <p className="leading-[28px]">{selectedContacts.length} Contacts Selected</p>
              </div>
              
              <div className="absolute flex flex-col h-[20px] justify-center left-[170px] text-green-600 text-[14px] translate-y-[-50%]" style={{ top: "calc(50% + 13.6px)" }}>
                <p className="leading-[20px]">
                  {selectedCallType || 'Batch'} calls in progress...
                </p>
              </div>
              
              {/* Action Buttons - Active calls mode */}
              <div className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 flex items-center space-x-2 sm:space-x-3">
                <button 
                  onClick={() => {
                    setBatchCallActive(false);
                    setActiveCalls(activeCalls.filter(contact => !selectedContacts.includes(contact)));
                  }}
                  className="bg-red-600 hover:bg-red-700 h-[40px] px-2 sm:px-4 rounded-[8px] flex items-center space-x-1 sm:space-x-2 transition-colors"
                >
                  <svg className="size-[16px] flex-shrink-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <path d="M4 4L12 12M4 12L12 4" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                  <span className="text-[14px] sm:text-[16px] text-white leading-[24px] hidden sm:inline">End Calls</span>
                  <span className="text-[12px] text-white leading-[16px] sm:hidden">End</span>
                </button>
                
                <button className="h-[40px] px-2 sm:px-4 rounded-[8px] border border-[#bedbff] flex items-center space-x-1 sm:space-x-2 hover:bg-blue-50 transition-colors">
                  <svg className="size-[16px] flex-shrink-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
                    <path d={svgPaths.p1760cd00} stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                  <span className="text-[14px] sm:text-[16px] text-[#155dfc] leading-[24px] hidden sm:inline">Schedule</span>
                  <span className="text-[12px] text-[#155dfc] leading-[16px] sm:hidden">Sched</span>
                </button>
              </div>
            </div>
          ) : (
            /* Regular Contact Header - Figma Perfect */
            <div className="h-[96.8px] relative shrink-0 w-full">
              <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-gray-200 border-solid inset-0 pointer-events-none" />
              
              {/* Avatar */}
              <div className="absolute left-[24px] rounded-[2.68435e+07px] size-[48px] translate-y-[-50%]" style={{ top: "calc(50% - 0.4px)" }}>
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[2.68435e+07px]">
                  <img alt="Manifest Chakalov" className="absolute h-[149.8%] left-0 max-w-none top-[-24.9%] w-full" src={imgManifestChakalov} />
                </div>
              </div>
              
              {/* Name */}
              <div className="absolute flex flex-col font-['Arial:Bold',_sans-serif] h-[28px] justify-center leading-[0] left-[88px] not-italic text-[#101828] text-[18px] top-[38px] translate-y-[-50%] w-[158.373px]">
                <p className="leading-[28px]">Manifest Chakalov</p>
              </div>
              
              {/* Phone Number */}
              <div className="absolute flex flex-col font-['Arial:Narrow',_sans-serif] h-[20px] justify-center leading-[0] left-[88px] not-italic text-[#4a5565] text-[14px] translate-y-[-50%] w-[109.769px]" style={{ top: "calc(50% + 13.6px)" }}>
                <p className="leading-[20px]">+2348067390962</p>
              </div>
              
              {/* Status */}
              <div className={`absolute flex flex-col font-['Arial:Narrow',_sans-serif] h-[16px] justify-center leading-[0] left-[213.4px] not-italic text-[14px] top-[61.6px] translate-y-[-50%] w-[93.194px] ${
                activeCalls.includes(selectedContact) ? 'text-green-600' : 'text-[#6a7282]'
              }`}>
                <p className="leading-[20px]">
                  • {activeCalls.includes(selectedContact) ? 'Call Active' : 'Ready to Call'}
                </p>
              </div>
              
              {/* Action Buttons - Aligned with Dashboard button margin */}
              <div className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 flex items-center space-x-3">
                {/* Start Call Button */}
                <button 
                  onClick={() => {
                    const isActive = activeCalls.includes(selectedContact);
                    if (isActive) {
                      setActiveCalls(activeCalls.filter(contact => contact !== selectedContact));
                    } else {
                      setActiveCalls([...activeCalls, selectedContact]);
                    }
                  }}
                  className="bg-[#00a63e] h-[40px] px-4 rounded-[8px] flex items-center space-x-2 transition-colors hover:bg-green-700"
                >
                  <svg className="size-[16px]" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <path d={activeCalls.includes(selectedContact) ? "M4 4L12 12M4 12L12 4" : figmaSvgPaths.p10230300} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                  <span className="text-[16px] text-white leading-[24px]">
                    {activeCalls.includes(selectedContact) ? 'End Call' : 'Start Call'}
                  </span>
                </button>
                
                {/* Schedule Button */}
                <button className="h-[40px] px-4 rounded-[8px] border border-[#bedbff] flex items-center space-x-2 hover:bg-blue-50 transition-colors">
                  <svg className="size-[16px]" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
                    <path d={figmaSvgPaths.p1760cd00} stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                  <span className="text-[16px] text-[#155dfc] leading-[24px]">Schedule</span>
                </button>
                
                {/* Three Dot Menu */}
                <button 
                  onClick={() => setShowActionsMenu(!showActionsMenu)}
                  className="size-[20px] hover:bg-gray-100 rounded transition-colors flex items-center justify-center"
                >
                  <svg className="size-[20px]" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path d={figmaSvgPaths.pdafb600} stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </svg>
                </button>
              </div>
            </div>
          )}
          
          {/* Call Details Content or Batch Group Content */}
          <div className="flex-1 overflow-auto">
            
            {batchCallsMode && selectedContacts.length > 0 ? (
              /* Batch Group Content */
              <div className="p-6">
                <div className="mb-6">
                  <h3 className="text-[18px] font-bold text-[#101828] mb-2">Selected Contacts</h3>
                  <p className="text-[14px] text-[#6a7282]">Review the contacts selected for batch calling</p>
                </div>
                
                <div className="space-y-4">
                  {selectedContacts.map((contact, index) => (
                    <div key={contact} className={`flex items-center justify-between p-4 rounded-[8px] border ${
                      activeCalls.includes(contact) 
                        ? 'bg-green-50 border-green-200' 
                        : 'bg-blue-50 border-blue-200'
                    }`}>
                      <div className="flex items-center space-x-3">
                        <div className="size-[40px] rounded-full overflow-hidden">
                          <img 
                            alt={contact} 
                            className="w-full h-full object-cover" 
                            src={contact === 'Sarah Johnson' ? avatarImages.sarahJohnson : 
                                 contact === 'Michael Chen' ? avatarImages.michaelChen : 
                                 avatarImages.sarahJohnson} 
                          />
                        </div>
                        <div>
                          <p className="text-[16px] font-bold text-[#101828]">{contact}</p>
                          <p className="text-[14px] text-[#4a5565]">
                            {contact === 'Sarah Johnson' ? '+1 (555) 123-4567' :
                             contact === 'Michael Chen' ? '+1 (555) 234-5678' :
                             '+1 (555) 345-6789'}
                          </p>
                          {activeCalls.includes(contact) && (
                            <p className="text-[12px] text-green-600 font-medium">● Call Active</p>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {activeCalls.includes(contact) && (
                          <button 
                            onClick={() => setActiveCalls(activeCalls.filter(c => c !== contact))}
                            className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-[12px] font-medium"
                          >
                            End Call
                          </button>
                        )}
                        <button 
                          onClick={() => setSelectedContacts(selectedContacts.filter(c => c !== contact))}
                          className="text-[#6a7282] hover:text-[#1e2939] p-1 rounded"
                        >
                          <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                            <path d="M4 12L12 4M4 4L12 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="p-6">
                {/* Ready to Call State */}
                <div className="flex flex-col items-center text-center mb-8">
                  <div className="size-[64px] mb-6">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
                      <path d={svgPaths.p1d483080} stroke="#D1D5DC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33333" />
                    </svg>
                  </div>
                  
                  <h3 className="text-[#101828] text-[18px] leading-[28px] mb-2 m-0">Ready to Call</h3>
                  
                  <p className="text-[#6a7282] text-[16px] leading-[24px] mb-8 m-0 max-w-[364px]">
                    Click "Start Call" to choose your call type and begin
                  </p>
                </div>
                
                {/* Recent Calls Section */}
                <div>
                  <h4 className="text-[#101828] text-[14px] leading-[20px] mb-4 m-0">Recent Calls (90)</h4>
                  
                  <div className="bg-white h-[384px] rounded-[8px] border border-gray-200 overflow-y-auto">
                    <div className="space-y-0">
                      
                      {/* Call entries with status badges */}
                      <div className="h-[64.79px] border-[0px_0px_0.8px] border-gray-200 relative px-3 py-3">
                        <div className="bg-gray-100 h-[19.99px] left-[12px] rounded-[4px] top-[12px] w-[41.35px] absolute">
                          <div className="absolute flex flex-col h-[13.6px] justify-center left-[8px] text-[#1e2939] text-[12px] top-[9.6px] translate-y-[-50%] w-[25.55px]">
                            <p className="leading-[16px]">busy</p>
                          </div>
                        </div>
                        <div className="absolute flex flex-col h-[16px] justify-center left-[65.35px] text-[#101828] text-[14px] top-[21.6px] translate-y-[-50%] w-[212.305px]">
                          <p className="leading-[20px]">drug refill • 9/23/2025, 2:00:30 PM</p>
                        </div>
                        <div className="absolute flex flex-col h-[13.6px] justify-center left-[65.35px] text-[#6a7282] text-[12px] top-[43.6px] translate-y-[-50%] w-[94.115px]">
                          <p className="leading-[16px]">+2348067390962</p>
                        </div>
                      </div>
                      
                      <div className="h-[64.79px] border-[0px_0px_0.8px] border-gray-200 relative px-3 py-3">
                        <div className="bg-[#ffedd4] h-[19.99px] left-[12px] rounded-[4px] top-[12px] w-[70.71px] absolute">
                          <div className="absolute flex flex-col h-[13.6px] justify-center left-[8px] text-[#9f2d00] text-[12px] top-[9.59px] translate-y-[-50%] w-[54.91px]">
                            <p className="leading-[16px]">unfinished</p>
                          </div>
                        </div>
                        <div className="absolute flex flex-col h-[16px] justify-center left-[94.71px] text-[#101828] text-[14px] top-[21.6px] translate-y-[-50%] w-[212.305px]">
                          <p className="leading-[20px]">drug refill • 9/23/2025, 1:46:08 PM</p>
                        </div>
                        <div className="absolute flex flex-col h-[13.6px] justify-center left-[94.71px] text-[#6a7282] text-[12px] top-[43.59px] translate-y-[-50%] w-[94.125px]">
                          <p className="leading-[16px]">+2348067390962</p>
                        </div>
                      </div>
                      
                      <div className="h-[64.79px] border-[0px_0px_0.8px] border-gray-200 relative px-3 py-3">
                        <div className="bg-green-100 h-[19.99px] left-[12px] rounded-[4px] top-[12px] w-[71.38px] absolute">
                          <div className="absolute flex flex-col h-[13.6px] justify-center left-[8px] text-[#016630] text-[12px] top-[9.6px] translate-y-[-50%] w-[55.58px]">
                            <p className="leading-[16px]">completed</p>
                          </div>
                        </div>
                        <div className="absolute flex flex-col h-[16px] justify-center left-[95.37px] text-[#101828] text-[14px] top-[21.6px] translate-y-[-50%] w-[212.305px]">
                          <p className="leading-[20px]">drug refill • 9/23/2025, 1:13:00 PM</p>
                        </div>
                        <div className="absolute flex flex-col h-[13.6px] justify-center left-[95.37px] text-[#6a7282] text-[12px] top-[43.6px] translate-y-[-50%] w-[94.125px]">
                          <p className="leading-[16px]">+2348067390962</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}