import Frame3 from "../imports/Frame3-43-2516";

interface EnhancedFrame3Props {
  selectedContacts: string[];
  onCallTypeSelect: (callType: string) => void;
  onCancel: () => void;
  onSchedule: () => void;
}

export default function EnhancedFrame3({ selectedContacts, onCallTypeSelect, onCancel, onSchedule }: EnhancedFrame3Props) {
  // Create a wrapper around the imported Frame3 with click handlers
  return (
    <div 
      className="relative size-full"
      onClick={(e) => {
        const target = e.target as HTMLElement;
        const button = target.closest('div[data-name="Button"]');
        
        if (button) {
          const buttonText = button.textContent?.trim();
          
          // Handle call type selection buttons
          if (buttonText === "Post Discharge Call") {
            onCallTypeSelect("Post Discharge Call");
          } else if (buttonText === "Drug Refill") {
            onCallTypeSelect("Drug Refill");
          } else if (buttonText === "Form Fill") {
            onCallTypeSelect("Form Fill");
          } else if (buttonText === "Regular Call") {
            onCallTypeSelect("Regular Call");
          } else if (buttonText === "Cancel") {
            onCancel();
          } else if (buttonText === "Schedule") {
            onSchedule();
          }
        }
      }}
    >
      <Frame3 selectedContactsCount={selectedContacts.length} />
    </div>
  );
}